
export default function UserBadge({ role }: { role: string }) {
    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case 'Administrator': return 'bg-purple-600/20 text-purple-400 border-purple-600/30';
            case 'Field Supervisor': return 'bg-orange-600/20 text-orange-400 border-orange-600/30';
            case 'Engineer': return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
            default: return 'bg-gray-600/20 text-gray-400 border-gray-600/30';
        }
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border ${getRoleBadgeColor(role)}`}>
            {role}
        </span>
    );
}