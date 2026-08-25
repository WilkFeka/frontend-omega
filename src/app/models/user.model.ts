export interface TenantSummary {
  id: number;
  name: string;
  slug: string;
}

export interface User {
  id: number;
  username: string;
  email: string;

  first_name: string;
  last_name: string;

  user_active: boolean;
  membership_active: boolean;

  is_staff: boolean;
  is_superuser: boolean;
}

export interface UserListResponse {
  tenant: TenantSummary;
  count: number;
  users: User[];
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;

  first_name: string;
  last_name: string;

  is_staff: boolean;
}

export interface UpdateUserRequest {
  username?: string;
  email?: string;
  password?: string;

  first_name?: string;
  last_name?: string;

  is_staff?: boolean;
  user_active?: boolean;
  membership_active?: boolean;
}