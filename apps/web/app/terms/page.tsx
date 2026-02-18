import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl space-y-4 px-4 py-16">
        <h1 className="text-4xl font-semibold">Terms & Conditions</h1>
        <p>By using Autriders, you agree to lawful use of generated content and compliance with platform posting rules.</p>
        <p>Subscriptions renew automatically unless canceled before the next billing cycle.</p>
        <p>Kavagie Smarttech Private Limited may suspend misuse, abuse, or policy violations.</p>
      </main>
      <Footer />
    </>
  );
}
