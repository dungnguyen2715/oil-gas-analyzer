"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Description,
  Separator,
} from "@heroui/react";
import { ForgotForm } from "./ForgotForm";
import Link from "next/link";
export function ForgotCard() {
  return (
    <Card
      variant="secondary"
      className="rounded-lg max-w-sm w-full px-8 py-8 shadow-none h-fit"
    >
      <CardHeader>
        <Link
          href="/login"
          className="text-sm no-underline mb-4 block text-foreground hover:text-foreground opacity-80"
        >
          &larr; Back to Login
        </Link>
        <h2 className="text-xl font-semibold">Forgot Password</h2>
      </CardHeader>
      <CardContent className="mt-2">
        <ForgotForm />
      </CardContent>
      <CardFooter className="flex flex-col">
        <Separator className="h-[2px]" />
        <Description className="w-full mt-4 text-left text-muted-foreground text-xs">
          For security reasons, password reset requests are monitored and
          rate-limited. If you continue to experience issues, please contact
          your system administrator.
        </Description>
      </CardFooter>
    </Card>
  );
}
