import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export class Api {
    http = inject(HttpClient);
    // *====================== EXPENSES ======================*
    getExpenses(period) {
        return this.http.get('/api/gastos/', {
            params: { periodo: period },
            withCredentials: true,
        });
    }
    createExpense(data) {
        return this.http.post('/api/gastos/', data, { withCredentials: true });
    }
    updateExpense(id, data) {
        return this.http.patch(`/api/gastos/${id}/`, data, { withCredentials: true });
    }
    getExpense(id) {
        return this.http.get(`/api/gastos/${id}/`, { withCredentials: true });
    }
    uploadExpenseAttachment(id, file) {
        const data = new FormData();
        data.append('file', file);
        return this.http.post(`/api/gastos/${id}/comprobantes/`, data, {
            withCredentials: true,
        });
    }
    deleteExpenseAttachment(expenseId, attachmentId) {
        return this.http.delete(`/api/gastos/${expenseId}/comprobantes/${attachmentId}/`, {
            withCredentials: true,
        });
    }
    deleteExpense(id) {
        return this.http.delete(`/api/gastos/${id}/`, { withCredentials: true });
    }
    getPreviousExpenses(period) {
        return this.http.get('/api/gastos/copiar-anterior/', {
            params: { periodo: period },
            withCredentials: true,
        });
    }
    copyPreviousExpenses(period, expenseIds) {
        return this.http.post('/api/gastos/copiar-anterior/', { period, expense_ids: expenseIds }, { withCredentials: true });
    }
    // *====================== VAT REFUNDS ======================*
    getVatBeneficiaries(period) {
        return this.http.get('/api/reintegros-iva/beneficiarios/', {
            params: { periodo: period },
            withCredentials: true,
        });
    }
    getVatBeneficiary(id) {
        return this.http.get(`/api/reintegros-iva/beneficiarios/${id}/`, {
            withCredentials: true,
        });
    }
    createVatBeneficiary(data) {
        return this.http.post('/api/reintegros-iva/beneficiarios/', data, {
            withCredentials: true,
        });
    }
    updateVatBeneficiary(id, data) {
        return this.http.patch(`/api/reintegros-iva/beneficiarios/${id}/`, data, {
            withCredentials: true,
        });
    }
    deleteVatBeneficiary(id) {
        return this.http.delete(`/api/reintegros-iva/beneficiarios/${id}/`, {
            withCredentials: true,
        });
    }
    getVatRefundDetails(beneficiaryId, period) {
        return this.http.get(`/api/reintegros-iva/beneficiarios/${beneficiaryId}/detalles/`, { params: { periodo: period }, withCredentials: true });
    }
    createVatRefundDetail(beneficiaryId, data) {
        return this.http.post(`/api/reintegros-iva/beneficiarios/${beneficiaryId}/detalles/`, data, { withCredentials: true });
    }
    updateVatRefundDetail(beneficiaryId, detailId, data) {
        return this.http.patch(`/api/reintegros-iva/beneficiarios/${beneficiaryId}/detalles/${detailId}/`, data, { withCredentials: true });
    }
    deleteVatRefundDetail(beneficiaryId, detailId) {
        return this.http.delete(`/api/reintegros-iva/beneficiarios/${beneficiaryId}/detalles/${detailId}/`, { withCredentials: true });
    }
    // *====================== LOANS ======================*
    getLoans() {
        return this.http.get('/api/prestamos/', { withCredentials: true });
    }
    getLoan(loanId) {
        return this.http.get(`/api/prestamos/${loanId}/`, { withCredentials: true });
    }
    createLoan(data) {
        return this.http.post('/api/prestamos/', data, { withCredentials: true });
    }
    updateLoan(loanId, data) {
        return this.http.patch(`/api/prestamos/${loanId}/`, data, { withCredentials: true });
    }
    deleteLoan(loanId) {
        return this.http.delete(`/api/prestamos/${loanId}/`, { withCredentials: true });
    }
    updateLoanInstallment(loanId, installmentId, data) {
        return this.http.patch(`/api/prestamos/${loanId}/cuotas/${installmentId}/`, data, { withCredentials: true });
    }
    createLoanInstallment(loanId, data) {
        return this.http.post(`/api/prestamos/${loanId}/cuotas/`, data, {
            withCredentials: true,
        });
    }
    deleteLoanInstallment(loanId, installmentId) {
        return this.http.delete(`/api/prestamos/${loanId}/cuotas/${installmentId}/`, {
            withCredentials: true,
        });
    }
    // *====================== USERS ======================*
    getUsers() {
        return this.http.get('/api/users/', { withCredentials: true });
    }
    getUser(userId) {
        return this.http.get(`/api/users/${userId}/`, { withCredentials: true });
    }
    createUser(data) {
        return this.http.post('/api/users/', data, { withCredentials: true });
    }
    updateUser(userId, data) {
        return this.http.patch(`/api/users/${userId}/`, data, { withCredentials: true });
    }
    deactivateUser(userId) {
        return this.http.delete(`/api/users/${userId}/`, { withCredentials: true });
    }
    // *====================== EMPLOYEES ======================*
    getEmployees() {
        return this.http.get('/api/empleados/', { withCredentials: true });
    }
    getEmployee(employeeId) {
        return this.http.get(`/api/empleados/${employeeId}/`, { withCredentials: true });
    }
    createEmployee(data) {
        return this.http.post('/api/empleados/', data, { withCredentials: true });
    }
    updateEmployee(employeeId, data) {
        return this.http.patch(`/api/empleados/${employeeId}/`, data, {
            withCredentials: true,
        });
    }
    deleteEmployee(employeeId) {
        return this.http.delete(`/api/empleados/${employeeId}/`, { withCredentials: true });
    }
    getEmployeeGroups() {
        return this.http.get('/api/empleados/grupos/', {
            withCredentials: true,
        });
    }
    createEmployeeGroup(data) {
        return this.http.post('/api/empleados/grupos/', data, { withCredentials: true });
    }
    updateEmployeeGroup(groupId, data) {
        return this.http.patch(`/api/empleados/grupos/${groupId}/`, data, {
            withCredentials: true,
        });
    }
    deleteEmployeeGroup(groupId) {
        return this.http.delete(`/api/empleados/grupos/${groupId}/`, { withCredentials: true });
    }
    getEmployeePositions() {
        return this.http.get('/api/empleados/cargos/', {
            withCredentials: true,
        });
    }
    createEmployeePosition(data) {
        return this.http.post('/api/empleados/cargos/', data, {
            withCredentials: true,
        });
    }
    updateEmployeePosition(positionId, data) {
        return this.http.patch(`/api/empleados/cargos/${positionId}/`, data, {
            withCredentials: true,
        });
    }
    deleteEmployeePosition(positionId) {
        return this.http.delete(`/api/empleados/cargos/${positionId}/`, {
            withCredentials: true,
        });
    }
    // *====================== SALARIES ======================*
    getSalaries(periodo) {
        return this.http.get('/api/salarios/', {
            params: { periodo },
            withCredentials: true,
        });
    }
    getSalary(salaryId) {
        return this.http.get(`/api/salarios/${salaryId}/`, { withCredentials: true });
    }
    getEmployeeSalary(employeeId, periodo) {
        return this.http.get(`/api/salarios/empleado/${employeeId}/`, {
            params: { periodo },
            withCredentials: true,
        });
    }
    createSalary(data) {
        return this.http.post('/api/salarios/', data, { withCredentials: true });
    }
    updateSalary(salaryId, data) {
        return this.http.patch(`/api/salarios/${salaryId}/`, data, { withCredentials: true });
    }
    deleteSalary(salaryId) {
        return this.http.delete(`/api/salarios/${salaryId}/`, { withCredentials: true });
    }
    // *====================== SALARY DISCOUNTS ======================*
    getSalaryDiscounts(salaryId) {
        return this.http.get(`/api/salarios/${salaryId}/descuentos/`, {
            withCredentials: true,
        });
    }
    createSalaryDiscount(salaryId, data) {
        return this.http.post(`/api/salarios/${salaryId}/descuentos/`, data, {
            withCredentials: true,
        });
    }
    updateSalaryDiscount(salaryId, discountId, data) {
        return this.http.patch(`/api/salarios/${salaryId}/descuentos/${discountId}/`, data, { withCredentials: true });
    }
    deleteSalaryDiscount(salaryId, discountId) {
        return this.http.delete(`/api/salarios/${salaryId}/descuentos/${discountId}/`, {
            withCredentials: true,
        });
    }
    // *====================== SALARY ADDITIONALS ======================*
    getSalaryAdditionals(salaryId) {
        return this.http.get(`/api/salarios/${salaryId}/adicionales/`, {
            withCredentials: true,
        });
    }
    createSalaryAdditional(salaryId, data) {
        return this.http.post(`/api/salarios/${salaryId}/adicionales/`, data, {
            withCredentials: true,
        });
    }
    updateSalaryAdditional(salaryId, additionalId, data) {
        return this.http.patch(`/api/salarios/${salaryId}/adicionales/${additionalId}/`, data, { withCredentials: true });
    }
    deleteSalaryAdditional(salaryId, additionalId) {
        return this.http.delete(`/api/salarios/${salaryId}/adicionales/${additionalId}/`, {
            withCredentials: true,
        });
    }
    static ɵfac = function Api_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Api)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineService({ token: Api, factory: Api.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Api, [{
        type: Service
    }], null, null); })();
