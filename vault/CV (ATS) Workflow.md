---
title: CV (ATS) Workflow
tags: [area/content, area/asset]
---

# CV (ATS) Workflow

The résumé is generated from the **same data** as the website
(`src/data/site.ts`) — it can't drift out of sync.

## The two surfaces

| Surface | Path | Purpose |
|---|---|---|
| Web page | `/cv` (built from `src/pages/cv.astro`) | Recruiter-viewable, link-shareable |
| PDF | `/cv_andika.pdf` (file `public/cv_andika.pdf`) | Downloadable, ATS-parseable, 2 pages, A4 |

The hero "Download CV" button on the site points to the **PDF**. The PDF is a
**text-based** print of `/cv` rendered via headless Chrome — selectable text, A4.

## ATS principles applied

- **Single column** (multi-column / sidebars confuse ATS parsers — that's why the
  old Canva CV was replaced).
- Plain text — no photo, no icons, no tables for layout.
- Standard section headings: Professional Summary, Core Skills, Work Experience,
  Education, Certifications & Training, Honors & Awards, Organizational Experience,
  Languages.
- Reverse-chronological work history with quantified bullets.
- Standard sans-serif (Arial / Helvetica system stack).

Verification: `pdftotext public/cv_andika.pdf -` shows everything in linear reading order.

## Editing the CV content

It all lives in `src/data/site.ts`:

| Source | Renders into the CV as |
|---|---|
| `profile.name`, `profile.role` | Header |
| `social.email`, `social.phone`, `social.linkedin`, `social.github`, `social.website`, `profile.location` | Contact line |
| `cvSummary` | Professional Summary |
| `cvSkills` (grouped) | Core Skills |
| `experience` | Work Experience (points + impact merged as "Key results:") |
| `education`, `certifications` | Education + Certifications + Honors |
| `organizations` | Organizational Experience |
| `languages` | Languages |

## Regenerating the PDF (after any CV change)

```bash
export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"
npm run cv:pdf      # builds /cv and prints public/cv_andika.pdf
```

The script under the hood is `scripts/build-cv-pdf.sh` — it runs `npm run build`
then prints `dist/cv/index.html` to PDF using:

```bash
google-chrome --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer \
  --user-data-dir=/tmp/chrome-cv \
  --print-to-pdf=public/cv_andika.pdf \
  file://$PWD/dist/cv/index.html
```

Notes:
- `--no-pdf-header-footer` is essential — Chrome otherwise adds date/title/URL/page-num that look unprofessional and break ATS.
- The `[`libva`/`vaapi` warnings printed by Chrome are harmless GPU init noise.
- CI does **not** regenerate the PDF; commit the regenerated file so the deploy serves it.

## Verifying the result

```bash
pdfinfo public/cv_andika.pdf | grep -iE 'pages|page size'   # expect Pages: 2, A4
pdftotext public/cv_andika.pdf - | head -5                  # expect name first
pdftotext public/cv_andika.pdf - | grep -c "github.io"      # expect 0 (use ampradana.my.id)
```

Related: [[Content Workflow]], [[Design Decisions]], [[Troubleshooting]].
