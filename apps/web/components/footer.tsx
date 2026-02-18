import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Autriders</h3>
          <p className="mt-2 text-sm text-fg/70">AI faceless video automation for modern creators and brands.</p>
        </div>
        <div className="space-y-2 text-sm text-fg/80">
          <p>Kavagie Smarttech Private Limited</p>
          <p>9 D Kewal Vihar, Dehradun, Uttarakhand, India - 248001</p>
          <p>support@autriders.com</p>
        </div>
        <div className="grid gap-2 text-sm">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/refund">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}
