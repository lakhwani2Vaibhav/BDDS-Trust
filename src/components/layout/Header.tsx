"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "Who We Are" },
  { href: "#initiatives", label: "Our Initiatives" },
  { href: "#gallery", label: "Memories" },
  { href: "#contact", label: "Contact Us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinkItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile && setMobileMenuOpen(false)}
          className={cn(
            "transition-colors hover:text-primary",
            isMobile && "block w-full p-4 text-lg"
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <HeartHandshake className="h-7 w-7 text-primary" />
          <span className="font-headline text-xl">B.D.D.S. Trust</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavLinkItems />
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="#donate">Donate Now</Link>
          </Button>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                     <HeartHandshake className="h-7 w-7 text-primary" />
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
