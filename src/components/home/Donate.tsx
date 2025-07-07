import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Donate() {
  return (
    <section id="donate" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Make a Difference Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Your contribution helps us fund education, healthcare, and livelihood programs for those in need. Every rupee you donate goes directly into improving lives and building a more inclusive society.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Donate via UPI / Bank Transfer</Button>
              <Button size="lg" variant="outline">Set Up Monthly Giving</Button>
              <Button size="lg" variant="outline">Sponsor a Child/Patient</Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
             <div className="bg-white p-6 rounded-lg shadow-xl border-4 border-primary/50">
               <Image 
                 src="https://placehold.co/300x300.png"
                 alt="UPI QR Code for Donations"
                 width={300}
                 height={300}
                 data-ai-hint="qr code"
               />
               <p className="mt-4 text-center font-semibold text-foreground">Scan to Donate</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
