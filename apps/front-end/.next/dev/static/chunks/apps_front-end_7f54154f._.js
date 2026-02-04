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
"[project]/apps/front-end/features/user/UserFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/stores/user/userStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/@heroui/react/dist/components/button/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/@heroui/react/dist/components/dropdown/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/@heroui/react/dist/components/label/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function UserFilter() {
    _s();
    const { searchQuery, roleFilter, statusFilter, setSearchQuery, setRoleFilter, setStatusFilter, deleteUser, getFilteredUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])();
    const filteredUsers = getFilteredUsers();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search by name or email...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700"
                            }, void 0, false, {
                                fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                        lineNumber: 24,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                            "aria-label": "Menu",
                            variant: "secondary",
                            children: roleFilter
                        }, void 0, false, {
                            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"].Popover, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"].Menu, {
                                onAction: (key)=>setRoleFilter(key),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"].Item, {
                                        id: "All Roles",
                                        textValue: "All Roles",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Label"], {
                                            children: "All Roles"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                            lineNumber: 46,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"].Item, {
                                        id: "Administrator",
                                        textValue: "Administrator",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Label"], {
                                            children: "Administrator"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                            lineNumber: 49,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                        lineNumber: 48,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"].Item, {
                                        id: "Field Supervisor",
                                        textValue: "Field Supervisor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Label"], {
                                            children: "Field Supervisor"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"].Item, {
                                        id: "Engineer",
                                        textValue: "Engineer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Label"], {
                                            children: "Engineer"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                            lineNumber: 55,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                lineNumber: 44,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                            "aria-label": "Menu",
                            variant: "secondary",
                            children: statusFilter
                        }, void 0, false, {
                            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                            lineNumber: 62,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"].Popover, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"].Menu, {
                                onAction: (key)=>setStatusFilter(key),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"].Item, {
                                        id: "All Status",
                                        textValue: "All Status",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Label"], {
                                            children: "All Status"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                        lineNumber: 67,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"].Item, {
                                        id: "Active",
                                        textValue: "Active",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Label"], {
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                            lineNumber: 71,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                        lineNumber: 70,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dropdown"].Item, {
                                        id: "Inactive",
                                        textValue: "Inactive",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Label"], {
                                            children: "Inactive"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                            lineNumber: 74,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                        lineNumber: 73,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                                lineNumber: 66,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/user/new",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                        variant: "danger",
                        children: "Create User"
                    }, void 0, false, {
                        fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/front-end/features/user/UserFilter.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(UserFilter, "oXqnwrvMabM8L93bdIn8NHGZTKs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"]
    ];
});
_c = UserFilter;
var _c;
__turbopack_context__.k.register(_c, "UserFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/front-end/components/common/UserBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function UserBadge({ role }) {
    const getRoleBadgeColor = (role)=>{
        switch(role){
            case 'Administrator':
                return 'bg-purple-600/20 text-purple-400 border-purple-600/30';
            case 'Field Supervisor':
                return 'bg-orange-600/20 text-orange-400 border-orange-600/30';
            case 'Engineer':
                return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
            default:
                return 'bg-gray-600/20 text-gray-400 border-gray-600/30';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border ${getRoleBadgeColor(role)}`,
        children: role
    }, void 0, false, {
        fileName: "[project]/apps/front-end/components/common/UserBadge.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = UserBadge;
var _c;
__turbopack_context__.k.register(_c, "UserBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/front-end/features/user/UserTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/stores/user/userStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$components$2f$common$2f$UserBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/components/common/UserBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function UserTable() {
    _s();
    const { searchQuery, roleFilter, statusFilter, setSearchQuery, setRoleFilter, setStatusFilter, deleteUser, getFilteredUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])();
    const filteredUsers = getFilteredUsers();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const paginatedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-zinc-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "text-left px-6 py-4 text-sm font-medium text-gray-400",
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                    lineNumber: 35,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "text-left px-6 py-4 text-sm font-medium text-gray-400",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                    lineNumber: 36,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "text-left px-6 py-4 text-sm font-medium text-gray-400",
                                    children: "Role"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                    lineNumber: 37,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "text-left px-6 py-4 text-sm font-medium text-gray-400",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                    lineNumber: 38,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "text-left px-6 py-4 text-sm font-medium text-gray-400",
                                    children: "Created Date"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                    lineNumber: 39,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "text-left px-6 py-4 text-sm font-medium text-gray-400",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                    lineNumber: 40,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                            lineNumber: 34,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: paginatedUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4 text-sm font-medium",
                                        children: user.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                        lineNumber: 46,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4 text-sm text-gray-400",
                                        children: user.email
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                        lineNumber: 47,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$components$2f$common$2f$UserBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            role: user.role
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                            lineNumber: 49,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                        lineNumber: 48,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4",
                                        children: user.status === 'Active' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1.5 text-sm text-green-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 45
                                                }, this),
                                                "Active"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                            lineNumber: 53,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-gray-600/20 text-gray-400 border border-gray-600/30",
                                            children: "Inactive"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                            lineNumber: 58,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                        lineNumber: 51,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4 text-sm text-gray-400",
                                        children: user.createdDate
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                        lineNumber: 63,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/user/${user.id}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "p-1.5 hover:bg-zinc-800 rounded transition-colors",
                                                        title: "View",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4 text-gray-400",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                                    lineNumber: 69,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                                    lineNumber: 70,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/user/${user.id}/edit`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "p-1.5 hover:bg-zinc-800 rounded transition-colors",
                                                        title: "Edit",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4 text-gray-400",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "p-1.5 hover:bg-zinc-800 rounded transition-colors",
                                                    title: "Delete",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 text-gray-400",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                            lineNumber: 65,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                        lineNumber: 64,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, user.id, true, {
                                fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                                lineNumber: 45,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
                lineNumber: 32,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/front-end/features/user/UserTable.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(UserTable, "wZSabKQWojAUoLir8GkrIxoPiqc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"]
    ];
});
_c = UserTable;
var _c;
__turbopack_context__.k.register(_c, "UserTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/front-end/app/user/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/@heroui/react/dist/components/button/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$hydrated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/@heroui/react/dist/hooks/use-is-hydrated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/stores/user/userStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$features$2f$user$2f$UserFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/features/user/UserFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$features$2f$user$2f$UserTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/features/user/UserTable.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function UsersPage() {
    _s();
    const hydration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$hydrated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsHydrated"])();
    const { searchQuery, roleFilter, statusFilter, setSearchQuery, setRoleFilter, setStatusFilter, deleteUser, getFilteredUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])();
    const [deleteModal, setDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        userId: '',
        userName: ''
    });
    const handleDelete = (id, name)=>{
        setDeleteModal({
            isOpen: true,
            userId: id,
            userName: name
        });
    };
    const confirmDelete = ()=>{
        deleteUser(deleteModal.userId);
        setDeleteModal({
            isOpen: false,
            userId: '',
            userName: ''
        });
    };
    const cancelDelete = ()=>{
        setDeleteModal({
            isOpen: false,
            userId: '',
            userName: ''
        });
    };
    if (!hydration) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-1",
                        children: "User Management"
                    }, void 0, false, {
                        fileName: "[project]/apps/front-end/app/user/page.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-sm",
                        children: "Manage system users and permissions"
                    }, void 0, false, {
                        fileName: "[project]/apps/front-end/app/user/page.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/front-end/app/user/page.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$features$2f$user$2f$UserFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/front-end/app/user/page.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$features$2f$user$2f$UserTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/front-end/app/user/page.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            deleteModal.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/85 flex items-center justify-center z-50",
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-zinc-900 rounded-lg p-6 max-w-sm w-full mx-4 shadow-2xl border border-zinc-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-white mb-3",
                            children: "Confirm Deletion"
                        }, void 0, false, {
                            fileName: "[project]/apps/front-end/app/user/page.tsx",
                            lineNumber: 106,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300 text-sm mb-6",
                            children: [
                                "Are you sure you want to delete ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-white",
                                    children: deleteModal.userName
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/app/user/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 61
                                }, this),
                                "?",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/apps/front-end/app/user/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 124
                                }, this),
                                "This action cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/app/user/page.tsx",
                            lineNumber: 108,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                                    onClick: cancelDelete,
                                    className: "bg-zinc-800 hover:bg-zinc-700 text-white px-6",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/app/user/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                                    onClick: confirmDelete,
                                    className: "bg-red-600 hover:bg-red-700 text-white px-6",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/app/user/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/app/user/page.tsx",
                            lineNumber: 113,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/front-end/app/user/page.tsx",
                    lineNumber: 105,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/front-end/app/user/page.tsx",
                lineNumber: 104,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/front-end/app/user/page.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_s(UsersPage, "iv8YPYMzkQ/swngay9Pw6H/gB4Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$hydrated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsHydrated"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"]
    ];
});
_c = UsersPage;
var _c;
__turbopack_context__.k.register(_c, "UsersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_front-end_7f54154f._.js.map