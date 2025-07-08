'use client';

import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The educational support my daughter received was a blessing. Babu D.D. Singh Charitable Trust gave her the tools to dream bigger and achieve more. We are forever grateful for their impact on our community.",
    author: "Asha Sharma",
    role: "Parent of a beneficiary",
  },
  {
    quote: "Volunteering at the health camp was an eye-opening experience. The trust's dedication to providing free medical check-ups and medicines to remote villages is truly commendable. They are making a real difference.",
    author: "Dr. Rohan Gupta",
    role: "Volunteer Doctor",
  },
  {
    quote: "Thanks to the skill development program, I was able to learn a new trade and start my own small business. This trust doesn't just give aid; it gives people the power to become self-reliant.",
    author: "Priya Singh",
    role: "Program Graduate",
  },
  {
    quote: "We are so impressed with the transparency and dedication of the Babu D.D. Singh Charitable Trust. Our donation was used effectively to provide resources for a local school, and we received a detailed report. A trustworthy organization.",
    author: "Mr. & Mrs. Kumar",
    role: "Donors",
  },
    {
    quote: "The community sensitization programs have helped bridge the gap for differently-abled children in our village. There is more acceptance and inclusion now, thanks to the continuous efforts of the trust.",
    author: "Rajesh Patel",
    role: "Village Head",
  },
];

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
    <Card className="h-full bg-background shadow-lg border border-border/20">
        <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="hsl(var(--primary))" strokeWidth={0} />
                <p className="mt-4 text-muted-foreground italic text-sm sm:text-base">
                    "{quote}"
                </p>
            </div>
            <div className="mt-6 pt-4 border-t">
                <p className="font-semibold text-sm sm:text-base">{author}</p>
                <p className="text-sm text-muted-foreground">{role}</p>
            </div>
        </CardContent>
    </Card>
);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalPlugin = useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: false })
  );
  const verticalPlugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: false })
  );

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
    <section id="testimonials" ref={sectionRef} className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Desktop Carousel View */}
        <div className="hidden lg:block">
            <Carousel
                plugins={[horizontalPlugin.current]}
                className="w-full"
                opts={{
                    loop: true,
                    align: "start",
                }}
            >
                <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-4 text-center lg:text-left opacity-0 scroll-anim">
                        <p className="text-muted-foreground font-medium">Testimonials</p>
                        <h2 className="font-headline text-2xl font-bold tracking-tight sm:text-3xl mt-2">
                            What People Say About Us
                        </h2>
                        <div className="mt-6 justify-center lg:justify-start flex gap-2">
                            <CarouselPrevious className="relative -left-0 top-0 -translate-y-0" />
                            <CarouselNext className="relative -left-0 top-0 -translate-y-0" />
                        </div>
                    </div>
                    <div className="col-span-8 opacity-0 scroll-anim" style={{ animationDelay: '0.2s' }}>
                        <CarouselContent className="-ml-4">
                            {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-4 basis-full lg:basis-1/2">
                                <div className="p-1 h-full">
                                    <TestimonialCard {...testimonial} />
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>
                </div>
            </Carousel>
        </div>

        {/* Mobile/Tablet Vertical View */}
        <div className="block lg:hidden">
            <div className="text-center opacity-0 scroll-anim">
                <p className="text-muted-foreground font-medium">Testimonials</p>
                <h2 className="font-headline text-2xl font-bold tracking-tight sm:text-3xl mt-2">
                    What People Say About Us
                </h2>
            </div>
            <div className="mt-8 opacity-0 scroll-anim" style={{ animationDelay: '0.2s' }}>
                 <Carousel
                    plugins={[verticalPlugin.current]}
                    className="w-full max-w-xl mx-auto"
                    opts={{
                        loop: true,
                        align: "start"
                    }}
                    orientation="vertical"
                >
                    <CarouselContent className="-mt-4 h-[38rem]">
                        {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="pt-4 basis-1/2">
                            <div className="p-1 h-full">
                                <TestimonialCard {...testimonial} />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
      </div>
    </section>
  );
}
