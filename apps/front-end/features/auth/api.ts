// call apis that do not require authentication

import { publicApi } from "@/lib/http";
import { ForgotFormData, ForgotResponse, LoginFormData, LoginResponse, Permission, ResetFormData } from "./types";

export const authApi = {
    login: async (credentials: LoginFormData) => {
        try {
            const response = await publicApi.post<LoginFormData, LoginResponse>(
                '/auth/login',
                credentials
            );
            return response;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Login failed');
        }
    },

    logout: async () => {
        try {
            const response = await publicApi.post('/auth/logout');
            return response;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Logout failed');
        }
    },

    forgotPassword: async (credentials: ForgotFormData) => {
        try {
            const response = await publicApi.post<ForgotFormData, ForgotResponse>(
                '/auth/forgot-password',
                credentials
            );
            return response;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Forgot password request failed');
        }
    },

    resetPassword: async (credentials: ResetFormData) => {
        try {
            await publicApi.post<ResetFormData, void>(
                '/auth/reset-password',
                credentials
            );
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Reset password failed');
        }
    }

}

export const mockAuthApi = {

    login: async (credentials: LoginFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate network delay
        if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
            return {
                user: {
                    id: '1',
                    email: 'admin@example.com',
                    name: 'Admin User',
                    role: 'admin',
                    permissions: [
                        'users:view'
                        , 'users:create'
                        , 'users:edit'
                        , 'users:delete'
                        , 'reports:view'
                        , 'reports:create'
                        , 'reports:edit'
                        , 'reports:delete'
                        , 'analytics:view'
                        , 'settings:view'
                        , 'settings:edit'] as Permission[],
                },
                token: 'mock-jwt-token',
            };
        } else {
            throw new Error('Invalid email or password');
        }
    },

    logout: async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
    },

    forgotPassword: async (credentials: ForgotFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (credentials.email === 'admin@example.com') {
            return {
                expiredAt: Date.now() + 60 * 1000, // 1 minute from now
            };
        } else {
            throw new Error('Email not found');
        }
    },
    resetPassword: async (credentials: ResetFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const randomSuccess = Math.random() > 0.2; // 80% chance of success
        if (randomSuccess) {
            return;
        } else {
            throw new Error('Failed to reset password');
        }
    }
}