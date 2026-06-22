---
title: Content Workflow
tags: [area/content, area/architecture]
---

# Content Workflow

## TL;DR — to change anything visible on the site

1. Edit **`src/data/site.ts`** (the only file you need to touch for most updates).
2. Verify locally:
   ```bash
   export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"
   npm run dev   # http://localhost:4321
   ```
3. If you changed CV-relevant content → see [[CV (ATS) Workflow]] for the extra step (`npm run cv:pdf`).
4. Commit and push:
   ```bash
   git add -A && git commit -m "[IMP] <what you changed>"
   git push origin main
   ```
5. GitHub Actions deploys in ~1–2 min → https://ampradana.my.id

## What's in `src/data/site.ts`

| Export | Drives |
|---|---|
| `profile` | Hero name, role, pitch, location, "open to opportunities" badge, photo path, CV path |
| `social` | Email, phone, LinkedIn handle, GitHub handle, WhatsApp, **`website`** (used in footer + CV) |
| `about` | The "About me" paragraphs |
| `skills` | Skills grid (with Simple Icons slugs + brand colors) |
| `experience` | Timeline jobs (with bullets + quantified impact pills) |
| `projects` | Project cards (tag, title, description, metrics, stack chips) |
| `clients` | Clients & Collaborations wall (monogram tiles) |
| `education`, `certifications` | Education + certs / awards section |
| `cvSummary`, `cvSkills`, `languages`, `organizations` | CV-only blocks for `/cv` |

## Components that consume the data

`src/components/`: `Hero.astro`, `About.astro`, `Skills.astro`, `Experience.astro`,
`Projects.astro`, `Clients.astro`, `Education.astro`, `Contact.astro`, `Footer.astro`, plus `Nav.astro`.
The page is assembled in `src/pages/index.astro`. SEO/Open Graph live in `src/layouts/Base.astro`.

> **Don't write content directly into components.** Add it to `site.ts` first; the
> component reads from there. This keeps the CV (`src/pages/cv.astro`) in sync.

## Adding a new section

1. Add a new exported array/object to `site.ts`.
2. Create `src/components/NewSection.astro` reading from it (use Skills/Projects as templates).
3. Import + render it in `src/pages/index.astro` in the desired position.
4. Add a `<a href="#newsection">…</a>` link in `Nav.astro` if it should be in the nav.

Related: [[Roadmap]] for the "Blog" idea — that's a bigger change (Astro content collections).
