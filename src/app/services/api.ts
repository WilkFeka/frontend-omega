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
  EmployeePosition,
  EmployeePositionListResponse,
  EmployeePositionRequest,
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
import { CreateInstallmentRequest, CreateLoanRequest, Loan, LoanListResponse, LoanInstallment, UpdateInstallmentRequest } from '../models/loan.model';
import { VatBeneficiary, VatBeneficiaryListResponse, VatBeneficiaryRequest, VatRefundDetail, VatRefundDetailListResponse, VatRefundDetailRequest } from '../models/vat-refund.model';
import { Expense, ExpenseListResponse, ExpenseRequest, PreviousExpenseResponse } from '../models/expense.model';


@Service()
export class Api {

  private readonly http = inject(HttpClient);

  // *====================== EXPENSES ======================*

  getExpenses(period: string): Observable<ExpenseListResponse> {
    return this.http.get<ExpenseListResponse>('/api/gastos/', { params: { periodo: period }, withCredentials: true });
  }
  createExpense(data: ExpenseRequest): Observable<Expense> {
    return this.http.post<Expense>('/api/gastos/', data, { withCredentials: true });
  }
  updateExpense(id: number, data: ExpenseRequest): Observable<Expense> {
    return this.http.patch<Expense>(`/api/gastos/${id}/`, data, { withCredentials: true });
  }
  deleteExpense(id: number): Observable<void> {
    return this.http.delete<void>(`/api/gastos/${id}/`, { withCredentials: true });
  }
  getPreviousExpenses(period: string): Observable<PreviousExpenseResponse> {
    return this.http.get<PreviousExpenseResponse>('/api/gastos/copiar-anterior/', { params: { periodo: period }, withCredentials: true });
  }
  copyPreviousExpenses(period: string, expenseIds: number[]): Observable<{ created: number; skipped: number }> {
    return this.http.post<{ created: number; skipped: number }>('/api/gastos/copiar-anterior/', { period, expense_ids: expenseIds }, { withCredentials: true });
  }

  // *====================== VAT REFUNDS ======================*

  getVatBeneficiaries(period: string): Observable<VatBeneficiaryListResponse> {
    return this.http.get<VatBeneficiaryListResponse>('/api/reintegros-iva/beneficiarios/', { params: { periodo: period }, withCredentials: true });
  }

  getVatBeneficiary(id: number): Observable<VatBeneficiary> {
    return this.http.get<VatBeneficiary>(`/api/reintegros-iva/beneficiarios/${id}/`, { withCredentials: true });
  }

  createVatBeneficiary(data: VatBeneficiaryRequest): Observable<VatBeneficiary> {
    return this.http.post<VatBeneficiary>('/api/reintegros-iva/beneficiarios/', data, { withCredentials: true });
  }

  updateVatBeneficiary(id: number, data: VatBeneficiaryRequest): Observable<VatBeneficiary> {
    return this.http.patch<VatBeneficiary>(`/api/reintegros-iva/beneficiarios/${id}/`, data, { withCredentials: true });
  }

  deleteVatBeneficiary(id: number): Observable<void> {
    return this.http.delete<void>(`/api/reintegros-iva/beneficiarios/${id}/`, { withCredentials: true });
  }

  getVatRefundDetails(beneficiaryId: number, period: string): Observable<VatRefundDetailListResponse> {
    return this.http.get<VatRefundDetailListResponse>(`/api/reintegros-iva/beneficiarios/${beneficiaryId}/detalles/`, { params: { periodo: period }, withCredentials: true });
  }

  createVatRefundDetail(beneficiaryId: number, data: VatRefundDetailRequest): Observable<VatRefundDetail> {
    return this.http.post<VatRefundDetail>(`/api/reintegros-iva/beneficiarios/${beneficiaryId}/detalles/`, data, { withCredentials: true });
  }

  updateVatRefundDetail(beneficiaryId: number, detailId: number, data: VatRefundDetailRequest): Observable<VatRefundDetail> {
    return this.http.patch<VatRefundDetail>(`/api/reintegros-iva/beneficiarios/${beneficiaryId}/detalles/${detailId}/`, data, { withCredentials: true });
  }

  deleteVatRefundDetail(beneficiaryId: number, detailId: number): Observable<void> {
    return this.http.delete<void>(`/api/reintegros-iva/beneficiarios/${beneficiaryId}/detalles/${detailId}/`, { withCredentials: true });
  }

  // *====================== LOANS ======================*

  getLoans(): Observable<LoanListResponse> {
    return this.http.get<LoanListResponse>('/api/prestamos/', { withCredentials: true });
  }

  getLoan(loanId: number): Observable<Loan> {
    return this.http.get<Loan>(`/api/prestamos/${loanId}/`, { withCredentials: true });
  }

  createLoan(data: CreateLoanRequest): Observable<Loan> {
    return this.http.post<Loan>('/api/prestamos/', data, { withCredentials: true });
  }

  updateLoan(loanId: number, data: Partial<Loan>): Observable<Loan> {
    return this.http.patch<Loan>(`/api/prestamos/${loanId}/`, data, { withCredentials: true });
  }

  deleteLoan(loanId: number): Observable<void> {
    return this.http.delete<void>(`/api/prestamos/${loanId}/`, { withCredentials: true });
  }

  updateLoanInstallment(loanId: number, installmentId: number, data: UpdateInstallmentRequest): Observable<LoanInstallment> {
    return this.http.patch<LoanInstallment>(`/api/prestamos/${loanId}/cuotas/${installmentId}/`, data, { withCredentials: true });
  }

  createLoanInstallment(loanId: number, data: CreateInstallmentRequest): Observable<LoanInstallment> {
    return this.http.post<LoanInstallment>(`/api/prestamos/${loanId}/cuotas/`, data, { withCredentials: true });
  }

  deleteLoanInstallment(loanId: number, installmentId: number): Observable<void> {
    return this.http.delete<void>(`/api/prestamos/${loanId}/cuotas/${installmentId}/`, { withCredentials: true });
  }


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


  getEmployeePositions(): Observable<EmployeePositionListResponse> {
    return this.http.get<EmployeePositionListResponse>('/api/empleados/cargos/', { withCredentials: true });
  }

  createEmployeePosition(data: EmployeePositionRequest): Observable<EmployeePosition> {
    return this.http.post<EmployeePosition>('/api/empleados/cargos/', data, { withCredentials: true });
  }

  updateEmployeePosition(positionId: number, data: EmployeePositionRequest): Observable<EmployeePosition> {
    return this.http.patch<EmployeePosition>(`/api/empleados/cargos/${positionId}/`, data, { withCredentials: true });
  }

  deleteEmployeePosition(positionId: number): Observable<void> {
    return this.http.delete<void>(`/api/empleados/cargos/${positionId}/`, { withCredentials: true });
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
