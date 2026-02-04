import { useUserStore } from "@/stores/user/userStore";
import { useParams } from "next/navigation";

export default function useUserDetail() {
    const params = useParams();
    const userId = params.id as string;

    const { users, updateUser, deleteUser } = useUserStore();

    const userDetail = users.find((u) => u.id === userId);

    const updateUserDetail = (values: any) => {
        updateUser(userId, values);
    }

    const deleteUserDetail = () => {
        deleteUser(userId);
    }

    return {
        userDetail,
        userId,
        updateUserDetail,
        deleteUserDetail
    }
}