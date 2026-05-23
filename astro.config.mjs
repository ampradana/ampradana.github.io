// @ts-check
import { defineConfig } from 'astro/config';

// This is a GitHub *user* site (ampradana.github.io), served at the root domain.
// So no `base` path is needed — only `site` for absolute URLs (sitemap, Open Graph).
export default defineConfig({
  site: 'https://ampradana.github.io',
  // Static output (default) — pure HTML/CSS/JS, deployable to GitHub Pages.
});
