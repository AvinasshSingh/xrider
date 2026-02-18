import type { Route } from "next";
import Link from "next/link";

const items: Array<[string, Route]> = [
  ["Overview", "/dashboard"],
  ["Projects", "/dashboard/projects"],
  ["Videos", "/dashboard/videos"],
  ["Posting", "/dashboard/posting"],
  ["Billing", "/dashboard/billing"],
  ["Settings", "/dashboard/settings"]
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[240px_1fr]">
        <aside className="glass rounded-2xl border border-white/15 p-4">
          <h2 className="mb-4 text-lg font-semibold">Autriders App</h2>
          <nav className="space-y-1">
            {items.map(([name, href]) => (
              <Link className="block rounded-xl px-3 py-2 text-sm hover:bg-muted" href={href} key={href}>
                {name}
              </Link>
            ))}
          </nav>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
