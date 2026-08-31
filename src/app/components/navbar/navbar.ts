import {
  Component,
  inject,
  signal
} from '@angular/core';

import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { firstValueFrom } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

import { Auth } from '../../services/auth';


@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    Menu
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  readonly collapsed = signal(true);
  readonly loggingOut = signal(false);
  readonly logoutError = signal('');

  readonly items: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      routerLink: '/home'
    },
    {
      label: 'Usuarios',
      icon: 'pi pi-users',
      routerLink: '/usuarios'
    },
    {
      label: 'Configuración',
      icon: 'pi pi-cog',
      routerLink: '/configuracion'
    },
    {
      label: 'Empleados',
      icon: 'pi pi-id-card',
      routerLink: '/empleados'
    },
    {
      label: 'Sueldos',
      icon: 'pi pi-wallet',
      routerLink: '/sueldos'
    },
    {
      label: 'Préstamos',
      icon: 'pi pi-money-bill',
      routerLink: '/prestamos'
    },
    {
      label: 'Reintegro IVA',
      icon: 'pi pi-percentage',
      routerLink: '/reintegro-iva'
    },
    {
      label: 'Gastos',
      icon: 'pi pi-credit-card',
      routerLink: '/gastos'
    }
  ];

  readonly mobileMoreItems: MenuItem[] = [
    ...this.items.slice(4).map(item => ({
      ...item,
      command: () => {
        void this.router.navigateByUrl(String(item.routerLink));
        this.collapseNavbar();
      }
    })),
    { separator: true },
    {
      label: 'Salir',
      icon: 'pi pi-sign-out',
      styleClass: 'mobile-menu-logout',
      command: () => void this.logout()
    }
  ];


  toggleNavbar(): void {
    this.collapsed.update(value => !value);
  }


  collapseNavbar(): void {
    this.collapsed.set(true);
  }


  async logout(): Promise<void> {
    if (this.loggingOut()) {
      return;
    }

    this.loggingOut.set(true);
    this.logoutError.set('');

    try {
      await firstValueFrom(
        this.auth.logout()
      );

      await this.router.navigateByUrl(
        '/login'
      );

    } catch {
      this.logoutError.set(
        'No se pudo cerrar la sesión.'
      );

    } finally {
      this.loggingOut.set(false);
    }
  }
}
