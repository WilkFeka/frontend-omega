import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { DatePicker } from 'primeng/datepicker';
import { InputText } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Textarea } from 'primeng/textarea';
import { Toast } from 'primeng/toast';

import { VatBeneficiary, VatRefundDetail, VatRefundDetailRequest } from '../../../models/vat-refund.model';
import { Api } from '../../../services/api';
import { formatMoneyInput, normalizeMoneyInput } from '../../../utils/money-input';

@Component({
  selector: 'app-detalle-reintegro-iva',
  imports: [FormsModule, ButtonDirective, DatePicker, Dialog, InputText, TableModule, Textarea, Toast],
  providers: [MessageService],
  templateUrl: './detalle-reintegro-iva.html',
  styleUrl: './detalle-reintegro-iva.scss'
})
export class DetalleReintegroIva implements OnInit {
  private readonly api = inject(Api);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly messages = inject(MessageService);
  readonly beneficiary = signal<VatBeneficiary | null>(null);
  readonly details = signal<VatRefundDetail[]>([]);
  readonly total = signal('0');
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly dialogVisible = signal(false);
  readonly confirmVisible = signal(false);
  readonly editing = signal<VatRefundDetail | null>(null);
  readonly toDelete = signal<VatRefundDetail | null>(null);
  readonly beneficiaryId = Number(this.route.snapshot.paramMap.get('beneficiaryId'));
  readonly periodDate = signal(this.initialPeriod());
  form = { amount: '', observation: '' };

  ngOnInit(): void { if (!this.beneficiaryId) void this.back(); else void this.load(); }

  async load(): Promise<void> {
    this.loading.set(true);
    try {
      const response = await firstValueFrom(this.api.getVatRefundDetails(this.beneficiaryId, this.period()));
      this.beneficiary.set(response.beneficiary); this.details.set(response.details); this.total.set(response.total);
    } catch (error) { this.error(error); }
    finally { this.loading.set(false); }
  }

  openCreate(): void { this.editing.set(null); this.form = { amount: '', observation: '' }; this.dialogVisible.set(true); }
  openEdit(item: VatRefundDetail): void { this.editing.set(item); this.form = { amount: item.amount, observation: item.observation }; this.dialogVisible.set(true); }

  async save(): Promise<void> {
    if (Number(this.form.amount) <= 0) { this.showError('Ingresá un importe mayor a cero.'); return; }
    const payload: VatRefundDetailRequest = { period: `${this.period()}-01`, amount: Number(this.form.amount), observation: this.form.observation.trim() };
    this.saving.set(true);
    try {
      const item = this.editing();
      if (item) await firstValueFrom(this.api.updateVatRefundDetail(this.beneficiaryId, item.id, payload));
      else await firstValueFrom(this.api.createVatRefundDetail(this.beneficiaryId, payload));
      this.dialogVisible.set(false); await this.load(); this.success(item ? 'Detalle actualizado.' : 'Detalle agregado.');
    } catch (error) { this.error(error); }
    finally { this.saving.set(false); }
  }

  askDelete(item: VatRefundDetail): void { this.toDelete.set(item); this.confirmVisible.set(true); }
  async delete(): Promise<void> {
    const item = this.toDelete(); if (!item) return;
    this.saving.set(true);
    try { await firstValueFrom(this.api.deleteVatRefundDetail(this.beneficiaryId, item.id)); this.confirmVisible.set(false); this.toDelete.set(null); await this.load(); this.success('Detalle eliminado.'); }
    catch (error) { this.error(error); }
    finally { this.saving.set(false); }
  }

  changePeriodDate(value: Date): void { if (!value) return; this.periodDate.set(new Date(value.getFullYear(), value.getMonth(), 1)); void this.router.navigate([], { relativeTo: this.route, queryParams: { periodo: this.period() }, replaceUrl: true }); void this.load(); }
  movePeriod(offset: number): void { const value = this.periodDate(); this.changePeriodDate(new Date(value.getFullYear(), value.getMonth() + offset, 1)); }
  back(): Promise<boolean> { return this.router.navigate(['/reintegro-iva'], { queryParams: { periodo: this.period() } }); }
  formatCurrency(value: string | number | undefined): string { return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(value ?? 0)); }
  formatMoneyInput(value: string): string { return formatMoneyInput(value); }
  updateAmount(value: string): void { const normalized = normalizeMoneyInput(value); if (normalized !== null) this.form.amount = normalized; }
  formatPeriod(): string { const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(this.periodDate()); return label[0].toUpperCase() + label.slice(1); }
  private period(): string { const value = this.periodDate(); return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}`; }
  private initialPeriod(): Date { const value = this.route.snapshot.queryParamMap.get('periodo'); if (value && /^\d{4}-\d{2}$/.test(value)) { const [year, month] = value.split('-').map(Number); return new Date(year, month - 1, 1); } const now = new Date(); return new Date(now.getFullYear(), now.getMonth(), 1); }
  private error(error: unknown): void { this.showError(error instanceof HttpErrorResponse && error.error?.detail ? error.error.detail : 'Ocurrió un error inesperado.'); }
  private success(detail: string): void { this.messages.add({ severity: 'success', summary: 'Correcto', detail }); }
  private showError(detail: string): void { this.messages.add({ severity: 'error', summary: 'Error', detail }); }
}
