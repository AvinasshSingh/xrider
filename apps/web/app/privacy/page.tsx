import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl space-y-4 px-4 py-16">
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        <p>We collect account details, billing metadata, and usage logs required to provide Autriders services.</p>
        <p>Uploaded media and generated outputs are processed to deliver AI video automation workflows and analytics.</p>
        <p>Users can request account deletion by contacting support@autriders.com.</p>
      </main>
      <Footer />
    </>
  );
}
