---
title: Custom Domain
tags: [area/deploy, status/done]
---

# Custom Domain — ampradana.my.id

The site is served from the apex domain **`ampradana.my.id`** over HTTPS. Domain
registered at **Rumahweb** (Indonesian registrar). The previous default GitHub
URL `ampradana.github.io` now redirects here.

## Repo-side configuration (already in place)

| File | Setting |
|---|---|
| `public/CNAME` | Single line: `ampradana.my.id` (copied verbatim into `dist/`) |
| `astro.config.mjs` | `site: 'https://ampradana.my.id'` (drives canonical + Open Graph URLs) |
| `src/data/site.ts` | `social.website: 'ampradana.my.id'` (footer + CV contact line) |

## DNS records at Rumahweb

For the apex (`ampradana.my.id`):

| Type | Host | Value |
|---|---|---|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| AAAA | @ | `2606:50c0:8000::153` |
| AAAA | @ | `2606:50c0:8001::153` |
| AAAA | @ | `2606:50c0:8002::153` |
| AAAA | @ | `2606:50c0:8003::153` |

For `www.ampradana.my.id`:

| Type | Host | Value |
|---|---|---|
| CNAME | `www` | `ampradana.github.io.` (note the trailing dot, NO `www.` prefix on the target) |

> ⚠️ **Common Rumahweb form mistake:** leaving the "Domain" field empty when adding the www CNAME
> creates a CNAME on the apex, which conflicts with the apex's SOA record and fails with
> *"ampradana.my.id. already has a SOA record. You may not mix CNAME records with other records for the same name."*
> Fill the field with **`www`**.

## GitHub Pages settings (already done)

Settings → Pages → **Source: GitHub Actions**, **Custom domain: `ampradana.my.id`**, **Enforce HTTPS: ✅**.
TLS certificate auto-provisioned by GitHub via Let's Encrypt (`CN = ampradana.my.id`, auto-renews).

## Verification commands

```bash
dig +short ampradana.my.id A           # → 185.199.108–111.153
dig +short ampradana.my.id AAAA        # → 4 IPv6
dig +short www.ampradana.my.id         # → ampradana.github.io. → IPs
curl -sI https://ampradana.my.id/      # → HTTP/2 200
curl -sI http://ampradana.my.id/       # → 301 redirect to https
echo | openssl s_client -connect ampradana.my.id:443 -servername ampradana.my.id 2>/dev/null \
  | openssl x509 -noout -issuer -subject -dates
```

## Order-of-operations caveat (the one we hit)

If you ever **migrate to a different domain or re-add the CNAME**, do **DNS first**,
then update `public/CNAME` and the GitHub Pages setting. Otherwise the
`ampradana.github.io` URL will redirect to a domain that doesn't resolve yet,
briefly looking like the site is down. In practice this turned out to be harmless
in our case (it self-healed once DNS propagated), but the order is the safe play.

See [[Deployment]] for the build/deploy pipeline.
