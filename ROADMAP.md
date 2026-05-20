# Roadmap

## Goals & Success Metrics

**Primary goal:** ship an accessible, mobile-first visual guide that helps future teachers explore the eleven social-emotional disorders without feeling overwhelmed.

**Success metrics:**
- Lighthouse mobile scores ≥ 90 on Performance, ≥ 95 on Accessibility, Best Practices, SEO
- All eleven disorders explorable on a phone-sized viewport with zero horizontal scroll
- Card → modal → section flow takes ≤ 2 taps to reach any piece of content
- Real images can be added later by passing a `src` prop — no consumer code changes

---

## Phases

### Phase 1 — MVP (current)

- [x] Vite + React + Tailwind v4 scaffold
- [x] Sage & Lavender palette + Fraunces/Inter typography
- [x] Hero + intro + similarities/differences sections
- [x] Card grid with all 11 disorders + "coming soon" markers for the three incomplete sections
- [x] Filter chips (All / Emotional / Social) + search across name, tagline, definition, signs, types
- [x] Disorder modal with progressive-disclosure accordion sections
- [x] Compare mode (max 2) with side-by-side desktop / stacked-with-synced-labels mobile
- [x] Scroll-triggered reveals (Framer Motion)
- [x] Mental health resources callout in footer (NCMH Crisis Hotline)
- [x] Placeholder image system — drop in real `src` later, no refactor
- [x] Accessibility floor: focus rings, prefers-reduced-motion, focus trap (via Radix), skip link

### Phase 2 — content & polish

- [ ] Receive and integrate real images for the hero + each disorder card
- [ ] Fill in the three incomplete disorder sections (Depression, Conduct Disorder, Reactive Attachment Disorder)
- [ ] Real favicon + open graph image
- [ ] Lighthouse audit pass on mobile + tablet + desktop viewports
- [ ] Manual keyboard-navigation walkthrough; verify focus return after modal close

### Phase 3 — optional enhancements

- [ ] "For Future Teachers" filtered view that surfaces just strategies and accommodations
- [ ] localStorage-backed "save to study list" with a quick-access strip
- [ ] Per-disorder "Print this section" with `@media print` styles
- [ ] Glossary tooltips for clinical terms (hypomania, dissociation, derealization, etc.)
- [ ] Reading-time estimates per section

### Phase 4 — deploy & share

- [ ] Push to GitHub
- [ ] Connect Vercel; verify production build serves correctly
- [ ] Share live URL with the writing team

---

## Risks & Open Questions

- **Image style still TBD.** Real images haven't arrived yet; placeholder gradient blocks stand in. Visual cohesion will depend on the eventual image direction (illustrative vs photographic vs abstract).
- **Three disorder sections are incomplete** (Depression, Conduct Disorder, Reactive Attachment Disorder). They render with "Content coming soon" pills today — they need real content to feel complete.
- **Lucide React 1.16.** Verify icon names if upstream changes break imports during future Lucide bumps.
- **Tailwind v4** is still maturing. Watch for `@theme` syntax updates in minor releases.
