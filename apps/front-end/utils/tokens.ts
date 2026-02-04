const ACCESS_TOKEN_KEY = 'accessToken';

export const setAccessToken = (token: string): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    }
};

export const getAccessToken = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    }
    return null;
};

export const removeAccessToken = (): void => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    }
};
