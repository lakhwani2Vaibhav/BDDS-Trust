import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white">
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
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight">
          Serving Humanity with <br /> Compassion & Purpose
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200">
          Babu D.D. Singh Charitable Trust is dedicated to empowering lives through health, education, and livelihood initiatives for underprivileged and disabled communities across Uttar Pradesh.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#donate">Donate Now</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#initiatives">Know Our Work</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
