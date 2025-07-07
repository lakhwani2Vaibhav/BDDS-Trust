'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-dvh bg-secondary">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Button variant="link" asChild className="mb-4 px-0">
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Link>
        </Button>
        <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl sm:text-3xl">
              Terms of Service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <p>Please read these Terms of Service ("Terms") carefully before using the Babu D.D. Singh Charitable Trust website (the "Service") operated by us.</p>
            
            <h3 className="font-headline text-lg sm:text-xl font-semibold text-foreground pt-4">1. Acceptance of Terms</h3>
            <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

            <h3 className="font-headline text-lg sm:text-xl font-semibold text-foreground pt-4">2. Donations</h3>
            <p>All donations made through the Service are voluntary and non-refundable. We reserve the right to refuse any donation at our discretion.</p>

            <h3 className="font-headline text-lg sm:text-xl font-semibold text-foreground pt-4">3. Intellectual Property</h3>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Babu D.D. Singh Charitable Trust and its licensors. The content is protected by copyright and other laws.</p>

            <h3 className="font-headline text-lg sm:text-xl font-semibold text-foreground pt-4">4. Links To Other Web Sites</h3>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.</p>

            <h3 className="font-headline text-lg sm:text-xl font-semibold text-foreground pt-4">5. Governing Law</h3>
            <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
            
            <h3 className="font-headline text-lg sm:text-xl font-semibold text-foreground pt-4">6. Changes</h3>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect.</p>

            <h3 className="font-headline text-lg sm:text-xl font-semibold text-foreground pt-4">7. Contact Us</h3>
            <p>If you have any questions about these Terms, please contact us at babuddsinghcharitabletrust@gmail.com.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
