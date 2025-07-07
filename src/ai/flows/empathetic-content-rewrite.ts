'use server';
/**
 * @fileOverview An AI agent that rewrites content to be more empathetic, inclusive, and motivational.
 *
 * - rewriteContent - A function that rewrites the content.
 * - RewriteContentInput - The input type for the rewriteContent function.
 * - RewriteContentOutput - The return type for the rewriteContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteContentInputSchema = z.object({
  content: z.string().describe('The content to be rewritten.'),
});
export type RewriteContentInput = z.infer<typeof RewriteContentInputSchema>;

const RewriteContentOutputSchema = z.object({
  rewrittenContent: z.string().describe('The rewritten content with an empathetic, inclusive, and motivational tone.'),
});
export type RewriteContentOutput = z.infer<typeof RewriteContentOutputSchema>;

export async function rewriteContent(input: RewriteContentInput): Promise<RewriteContentOutput> {
  return rewriteContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rewriteContentPrompt',
  input: {schema: RewriteContentInputSchema},
  output: {schema: RewriteContentOutputSchema},
  prompt: `Rewrite the following content to be more empathetic, inclusive, and motivational. Focus on language that resonates with potential donors and volunteers for a charitable trust:

{{{content}}}`, config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  }
});

const rewriteContentFlow = ai.defineFlow(
  {
    name: 'rewriteContentFlow',
    inputSchema: RewriteContentInputSchema,
    outputSchema: RewriteContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

