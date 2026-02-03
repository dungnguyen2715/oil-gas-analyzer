"use client";
import { PermissionGuard } from "@/components/common";
import { useIsHydrated } from "@heroui/react";

function Home() {
  const hydrated = useIsHydrated();

  if (!hydrated) {
    return null;
  }
  return (
    <div>
      <PermissionGuard
        all={["users:delete", "users:view"]}
        fallback={<p>Access Denied</p>}
      >
        <h1>Protected Home Page</h1>
      </PermissionGuard>
    </div>
  );
}

export default Home;
