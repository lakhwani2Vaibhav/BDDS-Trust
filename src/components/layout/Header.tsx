"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#initiatives", label: "Our Initiatives" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const NavLinkItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile && setMobileMenuOpen(false)}
          className={cn(
            "transition-all hover:text-primary duration-300",
            isMobile ? "block w-full p-4 text-lg" : "text-sm font-medium inline-block hover:-translate-y-0.5"
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg shrink-0" aria-label="Babu D.D. Singh Charitable Trust Home">
          <Image src="/assets/gallary/IMG-20240519-WA0080.jpg" alt="Babu D.D. Singh Charitable Trust Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
          <span className="font-headline text-xl hidden sm:inline">Babu D.D. Singh Charitable Trust</span>
        </Link>

        <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 lg:flex">
              <NavLinkItems />
            </nav>

            <Button asChild>
                <Link href="#donate">Donate Now</Link>
            </Button>
            
            <div className="lg:hidden">
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-6 pt-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg px-6" onClick={() => setMobileMenuOpen(false)}>
                        <Image src="/assets/gallary/IMG-20240519-WA0080.jpg" alt="Babu D.D. Singh Charitable Trust Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
                        <span className="font-headline text-xl">B.D.D.S. Trust</span>
                    </Link>
                    <nav className="flex flex-col gap-2">
                        <NavLinkItems isMobile />
                    </nav>
                    </div>
                </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
