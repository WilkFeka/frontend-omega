import {
  Component,
  computed,
  inject,
  OnInit,
  signal
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { Api } from '../../services/api';

import {
  CreateUserRequest,
  UpdateUserRequest,
  User
} from '../../models/user.model';

import { Navbar } from '../../components/navbar/navbar';


interface UserForm {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  is_staff: boolean;
  user_active: boolean;
  membership_active: boolean;
}


@Component({
  selector: 'app-usuarios',
  imports: [
    FormsModule,
    ButtonDirective,
    DialogModule,
    InputText,
    TableModule,
    ToastModule,
    Navbar
  ],
  providers: [
    MessageService
  ],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss'
})
export class Usuarios implements OnInit {

  private readonly api = inject(Api);
  private readonly messageService = inject(MessageService);

  readonly users = signal<User[]>([]);
  readonly tenantName = signal('');
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly search = signal('');

  readonly dialogVisible = signal(false);
  readonly confirmVisible = signal(false);

  readonly editingId = signal<number | null>(null);
  readonly userToDeactivate = signal<User | null>(null);

  form: UserForm = this.createEmptyForm();


  readonly filteredUsers = computed(() => {
    const term = this.search().trim().toLowerCase();

    if (!term) {
      return this.users();
    }

    return this.users().filter(user => {
      const values = [
        user.username,
        user.email,
        user.first_name,
        user.last_name
      ];

      return values.some(value =>
        value?.toLowerCase().includes(term)
      );
    });
  });

  resetFilters(): void {
    this.search.set('');
  }


  readonly activeUsers = computed(() => {
    return this.users().filter(user =>
      user.user_active &&
      user.membership_active
    ).length;
  });


  readonly inactiveUsers = computed(() => {
    return this.users().filter(user =>
      !user.user_active ||
      !user.membership_active
    ).length;
  });


  readonly admins = computed(() => {
    return this.users().filter(user =>
      user.is_staff ||
      user.is_superuser
    ).length;
  });


  ngOnInit(): void {
    void this.loadUsers();
  }


  async loadUsers(): Promise<void> {
    this.loading.set(true);

    try {
      const response = await firstValueFrom(
        this.api.getUsers()
      );

      this.users.set(response.users);
      this.tenantName.set(response.tenant.name);

    } catch (error) {
      this.showError(
        this.getApiError(error)
      );

    } finally {
      this.loading.set(false);
    }
  }


  openCreate(): void {
    this.editingId.set(null);
    this.form = this.createEmptyForm();
    this.dialogVisible.set(true);
  }


  openEdit(user: User): void {
    this.editingId.set(user.id);

    this.form = {
      username: user.username,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      password: '',
      is_staff: user.is_staff,
      user_active: user.user_active,
      membership_active: user.membership_active
    };

    this.dialogVisible.set(true);
  }


  closeDialog(): void {
    if (this.saving()) {
      return;
    }

    this.dialogVisible.set(false);
  }


  async saveUser(): Promise<void> {
    if (!this.form.username.trim()) {
      this.showError(
        'El username es obligatorio.'
      );

      return;
    }

    if (
      this.editingId() === null &&
      this.form.password.length < 6
    ) {
      this.showError(
        'La contraseña debe tener al menos 6 caracteres.'
      );

      return;
    }

    this.saving.set(true);

    try {
      const userId = this.editingId();

      if (userId === null) {
        const payload: CreateUserRequest = {
          username: this.form.username.trim(),
          email: this.form.email.trim(),
          password: this.form.password,
          first_name: this.form.first_name.trim(),
          last_name: this.form.last_name.trim(),
          is_staff: this.form.is_staff
        };

        await firstValueFrom(
          this.api.createUser(payload)
        );

        this.dialogVisible.set(false);

        await this.loadUsers();

        this.showSuccess(
          'Usuario creado correctamente.'
        );

      } else {
        const payload: UpdateUserRequest = {
          username: this.form.username.trim(),
          email: this.form.email.trim(),
          first_name: this.form.first_name.trim(),
          last_name: this.form.last_name.trim(),
          is_staff: this.form.is_staff,
          user_active: this.form.user_active,
          membership_active: this.form.membership_active
        };

        if (this.form.password) {
          payload.password = this.form.password;
        }

        await firstValueFrom(
          this.api.updateUser(
            userId,
            payload
          )
        );

        this.dialogVisible.set(false);

        await this.loadUsers();

        this.showSuccess(
          'Usuario actualizado correctamente.'
        );
      }

    } catch (error) {
      this.showError(
        this.getApiError(error)
      );

    } finally {
      this.saving.set(false);
    }
  }


  askDeactivate(user: User): void {
    this.userToDeactivate.set(user);
    this.confirmVisible.set(true);
  }


  async deactivate(): Promise<void> {
    const user = this.userToDeactivate();

    if (!user) {
      return;
    }

    this.saving.set(true);

    try {
      await firstValueFrom(
        this.api.deactivateUser(user.id)
      );

      this.confirmVisible.set(false);
      this.userToDeactivate.set(null);

      await this.loadUsers();

      this.showSuccess(
        'Acceso desactivado correctamente.'
      );

    } catch (error) {
      this.showError(
        this.getApiError(error)
      );

    } finally {
      this.saving.set(false);
    }
  }


  async reactivate(user: User): Promise<void> {
    try {
      await firstValueFrom(
        this.api.updateUser(
          user.id,
          {
            membership_active: true
          }
        )
      );

      await this.loadUsers();

      this.showSuccess(
        'Acceso reactivado correctamente.'
      );

    } catch (error) {
      this.showError(
        this.getApiError(error)
      );
    }
  }


  getDisplayName(user: User): string {
    const fullName = [
      user.first_name,
      user.last_name
    ]
      .filter(Boolean)
      .join(' ');

    return fullName || '-';
  }


  getRole(user: User): string {
    if (user.is_superuser) {
      return 'Superusuario';
    }

    if (user.is_staff) {
      return 'Administrador';
    }

    return 'Usuario';
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


  private createEmptyForm(): UserForm {
    return {
      username: '',
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      is_staff: false,
      user_active: true,
      membership_active: true
    };
  }


  private getApiError(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 403) {
        return (
          error.error?.detail ??
          'No tenés permisos para administrar usuarios.'
        );
      }

      if (error.status === 409) {
        return (
          error.error?.detail ??
          'El usuario ya existe.'
        );
      }

      if (error.error?.errors) {
        const values = Object.values(
          error.error.errors
        );

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
