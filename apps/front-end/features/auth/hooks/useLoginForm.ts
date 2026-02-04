import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "../stores";
import { LoginFormData } from "../types";
import { loginInitialValues, loginValidationSchema } from "../validation";


export function useLoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const { login, error } = useAuthStore();

    const handleSubmit = async (
        values: LoginFormData,
        { setSubmitting }: any,
    ) => {
        try {
            await login(values);
            router.push("/home");

        } catch (error) { }
        finally {
            setSubmitting(false);
        }

    };

    return {
        setShowPassword,
        onSubmit: handleSubmit,
        login,
        error,
        router,
        showPassword,
        loginInitialValues,
        loginValidationSchema,
    };
}
