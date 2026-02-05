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
        <div className="min-h-screen text-white p-6 relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/MoDau.jpg')",
                    filter: "brightness(0.3)"
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 max-w-2xl mx-auto">
                    <div>
                        <h1 className="text-2xl font-bold mb-1">User Details</h1>
                        <p className="text-gray-400 text-sm">View User information in the oil & gas system</p>
                    </div>
                    <Link href="/user">
                        <Button variant="outline" className="border-red-500 text-zinc-400">← Back</Button>
                    </Link>
                </div>

                {/* Form Container */}
                <div className="bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-800 p-6 max-w-2xl mx-auto">
                    <UserDetailCard user={userDetail} />
                </div>
            </div>
        </div>
    )
}