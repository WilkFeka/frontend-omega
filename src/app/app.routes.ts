import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Usuarios } from './pages/usuarios/usuarios';
import { Empleados } from './pages/empleados/empleados';
import { Sueldos } from './pages/sueldos/sueldos';
import { DetalleSueldo } from './pages/sueldos/detalle-sueldo/detalle-sueldo';
import { Prestamos } from './pages/prestamos/prestamos';
import { authGuard } from './guards/auth-guard';
import { guestGuard } from './guards/auth-guard';

export const routes: Routes = [
  {path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'login', component: Login, canActivate: [guestGuard] },
  { path: 'usuarios', component: Usuarios, canActivate: [authGuard] },
  { path: 'empleados', component: Empleados, canActivate: [authGuard] },
  { path: 'sueldos', component: Sueldos, canActivate: [authGuard] },
  { path: 'prestamos', component: Prestamos, canActivate: [authGuard] },
  {
    path: 'sueldos/:employeeId',
    component: DetalleSueldo,
    canActivate: [authGuard],
    canDeactivate: [(component: DetalleSueldo) => component.canDeactivate()]
  },


  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
