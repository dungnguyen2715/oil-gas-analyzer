import { create } from "zustand";
import { RoleModalActions, RoleModalState } from "../types";

type RoleModalStore = RoleModalState & RoleModalActions;
export const initialValues = {
  isOpen: false,
  mode: "create",
  selectedId: null,
};
export const useRoleModalStore = create<RoleModalStore>((set) => ({
  isOpen: false,
  mode: "create",
  selectedId: null,

  openCreate: () => set({ isOpen: true, mode: "create", selectedId: null }),

  openUpdate: (id: string) =>
    set({ isOpen: true, mode: "update", selectedId: id }),

  openDelete: (id: string) =>
    set({ isOpen: true, mode: "delete", selectedId: id }),

  close: () => set({ isOpen: false, mode: "create", selectedId: null }),
}));
