"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { useState } from "react";

const plans = [
  { name: "Starter", usd: 19, inr: 1599, videos: 30 },
  { name: "Growth", usd: 49, inr: 4099, videos: 120 },
  { name: "Scale", usd: 99, inr: 8299, videos: 400 }
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold">Simple pricing</h1>
          <div className="rounded-full border p-1 text-sm">
            {(["USD", "INR"] as const).map((c) => (
              <button
                className={`rounded-full px-4 py-2 ${currency === c ? "bg-indigo-600 text-white" : ""}`}
                key={c}
                onClick={() => setCurrency(c)}
                type="button"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article className="glass rounded-2xl border border-white/10 p-6" key={plan.name}>
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="mt-4 text-3xl font-bold">{currency === "USD" ? `$${plan.usd}` : `₹${plan.inr}`}</p>
              <p className="text-sm text-fg/70">per month</p>
              <p className="mt-4 text-sm">Up to {plan.videos} AI-generated videos monthly.</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
