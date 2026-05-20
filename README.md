# Social-Emotional Disorders: A Visual Guide

A mobile-first, interactive infographic-style website that helps future teachers and education students understand the eleven social-emotional disorders most relevant to the classroom — what they look like, what helps, and how to plan inclusive lessons.

## Tech stack

- **React 19** + **Vite 8** (JavaScript)
- **Tailwind CSS v4** with the `@tailwindcss/vite` plugin
- **Radix UI** primitives — Dialog, Accordion, Slot
- **Framer Motion** for scroll reveals and stagger animations
- **Lucide React** for icons

## Setup

```bash
npm install
npm run dev      # start dev server (default: http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

## Available scripts

| Command           | What it does                                      |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Vite dev server with hot reload                   |
| `npm run build`   | Production build into `dist/`                     |
| `npm run preview` | Preview the production build locally              |
| `npm run lint`    | Run ESLint over the source                        |

## Deployment

This project deploys to **Vercel** out of the box — no config needed. Push to GitHub, connect the repo on Vercel, and it builds with `npm run build` and serves from `dist/`.

## Folder structure summary

```
src/
├── components/        # Co-located component folders (Header/, Hero/, ...)
├── data/disorders.js  # All disorder content lives here (single source of truth)
├── hooks/             # Reusable React hooks (filter, compare selection)
├── lib/cn.js          # className helper (clsx + tailwind-merge)
├── App.jsx            # Page composition
├── main.jsx           # React entry point
└── index.css          # Tailwind theme + base styles
```

See `CLAUDE.md` for the full folder map and project-specific rules.

## License

[MIT](./LICENSE)
