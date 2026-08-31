import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { Auth } from '../services/auth';
export const authGuard = () => {
    const auth = inject(Auth);
    const router = inject(Router);
    return auth.me().pipe(map(response => {
        if (response.authenticated) {
            return true;
        }
        return router.createUrlTree(['/login']);
    }), catchError(() => {
        return of(router.createUrlTree(['/login']));
    }));
};
export const guestGuard = () => {
    const auth = inject(Auth);
    const router = inject(Router);
    return auth.me().pipe(map(response => {
        if (response.authenticated) {
            return router.createUrlTree(['/home']);
        }
        return true;
    }), catchError(() => {
        // El backend devuelve 401 cuando no hay sesión.
        // En ese caso puede entrar normalmente al login.
        return of(true);
    }));
};
