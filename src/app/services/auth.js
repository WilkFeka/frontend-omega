import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';
import * as i0 from "@angular/core";
export class Auth {
    http = inject(HttpClient);
    login(username, password, rememberMe) {
        return this.csrf().pipe(switchMap(() => this.http.post('/api/auth/login/', {
            username,
            password,
            remember_me: rememberMe
        }, {
            withCredentials: true
        })));
    }
    logout() {
        return this.http.post('/api/auth/logout/', {}, {
            withCredentials: true
        });
    }
    me() {
        return this.http.get('/api/auth/me/', {
            withCredentials: true
        });
    }
    csrf() {
        return this.http.get('/api/auth/csrf/', {
            withCredentials: true
        });
    }
    static ɵfac = function Auth_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Auth)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineService({ token: Auth, factory: Auth.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Auth, [{
        type: Service
    }], null, null); })();
