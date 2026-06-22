---
title: Home
tags: [meta]
aliases: [Home, Index]
---

# 🏠 Personal Website Vault — ampradana.my.id

Knowledge base for **Andika Malraherawan Pradana's** personal portfolio:
<https://ampradana.my.id>. Built so future-me (or a collaborator) can resume work
on this project without re-discovering anything.

> Scope: **this project only** — the public personal portfolio. Anything related
> to the day-job (Omnix and other internal work) belongs in a separate vault.

---

## 🚦 Status at a glance

- **Live:** https://ampradana.my.id (HTTPS, Let's Encrypt, auto-renew)
- **Stack:** [[Tech Stack|Astro 5.x static site]] → GitHub Pages via Actions
- **Source of truth for content:** `src/data/site.ts`
- **Deploys:** auto, on every push to `main` (~1–2 min)
- See [[Session Log]] for the latest changes.

---

## 🗺️ Start here

| Want to… | Open |
|---|---|
| Understand what this project is | [[Overview]] |
| See what's installed and why | [[Tech Stack]] · [[Repo Structure]] · [[Environment Setup]] |
| Edit the website content | [[Content Workflow]] |
| Update the résumé | [[CV (ATS) Workflow]] |
| Write a cover letter for a new application | [[Cover Letter Workflow]] |
| Re-render the LinkedIn banner | [[LinkedIn Banner]] |
| Swap the profile photo | [[Profile Photo]] |
| Touch DNS / the custom domain | [[Custom Domain]] |
| Diagnose a deploy issue | [[Deployment]] · [[Troubleshooting]] |
| Remember WHY something is the way it is | [[Design Decisions]] |
| Plan next features | [[Roadmap]] |
| See what changed when | [[Session Log]] |

---

## ✍️ Conventions in this vault

- Notes are plain Markdown — Obsidian-friendly but readable in any editor / on GitHub.
- Cross-links use `[[Note Name]]`.
- Tags use namespaces: `#area/architecture`, `#area/content`, `#area/deploy`,
  `#area/asset`, `#area/design`, `#status/done`, `#status/todo`, `#status/idea`.
- Date format: `YYYY-MM-DD`. The session-by-session log lives in [[Session Log]];
  one-page status snapshot lives in repo `progres.md` (also useful, less granular).

> The Astro build only ships `public/` to the live site, so this `vault/` folder
> is version-controlled but **never deployed**.
