import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-all duration-300 inline-block hover:-translate-y-0.5">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-all duration-300 inline-block hover:-translate-y-0.5">Terms of Service</Link>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 inline-block hover:-translate-y-0.5">Contact Us</Link>
            </div>
            <div className="text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Babu D.D. Singh Charitable Trust. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  );
}
