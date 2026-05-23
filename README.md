# 👋 Andika — Portfolio Website

> Personal portfolio of **Andika Malraherawan Pradana** — ERP Odoo Developer & Implementor Supervisor

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-ampradana.github.io-7c8cff?style=for-the-badge)](https://ampradana.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-andikamp-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/andikamp)
[![GitHub](https://img.shields.io/badge/GitHub-ampradana-181717?style=for-the-badge&logo=github)](https://github.com/ampradana)

---

## 🧑‍💻 About

Source code for my personal portfolio — a fast, minimalist static site built with **Astro** and
deployed to **GitHub Pages** via GitHub Actions. It showcases my work as an **ERP Odoo Developer**
with 5+ years in the **FMCG & Supply Chain** industry: work experience, key projects, skills,
education, and contact.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) (static output, zero JS by default) |
| Styling | CSS custom properties (dark/light theme), scoped component styles |
| Content | Single data file — [`src/data/site.ts`](src/data/site.ts) |
| Icons | [Simple Icons](https://simpleicons.org) CDN + inline SVG |
| Fonts | Google Fonts — Sora |
| Hosting | GitHub Pages (GitHub Actions deploy) |
| Domain | `ampradana.github.io` |

Astro ships **no JavaScript by default**, so the page loads as fast as plain HTML while staying
component-based and easy to maintain.

---

## 📁 Repository Structure

```
ampradana.github.io/
├── astro.config.mjs            # Astro config (site URL)
├── public/                     # Static assets served at root
│   ├── andika.jpg              #   profile photo
│   └── cv_andika.pdf           #   downloadable CV (replace to update)
├── src/
│   ├── data/site.ts            # ← ALL content lives here (edit this)
│   ├── layouts/Base.astro      # <head>, SEO/Open Graph, theme, fonts
│   ├── components/             # Nav, Hero, About, Skills, Experience,
│   │                           #   Projects, Clients, Education, Contact, Footer
│   ├── styles/global.css       # design tokens + primitives
│   └── pages/index.astro       # page assembly
└── .github/workflows/deploy.yml  # build + deploy to Pages
```

---

## 🚀 Local Development

Requires **Node.js 18+** (this machine has Node 20 via nvm).

```bash
npm install      # install dependencies
npm run dev      # local dev server → http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build
```

---

## 🌐 Deployment (one-time setup)

This repo deploys automatically on every push to `main` via GitHub Actions.

**Before the first deploy, switch the Pages source to Actions:**
1. GitHub → repo **Settings → Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions**

After that, any push to `main` builds the Astro site and publishes it to
<https://ampradana.github.io> automatically (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

### To update content
- Text/projects/skills/experience → edit [`src/data/site.ts`](src/data/site.ts)
- CV → replace `public/cv_andika.pdf` (keep the filename)
- Commit & push → live in ~1–2 minutes after the Action finishes.

---

## 📬 Contact

| Channel | Info |
|---|---|
| 📧 Email | andikamalraherawanpradana@gmail.com |
| 📱 WhatsApp | 0822-2753-9417 |
| 💼 LinkedIn | [linkedin.com/in/andikamp](https://linkedin.com/in/andikamp) |
| 🐙 GitHub | [github.com/ampradana](https://github.com/ampradana) |
| 📍 Location | South Jakarta, DKI Jakarta, Indonesia |

---

## 📄 License

© 2025 Andika Malraherawan Pradana. All rights reserved.
The structure may be used as a reference; please don't clone the design as-is.
