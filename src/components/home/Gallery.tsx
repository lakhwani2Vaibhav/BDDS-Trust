'use client';

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const galleryItems = [
  { src: "https://placehold.co/600x400.png", alt: "Health camp in a village", hint: "health camp", span: "col-span-1 row-span-1 md:col-span-2" },
  { src: "https://placehold.co/400x600.png", alt: "Children receiving books", hint: "education drive", span: "col-span-1 row-span-1 md:row-span-2" },
  { src: "https://placehold.co/600x400.png", alt: "Skill development workshop", hint: "skill workshop", span: "col-span-1 row-span-1" },
  { src: "https://placehold.co/600x400.png", alt: "Community celebration event", hint: "community celebration", span: "col-span-1 row-span-1" },
  { src: "https://placehold.co/600x400.png", alt: "Volunteers distributing food", hint: "food distribution", span: "col-span-1 row-span-1 md:col-span-2" },
  { src: "https://placehold.co/600x400.png", alt: "Medical check-up", hint: "medical checkup", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-fade-in-up');
          } else {
            entry.target.classList.add('opacity-0');
            entry.target.classList.remove('animate-fade-in-up');
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
    <section id="gallery" ref={sectionRef} className="container mx-auto px-4 md:px-6">
      <div className="text-center opacity-0 scroll-anim">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Moments That Matter
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A glimpse into the lives we've touched and the communities we've served.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-4">
        {galleryItems.map((item, index) => (
          <div key={index} className={cn("overflow-hidden rounded-lg shadow-md group opacity-0 scroll-anim animate-subtle-float", item.span)} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
            <div className="relative w-full h-full">
               <Image
                src={item.src}
                alt={item.alt}
                data-ai-hint={item.hint}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
