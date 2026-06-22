---
title: Session Log
tags: [meta, area/architecture]
---

# Session Log

Chronological log of working sessions on this project. The per-commit detail
lives in `git log`; this is the narrative-level summary so future-me can pick up
without re-reading every diff. Add an entry at the end of each session.

> One-line status is also kept in repo `progres.md` (the more user-facing version
> with shell commands ready to copy).

---

## 2026-05-23 (Sat) — Astro migration & deploy live

**Goal:** rebuild the old single-file portfolio with a maintainable, minimalist
stack and get a custom domain live.

- Migrated single-file `index.html` (95 KB, vanilla) → **Astro 5.x** static site.
- Built components for Hero / About / Skills / Experience / Projects / **Clients**
  (new section) / Education / Contact / Footer.
- Fixed real mobile bug (nav menu disappeared on small screens).
- Added SEO + Open Graph + Twitter Card + canonical + SVG favicon.
- Extracted base64 photo → real file (`public/andika.jpg`).
- Replaced skill emojis with **Simple Icons** brand SVGs.
- Set up `.github/workflows/deploy.yml` (Pages on GitHub Actions).
- Switched Pages source from "branch" to "GitHub Actions" (one-time setting in repo UI).
- **Built ATS résumé** page (`/cv`) + PDF (`public/cv_andika.pdf`) via headless Chrome.
  Added `scripts/build-cv-pdf.sh` + `npm run cv:pdf`.
- Created `progres.md` running log.

Commits: `19ace1d`, `8addff9`.

## 2026-05-23 (cont) — Custom domain ampradana.my.id

- Added `public/CNAME`; pointed `astro.config.mjs` `site` and `social.website` to
  the new domain; updated Footer link + Base fallback URLs.
- Documented the DNS records (A + AAAA for apex) for the Rumahweb side.
- User did DNS + Settings → Pages → Custom domain (and accidentally pushed before
  DNS was set — turned out fine because DNS propagated quickly).
- Verified live: HTTPS via Let's Encrypt cert, redirect HTTP → HTTPS, `/cv` and
  `/cv_andika.pdf` reachable via the new domain.

Commit: `114be12`.

## 2026-05-23 (cont) — Photo iteration

- Generated 3 B&W variants + 2 indigo duotone variants of the profile photo.
- Picked the bold indigo duotone first, committed it.
- After seeing it live on the dark hero in a circular frame, it read as a fake
  replaced background → **reverted to neutral grayscale**.

Commits: `0c740bc` (B&W), the earlier duotone commit was within `8addff9`.

## 2026-05-23 (cont) — CV PDF sync with new domain

- Realized the PDF was generated before the domain change → still had `github.io`
  in the contact line.
- Re-ran `npm run cv:pdf`. Verified via `pdftotext` that the new PDF shows
  `ampradana.my.id`.

Commit: `23b1c79`.

## 2026-05-24 (Sun) — LinkedIn brand banner

- Created `brand/linkedin-banner.html` + rendered `brand/linkedin-banner.png`
  (1584 × 396) via headless Chrome.
- Iterated several times on positioning (content too high, then too low/cut off,
  then mostly fine but the **bottom 60 px came out solid dark** because the gradient
  was darker at the bottom AND headless Chrome was under-rendering height).
- Diagnosed pixel-by-pixel: confirmed `--headless=new` reserves ~68 px → adopted
  the **render-taller-then-crop** pattern. Documented in the HTML source comment
  + [[Troubleshooting]] + [[LinkedIn Banner]].
- Switched gradient to a horizontal (90deg) left→right so the right side stays
  bright the whole height (where the text lives), removing the "dark dead zone".
- Final: URL pill prominent, content fills banner, safe avatar zone preserved.

Commit: `153e43f`.

## 2026-06-13 (Sat) — Knowledge base / Obsidian vault

- Created this `vault/` folder with structured Markdown notes covering every
  major workflow and decision. Hooked into `[[wiki-links]]` for Obsidian.
- Added `vault/.obsidian/` and `vault/.trash/` to `.gitignore` (so notes are
  committed, but per-machine UI state isn't).

Commit: `80c0a6b`.

## 2026-06-22 (Mon) — Cover letter pipeline + first application (WINGS)

- Researched 2026 ATS cover letter best practices (Resumeway, WhatIsACoverLetter,
  MS Word, Enhancv) and codified them in [[Cover Letter Workflow]].
- Built a reusable cover letter pipeline that mirrors the CV pipeline but stays
  **outside the deployed site** (private, job-specific):
  `cover-letters/cover-letter.html` → `scripts/build-cover-letter-pdf.sh`
  → `cover-letters/cover_letter.pdf`, plus `npm run cover:pdf`.
- Wrote first cover letter targeting **PT Sayap Mas Utama (WINGS Group)** for
  the **Odoo Developer Supervisor** role (hiring manager: Ms. Allychia
  Nanalingdita Thea Putri). One page, ~370 words, Arial 10.5pt, single column,
  contact info in body (ATS-safe). Verified via `pdftotext` reading order.
- Narrative: FMCG-to-FMCG transition (Akasha Wira → WINGS), Odoo v10–v18
  depth, quantified DMS impact (500+ users, ~70% reporting ↓, ~40% stockout ↓),
  team-lead + functional-analyst angle.

Commit: `50d486f`.

## 2026-06-23 (Tue) — Evergreen cover-letter template

- Added `cover-letters/cover-letter.template.html` — an evergreen template with
  the sender block, paras 2 + 3, and sign-off all kept verbatim, and clearly
  marked `[BRACKETED]` placeholders only at the 7 spots that change per
  application (date, recipient ×3 lines, greeting, role, company, "why this
  company"). Self-documenting via a comment block at the top.
- Added `scripts/new-cover-letter.sh` + `npm run cover:new` — copies the template
  to `cover-letter.html` for a fresh draft, with a **safety guard** that refuses
  to overwrite a draft already in progress (so the active WINGS letter wasn't lost).
- Updated [[Cover Letter Workflow]] with the new 3-command flow:
  `cover:new` → edit placeholders → `cover:pdf` → upload.

Commit: *(this commit)*.
