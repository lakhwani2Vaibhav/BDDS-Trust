'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Landmark, Copy, Check } from "lucide-react";

export default function Donate() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = Array.from(sectionRef.current?.querySelectorAll('.scroll-anim') || []);
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  const CopyButton = ({ text, id }: { text: string, id: string }) => (
    <Button
      variant="ghost"
      size="icon"
      className="h-7 w-7 text-muted-foreground hover:bg-primary/10 hover:text-primary"
      onClick={() => handleCopy(text, id)}
      aria-label={`Copy ${id}`}
    >
      {copied === id ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
    </Button>
  );

  return (
    <section id="donate" ref={sectionRef} className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex flex-col justify-center items-center gap-8 opacity-0 scroll-anim md:order-last" style={{ animationDelay: '0.2s' }}>
             <div className="bg-white p-6 rounded-lg shadow-xl border-4 border-primary/50 animate-float w-full max-w-sm">
               <h3 className="text-center font-headline text-xl font-semibold mb-4 text-foreground">Paytm QR Code</h3>
               <Image 
                 src="/assets/trusties/qr.jpg"
                 alt="UPI QR Code for Donations"
                 width={300}
                 height={300}
                 data-ai-hint="qr code"
                 className="mx-auto"
               />
               <p className="mt-4 text-center font-semibold text-foreground">Scan with Paytm, GPay, or PhonePe</p>
             </div>
             <Button size="lg" asChild className="w-full max-w-sm transition-transform hover:scale-105">
                <Link href="https://razorpay.me/@babudeendayalsinghcharitablet" target="_blank" rel="noopener noreferrer">
                  <Banknote className="mr-2"/> Donate via Razorpay
                </Link>
              </Button>
          </div>
          <div className="space-y-6 opacity-0 scroll-anim">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Make a Donation
            </h2>
            <p className="text-lg text-muted-foreground">
              Your generous donation will help us continue our mission and reach out to more people in need. You can donate via Paytm, Gpay, PhonePe or directly through a bank transfer.
            </p>
            
            <Card className="border-primary/20 shadow-lg transition-all hover:shadow-primary/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-xl">
                        <Landmark className="h-6 w-6 text-primary"/>
                        Donate via Bank Transfer (Utkarsh Bank)
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                    <p>If you prefer to donate directly via bank transfer, please use the following bank details:</p>
                    <ul className="space-y-3 font-mono text-sm bg-background/50 p-4 rounded-md border">
                        <li className="flex justify-between items-center gap-2">
                          <div>
                            <strong className="font-semibold text-foreground/80 block">Account Name:</strong>
                            <span>BABU DEENDAYAL SINGH CHARITABLE TRUST</span>
                          </div>
                        </li>
                        <li className="flex justify-between items-center gap-2">
                           <div>
                              <strong className="font-semibold text-foreground/80 block">Account Number:</strong>
                              <span>1513020000000211</span>
                           </div>
                           <CopyButton text="1513020000000211" id="utkarsh-acc" />
                        </li>
                        <li className="flex justify-between items-center gap-2">
                           <div>
                              <strong className="font-semibold text-foreground/80 block">IFSC Code:</strong>
                              <span>UTKS0001513</span>
                           </div>
                           <CopyButton text="UTKS0001513" id="utkarsh-ifsc" />
                        </li>
                        <li className="flex justify-between items-center gap-2">
                            <div>
                                <strong className="font-semibold text-foreground/80 block">Bank Name:</strong>
                                <span>Utkarsh Small Finance Bank</span>
                            </div>
                        </li>
                        <li className="flex justify-between items-center gap-2">
                            <div>
                                <strong className="font-semibold text-foreground/80 block">Branch Address:</strong>
                                <span>Lanka, Varanasi, U.P. 221005</span>
                            </div>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg transition-all hover:shadow-primary/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-xl">
                        <Landmark className="h-6 w-6 text-primary"/>
                        Donate via Bank Transfer (SBI)
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                    <p>If you prefer to donate directly via bank transfer, please use the following bank details:</p>
                    <ul className="space-y-3 font-mono text-sm bg-background/50 p-4 rounded-md border">
                         <li className="flex justify-between items-center gap-2">
                          <div>
                            <strong className="font-semibold text-foreground/80 block">Account Name:</strong>
                            <span>BABU DEENDAYAL SINGH CHARITABLE TRUST</span>
                          </div>
                        </li>
                        <li className="flex justify-between items-center gap-2">
                           <div>
                              <strong className="font-semibold text-foreground/80 block">Account Number:</strong>
                              <span>43561539385</span>
                           </div>
                           <CopyButton text="43561539385" id="sbi-acc" />
                        </li>
                        <li className="flex justify-between items-center gap-2">
                           <div>
                              <strong className="font-semibold text-foreground/80 block">IFSC Code:</strong>
                              <span>SBIN0002606</span>
                           </div>
                           <CopyButton text="SBIN0002606" id="sbi-ifsc" />
                        </li>
                         <li className="flex justify-between items-center gap-2">
                            <div>
                                <strong className="font-semibold text-foreground/80 block">Bank Name:</strong>
                                <span>State Bank of India</span>
                            </div>
                        </li>
                        <li className="flex justify-between items-center gap-2">
                            <div>
                                <strong className="font-semibold text-foreground/80 block">Branch Address:</strong>
                                <span>Sahatwar Dist: Ballia, Uttar Pradesh</span>
                            </div>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <p className="text-lg font-semibold text-muted-foreground pt-4 text-center">Thank you for your support!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
