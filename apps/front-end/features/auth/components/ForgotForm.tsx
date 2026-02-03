"use client";
import { Formik } from "formik";
import {
  Button,
  Description,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { clsx } from "clsx";
import { formatSecondsToMMSS } from "@/utils/formatter";
import { AuthAlert } from "./AuthAlert";
import { useForgotForm } from "../hooks/useForgotForm";

export function ForgotForm() {
  const form = useForgotForm();

  if (!form.hasHydrated) {
    return null;
  }

  return (
    <Formik
      initialValues={form.initialValues}
      validationSchema={form.validationSchema}
      onSubmit={form.onSubmit}
      enableReinitialize
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
          {form.showSuccessAlert && (
            <AuthAlert
              status="success"
              title="Please check your email for the password reset link."
            />
          )}
          {form.showErrorAlert && (
            <AuthAlert
              status="accent"
              title="Fail to send reset link. Please try again later."
            />
          )}
          <TextField
            className="flex flex-col"
            name="email"
            isInvalid={!!(touched.email && errors.email)}
          >
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your registered email"
              className="rounded-sm bg-background"
              disabled={isSubmitting || !form.isExpired}
            />
          </TextField>
          <Button
            type="submit"
            className={clsx(
              "mt-4 rounded-sm",
              "active:transform-none",
              "data-[pressed=true]:transform-none",
            )}
            isDisabled={isSubmitting || !form.isExpired}
            fullWidth
          >
            Send Reset Link
          </Button>
          {!form.isExpired && (
            <Description className="mt-4 text-xs text-muted-foreground text-center w-full block">
              Resend after: {formatSecondsToMMSS(form.remaining)}
            </Description>
          )}
        </Form>
      )}
    </Formik>
  );
}
