export type SalaryStatus = 'LIQUIDADO' | 'ANULADO';


export interface SalaryEmployee {
  id: number;
  nombre: string;
  apellido: string;
  matricula: string | null;
  gremio: string | null;
}


export interface SalaryDiscount {
  id: number;
  descripcion: string;
  importe: string;
}


export interface SalaryAdditional {
  id: number;
  descripcion: string;
  importe: string;
}


export interface Salary {
  id: number;
  employee: SalaryEmployee;

  periodo: string;
  fecha_liquidacion: string;
  fecha_pago_prevista: string | null;

  importe_recibo: string;

  descuentos_total: string;
  adicionales_total: string;
  transferencia_real: string;

  ajuste_efectivo: string;
  efectivo: string;

  sueldo_total: string;

  estado: SalaryStatus;
  moneda: string;

  recibo_entregado: boolean;
  fecha_entrega_recibo: string | null;
  recibo_firmado: boolean;
  transferencia_realizada: boolean;
  efectivo_entregado: boolean;

  observaciones: string;
  anulado: boolean;

  created_at: string;
  updated_at: string;

  discounts?: SalaryDiscount[];
  additionals?: SalaryAdditional[];
}


export interface SalaryMonthRow {
  employee: SalaryEmployee;
  salary: Salary | null;
}


export interface SalaryMonthResponse {
  periodo: string;
  count: number;
  employees: SalaryMonthRow[];
}


export interface EmployeeSalaryResponse {
  employee: SalaryEmployee;
  periodo: string;
  salary: Salary | null;
}


export interface CreateSalaryRequest {
  employee_id: number;
  periodo: string;

  importe_recibo: string;
  ajuste_efectivo: string;

  fecha_pago_prevista?: string | null;

  moneda: string;

  recibo_entregado: boolean;
  fecha_entrega_recibo?: string | null;
  recibo_firmado: boolean;
  transferencia_realizada?: boolean;
  efectivo_entregado?: boolean;

  observaciones: string;
}


export interface UpdateSalaryRequest {
  periodo?: string;

  importe_recibo?: string;
  ajuste_efectivo?: string;

  fecha_pago_prevista?: string | null;

  moneda?: string;

  recibo_entregado?: boolean;
  fecha_entrega_recibo?: string | null;
  recibo_firmado?: boolean;
  transferencia_realizada?: boolean;
  efectivo_entregado?: boolean;

  observaciones?: string;
  anulado?: boolean;
}


export interface CreateSalaryDiscountRequest {
  descripcion: string;
  importe: string;
}


export interface UpdateSalaryDiscountRequest {
  descripcion?: string;
  importe?: string;
}


export interface SalaryDiscountListResponse {
  count: number;
  discounts: SalaryDiscount[];
}


export interface CreateSalaryAdditionalRequest {
  descripcion: string;
  importe: string;
}


export interface UpdateSalaryAdditionalRequest {
  descripcion?: string;
  importe?: string;
}


export interface SalaryAdditionalListResponse {
  count: number;
  additionals: SalaryAdditional[];
}
