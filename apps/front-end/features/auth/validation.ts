import * as Yup from 'yup';
import type { LoginFormData } from './types';

export const loginValidationSchema = Yup.object<LoginFormData>().shape({
    email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email là bắt buộc')
        .trim(),

    password: Yup.string()
        .required('Mật khẩu là bắt buộc'),

    rememberMe: Yup.boolean()
        .optional()
        .default(false),
});


export const loginInitialValues: LoginFormData = {
    email: '',
    password: '',
    rememberMe: false,
};


export const forgotValidationSchema = Yup.object<{ email: string }>().shape({
    email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email là bắt buộc')
        .trim(),
});

export const forgotInitialValues = {
    email: '',
};

export const resetValidationSchema = Yup.object<{
    password: string;
    confirmPassword: string;
}>().shape({
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[@$!%*?&]/, 'Password must contain at least one special character (@$!%*?&)')
        .trim(),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Confirm password does not match')
        .required('Confirm password is required')
        .trim(),
});

export const resetInitialValues = {
    password: '',
    confirmPassword: '',
};