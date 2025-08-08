# CLAUDE.md

This is an **Astro 5.x static site** for Oskar's personal website 

## Content collections

The site uses Astro's content collections with schema validation (`src/content.config.js`):

- Blog posts go in `src/content/blog/` (supports both .md and .mdx)
- Projects go in `src/content/projects/` with optional draft status
- Images should be placed in `src/assets/` directory 
- .mdx allows components within markdown content

## Folders

- `src/components/` - Reusable Astro components
- `src/layouts/` - Page layouts (Normal.astro, BlogPost.astro)
- `src/pages/` - File-based routing with special pages:
  - `projects.astro` - Renders all projects from collection
  - `blog/[...slug].astro` - Dynamic blog post routing
  - `rss.xml.js` - RSS feed generation

## Deployment

Cloudflare Workers via wrangler.jsonc


## Development

Prefer `bun` over `npm`. Use `bun run lint` to help you.
