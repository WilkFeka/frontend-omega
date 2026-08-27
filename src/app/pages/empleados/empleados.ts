import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Select } from 'primeng/select';

import { Api } from '../../services/api';

import {
  CreateEmployeeRequest,
  Employee,
  EmployeeGroup,
  UpdateEmployeeRequest
} from '../../models/employee.model';


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
}


@Component({
  selector: 'app-empleados',
  imports: [
    FormsModule,
    ButtonDirective,
    DialogModule,
    InputText,
    TableModule,
    ToastModule,
    Select
  ],
  providers: [MessageService],
  templateUrl: './empleados.html',
  styleUrl: './empleados.scss'
})
export class Empleados implements OnInit {

  private readonly api = inject(Api);
  private readonly messageService = inject(MessageService);

  readonly employees = signal<Employee[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly search = signal('');
  readonly groupSearch = signal('');
  readonly activeSection = signal<'employees' | 'groups'>('employees');
  readonly groups = signal<EmployeeGroup[]>([]);

  readonly dialogVisible = signal(false);
  readonly confirmVisible = signal(false);
  readonly groupDialogVisible = signal(false);
  readonly groupConfirmVisible = signal(false);

  readonly editingId = signal<number | null>(null);
  readonly employeeToDelete = signal<Employee | null>(null);
  readonly editingGroupId = signal<number | null>(null);
  readonly groupToDelete = signal<EmployeeGroup | null>(null);
  groupName = '';

  form: EmployeeForm = this.createEmptyForm();


  readonly filteredEmployees = computed(() => {
    const term = this.search().trim().toLowerCase();

    if (!term) {
      return this.employees();
    }

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

      return values.some(value =>
        value?.toLowerCase().includes(term)
      );
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


  readonly filteredGroups = computed(() => {
    const term = this.groupSearch().trim().toLowerCase();
    return this.groups().filter(group =>
      !term || group.nombre.toLowerCase().includes(term)
    );
  });


  readonly groupOptions = computed(() => [
    { label: 'Sin grupo', value: null },
    ...this.groups().map(group => ({ label: group.nombre, value: group.id }))
  ]);


  ngOnInit(): void {
    void Promise.all([this.loadEmployees(), this.loadGroups()]);
  }


  async loadGroups(): Promise<void> {
    try {
      const response = await firstValueFrom(this.api.getEmployeeGroups());
      this.groups.set(response.groups);
    } catch (error) {
      this.showError(this.getApiError(error));
    }
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
      group_id: employee.group?.id ?? null
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
          group_id: this.form.group_id
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
          group_id: this.form.group_id
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


  async toggleEmployeeStatus(employee: Employee): Promise<void> {
    const reactivating = !!employee.fecha_baja;
    const message = reactivating
      ? '¿Confirmás que querés volver a dar de alta a este empleado?'
      : '¿Confirmás la baja? El empleado dejará de aparecer en sueldos desde el mes actual.';

    if (!window.confirm(message)) {
      return;
    }

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


  openGroupCreate(): void {
    this.editingGroupId.set(null);
    this.groupName = '';
    this.groupDialogVisible.set(true);
  }


  openGroupEdit(group: EmployeeGroup): void {
    this.editingGroupId.set(group.id);
    this.groupName = group.nombre;
    this.groupDialogVisible.set(true);
  }


  async saveGroup(): Promise<void> {
    const nombre = this.groupName.trim();

    if (!nombre) {
      this.showError('El nombre del grupo es obligatorio.');
      return;
    }

    this.saving.set(true);

    try {
      const groupId = this.editingGroupId();

      if (groupId === null) {
        await firstValueFrom(this.api.createEmployeeGroup({ nombre }));
        this.showSuccess('Grupo creado correctamente.');
      } else {
        await firstValueFrom(this.api.updateEmployeeGroup(groupId, { nombre }));
        this.showSuccess('Grupo actualizado correctamente.');
      }

      this.groupDialogVisible.set(false);
      await Promise.all([this.loadGroups(), this.loadEmployees()]);
    } catch (error) {
      this.showError(this.getApiError(error));
    } finally {
      this.saving.set(false);
    }
  }


  askDeleteGroup(group: EmployeeGroup): void {
    this.groupToDelete.set(group);
    this.groupConfirmVisible.set(true);
  }


  async deleteGroup(): Promise<void> {
    const group = this.groupToDelete();

    if (!group) {
      return;
    }

    this.saving.set(true);

    try {
      await firstValueFrom(this.api.deleteEmployeeGroup(group.id));
      this.groupConfirmVisible.set(false);
      this.groupToDelete.set(null);
      await Promise.all([this.loadGroups(), this.loadEmployees()]);
      this.showSuccess('Grupo eliminado correctamente.');
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
      group_id: null
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
