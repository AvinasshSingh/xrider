"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      className="rounded-full border border-white/20 bg-card p-2 shadow-soft transition hover:scale-105"
      onClick={() => setTheme(dark ? "light" : "dark")}
      type="button"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
