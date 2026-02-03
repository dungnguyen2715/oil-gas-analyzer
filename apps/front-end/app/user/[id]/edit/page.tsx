'use client';

import UserForm from "@/components/common/userCommon/UserForm";
import useUserDetail from "@/hooks/UserHook/useUserDetail";
import { useRouter } from "next/navigation";

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
        <>
            <div className="min-h-screen bg-black text-white p-6">
                <h1 className="text-2xl font-bold mb-8">Edit User</h1>

                <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 max-w-2xl">
                    <UserForm
                        initialValues={userDetail}
                        onSubmit={handleSubmit}
                        submitButtonText="Update User"
                        isEdit={true}
                    />
                </div>
            </div>
        </>
    )
}
