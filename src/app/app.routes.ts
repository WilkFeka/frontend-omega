import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { authGuard } from './guards/auth-guard';
import { guestGuard } from './guards/auth-guard';

export const routes: Routes = [
  {path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'login', component: Login, canActivate: [guestGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];