// Input data types for authentication forms
export interface LoginFormData {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export interface ForgotFormData {
    email: string;
}
export interface ResetFormData {
    token: string;
    newPassword: string;
}



// Output data types for authentication responses
export interface LoginResponse {
    user: any;
    result: {
        access_token: string;
        refresh_token: string;
    };
}

export interface ForgotResponse {
    expiredAt: number;
}

// User and state types for authentication management

export type Permission =
    | 'users:view'
    | 'users:create'
    | 'users:edit'
    | 'users:delete'
    | 'reports:view'
    | 'reports:create'
    | 'reports:edit'
    | 'reports:delete'
    | 'analytics:view'
    | 'settings:view'
    | 'settings:edit';

export interface AuthUser {
    id: string;
    email: string;
    name: string;
    role: string;
    avatar?: string;
    permissions: Permission[];
}


export interface AuthState {
    user: any;
    // user: AuthUser | null;
    error: string | null;
    forgotExpiredAt: number | null;
    forgotStatus: 'idle' | 'loading' | 'success' | 'error';
    forgotEmail: string | null;
    hasHydrated: boolean;
}

export interface PermissionCheck {
    hasPermission: (permission: Permission) => boolean;
    hasAnyPermission: (permissions: Permission[]) => boolean;
    hasAllPermissions: (permissions: Permission[]) => boolean;
}

export interface AuthActions {
    login: (credentials: LoginFormData) => Promise<void>;
    logout: () => void;
    forgotPassword: (credentials: ForgotFormData) => Promise<void>;
    resetPassword: (credentials: ResetFormData) => Promise<void>;
}
