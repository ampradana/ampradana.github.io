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
| `cover-letters/cover-letter.template.html` | **Evergreen template** — never edit per application; copy from it |
| `cover-letters/cover-letter.html` | Current active draft (per application) — edit this |
| `cover-letters/cover_letter.pdf` | Rendered PDF — upload this to the application portal |
| `cover-letters/archive/` | (optional) historical letters you want to keep around |
| `scripts/new-cover-letter.sh` | Starts a new draft from the template (safely refuses to overwrite) |
| `scripts/build-cover-letter-pdf.sh` | Render `cover-letter.html` → `cover_letter.pdf` via Chrome |
| `npm run cover:new` | Convenience: copy template → new active draft |
| `npm run cover:pdf` | Convenience: render the active draft to PDF |

> Folder `cover-letters/` is **NOT** in `public/` or `src/pages/` — it is
> committed for archive but never deployed to ampradana.my.id.

## The 3-command flow per new application

```bash
# 0. (optional) archive the previous letter first if you want to keep it
mkdir -p cover-letters/archive
mv cover-letters/cover-letter.html  cover-letters/archive/$(date +%F)-<company>-<role>.html
mv cover-letters/cover_letter.pdf   cover-letters/archive/$(date +%F)-<company>-<role>.pdf

# 1. start a new draft from the template
npm run cover:new           # → creates cover-letters/cover-letter.html

# 2. edit cover-letters/cover-letter.html
#    Replace the 7 [BRACKETED] placeholders. The header, para 2, para 3, and
#    sign-off are EVERGREEN — leave them alone. Re-target only:
#      - [DATE]
#      - recipient block (3 lines)
#      - greeting
#      - para 1: [ROLE_TITLE] + [COMPANY_NAME]
#      - para 4: [COMPANY_NAME] (×2) + [WHY_THIS_COMPANY_ONE_SENTENCE]

# 3. render the PDF
export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"
npm run cover:pdf           # → cover-letters/cover_letter.pdf
```

Then upload `cover-letters/cover_letter.pdf` to the portal.

## Format / ATS principles applied

Sourced from 2026 best-practice guides (Resumeway, WhatIsACoverLetter, MS Word,
Enhancv, CVOwl):

- **Single column**, A4, ~1 inch margins, Arial 10.5pt, line-height 1.4.
- One page (250–400 words sweet spot — current letter is ~370).
- Contact info **in the body** (NOT in `@page` header/footer — Workday/Taleo/Greenhouse parsers can't read those reliably).
- No tables, text boxes, columns, images, or graphics.
- Standard sections in linear reading order: sender → date → recipient → greeting → 4 body paragraphs → sign-off.
- 8–12 keywords from the job description in the first 100 words; aim for 65–75% match rate; avoid spammy repetition (>5×).

## Verification (after `cover:pdf`)

```bash
pdfinfo cover-letters/cover_letter.pdf | grep Pages          # → 1
pdftotext cover-letters/cover_letter.pdf - | wc -w           # → 250-400
pdftotext cover-letters/cover_letter.pdf - | head -8         # ATS reading order check
```

Commit both `cover-letter.html` and `cover_letter.pdf` so the git history doubles
as your application archive.

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
