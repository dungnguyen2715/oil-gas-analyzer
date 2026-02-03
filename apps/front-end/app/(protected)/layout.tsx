import { RouteGuard } from "@/components/common";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard mode="protect" redirectUrl="/login">
      {children}
    </RouteGuard>
  );
}
