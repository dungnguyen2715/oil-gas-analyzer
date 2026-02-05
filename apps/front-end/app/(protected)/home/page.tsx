"use client";
import { PermissionGuard } from "@/components/common";
import { useAuthStore } from "@/features/auth/stores";

function Home() {
  const logout = useAuthStore((state) => state.logout);
  return (
    <div>
      <PermissionGuard permission={"users:view"}>
        <h1>View</h1>
      </PermissionGuard>
      <PermissionGuard permission={"users:create"}>
        <h1>Create</h1>
      </PermissionGuard>
      <PermissionGuard permission={"users:edit"}>
        <h1>Edit</h1>
      </PermissionGuard>
      <PermissionGuard permission={"users:delete"}>
        <h1>Delete</h1>
      </PermissionGuard>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Home;
