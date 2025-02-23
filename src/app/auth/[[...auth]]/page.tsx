import { SignIn } from "@clerk/nextjs";

export default function AuthPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <SignIn />
    </div>
  );
}
