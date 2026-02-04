import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Button } from "@heroui/react";


const userSchema = (isEdit?: boolean) => Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be at most 50 characters')
        .required('Name is required'),

    email: Yup.string().email('Invalid email format')
        .required('Email is required'),

    phone: Yup.string()
        .matches(/^(?:\+?\d{1,3})?([1-9]\d{1,14}|0\d{9,10})$/, 'Invalid phone number')
        .notRequired(),

    status: Yup.string()
        .required('Status is required'),


    password: isEdit
        ? Yup.string().min(6, 'Password must be at least 6 characters')
        : Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

interface UserFormProps {
    initialValues: any;
    onSubmit: (values: any) => void;
    submitButtonText: string;
    isEdit?: boolean;
}

export default function UserForm({ initialValues, onSubmit, submitButtonText, isEdit }: UserFormProps) {
    // Map phoneNumber from store to phone for form
    const formInitialValues = {
        ...initialValues,
        phone: initialValues.phoneNumber || initialValues.phone || '',
    };

    return (
        <>
            <Formik
                initialValues={formInitialValues}
                validationSchema={userSchema(isEdit)}
                onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form className="space-y-4">
                        {/* Full Name Field - Only show when creating new user */}
                        {!isEdit && (
                            <div>
                                <label htmlFor="name" className="text-sm text-gray-400 block mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter full name"
                                    className={`w-full bg-black border ${errors.name && touched.name ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700`}
                                />
                                <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1" />
                            </div>
                        )}
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="text-sm text-gray-400 block mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder="user@oilgas.com"
                                className={`w-full bg-black border ${errors.email && touched.email ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700`}
                            />
                            <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1" />
                        </div>
                        {/* Phone Number Field */}
                        <div>
                            <label htmlFor="phone" className="text-sm text-gray-400 block mb-2">
                                Phone Number
                            </label>
                            <Field
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Enter phone number"
                                className={`w-full bg-black border ${errors.phone && touched.phone ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700`}
                            />
                            <ErrorMessage name="phone" component="p" className="text-red-500 text-xs mt-1" />
                        </div>
                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="text-sm text-gray-400 block mb-2">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                placeholder={isEdit ? "Leave empty to keep current password" : "Enter password (min 6 characters)"}
                                className={`w-full bg-black border ${errors.password && touched.password ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700`}
                            />
                            <ErrorMessage name="password" component="p" className="text-red-500 text-xs mt-1" />
                        </div>
                        {/* Status Field - Only show when creating new user */}
                        {!isEdit && (
                            <div>
                                <label htmlFor="status" className="text-sm text-gray-400 block mb-2">
                                    Status <span className="text-red-500">*</span>
                                </label>
                                <Field
                                    as="select"
                                    id="status"
                                    name="status"
                                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </Field>
                            </div>
                        )}

                        <div className="flex gap-3 pt-6 border-t border-zinc-800">
                            <Button type="submit" className="bg-blue-600 text-white px-8">
                                {submitButtonText}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}