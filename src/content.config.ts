import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ratgeber = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ratgeber' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(49).optional(),
    description: z.string().max(165),
    date: z.coerce.date(),
    category: z.enum(['Websites', 'SEO & Google', 'Software', 'Recht & Organisation', 'Barrierefreiheit']),
    cta: z.object({ label: z.string(), href: z.string() }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { ratgeber };
