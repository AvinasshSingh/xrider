import { AuthCard } from "@/components/auth-card";

export default function RegisterPage() {
  return <main className="flex min-h-screen items-center justify-center px-4"><AuthCard title="Create your account" altHref="/login" altLabel="Sign in" altText="Already have an account?" /></main>;
}
