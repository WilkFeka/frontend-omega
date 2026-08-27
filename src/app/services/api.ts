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
  EmployeeGroup,
  EmployeeGroupListResponse,
  EmployeeGroupRequest,
  EmployeeListResponse,
  UpdateEmployeeRequest
} from '../models/employee.model';

import {
  CreateSalaryDiscountRequest,
  CreateSalaryAdditionalRequest,
  CreateSalaryRequest,
  EmployeeSalaryResponse,
  Salary,
  SalaryDiscount,
  SalaryAdditional,
  SalaryAdditionalListResponse,
  SalaryDiscountListResponse,
  SalaryMonthResponse,
  UpdateSalaryDiscountRequest,
  UpdateSalaryAdditionalRequest,
  UpdateSalaryRequest
} from '../models/salary.model';


@Service()
export class Api {

  private readonly http = inject(HttpClient);


  // *====================== USERS ======================*

  getUsers(): Observable<UserListResponse> {
    return this.http.get<UserListResponse>(
      '/api/users/',
      { withCredentials: true }
    );
  }


  getUser(userId: number): Observable<User> {
    return this.http.get<User>(
      `/api/users/${userId}/`,
      { withCredentials: true }
    );
  }


  createUser(data: CreateUserRequest): Observable<User> {
    return this.http.post<User>(
      '/api/users/',
      data,
      { withCredentials: true }
    );
  }


  updateUser(userId: number, data: UpdateUserRequest): Observable<User> {
    return this.http.patch<User>(
      `/api/users/${userId}/`,
      data,
      { withCredentials: true }
    );
  }


  deactivateUser(userId: number): Observable<void> {
    return this.http.delete<void>(
      `/api/users/${userId}/`,
      { withCredentials: true }
    );
  }


  // *====================== EMPLOYEES ======================*

  getEmployees(): Observable<EmployeeListResponse> {
    return this.http.get<EmployeeListResponse>(
      '/api/empleados/',
      { withCredentials: true }
    );
  }


  getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(
      `/api/empleados/${employeeId}/`,
      { withCredentials: true }
    );
  }


  createEmployee(data: CreateEmployeeRequest): Observable<Employee> {
    return this.http.post<Employee>(
      '/api/empleados/',
      data,
      { withCredentials: true }
    );
  }


  updateEmployee(employeeId: number, data: UpdateEmployeeRequest): Observable<Employee> {
    return this.http.patch<Employee>(
      `/api/empleados/${employeeId}/`,
      data,
      { withCredentials: true }
    );
  }


  deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(
      `/api/empleados/${employeeId}/`,
      { withCredentials: true }
    );
  }


  getEmployeeGroups(): Observable<EmployeeGroupListResponse> {
    return this.http.get<EmployeeGroupListResponse>(
      '/api/empleados/grupos/',
      { withCredentials: true }
    );
  }


  createEmployeeGroup(data: EmployeeGroupRequest): Observable<EmployeeGroup> {
    return this.http.post<EmployeeGroup>(
      '/api/empleados/grupos/',
      data,
      { withCredentials: true }
    );
  }


  updateEmployeeGroup(groupId: number, data: EmployeeGroupRequest): Observable<EmployeeGroup> {
    return this.http.patch<EmployeeGroup>(
      `/api/empleados/grupos/${groupId}/`,
      data,
      { withCredentials: true }
    );
  }


  deleteEmployeeGroup(groupId: number): Observable<void> {
    return this.http.delete<void>(
      `/api/empleados/grupos/${groupId}/`,
      { withCredentials: true }
    );
  }


  // *====================== SALARIES ======================*

  getSalaries(periodo: string): Observable<SalaryMonthResponse> {
    return this.http.get<SalaryMonthResponse>(
      '/api/salarios/',
      {
        params: { periodo },
        withCredentials: true
      }
    );
  }


  getSalary(salaryId: number): Observable<Salary> {
    return this.http.get<Salary>(
      `/api/salarios/${salaryId}/`,
      { withCredentials: true }
    );
  }


  getEmployeeSalary(employeeId: number, periodo: string): Observable<EmployeeSalaryResponse> {
    return this.http.get<EmployeeSalaryResponse>(
      `/api/salarios/empleado/${employeeId}/`,
      {
        params: { periodo },
        withCredentials: true
      }
    );
  }


  createSalary(data: CreateSalaryRequest): Observable<Salary> {
    return this.http.post<Salary>(
      '/api/salarios/',
      data,
      { withCredentials: true }
    );
  }


  updateSalary(salaryId: number, data: UpdateSalaryRequest): Observable<Salary> {
    return this.http.patch<Salary>(
      `/api/salarios/${salaryId}/`,
      data,
      { withCredentials: true }
    );
  }


  deleteSalary(salaryId: number): Observable<void> {
    return this.http.delete<void>(
      `/api/salarios/${salaryId}/`,
      { withCredentials: true }
    );
  }


  // *====================== SALARY DISCOUNTS ======================*

  getSalaryDiscounts(salaryId: number): Observable<SalaryDiscountListResponse> {
    return this.http.get<SalaryDiscountListResponse>(
      `/api/salarios/${salaryId}/descuentos/`,
      { withCredentials: true }
    );
  }


  createSalaryDiscount(
    salaryId: number,
    data: CreateSalaryDiscountRequest
  ): Observable<SalaryDiscount> {

    return this.http.post<SalaryDiscount>(
      `/api/salarios/${salaryId}/descuentos/`,
      data,
      { withCredentials: true }
    );
  }


  updateSalaryDiscount(
    salaryId: number,
    discountId: number,
    data: UpdateSalaryDiscountRequest
  ): Observable<SalaryDiscount> {

    return this.http.patch<SalaryDiscount>(
      `/api/salarios/${salaryId}/descuentos/${discountId}/`,
      data,
      { withCredentials: true }
    );
  }


  deleteSalaryDiscount(salaryId: number, discountId: number): Observable<void> {
    return this.http.delete<void>(
      `/api/salarios/${salaryId}/descuentos/${discountId}/`,
      { withCredentials: true }
    );
  }


  // *====================== SALARY ADDITIONALS ======================*

  getSalaryAdditionals(salaryId: number): Observable<SalaryAdditionalListResponse> {
    return this.http.get<SalaryAdditionalListResponse>(
      `/api/salarios/${salaryId}/adicionales/`,
      { withCredentials: true }
    );
  }


  createSalaryAdditional(
    salaryId: number,
    data: CreateSalaryAdditionalRequest
  ): Observable<SalaryAdditional> {
    return this.http.post<SalaryAdditional>(
      `/api/salarios/${salaryId}/adicionales/`,
      data,
      { withCredentials: true }
    );
  }


  updateSalaryAdditional(
    salaryId: number,
    additionalId: number,
    data: UpdateSalaryAdditionalRequest
  ): Observable<SalaryAdditional> {
    return this.http.patch<SalaryAdditional>(
      `/api/salarios/${salaryId}/adicionales/${additionalId}/`,
      data,
      { withCredentials: true }
    );
  }


  deleteSalaryAdditional(salaryId: number, additionalId: number): Observable<void> {
    return this.http.delete<void>(
      `/api/salarios/${salaryId}/adicionales/${additionalId}/`,
      { withCredentials: true }
    );
  }
}
