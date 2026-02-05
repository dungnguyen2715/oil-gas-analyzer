// stores/role.store.ts
import { create } from "zustand";
import { roleMockApi as roleApi } from "@/features/role/api";
import { RoleState, RoleActions } from "@/features/role/types";

type RoleStore = RoleState & RoleActions;
export const useRoleStore = create<RoleStore>()((set) => ({
  /* ===== STATE ===== */
  roles: [],
  selectedRole: null,
  loading: false,
  error: null,

  /* ===== ACTIONS ===== */
  fetchRoles: async () => {
    set({ loading: true, error: null });
    try {
      const roles = await roleApi.getRoles();
      set({ roles });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch roles" });
    } finally {
      set({ loading: false });
    }
  },

  fetchRoleById: async (id) => {
    set({ loading: true, error: null });
    try {
      const role = await roleApi.getRoleById(id);
      set({ selectedRole: role });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch role" });
    } finally {
      set({ loading: false });
    }
  },

  createRole: async (payload) => {
    set({ loading: true, error: null });
    try {
      const newRole = await roleApi.createRole(payload);
      set((state) => ({
        roles: [...state.roles, { ...newRole, number_of_users: 0 }],
      }));
    } catch (err: any) {
      set({ error: err.message || "Failed to create role" });
    } finally {
      set({ loading: false });
    }
  },

  updateRole: async (id, payload) => {
    set({ loading: true, error: null });
    try {
      const updatedRole = await roleApi.updateRole(id, payload);
      set((state) => ({
        roles: state.roles.map((r) =>
          r._id === id
            ? {
                ...updatedRole,
                number_of_users: (r as any).number_of_users ?? 0,
              }
            : r,
        ),
        selectedRole:
          state.selectedRole?._id === id
            ? { ...updatedRole }
            : state.selectedRole,
      }));
    } catch (err: any) {
      set({ error: err.message || "Failed to update role" });
    } finally {
      set({ loading: false });
    }
  },

  deleteRole: async (id) => {
    set({ loading: true, error: null });
    try {
      await roleApi.deleteRole(id);
      set((state) => ({
        roles: state.roles.filter((r) => r._id !== id),
        selectedRole:
          state.selectedRole?._id === id ? null : state.selectedRole,
      }));
    } catch (err: any) {
      set({ error: err.message || "Failed to delete role" });
    } finally {
      set({ loading: false });
    }
  },
}));
