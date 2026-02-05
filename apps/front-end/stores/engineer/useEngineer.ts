import { userService } from '@/services/userService';
import { create } from 'zustand';

export interface Engineer {
    user: any;
    loading: boolean;
    fetchUser: () => Promise<void>;
    isUpdating: boolean;
    updateProfile: (data: any) => Promise<void>;
}

export const useEngineerStore = create<Engineer>((set) => ({
    user: null,
    loading: false,
    isUpdating: false,

    fetchUser: async () => {
        set({ loading: true });
        try{
            const response = await userService.getMyProfile();
            set({ user: response })
        }catch(error){
            console.error("Failed to fetch engineer profile:", error);
        }finally{
            set({ loading: false });
        }
    },

    updateProfile: async (data: any) => {
        set({ isUpdating: true });
        try {
            const response = await userService.updateUserProfile(data);
            set({ user: response });
        }catch (error) {
            console.error("Failed to update engineer profile:", error);
        }finally {
            set({ isUpdating: false });
        }
    }
}))