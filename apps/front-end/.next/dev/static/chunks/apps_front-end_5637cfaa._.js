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
                phoneNumber: '+84 901 234 567'
            },
            {
                id: '2',
                name: 'Sarah Supervisor',
                email: 'supervisor@oilgas.com',
                role: 'Field Supervisor',
                status: 'Active',
                phoneNumber: '+84 902 234 567'
            },
            {
                id: '3',
                name: 'Mike Engineer',
                email: 'engineer@oilgas.com',
                role: 'Engineer',
                status: 'Active',
                phoneNumber: '+84 903 234 567'
            },
            {
                id: '4',
                name: 'Emily Davis',
                email: 'emily.davis@oilgas.com',
                role: 'Field Supervisor',
                status: 'Active',
                phoneNumber: '+84 904 234 567'
            },
            {
                id: '5',
                name: 'Robert Chen',
                email: 'robert.chen@oilgas.com',
                role: 'Engineer',
                status: 'Inactive',
                phoneNumber: '+84 905 234 567'
            },
            {
                id: '6',
                name: 'Alex Smith',
                email: 'alex.smith@oilgas.com',
                role: 'Administrator',
                status: 'Active',
                phoneNumber: '+84 906 234 567'
            },
            {
                id: '7',
                name: 'Jordan Smith',
                email: 'jordan.smith@oilgas.com',
                role: 'Field Supervisor',
                status: 'Active',
                phoneNumber: '+84 907 234 567'
            },
            {
                id: '8',
                name: 'Taylor Smith',
                email: 'taylor.smith@oilgas.com',
                role: 'Engineer',
                status: 'Active',
                phoneNumber: '+84 908 234 567'
            },
            {
                id: '9',
                name: 'Morgan Smith',
                email: 'morgan.smith@oilgas.com',
                role: 'Administrator',
                status: 'Inactive',
                phoneNumber: '+84 909 234 567'
            },
            {
                id: '10',
                name: 'Casey Smith',
                email: 'casey.smith@oilgas.com',
                role: 'Field Supervisor',
                status: 'Active',
                phoneNumber: '+84 910 234 567'
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
                    id: String(Math.max(...state.users.map((u)=>Number(u.id))) + 1)
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
"[project]/apps/front-end/components/common/userCommon/UserForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/yup/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/@heroui/react/dist/components/button/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
const userSchema = (isEdit)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(2, 'Name must be at least 2 characters').max(50, 'Name must be at most 50 characters').required('Name is required'),
        email: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().email('Invalid email format').required('Email is required'),
        phone: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().matches(/^(?:\+?\d{1,3})?([1-9]\d{1,14}|0\d{9,10})$/, 'Invalid phone number').notRequired(),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required('Status is required'),
        password: isEdit ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(6, 'Password must be at least 6 characters') : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(6, 'Password must be at least 6 characters').required('Password is required')
    });
function UserForm({ initialValues, onSubmit, submitButtonText, isEdit }) {
    // Map phoneNumber from store to phone for form
    const formInitialValues = {
        ...initialValues,
        phone: initialValues.phoneNumber || initialValues.phone || ''
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formik"], {
            initialValues: formInitialValues,
            validationSchema: userSchema(isEdit),
            onSubmit: onSubmit,
            children: ({ errors, touched })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                    className: "space-y-4",
                    children: [
                        !isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "name",
                                    className: "text-sm text-gray-400 block mb-2",
                                    children: [
                                        "Full Name ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 53,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 52,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    placeholder: "Enter full name",
                                    className: `w-full bg-black border ${errors.name && touched.name ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700`
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 55,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                    name: "name",
                                    component: "p",
                                    className: "text-red-500 text-xs mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 62,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                            lineNumber: 51,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "text-sm text-gray-400 block mb-2",
                                    children: [
                                        "Email Address ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 68,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 67,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    placeholder: "user@oilgas.com",
                                    className: `w-full bg-black border ${errors.email && touched.email ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700`
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                    name: "email",
                                    component: "p",
                                    className: "text-red-500 text-xs mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 77,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                            lineNumber: 66,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "phone",
                                    className: "text-sm text-gray-400 block mb-2",
                                    children: "Phone Number"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 81,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    type: "text",
                                    id: "phone",
                                    name: "phone",
                                    placeholder: "Enter phone number",
                                    className: `w-full bg-black border ${errors.phone && touched.phone ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700`
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 84,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                    name: "phone",
                                    component: "p",
                                    className: "text-red-500 text-xs mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 91,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                            lineNumber: 80,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    className: "text-sm text-gray-400 block mb-2",
                                    children: [
                                        "Password ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 96,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 95,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    type: "password",
                                    id: "password",
                                    name: "password",
                                    placeholder: isEdit ? "Leave empty to keep current password" : "Enter password (min 6 characters)",
                                    className: `w-full bg-black border ${errors.password && touched.password ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700`
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 98,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                    name: "password",
                                    component: "p",
                                    className: "text-red-500 text-xs mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 105,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                            lineNumber: 94,
                            columnNumber: 25
                        }, this),
                        !isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "status",
                                    className: "text-sm text-gray-400 block mb-2",
                                    children: [
                                        "Status ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 111,
                                            columnNumber: 44
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 110,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    as: "select",
                                    id: "status",
                                    name: "status",
                                    className: "w-full bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Active",
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 119,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Inactive",
                                            children: "Inactive"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 120,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 113,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                            lineNumber: 109,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-6 border-t border-zinc-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                                type: "submit",
                                className: "bg-blue-600 text-white px-8",
                                children: submitButtonText
                            }, void 0, false, {
                                fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                lineNumber: 126,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                            lineNumber: 125,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                    lineNumber: 48,
                    columnNumber: 21
                }, this)
        }, void 0, false, {
            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_c = UserForm;
var _c;
__turbopack_context__.k.register(_c, "UserForm");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/stores/user/userStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$components$2f$common$2f$userCommon$2f$UserForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/components/common/userCommon/UserForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/@heroui/react/dist/components/button/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CreateUserPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { addUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])();
    // 1. Khởi tạo giá trị trống cho người dùng mới
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        role: 'Engineer',
        status: 'Active',
        password: ''
    };
    // 2. Hàm xử lý khi nhấn Create
    const handleSubmit = (values)=>{
        // Map lại 'phone' thành 'phoneNumber' để khớp với interface User trong Store
        const userData = {
            name: values.name,
            email: values.email,
            role: values.role,
            status: values.status,
            phoneNumber: values.phone // Chuyển đổi ở đây
        };
        addUser(userData);
        router.push('/user'); // Quay lại danh sách
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-8 max-w-2xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold mb-1",
                                children: "Create New User"
                            }, void 0, false, {
                                fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm",
                                children: "Add a new professional to the oil & gas system"
                            }, void 0, false, {
                                fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/user",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                            variant: "outline",
                            className: "border-zinc-700 text-zinc-400",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-900 rounded-lg border border-zinc-800 p-6 max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$components$2f$common$2f$userCommon$2f$UserForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    initialValues: initialValues,
                    onSubmit: handleSubmit,
                    submitButtonText: "Create User",
                    isEdit: false
                }, void 0, false, {
                    fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/front-end/app/user/new/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/front-end/app/user/new/page.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(CreateUserPage, "owBvNi/TmQQfrUoNiJLvmDquh1A=", false, function() {
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

//# sourceMappingURL=apps_front-end_5637cfaa._.js.map