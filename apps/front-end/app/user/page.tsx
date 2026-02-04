'use client';

import { Button, Link, useIsHydrated } from "@heroui/react";
import { useUserStore } from "../../stores/user/userStore";
import { useState } from "react";
import NextLink from "next/link";
import UserFilter from "@/features/user/UserFilter";
import UserTable from "@/features/user/UserTable";


export default function UsersPage() {

    const hydration = useIsHydrated();

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