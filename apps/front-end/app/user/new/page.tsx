'use client';

import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/user/userStore";
import UserForm from "@/components/common/userCommon/UserForm";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function CreateUserPage() {
    const router = useRouter();
    const { addUser } = useUserStore();

    // 1. Khởi tạo giá trị trống cho người dùng mới
    const initialValues = {
        name: '',
        email: '',
        phone: '', // Yup đang check trường này
        role: 'Engineer',
        status: 'Active',
        password: ''
    };

    // 2. Hàm xử lý khi nhấn Create
    const handleSubmit = (values: any) => {
        // Map lại 'phone' thành 'phoneNumber' để khớp với interface User trong Store
        const userData = {
            name: values.name,
            email: values.email,
            role: values.role,
            status: values.status,
            phoneNumber: values.phone // Chuyển đổi ở đây
        };

        addUser(userData);
        router.push('/user'); // Quay lại danh sách
    };

    return (
        <div className="min-h-screen bg-black text-white p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 max-w-2xl mx-auto">
                <div>
                    <h1 className="text-2xl font-bold mb-1">Create New User</h1>
                    <p className="text-gray-400 text-sm">Add a new professional to the oil & gas system</p>
                </div>
                <Link href="/user">
                    <Button variant="outline" className="border-zinc-700 text-zinc-400">
                        Cancel
                    </Button>
                </Link>
            </div>

            {/* Form Container */}
            <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 max-w-2xl mx-auto">
                <UserForm
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    submitButtonText="Create User"
                    isEdit={false} // Chế độ Create: Hiện password, bắt buộc nhập pass
                />
            </div>
        </div>
    );
}