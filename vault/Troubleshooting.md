---
title: Troubleshooting
tags: [area/deploy, status/gotcha]
---

# Troubleshooting

Real things that bit us, with the fix. Add to this file whenever a new one happens.

## `npm` / `astro` complains about Node version

System Node is v10. Use the nvm Node 20:

```bash
export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"
```

See [[Environment Setup]].

## Headless Chrome under-renders height

**Symptom:** A screenshot at `--window-size=1584,396` shows the page only up to
~y328, with a uniform dark band of body background at the bottom (~68 px).

**Cause:** `--headless=new` (default in Chrome m120+) reserves ~68 px of vertical
space (like a virtual chrome) and that's not the same as the viewport you ask for.

**Fix:** render TALLER, then crop with ImageMagick:

```bash
google-chrome --headless=new --no-sandbox --disable-gpu --hide-scrollbars \
  --window-size=1584,560 --virtual-time-budget=5000 \
  --screenshot=brand/_raw.png "file://$PWD/brand/linkedin-banner.html"
convert brand/_raw.png -crop 1584x396+0+0 +repage brand/linkedin-banner.png
rm brand/_raw.png
```

See [[LinkedIn Banner]] for the canonical command. Also affects PDF rendering;
for the CV we avoid it because `--print-to-pdf` honors `@page size: A4` (different
code path from `--screenshot`).

## CV PDF has weird header / footer (date, file URL, page #)

**Symptom:** "5/23/26, 7:19 PM" at top, "file:///…" + "1/3" at bottom.

**Cause:** Chrome's print mode adds them by default in some versions.

**Fix:** include `--no-pdf-header-footer` in the print command — already in
`scripts/build-cv-pdf.sh`.

## Rumahweb refuses to add a CNAME with "already has a SOA record"

**Full error:** *"ampradana.my.id. already has a SOA record. You may not mix CNAME records with other records for the same name."*

**Cause:** the "Domain" field on the form was left empty, so Rumahweb tried to put
the CNAME on the apex (which conflicts with the SOA + A records).

**Fix:** fill **Domain = `www`**, Type = CNAME, Hostname = `ampradana.github.io.`
(NOT `www.ampradana.github.io`). See [[Custom Domain]].

## Custom domain shows "DNS valid for primary" but `www` is improperly configured

That's because there's no `www` CNAME yet. Add it at Rumahweb (above), then click
"Check again" in GitHub Pages settings. HTTPS for `www` follows once GitHub issues
a cert covering the subdomain (a few minutes after the check passes).

## Site appears down after switching custom domain

If GitHub Pages is set to "deploy from branch" but the repo no longer has a root
`index.html`, the deployed site is empty. We migrated to "GitHub Actions" source
specifically to avoid this. Verify Settings → Pages → Source is **"GitHub Actions"**.

## `git push` says "fatal: could not read Username for 'https://github.com'"

No credentials in the shell. From a regular terminal where `gh auth` / SSH is set
up, just `git push origin main`. (In automation contexts, set up `gh auth login`
or an SSH key.)

## After regenerating the CV PDF, contact line still shows the old domain

You forgot to rebuild after editing `social.website`. Run:

```bash
npm run cv:pdf
git add public/cv_andika.pdf && git commit -m "[IMP] regenerate CV PDF"
```

The web `/cv` page updates automatically on the next deploy; the PDF doesn't —
it's a snapshot.

## `brand/_raw.png` accidentally committed

It's a temp file. Delete it after rendering — included as part of the regen
command (`rm brand/_raw.png`). If it slips into a commit, just `git rm` it.

---

When the workaround is non-obvious, also mention it in [[Design Decisions]] or
the source file's top comment so future-you doesn't re-discover it.
