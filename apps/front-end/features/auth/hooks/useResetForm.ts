import { useState } from "react";
import { useAuthStore } from "../stores";
import { useParams, useRouter } from "next/navigation";
import { resetInitialValues, resetValidationSchema } from "../validation";

export function useResetForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { resetPassword, error } = useAuthStore();
    const router = useRouter();
    const params = useParams();
    const token = params.token as string;
    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        try {
            await resetPassword({
                token: token,
                newPassword: values.password,
            });
            router.push("/login");
        } catch (error: any) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };
    return {
        setShowPassword,
        setShowConfirmPassword,
        onSubmit: handleSubmit,
        resetPassword,
        error,
        router,
        showPassword,
        showConfirmPassword,
        resetInitialValues,
        resetValidationSchema,
    };
}
