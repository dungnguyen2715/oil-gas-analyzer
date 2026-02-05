"use client";
import { MdOutlineEditNote, MdOutlineDelete } from "react-icons/md";
import { Chip, Spinner } from "@heroui/react";
import useRole from "../hooks/useRole";
import RoleModal from "./RoleModal";
import { FaPlus } from "react-icons/fa";
import RoleDeleteModal from "./RoleDeleteModal";

const RoleTable = () => {
  const {
    roles,
    loading,
    error,
    handleEditRole,
    handleCreateRole,
    handleDeleteRole,
  } = useRole();

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  return (
    <>
      <div className="space-y-6">
        {/*=== Header ===*/}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Role Management</h2>
            <p className="text-sm text-gray-400 mt-1">
              Configure roles and permissions
            </p>
          </div>
          <button
            onClick={handleCreateRole}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <FaPlus className="w-4 h-4" />
            Create Role
          </button>
        </div>

        {/*=== Table ===*/}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-800/50">
                  <th className="text-left text-xs text-gray-400 font-medium px-6 py-4">
                    Role Name
                  </th>
                  <th className="text-left text-xs text-gray-400 font-medium px-6 py-4">
                    Permissions
                  </th>
                  <th className="text-center text-xs text-gray-400 font-medium px-6 py-4">
                    Users
                  </th>
                  <th className="text-center text-xs text-gray-400 font-medium px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {roles.map((role) => (
                  <tr
                    key={role._id}
                    className="hover:bg-neutral-800/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-white font-medium">
                      {role.name}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {role.permissions
                          .slice(0, 3)
                          .map((permission, index) => (
                            <Chip
                              key={index}
                              className="text-xs px-2 py-1 bg-neutral-700 text-gray-300"
                            >
                              {permission}
                            </Chip>
                          ))}
                        {role.permissions.length > 3 && (
                          <Chip className="text-xs px-2 py-1 bg-neutral-700 text-gray-300">
                            +{role.permissions.length - 3} more
                          </Chip>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-400">
                      {role.number_of_users}
                    </td>
                    <td className="px-6 py-4">
                      {/*=== Actions button ===*/}
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEditRole(role._id)}
                          className="p-2 hover:bg-neutral-700 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <MdOutlineEditNote className="w-4 h-4 text-gray-400 hover:text-white" />
                        </button>
                        <button
                          onClick={() => handleDeleteRole(role._id)}
                          className="p-2 hover:bg-neutral-700 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <MdOutlineDelete className="w-4 h-4 text-gray-400 hover:text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <RoleModal />
      <RoleDeleteModal />
    </>
  );
};

export default RoleTable;
