'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-dvh bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <Button variant="link" asChild className="mb-4 px-0">
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Link>
        </Button>
        <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">
              Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

            <p>Babu D.D. Singh Charitable Trust ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

            <h3 className="font-headline text-xl font-semibold text-foreground pt-4">1. Information We Collect</h3>
            <p>We may collect personal information that you voluntarily provide to us when you make a donation, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, and payment information.</p>

            <h3 className="font-headline text-xl font-semibold text-foreground pt-4">2. Use of Your Information</h3>
            <p>We may use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Process your donations and transactions.</li>
              <li>Send you newsletters, marketing, and promotional materials.</li>
              <li>Respond to your comments, inquiries, and requests.</li>
              <li>Improve our website and services.</li>
            </ul>

            <h3 className="font-headline text-xl font-semibold text-foreground pt-4">3. Disclosure of Your Information</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.</p>

            <h3 className="font-headline text-xl font-semibold text-foreground pt-4">4. Security of Your Information</h3>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

            <h3 className="font-headline text-xl font-semibold text-foreground pt-4">5. Contact Us</h3>
            <p>If you have questions or comments about this Privacy Policy, please contact us at babuddsinghcharitabletrust@gmail.com.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
