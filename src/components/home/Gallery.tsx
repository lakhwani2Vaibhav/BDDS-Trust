'use client';

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const allGalleryItems = [
  { src: "/assets/gallary/IMG-20240519-WA0001.jpg", alt: "Gallery image 1", hint: "community event", span: "col-span-1 row-span-1 md:col-span-2" },
  { src: "/assets/gallary/IMG-20240519-WA0002.jpg", alt: "Gallery image 2", hint: "children smiling", span: "col-span-1 row-span-1 md:row-span-2" },
  { src: "/assets/gallary/IMG-20240519-WA0003.jpg", alt: "Gallery image 3", hint: "group photo", span: "col-span-1 row-span-1" },
  { src: "/assets/gallary/IMG-20240519-WA0006.jpg", alt: "Gallery image 4", hint: "community gathering", span: "col-span-1 row-span-1" },
  { src: "/assets/gallary/IMG-20240519-WA0007.jpg", alt: "Gallery image 5", hint: "event participants", span: "col-span-1 row-span-1 md:col-span-2" },
  { src: "/assets/gallary/IMG-20240519-WA0008.jpg", alt: "Gallery image 6", hint: "people together", span: "col-span-1 row-span-1" },
  { src: "/assets/gallary/IMG-20240519-WA0009.jpg", alt: "Gallery image 7", hint: "charity work", span: "col-span-1 row-span-1" },
  { src: "/assets/gallary/IMG-20240519-WA0012.jpg", alt: "Gallery image 8", hint: "volunteers", span: "col-span-1 row-span-1 md:row-span-2" },
  { src: "/assets/gallary/IMG-20240519-WA0014.jpg", alt: "Gallery image 9", hint: "donation drive", span: "col-span-1 row-span-1 md:col-span-2" },
  { src: "/assets/gallary/IMG-20240519-WA0016.jpg", alt: "Gallery image 10", hint: "supporting children", span: "col-span-1 row-span-1" },
  { src: "/assets/gallary/IMG-20240519-WA0018.jpg", alt: "Gallery image 11", hint: "community outreach", span: "col-span-1 row-span-1" },
  { src: "/assets/gallary/IMG-20240519-WA0019.jpg", alt: "Gallery image 12", hint: "empowerment", span: "col-span-1 row-span-1" },
  { src: "/assets/gallary/IMG-20240519-WA0022.jpg", alt: "Gallery image 13", hint: "social activity", span: "col-span-1 row-span-1 md:col-span-2" },
  { src: "/assets/gallary/IMG-20240519-WA0023.jpg", alt: "Gallery image 14", hint: "helping hands", span: "col-span-1 row-span-1" },
  { src: "/assets/gallary/IMG-20240519-WA0026.jpg", alt: "Gallery image 15", hint: "trust event", span: "col-span-1 row-span-1 md:row-span-2" },
];

const INITIAL_VISIBLE_COUNT = 6;

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const loadMoreImages = () => {
    setVisibleCount(allGalleryItems.length);
  };

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
        {allGalleryItems.slice(0, visibleCount).map((item, index) => (
          <div key={index} className={cn("overflow-hidden rounded-lg shadow-md group opacity-0 scroll-anim animate-subtle-float", item.span)} style={{ animationDelay: `${0.2 + (index % INITIAL_VISIBLE_COUNT) * 0.1}s` }}>
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
      {visibleCount < allGalleryItems.length && (
        <div className="mt-8 text-center opacity-0 scroll-anim" style={{ animationDelay: '0.5s' }}>
          <Button onClick={loadMoreImages} size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Load More
          </Button>
        </div>
      )}
    </section>
  );
}
