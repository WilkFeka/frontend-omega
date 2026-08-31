import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { firstValueFrom } from 'rxjs';

import { ButtonDirective } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { Dialog } from 'primeng/dialog';
import { InputNumber } from 'primeng/inputnumber';
import { InputText } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { Textarea } from 'primeng/textarea';
import { Toast } from 'primeng/toast';

import { Api } from '../../services/api';
import { Employee } from '../../models/employee.model';
import { CreateInstallmentRequest, CreateLoanRequest, InstallmentStatus, Loan, LoanInstallment, LoanKpis, LoanPersonType, UpdateInstallmentRequest } from '../../models/loan.model';
import { formatMoneyInput, normalizeMoneyInput } from '../../utils/money-input';

@Component({
  selector: 'app-prestamos',
  imports: [FormsModule, DatePipe, ButtonDirective, DatePicker, Dialog, InputNumber, InputText, Select, TableModule, Tag, Textarea, Toast],
  providers: [MessageService],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.scss'
})
export class Prestamos implements OnInit {
  private readonly api = inject(Api);
  private readonly messages = inject(MessageService);

  readonly loans = signal<Loan[]>([]);
  readonly employees = signal<Employee[]>([]);
  readonly kpis = signal<LoanKpis>({ total_lent: '0', outstanding_balance: '0', collected_this_month: '0', overdue_installments: 0, active_loans: 0 });
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly search = signal('');
  readonly typeFilter = signal('TODOS');
  readonly statusFilter = signal('TODOS');
  readonly createVisible = signal(false);
  readonly detailVisible = signal(false);
  readonly confirmVisible = signal(false);
  readonly installmentVisible = signal(false);
  readonly installmentConfirmVisible = signal(false);
  readonly creatingInstallment = signal(false);
  readonly selectedLoan = signal<Loan | null>(null);
  readonly selectedInstallment = signal<LoanInstallment | null>(null);
  readonly installmentToDelete = signal<LoanInstallment | null>(null);

  form = this.emptyForm();
  installmentForm = this.emptyInstallmentForm();

  readonly personTypeOptions = [
    { label: 'Empleado', value: 'EMPLEADO' },
    { label: 'Persona externa', value: 'EXTERNO' }
  ];
  readonly typeFilterOptions = [{ label: 'Todas las personas', value: 'TODOS' }, ...this.personTypeOptions];
  readonly statusOptions = [
    { label: 'Todos los estados', value: 'TODOS' },
    { label: 'Activos', value: 'ACTIVO' },
    { label: 'Pagados', value: 'PAGADO' },
    { label: 'Anulados', value: 'ANULADO' }
  ];
  readonly deliveryOptions = [
    { label: 'Transferencia', value: 'TRANSFERENCIA' },
    { label: 'Efectivo', value: 'EFECTIVO' },
    { label: 'Otro', value: 'OTRO' }
  ];
  readonly paymentOptions = [
    { label: 'Descuento de sueldo', value: 'DESCUENTO_SUELDO' },
    { label: 'Transferencia', value: 'TRANSFERENCIA' },
    { label: 'Efectivo', value: 'EFECTIVO' },
    { label: 'Otro', value: 'OTRO' }
  ];
  readonly installmentStatusOptions = [
    { label: 'Pendiente', value: 'PENDIENTE' },
    { label: 'Pagada parcialmente', value: 'PARCIAL' },
    { label: 'Pagada', value: 'PAGADA' },
    { label: 'Omitida este mes', value: 'OMITIDA' }
  ];

  readonly employeeOptions = computed(() => this.employees().map(employee => ({
    label: `${employee.apellido}, ${employee.nombre}`,
    value: employee.id
  })));

  readonly filteredLoans = computed(() => {
    const term = this.search().trim().toLocaleLowerCase('es');
    return this.loans().filter(loan =>
      (!term || `${loan.person_name} ${loan.external_document}`.toLocaleLowerCase('es').includes(term))
      && (this.typeFilter() === 'TODOS' || loan.person_type === this.typeFilter())
      && (this.statusFilter() === 'TODOS' || loan.status === this.statusFilter())
    );
  });

  readonly filteredKpis = computed<LoanKpis>(() => {
    const loans = this.filteredLoans();
    return {
      total_lent: String(loans.reduce((total, loan) => total + Number(loan.total_amount), 0)),
      outstanding_balance: String(loans.reduce((total, loan) => total + Number(loan.balance), 0)),
      collected_this_month: String(loans.reduce((total, loan) => total + Number(loan.collected_this_month ?? 0), 0)),
      overdue_installments: loans.reduce((total, loan) => total + Number(loan.overdue_installments ?? 0), 0),
      active_loans: loans.filter(loan => loan.status === 'ACTIVO').length
    };
  });

  ngOnInit(): void {
    void Promise.all([this.loadLoans(), this.loadEmployees()]);
  }

  async loadLoans(): Promise<void> {
    this.loading.set(true);
    try {
      const response = await firstValueFrom(this.api.getLoans());
      this.loans.set(response.loans);
      this.kpis.set(response.kpis);
    } catch (error) {
      this.showError(this.apiError(error));
    } finally {
      this.loading.set(false);
    }
  }

  async loadEmployees(): Promise<void> {
    try {
      const response = await firstValueFrom(this.api.getEmployees());
      this.employees.set(response.employees.filter(employee => !employee.fecha_baja));
    } catch (error) {
      this.showError(this.apiError(error));
    }
  }

  openCreate(): void {
    this.form = this.emptyForm();
    this.createVisible.set(true);
  }

  async createLoan(): Promise<void> {
    const totalAmount = Number(String(this.form.total_amount ?? '').replace(/,/g, ''));
    const installmentCount = Number(this.form.installment_count);
    if (!Number.isFinite(totalAmount) || totalAmount <= 0) {
      this.showError('Ingresá un monto total mayor a cero.');
      return;
    }
    if (!Number.isInteger(installmentCount) || installmentCount < 1 || installmentCount > 240) {
      this.showError('Ingresá una cantidad de cuotas entre 1 y 240.');
      return;
    }
    const deliveryDate = this.toIsoDate(this.form.delivery_date);
    if (!deliveryDate) {
      this.showError('Seleccioná una fecha de entrega válida.');
      return;
    }
    const firstInstallmentPeriod = this.toIsoDate(this.form.first_installment_period);
    if (!firstInstallmentPeriod) {
      this.showError('Seleccioná el período de la primera cuota.');
      return;
    }
    if (this.form.person_type === 'EMPLEADO' && !this.form.employee_id) {
      this.showError('Seleccioná un empleado.');
      return;
    }
    if (this.form.person_type === 'EXTERNO' && !this.form.external_name.trim()) {
      this.showError('Ingresá el nombre de la persona.');
      return;
    }
    const payload: CreateLoanRequest = {
      ...this.form,
      total_amount: totalAmount,
      installment_count: installmentCount,
      delivery_date: deliveryDate,
      first_installment_period: firstInstallmentPeriod
    };
    this.saving.set(true);
    try {
      await firstValueFrom(this.api.createLoan(payload));
      this.createVisible.set(false);
      await this.loadLoans();
      this.showSuccess('Préstamo creado y cuotas generadas correctamente.');
    } catch (error) {
      this.showError(this.apiError(error));
    } finally {
      this.saving.set(false);
    }
  }

  async openDetail(loan: Loan): Promise<void> {
    this.loading.set(true);
    try {
      this.selectedLoan.set(await firstValueFrom(this.api.getLoan(loan.id)));
      this.detailVisible.set(true);
    } catch (error) {
      this.showError(this.apiError(error));
    } finally {
      this.loading.set(false);
    }
  }

  openInstallment(item: LoanInstallment): void {
    this.creatingInstallment.set(false);
    this.selectedInstallment.set(item);
    this.installmentForm = {
      period: this.fromIsoDate(item.period),
      expected_amount: item.expected_amount,
      paid_amount: item.paid_amount === '0.00' || item.paid_amount === '0' ? '' : item.paid_amount,
      status: item.status,
      payment_date: item.payment_date ? this.fromIsoDate(item.payment_date) : null,
      payment_method: item.payment_method,
      notes: item.notes
    };
    this.installmentVisible.set(true);
  }

  openCreateInstallment(): void {
    const installments = this.selectedLoan()?.installments ?? [];
    const lastPeriod = installments.length
      ? this.fromIsoDate(installments[installments.length - 1].period)
      : new Date();
    this.creatingInstallment.set(true);
    this.selectedInstallment.set(null);
    this.installmentForm = this.emptyInstallmentForm();
    this.installmentForm.period = new Date(lastPeriod.getFullYear(), lastPeriod.getMonth() + 1, 1);
    this.installmentVisible.set(true);
  }

  onInstallmentStatusChange(status: InstallmentStatus): void {
    this.installmentForm.status = status;
    if (status === 'PAGADA') {
      this.installmentForm.paid_amount = this.installmentForm.expected_amount;
    }
  }

  askDeleteInstallment(item: LoanInstallment): void {
    this.installmentToDelete.set(item);
    this.installmentConfirmVisible.set(true);
  }

  async deleteInstallment(): Promise<void> {
    const loan = this.selectedLoan();
    const item = this.installmentToDelete();
    if (!loan || !item) return;
    this.saving.set(true);
    try {
      await firstValueFrom(this.api.deleteLoanInstallment(loan.id, item.id));
      this.installmentConfirmVisible.set(false);
      this.installmentToDelete.set(null);
      await this.loadLoans();
      this.selectedLoan.set(await firstValueFrom(this.api.getLoan(loan.id)));
      this.showSuccess('Cuota eliminada y préstamo actualizado.');
    } catch (error) {
      this.showError(this.apiError(error));
    } finally {
      this.saving.set(false);
    }
  }

  async saveInstallment(): Promise<void> {
    const loan = this.selectedLoan();
    const item = this.selectedInstallment();
    if (!loan || !this.installmentForm.period || Number(this.installmentForm.expected_amount) <= 0) {
      this.showError('Completá el período y el importe previsto.');
      return;
    }
    const payload: UpdateInstallmentRequest = {
      ...this.installmentForm,
      expected_amount: Number(this.installmentForm.expected_amount),
      paid_amount: Number(this.installmentForm.paid_amount || 0),
      period: this.toIsoDate(this.installmentForm.period),
      payment_date: this.installmentForm.payment_date ? this.toIsoDate(this.installmentForm.payment_date) : null
    };
    this.saving.set(true);
    try {
      if (this.creatingInstallment()) {
        const createPayload: CreateInstallmentRequest = {
          period: payload.period,
          expected_amount: payload.expected_amount,
          notes: payload.notes
        };
        await firstValueFrom(this.api.createLoanInstallment(loan.id, createPayload));
      } else if (item) {
        await firstValueFrom(this.api.updateLoanInstallment(loan.id, item.id, payload));
      }
      this.installmentVisible.set(false);
      await this.loadLoans();
      this.selectedLoan.set(await firstValueFrom(this.api.getLoan(loan.id)));
      this.showSuccess(this.creatingInstallment() ? 'Cuota agregada y préstamo actualizado.' : 'Cuota actualizada correctamente.');
    } catch (error) {
      this.showError(this.apiError(error));
    } finally {
      this.saving.set(false);
    }
  }

  async toggleCancelled(): Promise<void> {
    const loan = this.selectedLoan();
    if (!loan) return;
    this.saving.set(true);
    try {
      const next = loan.status === 'ANULADO' ? 'ACTIVO' : 'ANULADO';
      this.selectedLoan.set(await firstValueFrom(this.api.updateLoan(loan.id, { status: next } as Partial<Loan>)));
      await this.loadLoans();
      this.showSuccess(next === 'ANULADO' ? 'Préstamo anulado.' : 'Préstamo reactivado.');
    } catch (error) {
      this.showError(this.apiError(error));
    } finally {
      this.saving.set(false);
    }
  }

  async deleteLoan(): Promise<void> {
    const loan = this.selectedLoan();
    if (!loan) return;
    this.saving.set(true);
    try {
      await firstValueFrom(this.api.deleteLoan(loan.id));
      this.confirmVisible.set(false);
      this.detailVisible.set(false);
      this.selectedLoan.set(null);
      await this.loadLoans();
      this.showSuccess('Préstamo eliminado definitivamente.');
    } catch (error) {
      this.showError(this.apiError(error));
    } finally {
      this.saving.set(false);
    }
  }

  resetFilters(): void {
    this.search.set('');
    this.typeFilter.set('TODOS');
    this.statusFilter.set('TODOS');
  }

  formatCurrency(value: string | number | null | undefined): string {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 2 }).format(Number(value ?? 0));
  }

  formatMoneyInput(value: string): string { return formatMoneyInput(value); }
  updateLoanAmount(value: string): void { const normalized = normalizeMoneyInput(value); if (normalized !== null) this.form.total_amount = normalized; }
  updateInstallmentAmount(field: 'expected_amount' | 'paid_amount', value: string): void { const normalized = normalizeMoneyInput(value); if (normalized !== null) this.installmentForm[field] = normalized; }

  formatPeriod(value: string | null | undefined): string {
    if (!value) return '—';
    const date = this.fromIsoDate(value);
    const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(date);
    return label.charAt(0).toUpperCase() + label.slice(1);
  }

  statusLabel(status: string): string {
    return ({ ACTIVO: 'Activo', PAGADO: 'Pagado', ANULADO: 'Anulado', PENDIENTE: 'Pendiente', PARCIAL: 'Parcial', PAGADA: 'Pagada', OMITIDA: 'Omitida' } as Record<string, string>)[status] ?? status;
  }

  statusSeverity(status: string): 'success' | 'warn' | 'danger' | 'secondary' | 'info' {
    if (status === 'PAGADO' || status === 'PAGADA') return 'success';
    if (status === 'ACTIVO') return 'info';
    if (status === 'PARCIAL' || status === 'PENDIENTE') return 'warn';
    if (status === 'ANULADO') return 'danger';
    return 'secondary';
  }

  private emptyForm() {
    const now = new Date();
    return { person_type: 'EMPLEADO' as LoanPersonType, employee_id: null as number | null, external_name: '', external_document: '', total_amount: '', delivery_date: now, first_installment_period: new Date(now.getFullYear(), now.getMonth() + 1, 1), installment_count: 1, delivery_method: 'TRANSFERENCIA', notes: '' };
  }

  private emptyInstallmentForm(): { period: Date; expected_amount: string; paid_amount: string; status: InstallmentStatus; payment_date: Date | null; payment_method: string; notes: string } {
    return { period: new Date(), expected_amount: '', paid_amount: '', status: 'PENDIENTE', payment_date: null, payment_method: '', notes: '' };
  }

  private toIsoDate(value: Date | string | null | undefined): string {
    if (!value) return '';
    const dateValue = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(dateValue.getTime())) return '';
    return `${dateValue.getFullYear()}-${String(dateValue.getMonth() + 1).padStart(2, '0')}-${String(dateValue.getDate()).padStart(2, '0')}`;
  }

  private fromIsoDate(value: string): Date {
    const [year, month, day] = value.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  private apiError(error: unknown): string {
    return error instanceof HttpErrorResponse && error.error?.detail ? error.error.detail : 'Ocurrió un error inesperado.';
  }

  private showSuccess(detail: string): void { this.messages.add({ severity: 'success', summary: 'Correcto', detail }); }
  private showError(detail: string): void { this.messages.add({ severity: 'error', summary: 'Error', detail }); }
}
