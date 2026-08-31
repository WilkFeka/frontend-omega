import { Component, computed, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Toast } from 'primeng/toast';
import { Api } from '../../../services/api';
import { EmployeePosition } from '../../../models/employee.model';

@Component({
  selector: 'app-cargos',
  imports: [FormsModule, ButtonDirective, Dialog, InputText, TableModule, Toast],
  providers: [MessageService],
  templateUrl: './cargos.html',
  styleUrl: '../grupos/grupos.scss'
})
export class Cargos implements OnInit {
  @Output() positionsChanged = new EventEmitter<void>();
  private readonly api = inject(Api);
  private readonly messages = inject(MessageService);
  readonly positions = signal<EmployeePosition[]>([]);
  readonly search = signal('');
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly dialogVisible = signal(false);
  readonly confirmVisible = signal(false);
  readonly editingId = signal<number | null>(null);
  readonly toDelete = signal<EmployeePosition | null>(null);
  name = '';
  readonly filtered = computed(() => {
    const term = this.search().trim().toLowerCase();
    return this.positions().filter(item => !term || item.nombre.toLowerCase().includes(term));
  });

  ngOnInit(): void { void this.load(); }
  async load(): Promise<void> {
    this.loading.set(true);
    try { this.positions.set((await firstValueFrom(this.api.getEmployeePositions())).positions); }
    catch (error) { this.error(error); }
    finally { this.loading.set(false); }
  }
  openCreate(): void { this.editingId.set(null); this.name = ''; this.dialogVisible.set(true); }
  openEdit(item: EmployeePosition): void { this.editingId.set(item.id); this.name = item.nombre; this.dialogVisible.set(true); }
  async save(): Promise<void> {
    const nombre = this.name.trim();
    if (!nombre) { this.messages.add({ severity: 'error', summary: 'Error', detail: 'El nombre es obligatorio.' }); return; }
    this.saving.set(true);
    try {
      const id = this.editingId();
      if (id === null) await firstValueFrom(this.api.createEmployeePosition({ nombre }));
      else await firstValueFrom(this.api.updateEmployeePosition(id, { nombre }));
      this.dialogVisible.set(false); await this.load(); this.positionsChanged.emit();
      this.messages.add({ severity: 'success', summary: 'Correcto', detail: id === null ? 'Cargo creado.' : 'Cargo actualizado.' });
    } catch (error) { this.error(error); } finally { this.saving.set(false); }
  }
  askDelete(item: EmployeePosition): void { this.toDelete.set(item); this.confirmVisible.set(true); }
  async delete(): Promise<void> {
    const item = this.toDelete(); if (!item) return;
    this.saving.set(true);
    try { await firstValueFrom(this.api.deleteEmployeePosition(item.id)); this.confirmVisible.set(false); await this.load(); this.positionsChanged.emit(); this.messages.add({ severity: 'success', summary: 'Correcto', detail: 'Cargo eliminado.' }); }
    catch (error) { this.error(error); } finally { this.saving.set(false); }
  }
  private error(error: unknown): void {
    const detail = error instanceof HttpErrorResponse && error.error?.detail ? error.error.detail : 'Ocurrió un error inesperado.';
    this.messages.add({ severity: 'error', summary: 'Error', detail });
  }
}
