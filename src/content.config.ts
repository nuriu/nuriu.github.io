import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    label: z.string(),
    order: z.number().default(0),
    cta: z.object({
      text: z.string(),
      href: z.string(),
    }),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { products };
