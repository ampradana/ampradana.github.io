---
title: Design Decisions
tags: [area/design, area/architecture]
---

# Design Decisions

ADR-style log of the non-obvious choices on this project — the "why", so future
edits don't accidentally undo them.

## 1. Astro (not Next.js, not Jekyll)

- GitHub Pages serves **static files only** — no Node server.
- Next.js needs Vercel or a static-export pipeline (heavier CI config). Contradicts "simple".
- Jekyll is natively supported by Pages but its templating is less ergonomic.
- **Astro** = component model + zero JS by default + Markdown blog later (content collections)
  + official Pages deploy action. Fits "simpel, mudah konfig, cepat, robust" perfectly.

## 2. Minimalist design (not the old "terminal" aesthetic)

- Old site was a GitHub-dimmed dark scheme with a terminal card in the hero (`$ whoami`).
- Cool for developer audiences, but a fraction too niche for general HR / non-technical
  recruiters who may be the first eyes on the site.
- Switched to clean, typography-led minimalist with one accent color (indigo `#7c8cff`),
  keeping the dark mode default. Reference: rezadwiputra.com.

## 3. Single source of truth (`src/data/site.ts`)

- All copy (skills, experience, projects, clients, education) lives in one TypeScript
  file. Components just render it.
- The ATS résumé page reads the **same** data → CV cannot drift out of sync with the site.
- Adding a new "feature" usually means adding a new export to `site.ts` + a small component.

## 4. ATS résumé as code (not Canva)

- The previous Canva CV was 2-column with a sidebar — multi-column layouts confuse ATS parsers.
- Rebuilt as an HTML page (`/cv`) printed to PDF via headless Chrome → real text, single
  column, standard headings → parses cleanly.
- See [[CV (ATS) Workflow]].

## 5. Photo treatment — B&W (not indigo duotone)

- We tried a bold indigo duotone first (looked striking standalone).
- Inside the circular hero frame on the dark background, the flat indigo read as a
  **fake replaced background** — looked unprofessional.
- Reverted to neutral grayscale. Classic and clean. See [[Profile Photo]].

## 6. Apex domain primary (not www-primary)

- `ampradana.my.id` (apex) is the primary; `www.ampradana.my.id` is a CNAME alias that
  redirects to apex.
- Apex domains can't be CNAMEs (DNS rule), so we use A/AAAA records pointing to
  GitHub Pages IPs. See [[Custom Domain]].

## 7. Real brand icons (not emoji)

- Old site used emojis for the Skills cards (🐍 🐳 etc.) — friendly but inconsistent.
- Switched to **Simple Icons** via CDN — real brand SVGs (Python, Docker, etc.).
- One runtime dependency (`cdn.simpleicons.org`) but it's reliable + no build complexity.

## 8. CV PDF regenerated locally (not in CI)

- CI doesn't need Chrome installed → simpler workflow, faster builds.
- Trade-off: developer must run `npm run cv:pdf` locally and commit the PDF.
- Acceptable because CV updates are infrequent compared to site content updates.

## 9. LinkedIn banner as an HTML page screenshotted

- Could have made the banner in Figma/Canva. Chose HTML+CSS+Chrome so:
  - Same fonts/colors as the site (true brand consistency).
  - Reproducible — anyone can `git pull` and re-render.
  - Editable in 30 seconds (change a line of CSS).
- See [[LinkedIn Banner]] for the regen command + the headless-Chrome quirk.
