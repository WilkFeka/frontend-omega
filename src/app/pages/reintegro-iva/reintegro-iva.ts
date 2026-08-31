import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { Dialog } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { Toast } from 'primeng/toast';

import { VatBeneficiary, VatDeliveryMethod } from '../../models/vat-refund.model';
import { Api } from '../../services/api';

@Component({
  selector: 'app-reintegro-iva',
  imports: [FormsModule, ButtonDirective, DatePicker, Dialog, InputText, Select, TableModule, Toast],
  providers: [MessageService],
  templateUrl: './reintegro-iva.html',
  styleUrl: './reintegro-iva.scss'
})
export class ReintegroIva implements OnInit {
  private readonly api = inject(Api);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly messages = inject(MessageService);

  readonly rows = signal<VatBeneficiary[]>([]);
  readonly total = signal('0');
  readonly cashTotal = signal('0');
  readonly transferTotal = signal('0');
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly search = signal('');
  readonly periodDate = signal(this.initialPeriod());
  readonly dialogVisible = signal(false);
  readonly confirmVisible = signal(false);
  readonly editing = signal<VatBeneficiary | null>(null);
  readonly toDelete = signal<VatBeneficiary | null>(null);
  form: { nombre: string; apellido: string; delivery_method: VatDeliveryMethod } = { nombre: '', apellido: '', delivery_method: 'TRANSFERENCIA' };
  readonly deliveryOptions = [
    { label: 'Transferencia', value: 'TRANSFERENCIA' },
    { label: 'Efectivo', value: 'EFECTIVO' }
  ];

  readonly filteredRows = computed(() => {
    const term = this.search().trim().toLocaleLowerCase('es');
    return this.rows().filter(item => !term || `${item.apellido} ${item.nombre}`.toLocaleLowerCase('es').includes(term));
  });

  ngOnInit(): void { void this.load(); }

  async load(): Promise<void> {
    this.loading.set(true);
    try {
      const response = await firstValueFrom(this.api.getVatBeneficiaries(this.period()));
      this.rows.set(response.beneficiaries);
      this.total.set(response.total);
      this.cashTotal.set(response.cash_total);
      this.transferTotal.set(response.transfer_total);
    } catch (error) { this.error(error); }
    finally { this.loading.set(false); }
  }

  changePeriod(value: Date): void {
    if (!value) return;
    this.periodDate.set(new Date(value.getFullYear(), value.getMonth(), 1));
    void this.load();
  }

  movePeriod(offset: number): void {
    const value = this.periodDate();
    this.changePeriod(new Date(value.getFullYear(), value.getMonth() + offset, 1));
  }

  openCreate(): void { this.editing.set(null); this.form = { nombre: '', apellido: '', delivery_method: 'TRANSFERENCIA' }; this.dialogVisible.set(true); }
  openEdit(item: VatBeneficiary, event: Event): void { event.stopPropagation(); this.editing.set(item); this.form = { nombre: item.nombre, apellido: item.apellido, delivery_method: item.delivery_method }; this.dialogVisible.set(true); }

  async save(): Promise<void> {
    if (!this.form.nombre.trim() || !this.form.apellido.trim() || !this.form.delivery_method) { this.showError('Completá el nombre, el apellido y el medio de entrega.'); return; }
    this.saving.set(true);
    try {
      const item = this.editing();
      if (item) await firstValueFrom(this.api.updateVatBeneficiary(item.id, this.form));
      else await firstValueFrom(this.api.createVatBeneficiary(this.form));
      this.dialogVisible.set(false);
      await this.load();
      this.success(item ? 'Beneficiario actualizado.' : 'Beneficiario creado.');
    } catch (error) { this.error(error); }
    finally { this.saving.set(false); }
  }

  askDelete(item: VatBeneficiary, event: Event): void { event.stopPropagation(); this.toDelete.set(item); this.confirmVisible.set(true); }

  async delete(): Promise<void> {
    const item = this.toDelete(); if (!item) return;
    this.saving.set(true);
    try { await firstValueFrom(this.api.deleteVatBeneficiary(item.id)); this.confirmVisible.set(false); this.toDelete.set(null); await this.load(); this.success('Beneficiario eliminado.'); }
    catch (error) { this.error(error); }
    finally { this.saving.set(false); }
  }

  openDetail(item: VatBeneficiary): void { void this.router.navigate(['/reintegro-iva', item.id], { queryParams: { periodo: this.period() } }); }
  resetFilters(): void { this.search.set(''); }
  formatCurrency(value: string | number | undefined): string { return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(value ?? 0)); }
  deliveryLabel(value: VatDeliveryMethod): string { return value === 'EFECTIVO' ? 'Efectivo' : 'Transferencia'; }
  formatPeriod(): string { const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(this.periodDate()); return label[0].toUpperCase() + label.slice(1); }
  private period(): string { const value = this.periodDate(); return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}`; }
  private initialPeriod(): Date { const value = this.route.snapshot.queryParamMap.get('periodo'); if (value && /^\d{4}-\d{2}$/.test(value)) { const [year, month] = value.split('-').map(Number); return new Date(year, month - 1, 1); } const now = new Date(); return new Date(now.getFullYear(), now.getMonth(), 1); }
  private error(error: unknown): void { this.showError(error instanceof HttpErrorResponse && error.error?.detail ? error.error.detail : 'Ocurrió un error inesperado.'); }
  private success(detail: string): void { this.messages.add({ severity: 'success', summary: 'Correcto', detail }); }
  private showError(detail: string): void { this.messages.add({ severity: 'error', summary: 'Error', detail }); }
}
