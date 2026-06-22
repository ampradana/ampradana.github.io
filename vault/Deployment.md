---
title: Deployment
tags: [area/deploy, status/done]
---

# Deployment

Every push to `main` triggers a GitHub Actions workflow that builds the Astro site
and publishes it to GitHub Pages. End-to-end ~1–2 minutes.

## The workflow

`.github/workflows/deploy.yml` — two jobs:

1. **build** — `withastro/action@v3`
   - Runs `npm ci` + `npm run build` automatically.
   - Uploads `./dist` as the Pages artifact.
2. **deploy** — `actions/deploy-pages@v4`
   - Publishes the artifact to the `github-pages` environment.
   - Output `page_url` shows up on the deploy step.

Concurrency: only one deploy at a time per branch (queued + cancel-in-progress).

## Triggers

- Every push to `main`.
- Manual `workflow_dispatch` from the Actions tab.

## GitHub Pages settings (set once, already done)

- Settings → Pages → **Source: GitHub Actions** (NOT "deploy from branch").
- Custom domain → see [[Custom Domain]].

## Things to remember

- `public/CNAME` MUST be present in the build output (it is — Astro copies `public/` verbatim).
- `public/cv_andika.pdf` is **not** regenerated in CI. Regenerate locally with `npm run cv:pdf`,
  commit, push. See [[CV (ATS) Workflow]].
- `package-lock.json` is committed (the Action uses it for reproducible installs).

## What gets deployed

Whatever ends up in `dist/` after `npm run build`. That includes:
- Rendered HTML for every page in `src/pages/` (`index.html`, `cv/index.html`).
- All files from `public/` copied to root (`andika.jpg`, `cv_andika.pdf`, `CNAME`).
- Bundled CSS/JS chunks under `_astro/`.

Nothing else (no `vault/`, no `legacy/`, no `brand/`, no `scripts/`).

## Watching a deploy

GitHub repo → Actions tab → the latest "Deploy to GitHub Pages" run.
Or: Settings → Pages → "Your site was last deployed to the github-pages environment by the Deploy to GitHub Pages workflow."

If a deploy ever fails, check [[Troubleshooting]].
