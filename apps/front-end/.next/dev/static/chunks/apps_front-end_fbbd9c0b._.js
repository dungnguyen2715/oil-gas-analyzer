(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/front-end/stores/user/userStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserStore",
    ()=>useUserStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useUserStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        users: [
            {
                id: '1',
                name: 'John Administrator',
                email: 'admin@oilgas.com',
                role: 'Administrator',
                status: 'Active',
                createdDate: '2024-01-15'
            },
            {
                id: '2',
                name: 'Sarah Supervisor',
                email: 'supervisor@oilgas.com',
                role: 'Field Supervisor',
                status: 'Active',
                createdDate: '2024-02-20'
            },
            {
                id: '3',
                name: 'Mike Engineer',
                email: 'engineer@oilgas.com',
                role: 'Engineer',
                status: 'Active',
                createdDate: '2024-03-10'
            },
            {
                id: '4',
                name: 'Emily Davis',
                email: 'emily.davis@oilgas.com',
                role: 'Field Supervisor',
                status: 'Active',
                createdDate: '2024-04-05'
            },
            {
                id: '5',
                name: 'Robert Chen',
                email: 'robert.chen@oilgas.com',
                role: 'Engineer',
                status: 'Inactive',
                createdDate: '2024-05-12'
            },
            {
                id: '6',
                name: 'Alex Smith',
                email: 'alex.smith@oilgas.com',
                role: 'Administrator',
                status: 'Active',
                createdDate: '2024-01-01'
            },
            {
                id: '7',
                name: 'Jordan Smith',
                email: 'jordan.smith@oilgas.com',
                role: 'Field Supervisor',
                status: 'Active',
                createdDate: '2024-02-02'
            },
            {
                id: '8',
                name: 'Taylor Smith',
                email: 'taylor.smith@oilgas.com',
                role: 'Engineer',
                status: 'Active',
                createdDate: '2024-03-01'
            },
            {
                id: '9',
                name: 'Morgan Smith',
                email: 'morgan.smith@oilgas.com',
                role: 'Administrator',
                status: 'Inactive',
                createdDate: '2024-04-04'
            },
            {
                id: '10',
                name: 'Casey Smith',
                email: 'casey.smith@oilgas.com',
                role: 'Field Supervisor',
                status: 'Active',
                createdDate: '2024-05-05'
            }
        ],
        searchQuery: '',
        roleFilter: 'All Roles',
        statusFilter: 'All Status',
        setSearchQuery: (query)=>set({
                searchQuery: query
            }),
        setRoleFilter: (role)=>set({
                roleFilter: role
            }),
        setStatusFilter: (status)=>set({
                statusFilter: status
            }),
        addUser: (user)=>set((state)=>{
                const newUser = {
                    ...user,
                    id: String(Math.max(...state.users.map((u)=>Number(u.id))) + 1),
                    createdDate: new Date().toISOString().split('T')[0]
                };
                return {
                    users: [
                        ...state.users,
                        newUser
                    ]
                };
            }),
        updateUser: (id, user)=>set((state)=>({
                    users: state.users.map((u)=>u.id === id ? {
                            ...u,
                            ...user
                        } : u)
                })),
        deleteUser: (id)=>set((state)=>({
                    users: state.users.filter((user)=>user.id !== id)
                })),
        getFilteredUsers: ()=>{
            const { users, searchQuery, roleFilter, statusFilter } = get();
            return users.filter((user)=>{
                const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesRole = roleFilter === 'All Roles' || user.role === roleFilter;
                const matchesStatus = statusFilter === 'All Status' || user.status === statusFilter;
                return matchesSearch && matchesRole && matchesStatus;
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/front-end/lib/http.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "privateApi",
    ()=>privateApi,
    "publicApi",
    ()=>publicApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const baseURL = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.BASE_URL || 'http://localhost:3000';
const publicApi = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: baseURL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});
publicApi.interceptors.response.use((response)=>{
    return response.data;
}, (error)=>{
    return Promise.reject(error);
});
const privateApi = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: baseURL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
});
privateApi.interceptors.request.use((config)=>{
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
let failedQueue = [];
let isRefreshing = false;
const processQueue = (error, token = null)=>{
    failedQueue.forEach((prom)=>{
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};
privateApi.interceptors.response.use((response)=>{
    return response.data;
}, async (error)=>{
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
            return new Promise((resolve, reject)=>{
                failedQueue.push({
                    resolve,
                    reject
                });
            }).then((token)=>{
                if (token && originalRequest.headers) {
                    originalRequest.headers['Authorization'] = `Bearer ${token}`;
                }
                return privateApi(originalRequest);
            }).catch((error)=>{
                return Promise.reject(error);
            });
        }
        originalRequest._retry = true;
        isRefreshing = true;
        try {
            const result = await publicApi.post('/auth/refresh-token');
            localStorage.setItem('access_token', result.access_token);
            processQueue(null, result.access_token);
            originalRequest.headers['Authorization'] = `Bearer ${result.access_token}`;
            return privateApi(originalRequest);
        } catch (error) {
            processQueue(error, null);
            localStorage.removeItem('access_token');
            window.location.href = '/login';
            return Promise.reject(error);
        } finally{
            isRefreshing = false;
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/front-end/features/auth/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUser",
    ()=>createUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$lib$2f$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/lib/http.ts [app-client] (ecmascript)");
;
async function createUser(payload) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$lib$2f$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicApi"].post("/api/users", payload);
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to create user");
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/front-end/app/user/new/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateUserPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/@heroui/react/dist/components/button/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/stores/user/userStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/yup/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$features$2f$auth$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/features/auth/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
// Validation Schema
const userSchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(2, 'Name must be at least 2 characters').required('Name is required'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().email('Invalid email format').required('Email is required'),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(6, 'Password must be at least 6 characters').required('Password is required'),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required('Role is required'),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required('Status is required')
});
function CreateUserPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { addUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const initialValues = {
        name: '',
        email: '',
        role: 'Engineer',
        status: 'Active',
        password: ''
    };
    const handleSubmit = async (values, { resetForm })=>{
        try {
            setIsLoading(true);
            setErrorMessage(null);
            // Call API to create user
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$features$2f$auth$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUser"])({
                name: values.name,
                email: values.email,
                password: values.password,
                role: values.role,
                status: values.status
            });
            // Add user to local store
            addUser({
                id: response.id,
                name: response.name,
                email: response.email,
                role: response.role,
                status: response.status
            });
            // Reset form and redirect
            resetForm();
            router.push('/user');
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : 'Failed to create user. Please try again.';
            setErrorMessage(errorMsg);
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold mb-2",
                                children: "Create New User"
                            }, void 0, false, {
                                fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm",
                                children: "Add a new user to the system"
                            }, void 0, false, {
                                fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/user",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                            className: "bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-white transition-colors",
                            children: "← Back to Users"
                        }, void 0, false, {
                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 p-4 bg-red-900/30 border border-red-700/50 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-300 text-sm font-medium",
                    children: errorMessage
                }, void 0, false, {
                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                    lineNumber: 94,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                lineNumber: 93,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-900 rounded-lg border border-zinc-800 p-8 max-w-2xl shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formik"], {
                    initialValues: initialValues,
                    validationSchema: userSchema,
                    onSubmit: handleSubmit,
                    children: ({ errors, touched, isSubmitting })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "name",
                                            className: "text-sm text-gray-300 block mb-2 font-medium",
                                            children: [
                                                "Full Name ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            type: "text",
                                            id: "name",
                                            name: "name",
                                            placeholder: "Enter full name",
                                            disabled: isLoading,
                                            className: `w-full bg-black border rounded-lg px-4 py-2.5 text-sm text-white transition-colors focus:outline-none ${errors.name && touched.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-zinc-600'} disabled:opacity-50`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 33
                                        }, this),
                                        errors.name && touched.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-400 text-xs mt-1",
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "email",
                                            className: "text-sm text-gray-300 block mb-2 font-medium",
                                            children: [
                                                "Email Address ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 51
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            type: "email",
                                            id: "email",
                                            name: "email",
                                            placeholder: "user@oilgas.com",
                                            disabled: isLoading,
                                            className: `w-full bg-black border rounded-lg px-4 py-2.5 text-sm text-white transition-colors focus:outline-none ${errors.email && touched.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-zinc-600'} disabled:opacity-50`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 33
                                        }, this),
                                        errors.email && touched.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-400 text-xs mt-1",
                                            children: errors.email
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "password",
                                            className: "text-sm text-gray-300 block mb-2 font-medium",
                                            children: [
                                                "Password ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            type: "password",
                                            id: "password",
                                            name: "password",
                                            placeholder: "Enter password (min 6 characters)",
                                            disabled: isLoading,
                                            className: `w-full bg-black border rounded-lg px-4 py-2.5 text-sm text-white transition-colors focus:outline-none ${errors.password && touched.password ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-zinc-600'} disabled:opacity-50`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 33
                                        }, this),
                                        errors.password && touched.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-400 text-xs mt-1",
                                            children: errors.password
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "role",
                                            className: "text-sm text-gray-300 block mb-2 font-medium",
                                            children: [
                                                "Role ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            as: "select",
                                            id: "role",
                                            name: "role",
                                            disabled: isLoading,
                                            className: `w-full bg-black border rounded-lg px-4 py-2.5 text-sm text-white transition-colors focus:outline-none cursor-pointer ${errors.role && touched.role ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-zinc-600'} disabled:opacity-50 disabled:cursor-not-allowed`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "-- Select a role --"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Administrator",
                                                    children: "Administrator"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Field Supervisor",
                                                    children: "Field Supervisor"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Engineer",
                                                    children: "Engineer"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 33
                                        }, this),
                                        errors.role && touched.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-400 text-xs mt-1",
                                            children: errors.role
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "status",
                                            className: "text-sm text-gray-300 block mb-2 font-medium",
                                            children: [
                                                "Status ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            as: "select",
                                            id: "status",
                                            name: "status",
                                            disabled: isLoading,
                                            className: `w-full bg-black border rounded-lg px-4 py-2.5 text-sm text-white transition-colors focus:outline-none cursor-pointer ${errors.status && touched.status ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-zinc-600'} disabled:opacity-50 disabled:cursor-not-allowed`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "-- Select status --"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Active",
                                                    children: "Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Inactive",
                                                    children: "Inactive"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 33
                                        }, this),
                                        errors.status && touched.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-400 text-xs mt-1",
                                            children: errors.status
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-6 border-t border-zinc-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                                            type: "submit",
                                            disabled: isLoading || isSubmitting,
                                            className: `bg-red-600 hover:bg-red-700 text-white font-medium px-8 transition-colors ${isLoading || isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`,
                                            children: isLoading ? 'Creating...' : 'Create User'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/user",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                                                type: "button",
                                                disabled: isLoading,
                                                className: `bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-white transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`,
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                            lineNumber: 106,
                            columnNumber: 25
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                    lineNumber: 100,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/front-end/app/user/new/page.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
_s(CreateUserPage, "DexMvMDZCgOktsZexAEIAkkQVIA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"]
    ];
});
_c = CreateUserPage;
var _c;
__turbopack_context__.k.register(_c, "CreateUserPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_front-end_fbbd9c0b._.js.map