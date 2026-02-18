import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl space-y-4 px-4 py-16">
        <h1 className="text-4xl font-semibold">Refund Policy</h1>
        <p>Monthly and annual subscription charges are non-refundable once billing is processed.</p>
        <p>In case of accidental duplicate payment, contact support@autriders.com within 7 days for review.</p>
      </main>
      <Footer />
    </>
  );
}
