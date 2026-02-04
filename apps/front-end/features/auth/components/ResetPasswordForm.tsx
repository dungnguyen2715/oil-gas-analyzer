"use client";
import { Formik } from "formik";
import { Button, Form, InputGroup, Label, TextField } from "@heroui/react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { clsx } from "clsx";
import { AuthAlert } from "./AuthAlert";
import { useResetForm } from "../hooks";

export function ResetPasswordForm() {
  const form = useResetForm();
  return (
    <Formik
      initialValues={form.resetInitialValues}
      validationSchema={form.resetValidationSchema}
      onSubmit={form.onSubmit}
    >
      {({
        errors,
        touched,
        isSubmitting,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          {form.error && (
            <AuthAlert
              status="accent"
              title="Fail to reset password, please contact
          your system administrator."
            />
          )}
          <TextField
            className="flex flex-col"
            name="password"
            isInvalid={!!(touched.password && errors.password)}
          >
            <Label htmlFor="password">Password</Label>
            <InputGroup
              className={"rounded-sm bg-background"}
              isDisabled={isSubmitting}
            >
              <InputGroup.Input
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter new password"
                type={form.showPassword ? "text" : "password"}
              />
              <InputGroup.Suffix>
                <Button
                  onPress={() => form.setShowPassword(!form.showPassword)}
                  variant="ghost"
                  isIconOnly
                  aria-label={
                    form.showPassword ? "Hide password" : "Show password"
                  }
                  size="sm"
                >
                  {form.showPassword ? <LuEye /> : <LuEyeOff />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>
          <TextField
            className="flex flex-col mt-4"
            name="confirmPassword"
            isInvalid={!!(touched.confirmPassword && errors.confirmPassword)}
          >
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <InputGroup
              className={"rounded-sm bg-background"}
              isDisabled={isSubmitting}
            >
              <InputGroup.Input
                id="confirmPassword"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirm new password"
                type={form.showConfirmPassword ? "text" : "password"}
              />
              <InputGroup.Suffix>
                <Button
                  onPress={() =>
                    form.setShowConfirmPassword(!form.showConfirmPassword)
                  }
                  variant="ghost"
                  isIconOnly
                  aria-label={
                    form.showConfirmPassword ? "Hide password" : "Show password"
                  }
                  size="sm"
                >
                  {form.showConfirmPassword ? <LuEye /> : <LuEyeOff />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>
          <Button
            type="submit"
            className={clsx(
              "mt-4 rounded-sm",
              "active:transform-none",
              "data-[pressed=true]:transform-none",
            )}
            isDisabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? "In Progress..." : "Reset Password"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
