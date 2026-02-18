import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const items = [
  "AI script generation from prompts or URLs",
  "Voice cloning and multilingual narration",
  "Stock + AI visual composition",
  "Auto subtitles and keyword highlights",
  "Scheduled multi-platform publishing",
  "Performance analytics and content scoring"
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-semibold">Everything needed to run faceless channels at scale</h1>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div className="glass rounded-2xl border border-white/10 p-5" key={item}>{item}</div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
