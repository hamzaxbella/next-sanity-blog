# Next + Sanity Blog

A content-managed blog with article pages, rich text, and light/dark themes.

## Overview

The homepage queries Sanity content, and `/blog/[slug]` renders individual posts. Portable Text handles article content; next-themes supplies theme switching.

Built with Next.js, React, TypeScript, Tailwind CSS, and Sanity.

## Run locally

```bash
git clone https://github.com/hamzaxbella/next-sanity-blog.git
cd next-sanity-blog
npm ci
npm run dev
```

Open <http://localhost:3000> (or the address printed in the terminal).

```bash
npm run build
```

Use the build script to generate production output.

## CMS setup

The frontend client is in `src/lib/sanity.ts`, and the studio is in `studio-zyllux-digital/`. Configure both for a Sanity project you control, add the corresponding schemas/content, and allow your frontend origin. Existing hardcoded project identifiers do not grant access to the original content.

```bash
cd studio-zyllux-digital
npm ci
npm run dev
```

## Code map

`src/app/` contains routes, `src/components/` contains UI, and `studio-zyllux-digital/schemaTypes/` defines editorial models. A populated, accessible CMS dataset is required for meaningful content; the repository is not a standalone content export.
