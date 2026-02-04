module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/apps/front-end/components/common/userCommon/UserForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/yup/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/formik/dist/formik.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/@heroui/react/dist/components/button/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
const userSchema = (isEdit)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"]().shape({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(2, 'Name must be at least 2 characters').max(50, 'Name must be at most 50 characters').required('Name is required'),
        email: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().email('Invalid email format').required('Email is required'),
        role: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().required('Role is required'),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().required('Status is required'),
        password: isEdit ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(6, 'Password must be at least 6 characters') : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(6, 'Password must be at least 6 characters').required('Password is required')
    });
function UserForm({ initialValues, onSubmit, submitButtonText, isEdit }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Formik"], {
            initialValues: initialValues,
            validationSchema: userSchema(isEdit),
            onSubmit: onSubmit,
            children: ({ errors, touched })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "name",
                                    className: "text-sm text-gray-400 block mb-2",
                                    children: [
                                        "Full Name ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 44,
                                            columnNumber: 43
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    placeholder: "Enter full name",
                                    className: `w-full bg-black border ${errors.name && touched.name ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700`
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 46,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                    name: "name",
                                    component: "p",
                                    className: "text-red-500 text-xs mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "text-sm text-gray-400 block mb-2",
                                    children: [
                                        "Email Address ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 58,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 57,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    placeholder: "user@oilgas.com",
                                    className: `w-full bg-black border ${errors.email && touched.email ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700`
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 60,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                    name: "email",
                                    component: "p",
                                    className: "text-red-500 text-xs mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 67,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                            lineNumber: 56,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "status",
                                    className: "text-sm text-gray-400 block mb-2",
                                    children: [
                                        "Status ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 72,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 71,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                    as: "select",
                                    id: "status",
                                    name: "status",
                                    className: "w-full bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Active",
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 80,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Inactive",
                                            children: "Inactive"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 81,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 74,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                            lineNumber: 70,
                            columnNumber: 25
                        }, this),
                        !isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    className: "text-sm text-gray-400 block mb-2",
                                    children: [
                                        "Password ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                            lineNumber: 88,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 87,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                    type: "password",
                                    id: "password",
                                    name: "password",
                                    placeholder: "Enter password (min 6 characters)",
                                    className: `w-full bg-black border ${errors.password && touched.password ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700`
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 90,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                    name: "password",
                                    component: "p",
                                    className: "text-red-500 text-xs mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                    lineNumber: 97,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                            lineNumber: 86,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-6 border-t border-zinc-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                                type: "submit",
                                className: "bg-blue-600 text-white px-8",
                                children: submitButtonText
                            }, void 0, false, {
                                fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                                lineNumber: 102,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                            lineNumber: 101,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
                    lineNumber: 40,
                    columnNumber: 21
                }, this)
        }, void 0, false, {
            fileName: "[project]/apps/front-end/components/common/userCommon/UserForm.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}),
"[project]/apps/front-end/stores/user/userStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserStore",
    ()=>useUserStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useUserStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/apps/front-end/hooks/UserHook/useUserDetail.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useUserDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/stores/user/userStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/router.js [app-ssr] (ecmascript)");
;
;
;
function useUserDetail() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const userId = params.id;
    const { users, updateUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$stores$2f$user$2f$userStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"])();
    const userDetail = users.find((u)=>u.id === userId);
    const updateUserDetail = (values)=>{
        updateUser(userId, values);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].push('/users');
    };
    return {
        userDetail,
        userId,
        updateUserDetail
    };
}
}),
"[project]/apps/front-end/app/user/[id]/edit/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditUserPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$components$2f$common$2f$userCommon$2f$UserForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/components/common/userCommon/UserForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$hooks$2f$UserHook$2f$useUserDetail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/hooks/UserHook/useUserDetail.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/front-end/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function EditUserPage() {
    const { userDetail, userId, updateUserDetail } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$hooks$2f$UserHook$2f$useUserDetail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    if (!userDetail) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-white text-center",
            children: "User Not Found"
        }, void 0, false, {
            fileName: "[project]/apps/front-end/app/user/[id]/edit/page.tsx",
            lineNumber: 12,
            columnNumber: 16
        }, this);
    }
    const handleSubmit = (values)=>{
        updateUserDetail(values);
        router.push(`/user`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black text-white p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-8",
                    children: "Edit User"
                }, void 0, false, {
                    fileName: "[project]/apps/front-end/app/user/[id]/edit/page.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-zinc-900 rounded-lg border border-zinc-800 p-6 max-w-2xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$front$2d$end$2f$components$2f$common$2f$userCommon$2f$UserForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: userDetail,
                        onSubmit: handleSubmit,
                        submitButtonText: "Update User",
                        isEdit: true
                    }, void 0, false, {
                        fileName: "[project]/apps/front-end/app/user/[id]/edit/page.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/front-end/app/user/[id]/edit/page.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/front-end/app/user/[id]/edit/page.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__227d265d._.js.map