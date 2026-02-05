'use client';

import UserForm from "@/components/common/userCommon/UserForm";
import useUserDetail from "@/hooks/UserHook/useUserDetail";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function EditUserPage() {
    const { userDetail, updateUserDetail } = useUserDetail();
    const router = useRouter();

    if (!userDetail) {
        return <div className="p-6 text-white text-center">User Not Found</div>;
    }

    const handleSubmit = (values: any) => {
        // Map phone back to phoneNumber before updating
        const submitValues = {
            ...values,
            phoneNumber: values.phone,
        };
        delete submitValues.phone;
        updateUserDetail(submitValues);
        router.push(`/user`);
    }

    return (
        <div className="min-h-screen bg-black text-white p-6">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/MoDau.jpg')",
                    filter: "brightness(0.3)"
                }}
            />
            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 max-w-2xl mx-auto">
                    <div>
                        <h1 className="text-2xl font-bold mb-1">Update User</h1>
                        <p className="text-gray-400 text-sm">Update User information in the oil & gas system</p>
                    </div>
                    <Link href="/user">
                        <Button variant="outline" className="border-red-500 text-zinc-400">
                            Cancel
                        </Button>
                    </Link>
                </div>

                {/* Form Container */}
                <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 max-w-2xl mx-auto">
                    <UserForm
                        initialValues={userDetail}
                        onSubmit={handleSubmit}
                        submitButtonText="Update User"
                        isEdit={true}
                    />
                </div>
            </div>
        </div>
    )
}
