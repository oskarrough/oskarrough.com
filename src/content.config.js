import {defineCollection, z} from 'astro:content'

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.string(),
        thumbnail: z.string().optional(),
    })
})

const projects = defineCollection({
   schema: z.object({
       title: z.string()
   }) 
})

export const collections = {
    blog,
    projects
}
