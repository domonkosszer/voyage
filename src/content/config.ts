import { defineCollection, z } from 'astro:content'

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),     // accepts 2025-12-07 or "2025-12-07"
    city: z.string().optional(),
    description: z.string().optional(),
  }),
})

export const collections = { events }
