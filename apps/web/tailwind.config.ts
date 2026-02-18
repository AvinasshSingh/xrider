import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        primary: "hsl(var(--primary))"
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.2rem"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(79,70,229,0.12)"
      }
    }
  },
  plugins: []
} satisfies Config;
