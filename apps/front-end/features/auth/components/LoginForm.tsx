"use client";
import clsx from "clsx";
import { Formik } from "formik";
import {
  Input,
  Form,
  Label,
  TextField,
  InputGroup,
  Button,
} from "@heroui/react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { AuthAlert } from "./AuthAlert";
import Link from "next/link";
import { useLoginForm } from "../hooks";

export function LoginForm() {
  const form = useLoginForm();
  return (
    <Formik
      initialValues={form.loginInitialValues}
      validationSchema={form.loginValidationSchema}
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
              title="Invalid email or password. Please try again."
            />
          )}
          <TextField
            className="flex flex-col"
            name="email"
            isInvalid={!!(touched.email && errors.email)}
          >
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className="rounded-sm bg-background"
              required
              disabled={isSubmitting}
            />
          </TextField>
          <TextField
            className="flex flex-col mt-4"
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
                placeholder="Enter your password"
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
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>

          <Link
            href="/forgot-password"
            className="mt-4 block text-center text-sm text-foreground opacity-80 hover:text-white hover:opacity-100 no-underline w-full text-xs "
          >
            Forgot Password?
          </Link>
        </Form>
      )}
    </Formik>
  );
}
