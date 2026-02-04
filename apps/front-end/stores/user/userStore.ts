import { create } from 'zustand';

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
    phoneNumber: string;
}

interface UserStore {
    users: User[];
    searchQuery: string;
    roleFilter: string;
    statusFilter: string;
    setSearchQuery: (query: string) => void;
    setRoleFilter: (role: string) => void;
    setStatusFilter: (status: string) => void;
    addUser: (user: Omit<User, 'id'>) => void;
    updateUser: (id: string, user: Omit<User, 'id'>) => void;
    deleteUser: (id: string) => void;
    getFilteredUsers: () => User[];
}

export const useUserStore = create<UserStore>((set, get) => ({
    users: [
        { id: '1', name: 'John Administrator', email: 'admin@oilgas.com', role: 'Administrator', status: 'Active', phoneNumber: '+84 901 234 567' },
        { id: '2', name: 'Sarah Supervisor', email: 'supervisor@oilgas.com', role: 'Field Supervisor', status: 'Active', phoneNumber: '+84 902 234 567' },
        { id: '3', name: 'Mike Engineer', email: 'engineer@oilgas.com', role: 'Engineer', status: 'Active', phoneNumber: '+84 903 234 567' },
        { id: '4', name: 'Emily Davis', email: 'emily.davis@oilgas.com', role: 'Field Supervisor', status: 'Active', phoneNumber: '+84 904 234 567' },
        { id: '5', name: 'Robert Chen', email: 'robert.chen@oilgas.com', role: 'Engineer', status: 'Inactive', phoneNumber: '+84 905 234 567' },
        { id: '6', name: 'Alex Smith', email: 'alex.smith@oilgas.com', role: 'Administrator', status: 'Active', phoneNumber: '+84 906 234 567' },
        { id: '7', name: 'Jordan Smith', email: 'jordan.smith@oilgas.com', role: 'Field Supervisor', status: 'Active', phoneNumber: '+84 907 234 567' },
        { id: '8', name: 'Taylor Smith', email: 'taylor.smith@oilgas.com', role: 'Engineer', status: 'Active', phoneNumber: '+84 908 234 567' },
        { id: '9', name: 'Morgan Smith', email: 'morgan.smith@oilgas.com', role: 'Administrator', status: 'Inactive', phoneNumber: '+84 909 234 567' },
        { id: '10', name: 'Casey Smith', email: 'casey.smith@oilgas.com', role: 'Field Supervisor', status: 'Active', phoneNumber: '+84 910 234 567' },
    ],
    searchQuery: '',
    roleFilter: 'All Roles',
    statusFilter: 'All Status',

    setSearchQuery: (query) => set({ searchQuery: query }),
    setRoleFilter: (role) => set({ roleFilter: role }),
    setStatusFilter: (status) => set({ statusFilter: status }),

    addUser: (user) => set((state) => {
        const newUser: User = {
            ...user,
            id: String(Math.max(...state.users.map(u => Number(u.id))) + 1),
        };
        return { users: [...state.users, newUser] };
    }),

    updateUser: (id, user) => set((state) => ({
        users: state.users.map((u) =>
            u.id === id
                ? { ...u, ...user }
                : u
        )
    })),

    deleteUser: (id) => set((state) => ({
        users: state.users.filter((user) => user.id !== id)
    })),

    getFilteredUsers: () => {
        const { users, searchQuery, roleFilter, statusFilter } = get();
        return users.filter((user) => {
            const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesRole = roleFilter === 'All Roles' || user.role === roleFilter;
            const matchesStatus = statusFilter === 'All Status' || user.status === statusFilter;
            return matchesSearch && matchesRole && matchesStatus;
        });
    }
}));