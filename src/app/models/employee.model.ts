export interface EmployeeGroup {
  id: number;
  nombre: string;
  employee_count: number;
}

export interface EmployeePosition {
  id: number;
  nombre: string;
  employee_count: number;
}

export interface Employee {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string | null;
  matricula: string | null;
  gremio: string | null;
  telefono: string | null;
  fecha_nacimiento: string;
  fecha_ingreso: string | null;
  fecha_baja: string | null;
  group: Pick<EmployeeGroup, 'id' | 'nombre'> | null;
  position: Pick<EmployeePosition, 'id' | 'nombre'> | null;
}

export interface EmployeeListResponse {
  count: number;
  employees: Employee[];
}

export interface CreateEmployeeRequest {
  nombre: string;
  apellido: string;
  fecha_nacimiento: string;
  direccion?: string | null;
  matricula?: string | null;
  gremio?: string | null;
  telefono?: string | null;
  fecha_ingreso?: string | null;
  fecha_baja?: string | null;
  group_id?: number | null;
  position_id?: number | null;
}

export interface UpdateEmployeeRequest {
  nombre?: string;
  apellido?: string;
  fecha_nacimiento?: string;
  direccion?: string | null;
  matricula?: string | null;
  gremio?: string | null;
  telefono?: string | null;
  fecha_ingreso?: string | null;
  fecha_baja?: string | null;
  group_id?: number | null;
  position_id?: number | null;
}

export interface EmployeeGroupListResponse {
  count: number;
  groups: EmployeeGroup[];
}

export interface EmployeeGroupRequest {
  nombre: string;
}

export interface EmployeePositionListResponse {
  count: number;
  positions: EmployeePosition[];
}

export interface EmployeePositionRequest {
  nombre: string;
}
