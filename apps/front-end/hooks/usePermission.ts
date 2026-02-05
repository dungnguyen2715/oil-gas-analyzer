import { useAuthStore } from '@/features/auth/stores';
import type { Permission } from '@/features/auth/types';

export const usePermission = (permission: Permission): boolean => {
    return useAuthStore((state) => state.hasPermission(permission));
};

export const useAnyPermission = (permissions: Permission[]): boolean => {
    return useAuthStore((state) => state.hasAnyPermission(permissions));
};

export const useAllPermissions = (permissions: Permission[]): boolean => {
    return useAuthStore((state) => state.hasAllPermissions(permissions));
};