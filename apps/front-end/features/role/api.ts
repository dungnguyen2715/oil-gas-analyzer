//định nghĩa interface cho API
import { IRoleApi, Role } from "@/features/role/types";
import { privateApi } from "@/lib/http";

export const roleApi: IRoleApi = {
  getRoles: () => privateApi.get("/roles"),
  getRoleById: (id) => privateApi.get(`/roles/${id}`),
  createRole: (payload) => privateApi.post("/roles", payload),
  updateRole: (id, payload) => privateApi.put(`/roles/${id}`, payload),
  deleteRole: (id) => privateApi.delete(`/roles/${id}`),
};

//===== MOCK API =====
let mockDB: Role[] = [
  {
    _id: "1",
    name: "ADMIN",
    permissions: [
      "User_Management",
      "Warehouse_Management",
      "Instrument_Management",
      "Incident_Management",
      "Export_Data",
      "Role_Management",
      "Inventory_Management",
      "View_Reports",
    ],
    description: "Mock admin",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    _id: "2",
    name: "Supervisor",
    permissions: [
      "User_Management",
      "Warehouse_Management",
      "Instrument_Management",
      "Inventory_Management",
      "View_Reports",
    ],
    description: "Mock supervisor",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    _id: "3",
    name: "Engineer",
    permissions: [
      "Instrument_Management",
      "Inventory_Management",
      "View_Reports",
    ],
    description: "Mock engineer",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const sleep = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const roleMockApi: IRoleApi = {
  async getRoles() {
    await sleep();
    return mockDB.map((m) => ({
      _id: m._id,
      name: m.name,
      permissions: m.permissions,
      number_of_users: 1,
    }));
  },

  async getRoleById(id) {
    await sleep();
    const role = mockDB.find((r) => r._id === id);
    if (!role) throw new Error("Role not found");
    return role;
  },

  async createRole(payload) {
    await sleep();
    const newRole: Role = {
      _id: crypto.randomUUID(),
      ...payload,
      created_at: new Date(),
      updated_at: new Date(),
    };
    mockDB.push(newRole);
    return newRole;
  },

  async updateRole(id, payload) {
    await sleep();
    const index = mockDB.findIndex((r) => r._id === id);
    if (index === -1) throw new Error("Role not found");

    mockDB[index] = {
      ...mockDB[index],
      ...payload,
      updated_at: new Date(),
    };
    return mockDB[index];
  },

  async deleteRole(id) {
    await sleep();
    mockDB = mockDB.filter((r) => r._id !== id);
  },
};
