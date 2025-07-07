'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";

const initiatives = [
  {
    title: "Health",
    program: "Healthcare Programs",
    description: "We provide access to quality healthcare services, including medical camps, health awareness programs, and support for patients in need. Our initiatives aim to improve health outcomes and ensure well-being for all.",
    image: "https://placehold.co/500x320.png",
    aiHint: "doctor patient"
  },
  {
    title: "Education",
    program: "Educational Support",
    description: "Our education programs focus on providing quality education to underprivileged children. We support schools, provide educational materials, and offer scholarships to deserving students, fostering a brighter future.",
    image: "https://placehold.co/500x320.png",
    aiHint: "children classroom"
  },
  {
    title: "Livelihood",
    program: "Livelihood Programs",
    description: "We empower individuals with skills and resources to improve their livelihoods. Our programs include vocational training, entrepreneurship support, and job placement assistance, enabling economic independence.",
    image: "https://placehold.co/500x320.png",
    aiHint: "person writing desk"
  },
  {
    title: "Higher Education",
    program: "Higher Education Support",
    description: "We support students pursuing higher education by providing scholarships and mentorship. Our goal is to help them achieve their academic and career aspirations, contributing to a skilled workforce.",
    image: "https://placehold.co/500x320.png",
    aiHint: "student writing books"
  }
];

export default function Initiatives() {
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
    <section id="initiatives" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto opacity-0 scroll-anim">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Initiatives</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Babu D.D. Singh Charitable Trust is dedicated to improving lives through focused initiatives in health, education, and livelihood. Our programs are designed to create lasting impact and empower communities.
          </p>
        </div>

        <div className="mt-12 sm:mt-20 space-y-12 md:space-y-20">
          {initiatives.map((item, index) => (
            <div key={item.title} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center opacity-0 scroll-anim" style={{ animationDelay: `${0.2 + index * 0.2}s` }}>
              <div className={`space-y-4 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{item.title}</h3>
                <h4 className="text-xl font-bold">{item.program}</h4>
                <p className="text-muted-foreground text-base">{item.description}</p>
              </div>
              <div className="flex items-center justify-center animate-subtle-float">
                <Image 
                  src={item.image} 
                  alt={item.program} 
                  width={500} 
                  height={320} 
                  className="rounded-lg shadow-md"
                  data-ai-hint={item.aiHint}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
