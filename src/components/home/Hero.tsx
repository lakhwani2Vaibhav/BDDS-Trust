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
    <section ref={sectionRef} id="home" className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-white">
      <Image
        src="https://www.smilefoundationindia.org/wp-content/uploads/2022/09/Banner1-scaled.jpg"
        alt="Happy children benefiting from the trust's initiatives"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        data-ai-hint="happy children"
        priority
      />
      <div className="relative z-10 container mx-auto text-center px-4 pt-16 sm:pt-0">
        <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight opacity-0 scroll-anim">
          Serving Humanity with Compassion & Purpose
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 opacity-0 scroll-anim" style={{ animationDelay: '0.2s' }}>
          Babu D.D. Singh Charitable Trust is dedicated to empowering lives through health, education, and livelihood initiatives for underprivileged and disabled communities across Uttar Pradesh.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 opacity-0 scroll-anim" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="#donate">Donate Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white hover:bg-white hover:text-primary border-white" asChild>
            <Link href="#initiatives">Know Our Work</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white hover:bg-white hover:text-primary border-white" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white hover:bg-white hover:text-primary border-white" asChild>
            <Link href="/content-rewriter">Content Rewriter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
