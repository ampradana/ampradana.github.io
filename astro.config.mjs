// @ts-check
import { defineConfig } from 'astro/config';

// GitHub user site (ampradana.github.io) served via the custom domain ampradana.my.id
// at the root, so no `base` path is needed — only `site` for absolute URLs (OG, canonical).
// The domain is set by public/CNAME (copied to dist/) + repo Settings → Pages.
export default defineConfig({
  site: 'https://ampradana.my.id',
  // Static output (default) — pure HTML/CSS/JS, deployable to GitHub Pages.
});
