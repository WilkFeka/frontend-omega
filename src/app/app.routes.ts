import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Usuarios } from './pages/usuarios/usuarios';
import { authGuard } from './guards/auth-guard';
import { guestGuard } from './guards/auth-guard';

export const routes: Routes = [
  {path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'login', component: Login, canActivate: [guestGuard] },
  { path: 'usuarios', component: Usuarios, canActivate: [authGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];