import { PermissionCheck } from './types';
// features/auth/stores.ts

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { AuthState, AuthActions, ForgotFormData, ResetFormData, Permission } from './types';
import { authApi, mockAuthApi } from './api';
import { removeData, setData } from '@/utils/localStorage';
import { ACCESS_TOKEN_KEY, AUTH_STORE_KEY, REFRESH_TOKEN_KEY } from '@/utils/constant';

interface AuthStore extends AuthState, AuthActions, PermissionCheck { }

export const useAuthStore = create<AuthStore>()(
    persist( // localStorage persistence
        (set, get) => ({
            // State
            user: null,
            error: null,
            forgotExpiredAt: null,
            forgotStatus: 'idle',
            forgotEmail: null,
            hasHydrated: false,

            // Actions

            login: async (credentials) => {
                try {
                    const response = await authApi.login(credentials);

                    setData(ACCESS_TOKEN_KEY, response.result.access_token);
                    setData(REFRESH_TOKEN_KEY, response.result.refresh_token);

                    set({
                        user: response.user,
                        error: null,
                        forgotExpiredAt: null,
                        forgotStatus: 'idle',
                        forgotEmail: null,
                    });
                } catch (error: any) {
                    set({ error: error.message || "Login failed" });
                    throw error;
                }
            },

            logout: async () => {
                try {
                    await authApi.logout();
                } finally {
                    set({
                        user: null,
                        error: null
                    });
                    removeData(ACCESS_TOKEN_KEY);
                    removeData(REFRESH_TOKEN_KEY);
                }
            },

            forgotPassword: async (credentials: ForgotFormData): Promise<void> => {
                try {
                    set({ forgotStatus: 'loading', error: null });
                    const response = await mockAuthApi.forgotPassword(credentials)
                    set({ forgotStatus: 'success', forgotExpiredAt: response.expiredAt, forgotEmail: credentials.email });
                } catch (error: any) {
                    set({ forgotStatus: 'error', error: error.message || "Forgot password request failed" });
                }
            },

            resetPassword: async (credentials: ResetFormData) => {
                try {
                    set({ error: null });
                    console.log(credentials)
                    await mockAuthApi.resetPassword(credentials);
                } catch (error: any) {
                    set({ error: error.message || "Reset password failed" });
                    throw error;
                }
            },

            hasPermission: (permission: Permission): boolean => {
                const user = get().user;
                if (!user) return false;
                return user.permissions?.includes(permission);
            }
            ,

            hasAnyPermission: (permissions: Permission[]): boolean => {
                const user = get().user;
                if (!user) return false;
                return permissions.some(permission => user.permissions?.includes(permission));
            },

            hasAllPermissions: (permissions: Permission[]): boolean => {
                const user = get().user;
                if (!user) return false;
                return permissions.every(permission => user.permissions?.includes(permission));
            },

        }),
        {
            name: AUTH_STORE_KEY, // Key trong localStorage
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                user: state.user,
                forgotExpiredAt: state.forgotExpiredAt,
                forgotStatus: state.forgotStatus,
                forgotEmail: state.forgotEmail,
                hasHydrated: false,
            }),
            onRehydrateStorage: () => (state) => {
                if (state) {
                    const now = Date.now();
                    const expiredAt = state.forgotExpiredAt;
                    // Nếu đã expired, clear forgot state
                    if (expiredAt === null || expiredAt < now) {
                        state.forgotExpiredAt = null;
                        state.forgotStatus = 'idle';
                        state.forgotEmail = null;
                    }
                    state.hasHydrated = true;
                }
            },
        }
    )
);