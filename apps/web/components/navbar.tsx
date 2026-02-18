import type { Route } from "next";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const links: Array<[string, Route]> = [
  ["Features", "/features"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link className="text-lg font-semibold" href="/">
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Autriders</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([name, href]) => (
            <Link className="text-sm text-fg/80 hover:text-fg" href={href} key={href}>
              {name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link className="rounded-full border px-4 py-2 text-sm" href="/login">
            Login
          </Link>
          <Link className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm text-white" href="/register">
            Get started
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
