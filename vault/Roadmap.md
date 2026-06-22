---
title: Roadmap
tags: [status/idea]
---

# Roadmap

Backlog for the personal site. Nothing here is committed work — just ideas to
revisit when there's time / motivation.

## High value

- [ ] **Blog** — `/blog` powered by Astro content collections (Markdown files).
  Topics that naturally write themselves: Odoo migration playbooks (v11→v14→v16),
  POS integration patterns, DMS / SFA architecture, ERP–ETL pipelines, *"why I
  rebuilt my portfolio in Astro"*. Setting up content collections is straightforward;
  the real work is writing.
- [ ] **Custom OG image** — currently we reuse the profile photo as the link preview.
  A purpose-built 1200×630 OG with name + role + URL would look more polished when
  shared. Can render the same way as [[LinkedIn Banner]] (HTML → Chrome → PNG).

## Medium value

- [ ] **Real client logos** — Clients section uses text monograms because I don't
  have real logo files. Sourcing them (and getting permission) would lift the section.
- [ ] **Animated marquee for Clients** — the reference (rezadwiputra.com) has an
  auto-scrolling marquee. Subtle motion can be catchy but adds a tiny JS dep.
- [ ] **TXT-based domain verification** — Settings → Pages → "Add a domain" with a
  TXT record `_github-pages-challenge-ampradana` protects against domain takeover.
  Optional, recommended.
- [ ] **Lighthouse / a11y pass** — site is probably already 95+ but worth verifying
  contrast on the gradient hero, focus rings, alt text on the profile photo, etc.

## Nice-to-have

- [ ] **`/uses` page** — popular among devs, lists tools/hardware.
- [ ] **Sitemap + robots.txt** — `@astrojs/sitemap` integration; helps SEO a bit.
- [ ] **RSS feed** — only meaningful once the Blog exists.
- [ ] **Multiple language support** — site is currently EN; an ID toggle could
  broaden reach but doubles maintenance.
- [ ] **Print stylesheet for the home page** — so printing the portfolio looks
  decent (lower priority than the CV PDF which already prints well).

## Not planned (deliberate)

- ❌ Analytics / tracking — keep it simple, no third-party scripts.
- ❌ Comments / a contact form with backend — keep it static; email is enough.
- ❌ Switching back to Next.js or any SSR — see [[Design Decisions#1. Astro (not Next.js, not Jekyll)]].
