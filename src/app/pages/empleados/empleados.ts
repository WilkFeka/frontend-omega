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

import { Api } from '../../services/api';

import {
  CreateEmployeeRequest,
  Employee,
  UpdateEmployeeRequest
} from '../../models/employee.model';


interface EmployeeForm {
  nombre: string;
  apellido: string;
  direccion: string;
  matricula: string;
  telefono: string;
  fecha_nacimiento: string;
  fecha_ingreso: string;
}


@Component({
  selector: 'app-empleados',
  imports: [
    FormsModule,
    ButtonDirective,
    DialogModule,
    InputText,
    TableModule,
    ToastModule
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

  readonly dialogVisible = signal(false);
  readonly confirmVisible = signal(false);

  readonly editingId = signal<number | null>(null);
  readonly employeeToDelete = signal<Employee | null>(null);

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


  ngOnInit(): void {
    void this.loadEmployees();
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
      telefono: employee.telefono ?? '',
      fecha_nacimiento: employee.fecha_nacimiento,
      fecha_ingreso: employee.fecha_ingreso ?? ''
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
          telefono: this.form.telefono.trim() || null,
          fecha_nacimiento: this.form.fecha_nacimiento,
          fecha_ingreso: this.form.fecha_ingreso || null
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
          telefono: this.form.telefono.trim() || null,
          fecha_nacimiento: this.form.fecha_nacimiento,
          fecha_ingreso: this.form.fecha_ingreso || null
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
      telefono: '',
      fecha_nacimiento: '',
      fecha_ingreso: ''
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