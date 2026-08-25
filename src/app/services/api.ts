import {
  inject,
  Service
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  CreateUserRequest,
  UpdateUserRequest,
  User,
  UserListResponse
} from '../models/user.model';


@Service()
export class Api {

  private readonly http = inject(HttpClient);

  private readonly baseUrl = '/api/users/';


  getUsers(): Observable<UserListResponse> {

    return this.http.get<UserListResponse>(
      this.baseUrl,
      {
        withCredentials: true
      }
    );
  }


  getUser(
    userId: number
  ): Observable<User> {

    return this.http.get<User>(
      `${this.baseUrl}${userId}/`,
      {
        withCredentials: true
      }
    );
  }


  createUser(
    data: CreateUserRequest
  ): Observable<User> {

    return this.http.post<User>(
      this.baseUrl,
      data,
      {
        withCredentials: true
      }
    );
  }


  updateUser(
    userId: number,
    data: UpdateUserRequest
  ): Observable<User> {

    return this.http.patch<User>(
      `${this.baseUrl}${userId}/`,
      data,
      {
        withCredentials: true
      }
    );
  }


  deactivateUser(
    userId: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.baseUrl}${userId}/`,
      {
        withCredentials: true
      }
    );
  }
}