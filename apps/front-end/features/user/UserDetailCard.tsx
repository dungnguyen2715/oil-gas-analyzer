import UserBadge from "@/components/common/UserBadge";
import { User } from "@/stores/user/userStore";

export default function UserDetailCard({ user }: { user: User }) {
    return (
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 max-w-3xl">
            <div className="space-y-6">
                <div>
                    <label className="text-sm text-gray-400 block mb-2">User ID</label>
                    <p className="text-white font-medium text-lg">{user.id}</p>
                </div>
                <div>
                    <label className="text-sm text-gray-400 block mb-2">Full Name</label>
                    <p className="text-white font-medium text-lg">{user.name}</p>
                </div>
                <div>
                    <label className="text-sm text-gray-400 block mb-2">Phone Number</label>
                    <p className="text-white font-medium text-lg">{user.phoneNumber}</p>
                </div>
                <div>
                    <label className="text-sm text-gray-400 block mb-2">Email Address</label>
                    <p className="text-white font-medium text-lg">{user.email}</p>
                </div>
                <div>
                    <label className="text-sm text-gray-400 block mb-2">Role</label><br />
                    <UserBadge role={user.role} />
                </div>
                <div>
                    <label className="text-sm text-gray-400 block mb-2">Status</label><br></br>
                    {user.status === 'Active' ? (
                        <span className="inline-flex items-center gap-2 text-green-400">
                            <span className="w-2 h-2 rounded-full bg-green-400"></span>
                            Active
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded text-sm font-medium bg-gray-600/20 text-gray-400 border border-gray-600/30">
                            Inactive
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}