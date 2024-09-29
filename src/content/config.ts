import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    schema: ({ image }) => z.object({
        date: z.string(),
        image: z.string(),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).default([])
    })
})

export const collections = {
    posts: blogCollection,
}