import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Description,
  Separator,
  useIsHydrated,
} from "@heroui/react";
import { LoginForm } from "./LoginForm";
export function LoginCard() {
  return (
    <Card
      variant="secondary"
      className="rounded-lg max-w-sm w-full px-8 py-8 shadow-none h-fit"
    >
      <CardHeader>
        <h2 className="text-xl font-semibold">Login</h2>
      </CardHeader>
      <CardContent className="mt-2">
        <LoginForm />
      </CardContent>
      <CardFooter className="flex flex-col">
        <Separator className="h-[2px]" />
        <Description className="w-full mt-4 text-left text-muted-foreground text-xs">
          Login attempts are monitored for security purposes. Too many failed
          attempts may temporarily lock access.
        </Description>
      </CardFooter>
    </Card>
  );
}
