---
title: Overview
tags: [meta, area/architecture]
---

# Overview

**ampradana.my.id** is Andika's personal portfolio — a single-page, static, minimalist
developer site designed primarily for **hiring teams and recruiters** (especially in
the Odoo / ERP / FMCG space).

## Goals

1. **Be scannable in 3 seconds** — name, role, current status, contact, all visible immediately.
2. **Show real impact** — quantified results from real projects (500+ users, 70% reporting cut, etc.).
3. **Be ATS-friendly** — recruiters export the linked résumé and feed it to parsers.
4. **Stay simple to maintain** — one TypeScript data file (`src/data/site.ts`) drives everything.
5. **Be fast & robust** — pure static HTML/CSS/JS; almost zero runtime JS; deploys in minutes.

## Audience

- HR / talent acquisition (often non-technical) → clean, professional, fast load.
- Hiring engineers / technical leads → real project detail, stack visibility.
- Personal contact network → shareable link with rich Open Graph preview.

## Current state (snapshot)

- Live at <https://ampradana.my.id> over HTTPS.
- Custom domain wired through Rumahweb DNS → GitHub Pages (see [[Custom Domain]]).
- Auto-deploys on push to `main` via GitHub Actions.
- ATS résumé available at `/cv` and as a downloadable PDF (`/cv_andika.pdf`).
- LinkedIn brand banner in `brand/linkedin-banner.png` (1584×396, on-brand indigo).

## History (compressed)

- **Pre-2026-05:** single-file `index.html` (~95 KB), vanilla HTML/CSS/JS, GitHub-dimmed dark "terminal" aesthetic.
- **2026-05-23:** migrated to **Astro 5.x**, redesigned minimalist/clean, fixed mobile, added SEO/Open Graph,
  Clients section, real brand icons. ATS résumé + B&W photo added the same day.
- **Custom domain** `ampradana.my.id` configured and verified the same day.
- **2026-05-24:** LinkedIn brand banner created.

Detail in [[Session Log]] and repo `progres.md`.

## Why this exists

Andika prefers "simpel, mudah konfigurasi, cepat, robust" tech choices and a minimalist clean look.
The previous site was solid in content but had real gaps (no mobile nav, no SEO/OG, inline 50 KB
base64 photo, emoji-as-logo). Astro was chosen over Next.js because GitHub Pages is static-only —
Next requires either Vercel or static-export + heavy CI config, which contradicts the "simple" goal.
Full rationale in [[Design Decisions]].
