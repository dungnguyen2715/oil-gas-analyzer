"use client";

import { Formik, Form, Field } from "formik";
import { MdCancel } from "react-icons/md";
import { useRoleModal } from "../hooks/useRoleModal";
import * as Yup from "yup";
import { Spinner } from "@heroui/react";

export const roleSchema = Yup.object({
  name: Yup.string()
    .required("Role name is required")
    .min(3, "At least 3 characters"),
  permissions: Yup.array()
    .of(Yup.string())
    .min(1, "Select at least one permission"),
});

const allPermissions = ["READ", "WRITE", "DELETE", "MANAGE"];

const RoleModal = () => {
  const { open, mode, loading, close, submit, initialValues } = useRoleModal();

  if (!open || mode === "delete") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={close} />

      <div className="relative bg-neutral-900 p-6 rounded-lg w-full max-w-xl">
        <div className="flex justify-between mb-6">
          <h3 className="text-xl text-white font-semibold">
            {mode === "create" ? "Create Role" : "Edit Role"}
          </h3>
          <button onClick={close}>
            <MdCancel className="text-gray-400" />
          </button>
        </div>

        {loading ? (
          <div className=" inset-0 flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        ) : (
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={roleSchema}
            onSubmit={(values) => submit(values)}
          >
            {({ values, errors, touched, setFieldValue }) => (
              <Form className="space-y-6">
                {/* Role name */}
                <div>
                  <label className="text-gray-300 text-sm">Role Name</label>
                  <Field
                    name="name"
                    className="w-full px-3 py-2 bg-black border border-neutral-700 rounded"
                  />
                  {touched.name && errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Permissions */}
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Permissions
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {allPermissions.map((p) => (
                      <label key={p} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={values.permissions.includes(p)}
                          onChange={() => {
                            setFieldValue(
                              "permissions",
                              values.permissions.includes(p)
                                ? values.permissions.filter((x) => x !== p)
                                : [...values.permissions, p],
                            );
                          }}
                        />
                        <span className="text-gray-300">{p}</span>
                      </label>
                    ))}
                  </div>
                  {touched.permissions && errors.permissions && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.permissions}
                    </p>
                  )}
                </div>

                {/*Descriptions */}
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    className="w-full px-3 py-2 bg-black border border-neutral-700 rounded text-white"
                    rows={4}
                  />
                  {touched.description && errors.description && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={close}
                    className="flex-1 bg-neutral-800 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 py-2 rounded"
                  >
                    {mode === "create" ? "Create" : "Save"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default RoleModal;
