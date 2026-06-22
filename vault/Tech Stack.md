---
title: Tech Stack
tags: [area/architecture]
---

# Tech Stack

| Layer | Tech | Notes |
|---|---|---|
| Framework | **Astro 5.x** (static output) | Zero JS by default; component-based |
| Language | TypeScript (for data) + Astro components | `src/data/site.ts` is the single source of truth |
| Styling | Plain CSS, custom properties for theming | No Tailwind / no UI lib — keeps it small |
| Theme | Dark (default) + Light, no-flash inline init | Toggle in [[Repo Structure\|src/components/Nav.astro]] |
| Fonts | Sora (Google Fonts) | Loaded via `<link>`; preconnect set |
| Brand icons (skills) | [Simple Icons](https://simpleicons.org) via CDN | `cdn.simpleicons.org/<slug>/<color>` |
| Hosting | **GitHub Pages** | Source set to "GitHub Actions" |
| CI/CD | GitHub Actions (`withastro/action` + `actions/deploy-pages`) | See [[Deployment]] |
| Domain | `ampradana.my.id` (custom apex) → Rumahweb DNS | See [[Custom Domain]] |
| TLS | Let's Encrypt (auto by GitHub) | Auto-renew |
| Photo tooling | ImageMagick `convert` | See [[Profile Photo]] |
| PDF tooling | Headless `google-chrome` → text PDF | See [[CV (ATS) Workflow]] |
| Banner tooling | Headless `google-chrome` → PNG + `convert` crop | See [[LinkedIn Banner]] |

## Why this stack

- Astro = component model + Markdown blog later, **but ships almost no JS** → as fast as plain HTML.
- GitHub Pages = free, simple, no server to babysit.
- Custom domain on Pages = professional URL + free HTTPS (Let's Encrypt).
- Headless Chrome for asset generation = high-fidelity rendering using the same CSS we'd write for the web.

See [[Design Decisions]] for the "why not X" answers.

## What is NOT in the stack (intentionally)

- ❌ No React / Vue / Svelte runtime (Astro can use them but we don't need to).
- ❌ No CSS framework (Tailwind etc.).
- ❌ No CMS / database — content is in code (`site.ts`).
- ❌ No analytics, telemetry, or third-party scripts beyond Google Fonts and Simple Icons CDN.
- ❌ No Next.js (would need Vercel or heavier static-export config).
