export type VatDeliveryMethod = 'EFECTIVO' | 'TRANSFERENCIA';

export interface VatBeneficiary {
  id: number;
  nombre: string;
  apellido: string;
  delivery_method: VatDeliveryMethod;
  period?: string;
  total?: string;
  detail_count?: number;
}

export interface VatBeneficiaryListResponse {
  count: number;
  period: string;
  total: string;
  cash_total: string;
  transfer_total: string;
  beneficiaries_with_details: number;
  beneficiaries: VatBeneficiary[];
}

export interface VatRefundDetail {
  id: number;
  beneficiary_id: number;
  period: string;
  amount: string;
  observation: string;
}

export interface VatRefundDetailListResponse {
  beneficiary: VatBeneficiary;
  period: string;
  total: string;
  count: number;
  details: VatRefundDetail[];
}

export interface VatBeneficiaryRequest { nombre: string; apellido: string; delivery_method: VatDeliveryMethod; }
export interface VatRefundDetailRequest { period: string; amount: number; observation: string; }
