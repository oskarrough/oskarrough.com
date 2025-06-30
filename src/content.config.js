import {defineCollection, z} from 'astro:content'
import {glob} from 'astro/loaders'

const blog = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/blog'
    }),
    schema: z.object({
        title: z.string(),
        pubDate: z.string(),
        thumbnail: z.string().optional(),
		pubDate: z.coerce.date(),
    })
})

const projects = defineCollection({
    loader: glob({ 
        pattern: '**/*.md',
        base: './src/content/projects'
    }),
	schema: z.object({
		title: z.string(),
        url: z.string().optional(),
		description: z.string().optional(),
		image: z.string().optional(),
		draft: z.boolean().optional(),
	}),
});

export const collections = {
    blog,
    projects
}
