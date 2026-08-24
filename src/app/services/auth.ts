import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
}

export interface MeResponse {
  authenticated: boolean;
  user: User;
}

export interface LogoutResponse {
  detail: string;
}

@Service()
export class Auth {

  private readonly http = inject(HttpClient);

  login(
    username: string,
    password: string,
    rememberMe: boolean
  ): Observable<LoginResponse> {

    return this.csrf().pipe(
      switchMap(() =>
        this.http.post<LoginResponse>(
          '/api/auth/login/',
          {
            username,
            password,
            remember_me: rememberMe
          },
          {
            withCredentials: true
          }
        )
      )
    );
  }

  logout(): Observable<LogoutResponse> {
    return this.http.post<LogoutResponse>(
      '/api/auth/logout/',
      {},
      {
        withCredentials: true
      }
    );
  }

  me(): Observable<MeResponse> {
    return this.http.get<MeResponse>(
        '/api/auth/me/',
      {
        withCredentials: true
      }
    );
  }

  private csrf(): Observable<{ detail: string }> {
    return this.http.get<{ detail: string }>(
      '/api/auth/csrf/',
      {
        withCredentials: true
      }
    );
  }
}