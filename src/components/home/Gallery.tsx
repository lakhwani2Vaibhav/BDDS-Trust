import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryItems = [
  { src: "https://placehold.co/600x400.png", alt: "Health camp in a village", hint: "health camp", span: "col-span-1 row-span-1 md:col-span-2" },
  { src: "https://placehold.co/400x600.png", alt: "Children receiving books", hint: "education drive", span: "col-span-1 row-span-1 md:row-span-2" },
  { src: "https://placehold.co/600x400.png", alt: "Skill development workshop", hint: "skill workshop", span: "col-span-1 row-span-1" },
  { src: "https://placehold.co/600x400.png", alt: "Community celebration event", hint: "community celebration", span: "col-span-1 row-span-1" },
  { src: "https://placehold.co/600x400.png", alt: "Volunteers distributing food", hint: "food distribution", span: "col-span-1 row-span-1 md:col-span-2" },
  { src: "https://placehold.co/600x400.png", alt: "Medical check-up", hint: "medical checkup", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="container mx-auto px-4 md:px-6">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Moments That Matter
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A glimpse into the lives we've touched and the communities we've served.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
        {galleryItems.map((item, index) => (
          <div key={index} className={cn("overflow-hidden rounded-lg shadow-md group", item.span)}>
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
