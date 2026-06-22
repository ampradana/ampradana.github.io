---
title: Repo Structure
tags: [area/architecture]
---

# Repo Structure

```
ampradana.github.io/
├── astro.config.mjs            # Astro config; sets `site: https://ampradana.my.id`
├── package.json                # `dev`, `build`, `preview`, `cv:pdf`
├── package-lock.json           # committed (CI uses npm ci-equivalent)
├── tsconfig.json               # extends astro/tsconfigs/strict
├── README.md                   # repo-facing readme (public on GitHub)
├── progres.md                  # running session log (committed)
│
├── public/                     # served at site root (deployed)
│   ├── andika.jpg              #   profile photo (B&W now)
│   ├── cv_andika.pdf           #   ATS résumé (regen via npm run cv:pdf)
│   └── CNAME                   #   custom domain marker (ampradana.my.id)
│
├── src/
│   ├── data/site.ts            # ← SINGLE SOURCE OF TRUTH for all content
│   ├── layouts/Base.astro      # <head>, SEO/OG, theme init, fonts
│   ├── components/             # Nav, Hero, About, Skills, Experience,
│   │                           #   Projects, Clients, Education, Contact, Footer
│   ├── styles/global.css       # design tokens + primitives
│   └── pages/
│       ├── index.astro         #   portfolio page (assembled from components)
│       └── cv.astro            #   ATS résumé page (rendered to PDF)
│
├── scripts/build-cv-pdf.sh     # regenerates public/cv_andika.pdf via headless Chrome
├── brand/
│   ├── linkedin-banner.html    # source for the LinkedIn banner asset
│   └── linkedin-banner.png     # 1584×396 banner ready to upload
│
├── vault/                      # ← THIS Obsidian vault (committed, NOT deployed)
│
├── .github/workflows/deploy.yml  # build + deploy to Pages
│
├── legacy/                     # gitignored — local backup of old assets
└── previews/                   # gitignored — throwaway image experiments
```

## What gets deployed

Only `dist/` (the Astro build output, which copies `public/` verbatim and renders `src/pages/*`).
Everything else (`vault/`, `legacy/`, `previews/`, `scripts/`, `brand/`) is **not** served on the site.

## Where content actually lives

[[Content Workflow]] — short answer: **`src/data/site.ts`**. Everything else just renders it.
