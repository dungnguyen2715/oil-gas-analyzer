import { ResetPasswordCard } from "@/features/auth/components";
type PageProps = {
  params: Promise<{ token: string }>;
};

async function ResetPassword({ params }: PageProps) {
  await params;
  return <ResetPasswordCard/>;
}

export default ResetPassword;
