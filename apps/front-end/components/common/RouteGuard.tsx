"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/stores";

interface RouteGuardProps {
  children: React.ReactNode;
  mode: "protect" | "redirect";
  redirectUrl: string;
}

export function RouteGuard({ children, mode, redirectUrl }: RouteGuardProps) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  useEffect(() => {
    if (!hasHydrated) return;
    if ((mode === "protect" && !user) || (mode === "redirect" && user)) {
      router.replace(redirectUrl);
    }
  }, [user, hasHydrated, router, mode, redirectUrl]);
  return <>{children}</>;
}
