import { AuthCard } from "@/components/auth-card";

export default function LoginPage() {
  return <main className="flex min-h-screen items-center justify-center px-4"><AuthCard title="Welcome back" altHref="/register" altLabel="Create account" altText="No account?" /></main>;
}
