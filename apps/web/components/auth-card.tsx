import type { Route } from "next";
import Link from "next/link";

export function AuthCard({ title, altHref, altLabel, altText }: { title: string; altHref: Route; altLabel: string; altText: string }) {
  return (
    <div className="glass w-full max-w-md rounded-2xl border border-white/10 p-8 shadow-soft">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="mt-6 space-y-3">
        <input className="w-full rounded-xl border bg-transparent px-4 py-3" placeholder="Email" type="email" />
        <input className="w-full rounded-xl border bg-transparent px-4 py-3" placeholder="Password" type="password" />
        <button className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm text-white" type="button">
          Continue
        </button>
      </div>
      <p className="mt-4 text-sm text-fg/70">{altText} <Link className="text-indigo-500" href={altHref}>{altLabel}</Link></p>
    </div>
  );
}
