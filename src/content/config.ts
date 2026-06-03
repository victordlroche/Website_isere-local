import { defineCollection, z } from 'astro:content';

const realisations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    location: z.string(),
    year: z.number(),
    image: z.string().optional(),
    artisan: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const acteurs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    zone: z.string(),
    phone: z.string().optional(),
    email: z.string().optional(),
    website: z.string().optional(),
    image: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
  }),
});

const associations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    sigle: z.string(),
    type: z.string(),
    address: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    website: z.string().optional(),
    zone: z.string(),
  }),
});

const agenda = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.string(),
    location: z.string(),
    duration: z.string(),
    registration_url: z.string().optional(),
  }),
});

const ressources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    source: z.string().optional(),
    year: z.number().optional(),
    url: z.string().optional(),
  }),
});

export const collections = { realisations, acteurs, associations, agenda, ressources };
