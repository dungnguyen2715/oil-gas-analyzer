'use client';

import { Button } from "@heroui/react";
import Link from "next/link";
import UserDetailCard from "@/features/user/UserDetailCard";
import useUserDetail from "@/hooks/UserHook/useUserDetail";

export default function UserDetailPage() {
    const { userDetail } = useUserDetail();

    if (!userDetail) {
        return <div className="p-6 text-white text-center">User Not Found</div>;
    }

    return (
        <>
            <div className="min-h-screen bg-black text-white p-6">
                <header className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold">User Details</h1>
                    <Link href="/user">
                        <Button variant="outline" className="border-zinc-700">← Back</Button>
                    </Link>
                </header>

                <UserDetailCard user={userDetail} />
            </div>
        </>
    )
}