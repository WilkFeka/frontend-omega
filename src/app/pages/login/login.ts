import {
  Component,
  inject,
  signal
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import {
  HttpErrorResponse
} from '@angular/common/http';

import { Router } from '@angular/router';

import {
  firstValueFrom
} from 'rxjs';

import {
  ButtonDirective
} from 'primeng/button';

import {
  InputText
} from 'primeng/inputtext';

import {
  InputPassword
} from 'primeng/inputpassword';

import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ButtonDirective,
    InputText,
    InputPassword
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  email = '';
  password = '';
  rememberMe = false;

  showPassword = false;

  readonly loading = signal(false);
  readonly error = signal('');

  async onSubmit(): Promise<void> {

    if (!this.email.trim() || !this.password) {
      this.error.set(
        'Ingresá tu email y contraseña.'
      );

      return;
    }

    this.loading.set(true);
    this.error.set('');

    try {

      await firstValueFrom(
        this.auth.login(
          this.email.trim(),
          this.password,
          this.rememberMe
        )
      );

      const navigated =
        await this.router.navigateByUrl(
          '/home'
        );

      if (!navigated) {
        this.error.set(
          'No se pudo acceder al inicio.'
        );
      }

    } catch (error) {

      const httpError =
        error as HttpErrorResponse;

      if (httpError.status === 401) {
        this.error.set(
          'Email o contraseña incorrectos.'
        );

        return;
      }

      if (httpError.status === 403) {
        console.log(httpError)
        this.error.set(
          httpError.error.detail || 'No tenés permisos para iniciar sesión.'
        );

        return;
      }

      if (httpError.error?.detail) {
        this.error.set(
          httpError.error.detail
        );

        return;
      }

      this.error.set(
        'No se pudo iniciar sesión. Intentá nuevamente.'
      );

    } finally {

      this.loading.set(false);

    }
  }
}