# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is an **Astro 5.x static site** for Oskar Rough Mosumgaard's personal website (blog/portfolio). 

### Content Collections
The site uses Astro's content collections with schema validation (`src/content.config.js`):
- **Blog collection**: Markdown posts with title, date, optional thumbnail
- **Projects collection**: Portfolio items with title, url, description, image, draft status

Content is stored in:
- `src/content/blog/` - Blog posts (supports both .md and .mdx)
- `src/content/projects/` - Portfolio projects

### Component Architecture
- `src/components/` - Reusable Astro components
- `src/layouts/` - Page layouts (Normal.astro, BlogPost.astro)
- `src/pages/` - File-based routing with special pages:
  - `projects.astro` - Renders all projects from collection
  - `blog/[...slug].astro` - Dynamic blog post routing
  - `rss.xml.js` - RSS feed generation

### Styling System
- Uses custom CSS with CSS custom properties for consistent design
- Fluid typography system with clamp() functions
- Custom Libertinus font family (serif-focused)
- Earth tone color palette with green primary: `hsl(123, 57%, 23%)`

## Key Features

### Wall Component
The `Wall.astro` component creates a masonry-style image gallery using CSS columns (3-column layout). Used for showcasing visual portfolio work.

### Content Management
- Blog posts support frontmatter with title, date, optional thumbnail
- Projects support draft status for unpublished work
- MDX integration allows components within markdown content

## Deployment

- **Target**: Cloudflare Pages via Wrangler
- **Domain**: https://0sk.ar
- **Config**: `wrangler.jsonc` (project name: "oskarrough")
- **Build output**: `dist/` directory
- **Process**: TypeScript check → Astro build → Cloudflare deployment

## TypeScript Configuration

Uses Astro's base TypeScript config with:
- Strict null checks enabled
- JavaScript files allowed
- Astro-specific type definitions in `env.d.ts`

## Content Guidelines

When adding new content:
- Blog posts go in `src/content/blog/` with required frontmatter
- Projects go in `src/content/projects/` with optional draft status
- Images should be placed in `src/assets/` directory (moved from `public/images/` in 2025)
- Follow the existing naming and structure patterns

## Image Organization

Images are stored in `src/assets/` and referenced as `/src/assets/filename.ext`. This enables:
- Future integration with Astro's Image component for optimization
- Better build-time processing capabilities
- Cleaner separation of static assets vs. processed assets

Search commands for image management:
- Find image references: `ag "src/assets/" --ignore-dir=node_modules`
- List all images: `ls src/assets/`
