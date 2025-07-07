'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function Donate() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            if(entry.target.classList.contains('animate-float')) {
                entry.target.classList.add('animate-fade-in-up');
            }
          } else {
            entry.target.classList.add('opacity-0');
            if(entry.target.classList.contains('animate-float')) {
                entry.target.classList.remove('animate-fade-in-up');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = Array.from(sectionRef.current?.querySelectorAll('.scroll-anim') || []);
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="donate" ref={sectionRef} className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6 opacity-0 scroll-anim">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Make a Difference Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Your contribution helps us fund education, healthcare, and livelihood programs for those in need. Every rupee you donate goes directly into improving lives and building a more inclusive society.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="https://razorpay.me/@babudeendayalsinghcharitablet" target="_blank" rel="noopener noreferrer">
                  Donate via Razorpay
                </Link>
              </Button>
              <Button size="lg" variant="outline">Set Up Monthly Giving</Button>
              <Button size="lg" variant="outline">Sponsor a Child/Patient</Button>
            </div>
          </div>
          <div className="flex justify-center items-center opacity-0 scroll-anim" style={{ animationDelay: '0.2s' }}>
             <div className="bg-white p-6 rounded-lg shadow-xl border-4 border-primary/50 animate-float">
               <Image 
                 src="https://placehold.co/300x300.png"
                 alt="UPI QR Code for Donations"
                 width={300}
                 height={300}
                 data-ai-hint="qr code"
               />
               <p className="mt-4 text-center font-semibold text-foreground">Scan to Donate</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
