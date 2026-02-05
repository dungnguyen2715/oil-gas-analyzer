"use client";

import { MdCancel } from "react-icons/md";
import { Spinner } from "@heroui/react";
import { useRoleModal } from "../hooks/useRoleModal";

const RoleDeleteModal = () => {
  const { open, mode, loading, close, handleDelete } = useRoleModal();

  // Chỉ render khi đúng delete mode
  if (!open || mode !== "delete") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={loading ? undefined : close}
      />

      <div className="relative bg-neutral-900 p-6 rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between mb-4">
          <h3 className="text-lg text-white font-semibold">Delete Role</h3>
          <button onClick={close} disabled={loading}>
            <MdCancel className="text-gray-400" />
          </button>
        </div>

        {/* Body */}
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Spinner size="lg" />
          </div>
        ) : (
          <p className="text-sm text-gray-300">
            Are you sure you want to delete this role?
            <br />
            <span className="text-red-400">This action cannot be undone.</span>
          </p>
        )}

        {/* Footer */}
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={close}
            disabled={loading}
            className="flex-1 bg-neutral-800 py-2 rounded"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="flex-1 bg-red-600 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleDeleteModal;
