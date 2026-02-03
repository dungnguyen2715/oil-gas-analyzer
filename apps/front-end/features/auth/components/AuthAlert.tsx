import { Alert } from "@heroui/react";
import clsx from "clsx";

interface AuthAlertProps {
  status?: "default" | "warning" | "success" | "danger" | "accent" | undefined;
  title?: string;
  className?: string;
}

export function AuthAlert({
  status = "accent",
  title = "Invalid email or password. Please try again.",
  className,
}: AuthAlertProps) {
  const getStatusClasses = (status: string) => {
    switch (status) {
      case "success":
        return "border-success/50 bg-success/10";
      case "danger":
        return "border-danger/50 bg-danger/10";
      case "warning":
        return "border-warning/50 bg-warning/10";
      case "accent":
        return "border-accent/50 bg-accent/10";
      default:
        return "border-foreground/10 bg-background";
    }
  };
  return (
    <Alert
      status={status}
      className={clsx(
        "rounded-sm mb-4 opacity-80 shadow-none border-1 mb-4",
        getStatusClasses(status),
        className,
      )}
    >
      <Alert.Indicator />
      <Alert.Title className="text-xs">{title}</Alert.Title>
    </Alert>
  );
}
