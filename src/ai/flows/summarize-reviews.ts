'use server';

/**
 * @fileOverview A review summarization AI agent.
 *
 * - summarizeReviews - A function that handles the review summarization process.
 * - SummarizeReviewsInput - The input type for the summarizeReviews function.
 * - SummarizeReviewsOutput - The return type for the summarizeReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeReviewsInputSchema = z.object({
  reviews: z.array(z.string()).describe('The reviews to summarize.'),
  entityType: z
    .enum(['product', 'supplier'])
    .describe('The type of entity the reviews are for.'),
  entityName: z.string().describe('The name of the product or supplier.'),
});
export type SummarizeReviewsInput = z.infer<typeof SummarizeReviewsInputSchema>;

const SummarizeReviewsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summary of the reviews, highlighting the overall sentiment.'),
});
export type SummarizeReviewsOutput = z.infer<typeof SummarizeReviewsOutputSchema>;

export async function summarizeReviews(input: SummarizeReviewsInput): Promise<SummarizeReviewsOutput> {
  return summarizeReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeReviewsPrompt',
  input: {schema: SummarizeReviewsInputSchema},
  output: {schema: SummarizeReviewsOutputSchema},
  prompt: `You are an AI assistant helping to summarize reviews for {{entityType}} {{entityName}}.

  Reviews:
  {{#each reviews}}
  - {{{this}}}
  {{/each}}

  Please provide a concise summary of the reviews, highlighting the overall sentiment (positive, negative, or mixed) and any recurring themes or issues mentioned by reviewers.  The summary should be no more than three sentences long.
  `,
});

const summarizeReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeReviewsFlow',
    inputSchema: SummarizeReviewsInputSchema,
    outputSchema: SummarizeReviewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
