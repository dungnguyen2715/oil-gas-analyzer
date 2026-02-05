export type Role = {
  _id: string;
  //   created_admin_id: string;
  //   updated_admin_id: string;
  name: string;
  permissions: string[];
  description?: string;
  created_at: Date;
  updated_at: Date;
};

export type RoleList = Pick<Role, "_id" | "name" | "permissions"> & {
  number_of_users: number;
};

export type CreateRoleRequest = Pick<
  Role,
  "name" | "permissions" | "description"
>;

export type UpdateRoleRequest = Required<CreateRoleRequest>;

export const PERMISSIONS = [
  "User_Management",
  "Warehouse_Management",
  "Instrument_Management",
  "Incident_Management",
  "Export_Data",
  "Role_Management",
  "Inventory_Management",
  "Inventory_Management",
  "View_Reports",
] as const;

export type Permission = (typeof PERMISSIONS)[number];

//Interface
//=== Role Api interface ===
export interface IRoleApi {
  getRoles(): Promise<RoleList[]>;
  getRoleById(id: string): Promise<Role>;
  createRole(payload: CreateRoleRequest): Promise<Role>;
  updateRole(id: string, payload: UpdateRoleRequest): Promise<Role>;
  deleteRole(id: string): Promise<void>;
}

//===== STATE =====
export interface RoleState {
  roles: RoleList[];
  selectedRole: Role | null;
  loading: boolean;
  error: string | null;
}

//===== ACTIONS =====
export interface RoleActions {
  fetchRoles: () => Promise<void>;
  fetchRoleById: (id: string) => Promise<void>;
  createRole: (payload: CreateRoleRequest) => Promise<void>;
  updateRole: (id: string, payload: UpdateRoleRequest) => Promise<void>;
  deleteRole: (id: string) => Promise<void>;
}

//=== UI ===
export type Mode = "create" | "update" | "delete";

export interface RoleModalState {
  isOpen: boolean;
  mode: Mode;
  selectedId: string | null;
}

export interface RoleModalActions {
  openCreate: () => void;
  openUpdate: (id: string) => void;
  openDelete: (id: string) => void;
  close: () => void;
}
