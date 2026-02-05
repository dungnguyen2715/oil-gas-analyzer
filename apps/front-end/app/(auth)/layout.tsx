"use client";

import { RouteGuard } from "@/components/common";
import { Description } from "@heroui/react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard mode="redirect" redirectUrl="/home">
      <div className=" flex flex-col items-center pt-20  px-4">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-3xl font-bold">Oil & Gas Analyzer</h1>
          <Description className="text-sm mt-2 text-muted-foreground">
            Enterprise Management System
          </Description>
        </div>
        {children}
      </div>
    </RouteGuard>
  );
}
