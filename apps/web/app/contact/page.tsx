import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-semibold">Contact us</h1>
        <form className="mt-8 space-y-4 rounded-2xl border border-white/10 p-6">
          <input className="w-full rounded-xl border bg-transparent px-4 py-3" placeholder="Your name" />
          <input className="w-full rounded-xl border bg-transparent px-4 py-3" placeholder="Email" type="email" />
          <textarea className="h-32 w-full rounded-xl border bg-transparent px-4 py-3" placeholder="Message" />
          <button className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm text-white" type="submit">Send message</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
