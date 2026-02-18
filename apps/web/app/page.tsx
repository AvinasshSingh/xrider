import { Footer } from "@/components/footer";
import { LandingHero } from "@/components/landing";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <LandingHero />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Demo workflow</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {["Prompt", "Render", "Auto-post"].map((step, i) => (
            <article className="glass rounded-2xl border border-white/10 p-6" key={step}>
              <p className="text-xs uppercase text-indigo-400">Step {i + 1}</p>
              <h3 className="mt-2 text-lg font-medium">{step}</h3>
              <p className="mt-2 text-sm text-fg/70">Enterprise-grade workflow with approvals, retries, and delivery analytics.</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
