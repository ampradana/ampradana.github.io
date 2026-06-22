---
title: Environment Setup
tags: [area/architecture, status/gotcha]
---

# Environment Setup

## ⚠️ Node version

System Node on this machine is **v10.19.0 / npm 6** — far too old for Astro
(which needs Node 18.20.8+ / 20.3+ / 22+). A modern Node is already installed via
nvm:

```
/home/ampradana/.nvm/versions/node/v20.20.2/
```

**Before any `npm` / `astro` command, prepend it to PATH** — shell state does NOT
persist between sessions / sub-processes, so set it each time:

```bash
export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"
```

(Or `nvm use 20`, but the explicit `PATH=` form works without sourcing nvm in scripts.)

## External tools used

| Tool | Purpose | Required by |
|---|---|---|
| `google-chrome` (or chromium) | Render `/cv` → PDF, render banner → PNG | [[CV (ATS) Workflow]], [[LinkedIn Banner]] |
| `convert` (ImageMagick) | Photo edits, crop banner output | [[Profile Photo]], [[LinkedIn Banner]] |
| `pdftotext` (poppler-utils) | Verify ATS reading order of the CV | [[CV (ATS) Workflow]] |
| `dig` | Verify DNS for custom domain | [[Custom Domain]] |
| `openssl` | Verify TLS cert (issuer, expiry) | [[Custom Domain]] |
| `git`, `gh` (optional) | Source control + PRs | [[Deployment]] |

## Daily commands

```bash
# always start with this
export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"

npm install     # once
npm run dev     # local dev → http://localhost:4321
npm run build   # → ./dist
npm run preview # serve dist locally
npm run cv:pdf  # rebuild CV PDF (needs Chrome)
```

See [[Content Workflow]] for the full edit → deploy loop.
