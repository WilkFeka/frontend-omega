import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  CreateUserRequest,
  UpdateUserRequest,
  User,
  UserListResponse
} from '../models/user.model';

import {
  CreateEmployeeRequest,
  Employee,
  EmployeeListResponse,
  UpdateEmployeeRequest
} from '../models/employee.model';


@Service()
export class Api {

  private readonly http = inject(HttpClient);

  private readonly usersUrl = '/api/users/';
  private readonly employeesUrl = '/api/empleados/';


  // ====================== USERS ======================

  getUsers(): Observable<UserListResponse> {
    return this.http.get<UserListResponse>(
      this.usersUrl,
      { withCredentials: true }
    );
  }


  getUser(userId: number): Observable<User> {
    return this.http.get<User>(
      `${this.usersUrl}${userId}/`,
      { withCredentials: true }
    );
  }


  createUser(data: CreateUserRequest): Observable<User> {
    return this.http.post<User>(
      this.usersUrl,
      data,
      { withCredentials: true }
    );
  }


  updateUser(userId: number, data: UpdateUserRequest): Observable<User> {
    return this.http.patch<User>(
      `${this.usersUrl}${userId}/`,
      data,
      { withCredentials: true }
    );
  }


  deactivateUser(userId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.usersUrl}${userId}/`,
      { withCredentials: true }
    );
  }


  // ====================== EMPLOYEES ======================

  getEmployees(): Observable<EmployeeListResponse> {
    return this.http.get<EmployeeListResponse>(
      this.employeesUrl,
      { withCredentials: true }
    );
  }


  getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(
      `${this.employeesUrl}${employeeId}/`,
      { withCredentials: true }
    );
  }


  createEmployee(data: CreateEmployeeRequest): Observable<Employee> {
    return this.http.post<Employee>(
      this.employeesUrl,
      data,
      { withCredentials: true }
    );
  }


  updateEmployee(employeeId: number, data: UpdateEmployeeRequest): Observable<Employee> {
    return this.http.patch<Employee>(
      `${this.employeesUrl}${employeeId}/`,
      data,
      { withCredentials: true }
    );
  }


  deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.employeesUrl}${employeeId}/`,
      { withCredentials: true }
    );
  }
}