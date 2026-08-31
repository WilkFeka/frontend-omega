export type ExpenseCategory = 'IMPUESTOS' | 'SERVICIOS' | 'VARIOS';
export type ExpensePaymentMethod = 'TRANSFERENCIA' | 'EFECTIVO';
export interface ExpenseAttachment {
  id: number;
  name: string;
  content_type: string;
  size: number;
  created_at: string;
  download_url: string;
}
export interface Expense {
  id: number;
  period: string;
  category: ExpenseCategory;
  description: string;
  amount: string | null;
  observation: string;
  copied_from_id: number | null;
  payment_method: ExpensePaymentMethod;
  is_paid: boolean;
  paid_at: string | null;
  attachment_count: number;
  attachments?: ExpenseAttachment[];
}
export interface ExpenseRequest {
  period: string;
  category: ExpenseCategory;
  description: string;
  amount: number;
  observation: string;
  payment_method: ExpensePaymentMethod;
  is_paid?: boolean;
  paid_at?: string | null;
}
export interface ExpenseListResponse {
  period: string;
  count: number;
  total: string;
  totals: Record<ExpenseCategory, string>;
  payment_totals: Record<ExpensePaymentMethod, string>;
  expenses: Expense[];
}
export interface PreviousExpenseResponse {
  period: string;
  expenses: Expense[];
}
