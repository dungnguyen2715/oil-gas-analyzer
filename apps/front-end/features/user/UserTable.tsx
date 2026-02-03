import { useUserStore } from "../../stores/user/userStore";
import { useState } from "react";
import NextLink from "next/link";
import UserBadge from "@/components/common/UserBadge";
import { Pagination } from "@/components/common/Pagination";
import ConfirmModal from "@/components/common/userCommon/ConfirmModal";

export default function UserTable() {


    const {
        searchQuery,
        roleFilter,
        statusFilter,
        setSearchQuery,
        setRoleFilter,
        setStatusFilter,
        deleteUser,
        getFilteredUsers
    } = useUserStore();
    const filteredUsers = getFilteredUsers();
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // State quản lý Modal
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<{ id: string, name: string } | null>(null);

    // Hàm mở Modal
    const handleDeleteClick = (id: string, name: string) => {
        setUserToDelete({ id, name });
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (userToDelete) {
            deleteUser(userToDelete.id);
            setIsDeleteModalOpen(false);
            setUserToDelete(null);
        }
    };

    return (
        <>
            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-zinc-800">
                            <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Name</th>
                            <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Email</th>
                            <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Role</th>
                            <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Status</th>
                            <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.map((user) => (
                            <tr key={user.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-400">{user.email}</td>
                                <td className="px-6 py-4">
                                    <UserBadge role={user.role} />
                                </td>
                                <td className="px-6 py-4">
                                    {user.status === 'Active' ? (
                                        <span className="inline-flex items-center gap-1.5 text-sm text-green-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                            Active
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-gray-600/20 text-gray-400 border border-gray-600/30">
                                            Inactive
                                        </span>
                                    )}
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <NextLink href={`/user/${user.id}`}>
                                            <button className="p-1.5 hover:bg-zinc-800 rounded transition-colors" title="View">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </button>
                                        </NextLink>
                                        <NextLink href={`/user/${user.id}/edit`}>
                                            <button className="p-1.5 hover:bg-zinc-800 rounded transition-colors" title="Edit">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                        </NextLink>
                                        <button
                                            className="p-1.5 hover:bg-zinc-800 rounded transition-colors"
                                            title="Delete"
                                            onClick={() => handleDeleteClick(user.id, user.name)}
                                        >
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div>
                <ConfirmModal
                    isOpen={isDeleteModalOpen}
                    userName={userToDelete?.name || ""}
                    onClose={() => setIsDeleteModalOpen(false)}
                    onConfirm={handleConfirmDelete}
                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={filteredUsers.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </>
    )
}