"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = ["AI Script + Voice", "Auto B-roll", "One-click Publishing", "Team Workspaces"];

export function LandingHero() {
  return (
    <section className="gradient-hero px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1 text-xs font-medium text-indigo-400">
            AI-Powered Faceless Video Automation
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Create viral short videos in minutes, and auto-publish everywhere.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-fg/70 md:text-lg">
            Autriders transforms prompts into polished 9:16 social shorts with script, voice, visuals, captions, and direct posting pipelines.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm text-white shadow-soft" href="/register">
              Start free trial
            </Link>
            <Link className="rounded-full border px-6 py-3 text-sm" href="/pricing">
              View pricing
            </Link>
          </div>
        </motion.div>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
          {features.map((item) => (
            <div className="glass rounded-2xl border border-white/10 p-3 text-sm" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
