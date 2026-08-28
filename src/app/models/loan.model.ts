export type LoanPersonType = 'EMPLEADO' | 'EXTERNO';
export type LoanStatus = 'ACTIVO' | 'PAGADO' | 'ANULADO';
export type InstallmentStatus = 'PENDIENTE' | 'PARCIAL' | 'PAGADA' | 'OMITIDA';

export interface LoanInstallment {
  id: number;
  number: number;
  period: string;
  expected_amount: string;
  paid_amount: string;
  status: InstallmentStatus;
  payment_date: string | null;
  payment_method: string;
  notes: string;
}

export interface Loan {
  id: number;
  person_type: LoanPersonType;
  person_name: string;
  employee: { id: number; nombre: string; apellido: string } | null;
  external_name: string;
  external_document: string;
  total_amount: string;
  paid_amount: string;
  balance: string;
  delivery_date: string;
  first_installment_period: string;
  installment_count: number;
  delivery_method: string;
  notes: string;
  status: LoanStatus;
  next_installment: LoanInstallment | null;
  installments?: LoanInstallment[];
}

export interface LoanKpis {
  total_lent: string;
  outstanding_balance: string;
  collected_this_month: string;
  overdue_installments: number;
  active_loans: number;
}

export interface LoanListResponse {
  count: number;
  loans: Loan[];
  kpis: LoanKpis;
}

export interface CreateLoanRequest {
  person_type: LoanPersonType;
  employee_id: number | null;
  external_name: string;
  external_document: string;
  total_amount: number;
  delivery_date: string;
  first_installment_period: string;
  installment_count: number;
  delivery_method: string;
  notes: string;
}

export interface UpdateInstallmentRequest {
  period: string;
  expected_amount: number;
  paid_amount: number;
  status?: InstallmentStatus;
  payment_date: string | null;
  payment_method: string;
  notes: string;
}

export interface CreateInstallmentRequest {
  period: string;
  expected_amount: number;
  notes: string;
}
