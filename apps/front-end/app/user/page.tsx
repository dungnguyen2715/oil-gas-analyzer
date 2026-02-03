'use client';

import { Button, Link, useIsHydrated } from "@heroui/react";
import { useUserStore } from "../../stores/user/userStore";
import { useState } from "react";
import NextLink from "next/link";
import UserFilter from "@/features/user/UserFilter";
import UserTable from "@/features/user/UserTable";
import { Pagination } from "@/components/common";


export default function UsersPage() {

    const hydration = useIsHydrated();
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

    const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; userId: string; userName: string }>({
        isOpen: false,
        userId: '',
        userName: ''
    });


    const handleDelete = (id: string, name: string) => {
        setDeleteModal({ isOpen: true, userId: id, userName: name });
    };

    const confirmDelete = () => {
        deleteUser(deleteModal.userId);
        setDeleteModal({ isOpen: false, userId: '', userName: '' });
    };

    const cancelDelete = () => {
        setDeleteModal({ isOpen: false, userId: '', userName: '' });
    };

    if (!hydration) {
        return null;
    }
    return (
        <div className="min-h-screen bg-black text-white p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-1">User Management</h1>
                <p className="text-gray-400 text-sm">Manage system users and permissions</p>
            </div>

            {/* Filters and Actions */}
            <UserFilter />

            {/* Table */}
            <UserTable />
        </div>
    );
}