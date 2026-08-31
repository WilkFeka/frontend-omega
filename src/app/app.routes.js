import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Usuarios } from './pages/usuarios/usuarios';
import { Empleados } from './pages/empleados/empleados';
import { Sueldos } from './pages/sueldos/sueldos';
import { DetalleSueldo } from './pages/sueldos/detalle-sueldo/detalle-sueldo';
import { Prestamos } from './pages/prestamos/prestamos';
import { ReintegroIva } from './pages/reintegro-iva/reintegro-iva';
import { DetalleReintegroIva } from './pages/reintegro-iva/detalle-reintegro-iva/detalle-reintegro-iva';
import { Gastos } from './pages/gastos/gastos';
import { authGuard } from './guards/auth-guard';
import { guestGuard } from './guards/auth-guard';
export const routes = [
    { path: 'home', component: Home, canActivate: [authGuard] },
    { path: 'login', component: Login, canActivate: [guestGuard] },
    { path: 'usuarios', component: Usuarios, canActivate: [authGuard] },
    { path: 'empleados', component: Empleados, canActivate: [authGuard] },
    { path: 'sueldos', component: Sueldos, canActivate: [authGuard] },
    { path: 'prestamos', component: Prestamos, canActivate: [authGuard] },
    { path: 'reintegro-iva', component: ReintegroIva, canActivate: [authGuard] },
    { path: 'reintegro-iva/:beneficiaryId', component: DetalleReintegroIva, canActivate: [authGuard] },
    { path: 'gastos', component: Gastos, canActivate: [authGuard] },
    {
        path: 'sueldos/:employeeId',
        component: DetalleSueldo,
        canActivate: [authGuard],
        canDeactivate: [(component) => component.canDeactivate()]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];
