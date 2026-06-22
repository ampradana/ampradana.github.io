---
title: Cover Letter Workflow
tags: [area/asset, area/content]
---

# Cover Letter Workflow

A reusable, ATS-friendly cover letter pipeline. Same rendering approach as the
[[CV (ATS) Workflow|CV]] (headless Chrome → text-based PDF), but the source
sits **outside** the deployed site because cover letters are job-specific and
should never be public.

## Files

| Path | What |
|---|---|
| `cover-letters/cover-letter.html` | Source template + content (edit this per application) |
| `cover-letters/cover_letter.pdf` | Rendered PDF — upload this to the application portal |
| `scripts/build-cover-letter-pdf.sh` | Render script (Chrome `--print-to-pdf`) |
| `npm run cover:pdf` | Convenience wrapper |

> Folder `cover-letters/` is **NOT** in `public/` or `src/pages/` — it is
> committed for archive but never deployed to ampradana.my.id.

## Format / ATS principles applied

Sourced from 2026 best-practice guides (Resumeway, WhatIsACoverLetter, MS Word,
Enhancv, CVOwl):

- **Single column**, A4, ~1 inch margins, Arial 10.5pt, line-height 1.4.
- One page (250–400 words sweet spot — current letter is ~370).
- Contact info **in the body** (NOT in `@page` header/footer — Workday/Taleo/Greenhouse parsers can't read those reliably).
- No tables, text boxes, columns, images, or graphics.
- Standard sections in linear reading order: sender → date → recipient → greeting → 4 body paragraphs → sign-off.
- 8–12 keywords from the job description in the first 100 words; aim for 65–75% match rate; avoid spammy repetition (>5×).

## Editing for a NEW application — checklist

1. Open `cover-letters/cover-letter.html`.
2. Update:
   - **Date** (`<p class="date">`)
   - **Recipient block** (`.recipient` — name, company, location)
   - **Greeting** (`Dear [Name],`)
   - **All four `<p class="body">` paragraphs** — re-target to the role/company/JD
3. Regenerate:
   ```bash
   export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"
   npm run cover:pdf
   ```
4. Verify 1 page & key wording with:
   ```bash
   pdfinfo cover-letters/cover_letter.pdf | grep Pages          # → 1
   pdftotext cover-letters/cover_letter.pdf - | wc -w           # → 250–400
   pdftotext cover-letters/cover_letter.pdf - | head -8         # ATS reading order
   ```
5. Commit both `cover-letter.html` and `cover_letter.pdf` for archive (git history = letter history).
6. Upload `cover-letters/cover_letter.pdf` to the application portal.

## Writing structure (the 4-paragraph pattern that works)

| Para | Purpose | Length |
|---|---|---|
| 1 — Hook | State the role + company, one-sentence credibility hook (current title, years, industry fit) | 50–80 words |
| 2 — Proof | Most relevant achievements with **quantified numbers** (mirror what's on the CV but rephrased) | 100–130 words |
| 3 — Depth | Functional/leadership angle — projects + how you bridge tech & business | 80–110 words |
| 4 — Close | Why THIS company + call to action + contact reminder + "thank you" | 60–90 words |

## Why not just write it in Word / Canva / Google Docs

- Word/Canva templates often use multi-column layouts or text boxes that break ATS parsing.
- The HTML → Chrome PDF path produces real, selectable, single-column text — same path the CV uses.
- Source HTML is version-controlled, diffable, and reproducible. Past letters stay in git history as a personal archive.

Related: [[CV (ATS) Workflow]], [[Design Decisions]], [[Troubleshooting]].
