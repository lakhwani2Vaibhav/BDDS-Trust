import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];


export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-muted-foreground hover:text-primary">
                  <social.icon className="h-6 w-6 transition-transform duration-300 hover:-translate-y-1" />
                </Link>
              ))}
            </div>
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
