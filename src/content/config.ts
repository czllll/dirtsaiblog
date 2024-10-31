import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    schema: () => z.object({
        date: z.date(),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).default([]),
        
    })
})

export const collections = {
    posts: blogCollection,
}