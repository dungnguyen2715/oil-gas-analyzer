"use client";

import { useEffect } from "react";
import { useRoleStore } from "../store/useRoleStore";
import { Role } from "../types";
import { useRoleModalStore } from "../store/useRoleModalStore";

const useRole = () => {
  const { roles, selectedRole, loading, error, fetchRoles, fetchRoleById } =
    useRoleStore();
  const openCreate = useRoleModalStore((s) => s.openCreate);
  const openUpdate = useRoleModalStore((s) => s.openUpdate);
  const openDelete = useRoleModalStore((s) => s.openDelete);

  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  const handleEditRole = (_id: string) => {
    openUpdate(_id);
  };
  const handleCreateRole = () => {
    openCreate();
  };
  const handleDeleteRole = (_id: string) => {
    openDelete(_id);
  };
  return {
    //states
    roles,
    selectedRole,
    loading,
    error,

    //logic
    fetchRoles,
    fetchRoleById,
    handleEditRole,
    handleCreateRole,
    handleDeleteRole,
  };
};

export default useRole;
