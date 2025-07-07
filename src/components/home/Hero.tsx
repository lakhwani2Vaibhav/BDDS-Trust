'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fade-in-up");
          } else {
            entry.target.classList.add("opacity-0");
            entry.target.classList.remove("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = Array.from(sectionRef.current?.querySelectorAll(".scroll-anim") || []);
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative h-[90vh] min-h-[500px] md:min-h-[600px] w-full flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Community outreach by the trust"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        data-ai-hint="community outreach"
        priority
      />
      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight opacity-0 scroll-anim">
          Serving Humanity with <br /> Compassion & Purpose
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 opacity-0 scroll-anim" style={{ animationDelay: '0.2s' }}>
          Babu D.D. Singh Charitable Trust is dedicated to empowering lives through health, education, and livelihood initiatives for underprivileged and disabled communities across Uttar Pradesh.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 opacity-0 scroll-anim" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" asChild>
            <Link href="#donate">Donate Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-transparent text-white hover:bg-white hover:text-primary border-white">
            <Link href="#initiatives">Know Our Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-transparent text-white hover:bg-white hover:text-primary border-white">
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-transparent text-white hover:bg-white hover:text-primary border-white">
            <Link href="/content-rewriter">Content Rewriter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
