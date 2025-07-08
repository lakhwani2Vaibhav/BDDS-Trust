'use client';

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const PADDING_DIGITS = 4;
const totalImages = 137;

const masonryPattern = [
  "col-span-1 row-span-1 md:col-span-2",
  "col-span-1 row-span-1 md:row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1 md:col-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1 md:col-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1 md:row-span-2",
];

const allGalleryItems = Array.from({ length: totalImages }, (_, i) => {
  const imgNumber = i + 1;
  return {
    src: `/assets/gallary/IMG-20240519-WA${String(imgNumber).padStart(PADDING_DIGITS, '0')}.jpg`,
    alt: `Gallery image ${imgNumber}`,
    hint: "community event charity",
    span: masonryPattern[i % masonryPattern.length],
  };
});

const INITIAL_VISIBLE_COUNT = 7;
const IMAGES_TO_LOAD = 9;

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const loadMoreImages = () => {
    setVisibleCount(prevCount => prevCount + IMAGES_TO_LOAD);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = Array.from(sectionRef.current?.querySelectorAll('.scroll-anim') || []);
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, [visibleCount]);

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
          <div key={item.src} className={cn("overflow-hidden rounded-lg shadow-md group opacity-0 scroll-anim transition-all duration-300 hover:shadow-xl hover:!scale-105", item.span)} style={{ animationDelay: `${(index % INITIAL_VISIBLE_COUNT) * 0.05}s` }}>
            <div className="relative w-full h-full">
               <Image
                src={item.src}
                alt={item.alt}
                data-ai-hint={item.hint}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
            </div>
          </div>
        ))}
      </div>
      {visibleCount < allGalleryItems.length && (
        <div className="mt-8 text-center opacity-0 scroll-anim" style={{ animationDelay: '0.5s' }}>
          <Button onClick={loadMoreImages} size="lg" className="transition-transform hover:scale-105">
            <Plus className="mr-2 h-5 w-5" />
            Load More
          </Button>
        </div>
      )}
    </section>
  );
}
