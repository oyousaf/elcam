import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().max(60),
    description: z.string().max(170),
    headline: z.string(),
    summary: z.string(),
    order: z.number(),
    image: z.string(),
    cta: z.string(),
    testimonial: z.enum(['homeowner', 'renovation', 'decorating', 'facilities', 'fitout']).optional(),
  }),
});

export const collections = { services };
