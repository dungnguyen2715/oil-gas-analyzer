import { axiosInstance } from '@/services/axiosInstance';

export const userService = {
    getMyProfile: () => {
        return axiosInstance.get('/profile');
    },

    updateUserProfile: (data: any) => {
        return axiosInstance.patch('/profile', data);
    }
}


