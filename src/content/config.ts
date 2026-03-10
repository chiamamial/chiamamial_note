import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().optional(),
    author: z.string().default('Alessandro'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { posts };
