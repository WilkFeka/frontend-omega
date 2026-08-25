export interface Employee {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string | null;
  matricula: string | null;
  telefono: string | null;
  fecha_nacimiento: string;
  fecha_ingreso: string | null;
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
  telefono?: string | null;
  fecha_ingreso?: string | null;
}

export interface UpdateEmployeeRequest {
  nombre?: string;
  apellido?: string;
  fecha_nacimiento?: string;
  direccion?: string | null;
  matricula?: string | null;
  telefono?: string | null;
  fecha_ingreso?: string | null;
}