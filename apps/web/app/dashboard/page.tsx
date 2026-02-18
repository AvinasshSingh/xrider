export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Overview</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Videos Generated", "1,284"],
          ["Auto-post Success", "97.6%"],
          ["Active Channels", "12"]
        ].map(([label, value]) => (
          <article className="glass rounded-2xl border border-white/10 p-5" key={label}>
            <p className="text-sm text-fg/70">{label}</p>
            <p className="mt-2 text-2xl font-bold">{value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
