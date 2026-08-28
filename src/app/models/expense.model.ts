export type ExpenseCategory = 'IMPUESTOS' | 'SERVICIOS' | 'VARIOS';
export interface Expense { id: number; period: string; category: ExpenseCategory; description: string; amount: string | null; observation: string; copied_from_id: number | null; }
export interface ExpenseRequest { period: string; category: ExpenseCategory; description: string; amount: number; observation: string; }
export interface ExpenseListResponse { period: string; count: number; total: string; totals: Record<ExpenseCategory, string>; expenses: Expense[]; }
export interface PreviousExpenseResponse { period: string; expenses: Expense[]; }
