import { useEffect, useState } from "react";
import { roleMockApi as roleApi } from "@/features/role/api";
import { CreateRoleRequest, Mode, UpdateRoleRequest } from "../types";
import { useRoleModalStore } from "../store/useRoleModalStore";
import { useRoleStore } from "../store/useRoleStore";

export type RoleModalMode = Mode;

export const useRoleModal = () => {
  const { isOpen, mode, selectedId, openCreate, openUpdate, close } =
    useRoleModalStore();

  const { createRole, updateRole, deleteRole } = useRoleStore();

  const [initialValues, setInitialValues] = useState<CreateRoleRequest>({
    name: "",
    permissions: [],
    description: "",
  });

  const [loading, setLoading] = useState(false); // chỉ dùng cho fetch role

  // load data khi edit
  useEffect(() => {
    if (!isOpen) return;

    if (mode === "update" && selectedId) {
      setLoading(true);
      roleApi.getRoleById(selectedId).then((role) => {
        setInitialValues({
          name: role.name,
          permissions: role.permissions,
          description: role?.description ?? "",
        });
        setLoading(false);
      });
    }

    if (mode === "create") {
      setInitialValues({ name: "", permissions: [], description: "" });
    }
  }, [isOpen, mode, selectedId]);

  // create / update
  const submit = async (values: CreateRoleRequest) => {
    try {
      if (mode === "create") {
        await createRole(values);
      }

      if (mode === "update" && selectedId) {
        const payload: UpdateRoleRequest = {
          name: values.name,
          permissions: values.permissions,
          description: values.description ?? "",
        };
        await updateRole(selectedId, payload);
      }

      close();
    } catch (error) {
      console.error("Submit failed:", error);
    }
  };

  // delete
  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await deleteRole(selectedId);
      close();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return {
    open: isOpen,
    mode,
    loading,
    initialValues,
    openCreate,
    openUpdate,
    close,
    submit,
    handleDelete,
  };
};
