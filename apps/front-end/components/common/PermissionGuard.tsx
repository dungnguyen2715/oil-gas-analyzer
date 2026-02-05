"use client";

import { useAllPermissions, useAnyPermission, usePermission } from "@/hooks";
import type { Permission } from "@/features/auth/types";
import { ReactNode } from "react";
import { useIsHydrated } from "@heroui/react";

interface PermissionGuardProps {
  permission?: Permission;
  any?: Permission[];
  all?: Permission[];
  children: ReactNode;
  fallback?: ReactNode;
}

export const PermissionGuard = ({
  permission,
  any,
  all,
  children,
  fallback = null,
}: PermissionGuardProps) => {
  const has = usePermission(permission!);
  const hasAny = useAnyPermission(any || []);
  const hasAll = useAllPermissions(all || []);

  let hasAccess = false;

  if (permission) {
    hasAccess = has;
  } else if (any && any.length > 0) {
    hasAccess = hasAny;
  } else if (all && all.length > 0) {
    hasAccess = hasAll;
  }

  const isHydrate = useIsHydrated();

  if (!isHydrate) {
    return null;
  }

  if (!hasAccess) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
