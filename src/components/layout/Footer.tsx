import Link from "next/link";
import { Facebook, Instagram, Youtube, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    href: "https://www.facebook.com/babuddsinghtrust",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/ddcharaitabletrust/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/watch?v=5PlQjrYMfvA&feature=youtu.be",
    icon: Youtube,
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <HeartHandshake className="h-6 w-6 text-primary" />
            <p className="text-sm font-semibold">
              Babu D.D. Singh Charitable Trust
            </p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Button key={href} variant="ghost" size="icon" asChild>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-6 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Babu D.D. Singh Charitable Trust, Village
            Baghaw, Post Sahatwar, Tehsil Bashadih, Ballia, Uttar Pradesh,
            277211. All rights reserved.
          </p>
          <p className="mt-2">
            <Link href="/content-rewriter" className="hover:underline">
              Content Assistant
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
