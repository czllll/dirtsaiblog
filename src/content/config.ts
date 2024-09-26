import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    schema: ({ image }) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
        tags: z.array(z.string()).default([])
    })
})

export const collections = {
    posts: blogCollection,
}