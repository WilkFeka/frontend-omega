import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DatePicker } from 'primeng/datepicker';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { InputText } from 'primeng/inputtext';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Select } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';

import { Api } from '../../services/api';

import {
  CreateEmployeeRequest,
  Employee,
  EmployeeGroup,
  EmployeePosition,
  UpdateEmployeeRequest
} from '../../models/employee.model';
import { Grupos } from './grupos/grupos';
import { Cargos } from './cargos/cargos';


interface EmployeeForm {
  nombre: string;
  apellido: string;
  direccion: string;
  matricula: string;
  gremio: string;
  telefono: string;
  fecha_nacimiento: string;
  fecha_ingreso: string;
  group_id: number | null;
  position_id: number | null;
}


@Component({
  selector: 'app-empleados',
  imports: [
    FormsModule,
    ButtonDirective,
    DialogModule,
    DatePicker,
    ConfirmDialog,
    InputText,
    TableModule,
    ToastModule,
    Select,
    TabsModule,
    Grupos,
    Cargos
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './empleados.html',
  styleUrl: './empleados.scss'
})
export class Empleados implements OnInit {

  private readonly api = inject(Api);
  private readonly messageService = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);

  readonly employees = signal<Employee[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly search = signal('');
  readonly activeSection = signal<'employees' | 'groups' | 'positions'>('employees');
  readonly groups = signal<EmployeeGroup[]>([]);
  readonly positions = signal<EmployeePosition[]>([]);
  readonly groupFilter = signal<number | null>(null);
  readonly positionFilter = signal<number | null>(null);
  readonly unionFilter = signal<string | null>(null);
  readonly statusFilter = signal<'ALL' | 'ACTIVE' | 'INACTIVE'>('ALL');

  readonly dialogVisible = signal(false);
  readonly confirmVisible = signal(false);

  readonly editingId = signal<number | null>(null);
  readonly employeeToDelete = signal<Employee | null>(null);

  form: EmployeeForm = this.createEmptyForm();


  readonly filteredEmployees = computed(() => {
    const term = this.search().trim().toLowerCase();

    return this.employees().filter(employee => {
      const values = [
        employee.nombre,
        employee.apellido,
        employee.direccion,
        employee.matricula,
        employee.gremio,
        employee.group?.nombre,
        employee.telefono
      ];

      const matchesSearch = !term || values.some(value =>
        value?.toLowerCase().includes(term)
      );
      const matchesGroup = this.groupFilter() === null || employee.group?.id === this.groupFilter();
      const matchesPosition = this.positionFilter() === null || employee.position?.id === this.positionFilter();
      const matchesUnion = this.unionFilter() === null || employee.gremio === this.unionFilter();
      const matchesStatus = this.statusFilter() === 'ALL'
        || (this.statusFilter() === 'ACTIVE' ? !employee.fecha_baja : !!employee.fecha_baja);
      return matchesSearch && matchesGroup && matchesPosition && matchesUnion && matchesStatus;
    });
  });


  readonly withMatricula = computed(() => {
    return this.employees().filter(employee => !!employee.matricula).length;
  });


  readonly withPhone = computed(() => {
    return this.employees().filter(employee => !!employee.telefono).length;
  });


  readonly withEntryDate = computed(() => {
    return this.employees().filter(employee => !!employee.fecha_ingreso).length;
  });

  readonly activeCount = computed(() => this.employees().filter(employee => !employee.fecha_baja).length);
  readonly inactiveCount = computed(() => this.employees().filter(employee => !!employee.fecha_baja).length);


  readonly groupOptions = computed(() => [
    { label: 'Todos los grupos', value: null },
    ...this.groups().map(group => ({ label: group.nombre, value: group.id }))
  ]);
  readonly assignmentGroupOptions = computed(() => [
    { label: 'Sin grupo', value: null },
    ...this.groups().map(group => ({ label: group.nombre, value: group.id }))
  ]);

  readonly positionOptions = computed(() => [
    { label: 'Todos los cargos', value: null },
    ...this.positions().map(position => ({ label: position.nombre, value: position.id }))
  ]);
  readonly assignmentPositionOptions = computed(() => [
    { label: 'Sin cargo', value: null },
    ...this.positions().map(position => ({ label: position.nombre, value: position.id }))
  ]);

  readonly unionOptions = computed(() => [
    { label: 'Todos los gremios', value: null },
    ...[...new Set(this.employees().map(employee => employee.gremio).filter((value): value is string => !!value))]
      .sort().map(value => ({ label: value, value }))
  ]);

  readonly statusOptions = [
    { label: 'Todos los estados', value: 'ALL' },
    { label: 'Activos', value: 'ACTIVE' },
    { label: 'Dados de baja', value: 'INACTIVE' }
  ];


  ngOnInit(): void {
    void Promise.all([this.loadEmployees(), this.loadGroups(), this.loadPositions()]);
  }


  async loadGroups(): Promise<void> {
    try {
      const response = await firstValueFrom(this.api.getEmployeeGroups());
      this.groups.set(response.groups);
    } catch (error) {
      this.showError(this.getApiError(error));
    }
  }

  async loadPositions(): Promise<void> {
    try { this.positions.set((await firstValueFrom(this.api.getEmployeePositions())).positions); }
    catch (error) { this.showError(this.getApiError(error)); }
  }


  async loadEmployees(): Promise<void> {
    this.loading.set(true);

    try {
      const response = await firstValueFrom(
        this.api.getEmployees()
      );

      this.employees.set(response.employees);

    } catch (error) {
      this.showError(this.getApiError(error));

    } finally {
      this.loading.set(false);
    }
  }


  openCreate(): void {
    this.editingId.set(null);
    this.form = this.createEmptyForm();
    this.dialogVisible.set(true);
  }


  openEdit(employee: Employee): void {
    this.editingId.set(employee.id);

    this.form = {
      nombre: employee.nombre,
      apellido: employee.apellido,
      direccion: employee.direccion ?? '',
      matricula: employee.matricula ?? '',
      gremio: employee.gremio ?? '',
      telefono: employee.telefono ?? '',
      fecha_nacimiento: employee.fecha_nacimiento,
      fecha_ingreso: employee.fecha_ingreso ?? '',
      group_id: employee.group?.id ?? null,
      position_id: employee.position?.id ?? null
    };

    this.dialogVisible.set(true);
  }


  closeDialog(): void {
    if (this.saving()) {
      return;
    }

    this.dialogVisible.set(false);
  }


  async saveEmployee(): Promise<void> {
    if (!this.form.nombre.trim()) {
      this.showError('El nombre es obligatorio.');
      return;
    }

    if (!this.form.apellido.trim()) {
      this.showError('El apellido es obligatorio.');
      return;
    }

    if (!this.form.fecha_nacimiento) {
      this.showError('La fecha de nacimiento es obligatoria.');
      return;
    }

    this.saving.set(true);

    try {
      const employeeId = this.editingId();

      if (employeeId === null) {
        const payload: CreateEmployeeRequest = {
          nombre: this.form.nombre.trim(),
          apellido: this.form.apellido.trim(),
          direccion: this.form.direccion.trim() || null,
          matricula: this.form.matricula.trim() || null,
          gremio: this.form.gremio.trim() || null,
          telefono: this.form.telefono.trim() || null,
          fecha_nacimiento: this.form.fecha_nacimiento,
          fecha_ingreso: this.form.fecha_ingreso || null,
          group_id: this.form.group_id,
          position_id: this.form.position_id
        };

        await firstValueFrom(
          this.api.createEmployee(payload)
        );

        this.dialogVisible.set(false);

        await this.loadEmployees();

        this.showSuccess('Empleado creado correctamente.');

      } else {
        const payload: UpdateEmployeeRequest = {
          nombre: this.form.nombre.trim(),
          apellido: this.form.apellido.trim(),
          direccion: this.form.direccion.trim() || null,
          matricula: this.form.matricula.trim() || null,
          gremio: this.form.gremio.trim() || null,
          telefono: this.form.telefono.trim() || null,
          fecha_nacimiento: this.form.fecha_nacimiento,
          fecha_ingreso: this.form.fecha_ingreso || null,
          group_id: this.form.group_id,
          position_id: this.form.position_id
        };

        await firstValueFrom(
          this.api.updateEmployee(employeeId, payload)
        );

        this.dialogVisible.set(false);

        await this.loadEmployees();

        this.showSuccess('Empleado actualizado correctamente.');
      }

    } catch (error) {
      this.showError(this.getApiError(error));

    } finally {
      this.saving.set(false);
    }
  }


  askDelete(employee: Employee): void {
    this.employeeToDelete.set(employee);
    this.confirmVisible.set(true);
  }


  async deleteEmployee(): Promise<void> {
    const employee = this.employeeToDelete();

    if (!employee) {
      return;
    }

    this.saving.set(true);

    try {
      await firstValueFrom(
        this.api.deleteEmployee(employee.id)
      );

      this.confirmVisible.set(false);
      this.employeeToDelete.set(null);

      await this.loadEmployees();

      this.showSuccess('Empleado eliminado correctamente.');

    } catch (error) {
      this.showError(this.getApiError(error));

    } finally {
      this.saving.set(false);
    }
  }


  toggleEmployeeStatus(employee: Employee): void {
    const reactivating = !!employee.fecha_baja;
    this.confirmationService.confirm({
      header: reactivating ? 'Dar de alta' : 'Dar de baja',
      message: reactivating
        ? '¿Confirmás que querés volver a dar de alta a este empleado?'
        : 'El empleado dejará de aparecer en sueldos desde el mes actual.',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: reactivating ? 'Dar de alta' : 'Dar de baja',
      rejectLabel: 'Cancelar',
      rejectButtonProps: { severity: 'secondary', outlined: true },
      accept: () => void this.applyEmployeeStatus(employee)
    });
  }


  resetFilters(): void {
    this.search.set('');
    this.groupFilter.set(null);
    this.positionFilter.set(null);
    this.unionFilter.set(null);
    this.statusFilter.set('ALL');
  }


  private async applyEmployeeStatus(employee: Employee): Promise<void> {
    const reactivating = !!employee.fecha_baja;

    this.saving.set(true);

    try {
      const today = new Date();
      const fechaBaja = reactivating
        ? null
        : `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

      await firstValueFrom(
        this.api.updateEmployee(employee.id, { fecha_baja: fechaBaja })
      );

      await this.loadEmployees();
      this.showSuccess(
        reactivating
          ? 'Empleado dado de alta nuevamente.'
          : 'Empleado dado de baja correctamente.'
      );

    } catch (error) {
      this.showError(this.getApiError(error));
    } finally {
      this.saving.set(false);
    }
  }


  getFullName(employee: Employee): string {
    return `${employee.apellido}, ${employee.nombre}`;
  }


  formatDate(date: string | null): string {
    if (!date) {
      return '-';
    }

    const [year, month, day] = date.split('-');

    return `${day}/${month}/${year}`;
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


  private createEmptyForm(): EmployeeForm {
    return {
      nombre: '',
      apellido: '',
      direccion: '',
      matricula: '',
      gremio: '',
      telefono: '',
      fecha_nacimiento: '',
      fecha_ingreso: '',
      group_id: null,
      position_id: null
    };
  }


  private getApiError(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 403) {
        return (
          error.error?.detail ??
          'No tenés permisos para administrar empleados.'
        );
      }

      if (error.error?.errors) {
        const values = Object.values(error.error.errors);

        if (values.length) {
          return String(values[0]);
        }
      }

      if (error.error?.detail) {
        return error.error.detail;
      }
    }

    return 'Ocurrió un error inesperado.';
  }
}
