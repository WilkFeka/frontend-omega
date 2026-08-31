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
import { EmployeeGroup } from '../../../models/employee.model';

@Component({
  selector: 'app-grupos',
  imports: [FormsModule, ButtonDirective, Dialog, InputText, TableModule, Toast],
  providers: [MessageService],
  templateUrl: './grupos.html',
  styleUrl: './grupos.scss'
})
export class Grupos implements OnInit {
  @Output() groupsChanged = new EventEmitter<void>();

  private readonly api = inject(Api);
  private readonly messageService = inject(MessageService);

  readonly groups = signal<EmployeeGroup[]>([]);
  readonly search = signal('');
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly dialogVisible = signal(false);
  readonly confirmVisible = signal(false);
  readonly editingId = signal<number | null>(null);
  readonly groupToDelete = signal<EmployeeGroup | null>(null);

  groupName = '';

  readonly filteredGroups = computed(() => {
    const term = this.search().trim().toLowerCase();
    return this.groups().filter(group => !term || group.nombre.toLowerCase().includes(term));
  });

  ngOnInit(): void {
    void this.loadGroups();
  }

  async loadGroups(): Promise<void> {
    this.loading.set(true);
    try {
      const response = await firstValueFrom(this.api.getEmployeeGroups());
      this.groups.set(response.groups);
    } catch (error) {
      this.showError(this.getApiError(error));
    } finally {
      this.loading.set(false);
    }
  }

  openCreate(): void {
    this.editingId.set(null);
    this.groupName = '';
    this.dialogVisible.set(true);
  }

  openEdit(group: EmployeeGroup): void {
    this.editingId.set(group.id);
    this.groupName = group.nombre;
    this.dialogVisible.set(true);
  }

  async save(): Promise<void> {
    const nombre = this.groupName.trim();
    if (!nombre) {
      this.showError('El nombre del grupo es obligatorio.');
      return;
    }

    this.saving.set(true);
    try {
      const groupId = this.editingId();
      if (groupId === null) {
        await firstValueFrom(this.api.createEmployeeGroup({ nombre }));
      } else {
        await firstValueFrom(this.api.updateEmployeeGroup(groupId, { nombre }));
      }
      this.dialogVisible.set(false);
      await this.loadGroups();
      this.groupsChanged.emit();
      this.showSuccess(groupId === null ? 'Grupo creado correctamente.' : 'Grupo actualizado correctamente.');
    } catch (error) {
      this.showError(this.getApiError(error));
    } finally {
      this.saving.set(false);
    }
  }

  askDelete(group: EmployeeGroup): void {
    this.groupToDelete.set(group);
    this.confirmVisible.set(true);
  }

  async delete(): Promise<void> {
    const group = this.groupToDelete();
    if (!group) return;

    this.saving.set(true);
    try {
      await firstValueFrom(this.api.deleteEmployeeGroup(group.id));
      this.confirmVisible.set(false);
      this.groupToDelete.set(null);
      await this.loadGroups();
      this.groupsChanged.emit();
      this.showSuccess('Grupo eliminado correctamente.');
    } catch (error) {
      this.showError(this.getApiError(error));
    } finally {
      this.saving.set(false);
    }
  }

  private showSuccess(detail: string): void {
    this.messageService.add({ severity: 'success', summary: 'Correcto', detail, life: 3000 });
  }

  private showError(detail: string): void {
    this.messageService.add({ severity: 'error', summary: 'Error', detail, life: 4000 });
  }

  private getApiError(error: unknown): string {
    return error instanceof HttpErrorResponse && error.error?.detail
      ? error.error.detail
      : 'Ocurrió un error inesperado.';
  }
}
