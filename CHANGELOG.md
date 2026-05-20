# Changelog

All notable changes to this project will be documented here.

## [0.1.0] — 2026-05-19

### Added

- Initial project scaffold: Vite + React 19 + Tailwind CSS v4 + JavaScript.
- Sage & Lavender palette as Tailwind `@theme` tokens, Fraunces (display) + Inter (body) via Google Fonts.
- Hero, intro, and similarities/differences sections above the disorder grid.
- `data/disorders.js` — all 11 disorders' content as a single source of truth, with `null` placeholders for sections still in writing (Depression, Conduct Disorder, Reactive Attachment Disorder).
- `DisorderExplorer` with three interactive features:
  - Category filter chips (All / Emotional / Social) + free-text search across names, taglines, definitions, signs, and types.
  - Modal-based detail view with collapsible accordion sections per disorder (`@radix-ui/react-dialog` + `@radix-ui/react-accordion`).
  - Compare mode — pick two cards, view definitions / symptoms / strategies / accommodations side-by-side on desktop, stacked with synced labels on mobile.
- `PlaceholderImage` component: gradient block now, swap to `<img>` later by passing a `src` prop.
- Framer Motion scroll reveals on hero, comparison splash, and the card grid (stagger).
- Footer crisis-hotline callout (NCMH 1553).
- WCAG-AA accessibility floor: focus rings, skip link, `prefers-reduced-motion` support, ARIA labels on icon-only buttons, focus trap via Radix Dialog.
