import {
  Component,
  computed,
  HostListener,
  inject,
  OnInit,
  signal
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DatePicker } from 'primeng/datepicker';
import { InputText } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { Api } from '../../../services/api';

import {
  CreateSalaryDiscountRequest,
  Salary,
  SalaryAdditional,
  SalaryDiscount,
  SalaryEmployee
} from '../../../models/salary.model';


interface SalaryForm {
  importe_recibo: string;
  ajuste_efectivo: string;
  fecha_pago_prevista: string;
  moneda: string;
  recibo_entregado: boolean;
  fecha_entrega_recibo: string;
  recibo_firmado: boolean;
  transferencia_realizada: boolean;
  efectivo_entregado: boolean;
  observaciones: string;
}


interface DiscountForm {
  descripcion: string;
  importe: string;
}

type MoneyField = 'importe_recibo' | 'ajuste_efectivo';


@Component({
  selector: 'app-detalle-sueldo',
  imports: [
    FormsModule,
    ButtonDirective,
    DatePicker,
    DialogModule,
    InputText,
    TableModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './detalle-sueldo.html',
  styleUrl: './detalle-sueldo.scss'
})
export class DetalleSueldo implements OnInit {

  private readonly api = inject(Api);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly messageService = inject(MessageService);

  readonly employee = signal<SalaryEmployee | null>(null);
  readonly salary = signal<Salary | null>(null);

  readonly loading = signal(false);
  readonly saving = signal(false);

  readonly periodo = signal(
    this.route.snapshot.queryParamMap.get('periodo')
    ?? this.getCurrentPeriod()
  );

  readonly periodDate = computed(() => {
    const [year, month] = this.periodo().split('-').map(Number);
    return new Date(year, month - 1, 1);
  });

  readonly discountDialogVisible = signal(false);
  readonly deleteDialogVisible = signal(false);
  readonly deleteSalaryDialogVisible = signal(false);
  readonly additionalDialogVisible = signal(false);
  readonly deleteAdditionalDialogVisible = signal(false);

  readonly editingDiscountId = signal<number | null>(null);
  readonly discountToDelete = signal<SalaryDiscount | null>(null);
  readonly editingAdditionalId = signal<number | null>(null);
  readonly additionalToDelete = signal<SalaryAdditional | null>(null);
  readonly formRevision = signal(0);
  readonly selectedFiles = signal<File[]>([]);
  readonly transferReceipt = signal<File | null>(null);

  private readonly employeeId = this.getEmployeeId();


  salaryForm: SalaryForm = this.createSalaryForm();

  discountForm: DiscountForm = this.createDiscountForm();
  additionalForm: DiscountForm = this.createDiscountForm();
  private savedFormSnapshot = JSON.stringify(this.salaryForm);
  private skipNextGuard = false;


  readonly discounts = computed(() => {
    return this.salary()?.discounts ?? [];
  });


  readonly additionals = computed(() => {
    return this.salary()?.additionals ?? [];
  });


  readonly previewReceipt = computed(() => {
    this.formRevision();
    return Number(this.salaryForm.importe_recibo || 0);
  });


  readonly previewDiscounts = computed(() => {
    return Number(this.salary()?.descuentos_total ?? 0);
  });


  readonly previewTransfer = computed(() => {
    return Math.max(
      this.previewReceipt() - this.previewDiscounts(),
      0
    );
  });


  readonly previewCash = computed(() => {
    this.formRevision();
    return Number(this.salaryForm.ajuste_efectivo || 0);
  });


  readonly previewAdditionals = computed(() => {
    return Number(this.salary()?.adicionales_total ?? 0);
  });


  readonly previewTotal = computed(() => {
    return (
      this.previewTransfer()
      + this.previewCash()
      + this.previewAdditionals()
    );
  });


  ngOnInit(): void {
    void this.loadDetail();
  }


  async loadDetail(): Promise<void> {
    this.loading.set(true);

    try {
      const response = await firstValueFrom(
        this.api.getEmployeeSalary(
          this.employeeId,
          this.periodo()
        )
      );

      if (response.salary) {
        this.salaryForm = {
          importe_recibo: response.salary.importe_recibo,
          ajuste_efectivo: response.salary.ajuste_efectivo,
          fecha_pago_prevista: response.salary.fecha_pago_prevista ?? '',
          moneda: response.salary.moneda,
          recibo_entregado: response.salary.recibo_entregado,
          fecha_entrega_recibo: response.salary.fecha_entrega_recibo ?? '',
          recibo_firmado: response.salary.recibo_firmado,
          transferencia_realizada: response.salary.transferencia_realizada,
          efectivo_entregado: response.salary.efectivo_entregado,
          observaciones: response.salary.observaciones
        };
      } else {
        this.salaryForm = this.createSalaryForm();
      }

      this.employee.set(response.employee);
      this.salary.set(response.salary);
      this.selectedFiles.set([]);
      this.transferReceipt.set(null);
      this.formRevision.update(value => value + 1);
      this.savedFormSnapshot = JSON.stringify(this.salaryForm);

    } catch (error) {
      this.showError(this.getApiError(error));

    } finally {
      this.loading.set(false);
    }
  }


  updateMoneyField(field: MoneyField, displayValue: string): void {
    const normalized = displayValue.replace(/,/g, '');

    if (!/^\d*(?:\.\d{0,2})?$/.test(normalized)) {
      return;
    }

    this.salaryForm[field] = normalized;
    this.formRevision.update(value => value + 1);
  }


  formatMoneyInput(value: string): string {
    if (!value) {
      return '';
    }

    const [integerPart, decimalPart] = value.split('.');
    const grouped = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return decimalPart === undefined
      ? grouped
      : `${grouped}.${decimalPart}`;
  }


  changePeriod(periodo: string): void {
    if (!periodo) {
      return;
    }

    if (this.hasUnsavedChanges()) {
      const confirmed = window.confirm(
        'Hay cambios sin guardar. ¿Querés descartarlos y cambiar de período?'
      );

      if (!confirmed) {
        return;
      }

      this.skipNextGuard = true;
    }

    this.periodo.set(periodo);

    void this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { periodo },
        replaceUrl: true
      }
    );

    void this.loadDetail();
  }


  changePeriodDate(value: Date | null): void {
    if (!value) {
      return;
    }

    this.changePeriod(
      `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}`
    );
  }


  movePeriod(offset: number): void {
    const date = this.periodDate();
    const target = new Date(date.getFullYear(), date.getMonth() + offset, 1);
    this.changePeriodDate(target);
  }


  back(): void {
    void this.router.navigate(
      ['/sueldos'],
      {
        queryParams: {
          periodo: this.periodo()
        }
      }
    );
  }


  hasUnsavedChanges(): boolean {
    return JSON.stringify(this.salaryForm) !== this.savedFormSnapshot;
  }


  canDeactivate(): boolean {
    if (this.skipNextGuard) {
      this.skipNextGuard = false;
      return true;
    }

    return (
      !this.hasUnsavedChanges()
      || window.confirm(
        'Hay cambios sin guardar. ¿Confirmás que querés salir y descartarlos?'
      )
    );
  }


  @HostListener('window:beforeunload', ['$event'])
  warnBeforeUnload(event: BeforeUnloadEvent): void {
    if (!this.hasUnsavedChanges()) {
      return;
    }

    event.preventDefault();
    event.returnValue = '';
  }


  async saveSalary(): Promise<void> {
    const importeRecibo = Number(
      this.salaryForm.importe_recibo || 0
    );

    const ajusteEfectivo = Number(
      this.salaryForm.ajuste_efectivo || 0
    );

    if (importeRecibo < 0) {
      this.showError(
        'El importe del recibo no puede ser negativo.'
      );

      return;
    }

    if (ajusteEfectivo < 0) {
      this.showError(
        'El ajuste en efectivo no puede ser negativo.'
      );

      return;
    }

    if (this.previewDiscounts() > importeRecibo) {
      this.showError(
        'El recibo no puede ser menor al total de descuentos.'
      );

      return;
    }

    this.saving.set(true);

    try {
      const current = this.salary();

      if (!current) {
        await firstValueFrom(
          this.api.createSalary({
            employee_id: this.employeeId,
            periodo: this.periodo(),
            importe_recibo: this.salaryForm.importe_recibo || '0',
            ajuste_efectivo: this.salaryForm.ajuste_efectivo || '0',
            fecha_pago_prevista: this.salaryForm.fecha_pago_prevista || null,
            moneda: this.salaryForm.moneda,
            recibo_entregado: this.salaryForm.recibo_entregado,
            fecha_entrega_recibo: this.salaryForm.fecha_entrega_recibo || null,
            recibo_firmado: this.salaryForm.recibo_firmado,
            transferencia_realizada: this.salaryForm.transferencia_realizada,
            efectivo_entregado: this.salaryForm.efectivo_entregado,
            observaciones: this.salaryForm.observaciones.trim()
          })
        );

        this.showSuccess(
          'Liquidación creada correctamente.'
        );

      } else {
        await firstValueFrom(
          this.api.updateSalary(
            current.id,
            {
              importe_recibo: this.salaryForm.importe_recibo || '0',
              ajuste_efectivo: this.salaryForm.ajuste_efectivo || '0',
              fecha_pago_prevista: this.salaryForm.fecha_pago_prevista || null,
              moneda: this.salaryForm.moneda,
              recibo_entregado: this.salaryForm.recibo_entregado,
              fecha_entrega_recibo: this.salaryForm.fecha_entrega_recibo || null,
              recibo_firmado: this.salaryForm.recibo_firmado,
              transferencia_realizada: this.salaryForm.transferencia_realizada,
              efectivo_entregado: this.salaryForm.efectivo_entregado,
              observaciones: this.salaryForm.observaciones.trim()
            }
          )
        );

        this.showSuccess(
          'Liquidación actualizada correctamente.'
        );
      }

      await this.loadDetail();

    } catch (error) {
      this.showError(this.getApiError(error));

    } finally {
      this.saving.set(false);
    }
  }


  async toggleCancelled(): Promise<void> {
    const salary = this.salary();

    if (!salary) {
      return;
    }

    this.saving.set(true);

    try {
      if (salary.anulado) {
        await firstValueFrom(
          this.api.updateSalary(
            salary.id,
            { anulado: false }
          )
        );

        this.showSuccess(
          'Liquidación reactivada correctamente.'
        );

      } else {
        await firstValueFrom(
          this.api.updateSalary(
            salary.id,
            { anulado: true }
          )
        );

        this.showSuccess(
          'Liquidación anulada correctamente.'
        );
      }

      await this.loadDetail();

    } catch (error) {
      this.showError(this.getApiError(error));

    } finally {
      this.saving.set(false);
    }
  }


  async deleteSalary(): Promise<void> {
    const salary = this.salary();

    if (!salary) {
      return;
    }

    this.saving.set(true);

    try {
      await firstValueFrom(
        this.api.deleteSalary(salary.id)
      );

      this.deleteSalaryDialogVisible.set(false);
      this.salaryForm = this.createSalaryForm();
      this.salary.set(null);
      this.formRevision.update(value => value + 1);
      this.savedFormSnapshot = JSON.stringify(this.salaryForm);

      this.showSuccess(
        'Liquidación eliminada correctamente.'
      );

    } catch (error) {
      this.showError(this.getApiError(error));

    } finally {
      this.saving.set(false);
    }
  }


  // *====================== DISCOUNTS ======================*

  openDiscountCreate(): void {
    if (!this.salary()) {
      this.showError(
        'Primero tenés que crear la liquidación.'
      );

      return;
    }

    this.editingDiscountId.set(null);
    this.discountForm = this.createDiscountForm();
    this.discountDialogVisible.set(true);
  }


  openDiscountEdit(discount: SalaryDiscount): void {
    this.editingDiscountId.set(discount.id);

    this.discountForm = {
      descripcion: discount.descripcion,
      importe: discount.importe
    };

    this.discountDialogVisible.set(true);
  }


  updateDiscountAmount(displayValue: string): void {
    const normalized = displayValue.replace(/,/g, '');

    if (/^\d*(?:\.\d{0,2})?$/.test(normalized)) {
      this.discountForm.importe = normalized;
    }
  }


  async saveDiscount(): Promise<void> {
    const salary = this.salary();

    if (!salary) {
      return;
    }

    const descripcion = this.discountForm.descripcion.trim();

    if (!descripcion) {
      this.showError(
        'La descripción es obligatoria.'
      );

      return;
    }

    if (Number(this.discountForm.importe) <= 0) {
      this.showError(
        'El importe debe ser mayor a cero.'
      );

      return;
    }

    this.saving.set(true);

    try {
      const data: CreateSalaryDiscountRequest = {
        descripcion,
        importe: this.discountForm.importe
      };

      const discountId = this.editingDiscountId();

      if (discountId === null) {
        await firstValueFrom(
          this.api.createSalaryDiscount(
            salary.id,
            data
          )
        );

        this.showSuccess(
          'Descuento agregado correctamente.'
        );

      } else {
        await firstValueFrom(
          this.api.updateSalaryDiscount(
            salary.id,
            discountId,
            data
          )
        );

        this.showSuccess(
          'Descuento actualizado correctamente.'
        );
      }

      this.discountDialogVisible.set(false);

      await this.loadDetail();

    } catch (error) {
      this.showError(this.getApiError(error));

    } finally {
      this.saving.set(false);
    }
  }


  askDeleteDiscount(discount: SalaryDiscount): void {
    this.discountToDelete.set(discount);
    this.deleteDialogVisible.set(true);
  }


  async deleteDiscount(): Promise<void> {
    const salary = this.salary();
    const discount = this.discountToDelete();

    if (!salary || !discount) {
      return;
    }

    this.saving.set(true);

    try {
      await firstValueFrom(
        this.api.deleteSalaryDiscount(
          salary.id,
          discount.id
        )
      );

      this.deleteDialogVisible.set(false);
      this.discountToDelete.set(null);

      await this.loadDetail();

      this.showSuccess(
        'Descuento eliminado correctamente.'
      );

    } catch (error) {
      this.showError(this.getApiError(error));

    } finally {
      this.saving.set(false);
    }
  }


  // *====================== ADDITIONALS ======================*

  openAdditionalCreate(): void {
    if (!this.salary()) {
      this.showError('Primero tenés que crear la liquidación.');
      return;
    }

    this.editingAdditionalId.set(null);
    this.additionalForm = this.createDiscountForm();
    this.additionalDialogVisible.set(true);
  }


  openAdditionalEdit(additional: SalaryAdditional): void {
    this.editingAdditionalId.set(additional.id);
    this.additionalForm = {
      descripcion: additional.descripcion,
      importe: additional.importe
    };
    this.additionalDialogVisible.set(true);
  }


  updateAdditionalAmount(displayValue: string): void {
    const normalized = displayValue.replace(/,/g, '');

    if (/^\d*(?:\.\d{0,2})?$/.test(normalized)) {
      this.additionalForm.importe = normalized;
    }
  }


  async saveAdditional(): Promise<void> {
    const salary = this.salary();
    const additionalId = this.editingAdditionalId();
    const descripcion = this.additionalForm.descripcion.trim();
    const importe = Number(this.additionalForm.importe);

    if (!salary || !descripcion || importe <= 0) {
      this.showError('Ingresá una descripción y un importe mayor a cero.');
      return;
    }

    this.saving.set(true);

    try {
      const data = {
        descripcion,
        importe: this.additionalForm.importe
      };

      if (additionalId === null) {
        await firstValueFrom(
          this.api.createSalaryAdditional(salary.id, data)
        );
        this.showSuccess('Adicional agregado correctamente.');
      } else {
        await firstValueFrom(
          this.api.updateSalaryAdditional(salary.id, additionalId, data)
        );
        this.showSuccess('Adicional actualizado correctamente.');
      }

      this.additionalDialogVisible.set(false);
      await this.loadDetail();

    } catch (error) {
      this.showError(this.getApiError(error));
    } finally {
      this.saving.set(false);
    }
  }


  askDeleteAdditional(additional: SalaryAdditional): void {
    this.additionalToDelete.set(additional);
    this.deleteAdditionalDialogVisible.set(true);
  }


  async deleteAdditional(): Promise<void> {
    const salary = this.salary();
    const additional = this.additionalToDelete();

    if (!salary || !additional) {
      return;
    }

    this.saving.set(true);

    try {
      await firstValueFrom(
        this.api.deleteSalaryAdditional(salary.id, additional.id)
      );

      this.deleteAdditionalDialogVisible.set(false);
      this.additionalToDelete.set(null);
      await this.loadDetail();
      this.showSuccess('Adicional eliminado correctamente.');

    } catch (error) {
      this.showError(this.getApiError(error));
    } finally {
      this.saving.set(false);
    }
  }


  formatCurrency(value: string | number | null | undefined): string {
    return new Intl.NumberFormat(
      'es-AR',
      {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 2
      }
    ).format(Number(value ?? 0));
  }


  formatDate(value: string | null): string {
    if (!value) {
      return '-';
    }

    const [year, month, day] = value.split('-');

    return `${day}/${month}/${year}`;
  }


  selectFiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFiles.set(Array.from(input.files ?? []));
  }


  selectTransferReceipt(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.transferReceipt.set(input.files?.[0] ?? null);
  }


  private getEmployeeId(): number {
    const value = this.route.snapshot.paramMap.get('employeeId');

    if (!value) {
      throw new Error(
        'No se encontró employeeId en la ruta.'
      );
    }

    const employeeId = Number(value);

    if (!Number.isInteger(employeeId) || employeeId <= 0) {
      throw new Error(
        'El employeeId de la ruta es inválido.'
      );
    }

    return employeeId;
  }


  private createSalaryForm(): SalaryForm {
    return {
      importe_recibo: '',
      ajuste_efectivo: '',
      fecha_pago_prevista: '',
      moneda: 'ARS',
      recibo_entregado: false,
      fecha_entrega_recibo: '',
      recibo_firmado: false,
      transferencia_realizada: false,
      efectivo_entregado: false,
      observaciones: ''
    };
  }


  private createDiscountForm(): DiscountForm {
    return {
      descripcion: '',
      importe: ''
    };
  }


  private getCurrentPeriod(): string {
    const now = new Date();

    return `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, '0')}`;
  }


  private showSuccess(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Correcto',
      detail: message,
      life: 3000
    });
  }


  private showError(message: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 4000
    });
  }


  private getApiError(error: unknown): string {
    if (error instanceof HttpErrorResponse && error.error?.detail) {
      return error.error.detail;
    }

    return 'Ocurrió un error inesperado.';
  }
}
