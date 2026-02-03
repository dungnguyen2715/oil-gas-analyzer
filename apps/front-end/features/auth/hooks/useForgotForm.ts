import { useCountdown } from "@/hooks";
import { useAuthStore } from "../stores";
import { ForgotFormData } from "../types";
import { forgotInitialValues, forgotValidationSchema } from "../validation";

interface UseForgotFormReturn {
    // Form config
    initialValues: ForgotFormData;
    validationSchema: typeof forgotValidationSchema;
    onSubmit: (
        values: ForgotFormData,
        { setSubmitting }: { setSubmitting: (value: boolean) => void }
    ) => Promise<void>;
    // UI state
    showSuccessAlert: boolean;
    showErrorAlert: boolean;
    remaining: number;
    isExpired: boolean;
    hasHydrated: boolean;
}

export function useForgotForm(): UseForgotFormReturn {
    const {
        forgotPassword,
        forgotStatus,
        forgotEmail,
        forgotExpiredAt,
        hasHydrated
    } = useAuthStore();

    const { remaining, isExpired } = useCountdown(forgotExpiredAt);
    const handleSubmit = async (
        values: ForgotFormData,
        { setSubmitting }: { setSubmitting: (value: boolean) => void }
    ) => {
        await forgotPassword(values);
        setSubmitting(false);
    };

    const initialValues = {
        ...forgotInitialValues,
        email: forgotEmail || forgotInitialValues.email,
    };

    const showSuccessAlert = forgotStatus === 'success';
    const showErrorAlert = forgotStatus === 'error';
    return {
        // Form config
        initialValues,
        validationSchema: forgotValidationSchema,
        onSubmit: handleSubmit,

        // UI state
        showSuccessAlert,
        showErrorAlert,
        remaining,
        isExpired,
        hasHydrated,
    };
}
