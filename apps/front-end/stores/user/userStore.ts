import { create } from 'zustand';

export interface User {
    id: string;
    fullname: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
    phone: string;
    department: string;
    createdAt: string;
    password: string;
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
        { id: '1', fullname: 'John Administrator', email: 'admin@oilgas.com', role: 'Administrator', status: 'Active', phone: '+84 901 234 567', department: 'IT', createdAt: '2023-01-15', password: 'admin123' },
        { id: '2', fullname: 'Sarah Supervisor', email: 'supervisor@oilgas.com', role: 'Field Supervisor', status: 'Active', phone: '+84 902 234 567', department: 'Operations', createdAt: '2023-02-10', password: 'supervisor123' },
        { id: '3', fullname: 'Mike Engineer', email: 'engineer@oilgas.com', role: 'Engineer', status: 'Active', phone: '+84 903 234 567', department: 'Engineering', createdAt: '2023-03-05', password: 'engineer123' },
        { id: '4', fullname: 'Emily Davis', email: 'emily.davis@oilgas.com', role: 'Field Supervisor', status: 'Active', phone: '+84 904 234 567', department: 'Operations', createdAt: '2023-03-20', password: 'emily123' },
        { id: '5', fullname: 'Robert Chen', email: 'robert.chen@oilgas.com', role: 'Engineer', status: 'Inactive', phone: '+84 905 234 567', department: 'Engineering', createdAt: '2023-04-15', password: 'robert123' },
        { id: '6', fullname: 'Alex Smith', email: 'alex.smith@oilgas.com', role: 'Administrator', status: 'Active', phone: '+84 906 234 567', department: 'IT', createdAt: '2023-05-01', password: 'alex123' },
        { id: '7', fullname: 'Jordan Smith', email: 'jordan.smith@oilgas.com', role: 'Field Supervisor', status: 'Active', phone: '+84 907 234 567', department: 'Operations', createdAt: '2023-05-10', password: 'jordan123' },
        { id: '8', fullname: 'Taylor Smith', email: 'taylor.smith@oilgas.com', role: 'Engineer', status: 'Active', phone: '+84 908 234 567', department: 'Engineering', createdAt: '2023-06-01', password: 'taylor123' },
        { id: '9', fullname: 'Morgan Smith', email: 'morgan.smith@oilgas.com', role: 'Administrator', status: 'Inactive', phone: '+84 909 234 567', department: 'IT', createdAt: '2023-06-15', password: 'morgan123' },
        { id: '10', fullname: 'Casey Smith', email: 'casey.smith@oilgas.com', role: 'Field Supervisor', status: 'Active', phone: '+84 910 234 567', department: 'Operations', createdAt: '2023-07-01', password: 'casey123' },
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
            const matchesSearch = user.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesRole = roleFilter === 'All Roles' || user.role === roleFilter;
            const matchesStatus = statusFilter === 'All Status' || user.status === statusFilter;
            return matchesSearch && matchesRole && matchesStatus;
        });
    }
}));