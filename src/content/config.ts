import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    schema: ({ image }) => z.object({
        date: z.string(),
        title: z.string(),
        tags: z.array(z.string()).default([])
    })
})

export const collections = {
    posts: blogCollection,
}