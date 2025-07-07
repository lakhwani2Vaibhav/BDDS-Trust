'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { rewriteContent } from '@/ai/flows/empathetic-content-rewrite';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  content: z.string().min(10, {
    message: 'Please enter at least 10 characters to rewrite.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContentRewriterPage() {
  const [rewrittenContent, setRewrittenContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    setRewrittenContent('');
    try {
      const result = await rewriteContent({ content: data.content });
      setRewrittenContent(result.rewrittenContent);
    } catch (error) {
      console.error('Error rewriting content:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to rewrite content. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-dvh bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <Button variant="link" asChild className="mb-4 px-0">
            <Link href="/">&larr; Back to Home</Link>
        </Button>
        <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-3xl flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-primary" />
              Empathetic Content Assistant
            </CardTitle>
            <CardDescription className="text-md">
              Use our AI-powered tool to rewrite your content to be more empathetic, inclusive, and motivational for donors and volunteers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Original Content</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter the text you want to rewrite here..."
                          className="min-h-[150px] bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Rewriting...
                    </>
                  ) : (
                    'Rewrite Content'
                  )}
                </Button>
              </form>
            </Form>

            {rewrittenContent && (
              <div className="mt-8 space-y-4">
                 <h3 className="text-lg font-semibold">Suggested Rewrite:</h3>
                 <div className="p-4 border rounded-md bg-background min-h-[150px] whitespace-pre-wrap">
                   {rewrittenContent}
                 </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
