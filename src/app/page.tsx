'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Initiatives from '@/components/home/Initiatives';
import Gallery from '@/components/home/Gallery';
import Donate from '@/components/home/Donate';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Initiatives />
        <Gallery />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
