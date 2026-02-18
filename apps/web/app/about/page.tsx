import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-semibold">About Autriders</h1>
        <p className="mt-6 text-fg/80">Autriders is built by Kavagie Smarttech Private Limited to help creators, agencies, and businesses automate short-form content production and distribution.</p>
        <div className="mt-8 rounded-2xl border border-white/10 p-6">
          <p><strong>Company:</strong> Kavagie Smarttech Private Limited</p>
          <p><strong>Address:</strong> 9 D Kewal Vihar, Dehradun, Uttarakhand, India - 248001</p>
          <p><strong>Support:</strong> support@autriders.com</p>
          <p><strong>Domain:</strong> autriders.com</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
