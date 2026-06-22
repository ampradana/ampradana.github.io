---
title: LinkedIn Banner
tags: [area/asset]
---

# LinkedIn Banner

A 1584×396 brand cover image for the LinkedIn profile, on-brand with the site.

## Files

| Path | What |
|---|---|
| `brand/linkedin-banner.png` | The final image — upload this to LinkedIn |
| `brand/linkedin-banner.html` | The source HTML/CSS — edit this to change copy or design |

## Design choices

- **1584 × 396** (LinkedIn personal cover ratio, 4:1).
- Indigo / dark theme matching the site (`#7c8cff` accent, dark navy bg, faint dot-grid).
- Horizontal gradient (90deg): dark on the left (where the **profile avatar overlaps**),
  bright indigo on the right (where the text/URL lives) — fills the whole banner so
  there's no dark dead space at the bottom.
- Content anchored on the **right** with a vertical accent line, mirroring the
  Wings reference style. Bottom-anchored so the URL pill always has a safe margin.
- Headline echoes the site's contact heading: **"Let's build ERP that actually works."**
- URL pill prominently shows **🌐 ampradana.my.id** (the whole point of the banner).

## How to regenerate

⚠️ **Important quirk:** Chrome `--headless=new` under-renders the viewport by ~68 px,
so a `--window-size=1584,396` would leave the bottom of the banner showing the body
background. The fix is to render TALLER then crop:

```bash
google-chrome --headless=new --no-sandbox --disable-gpu --hide-scrollbars \
  --window-size=1584,560 --virtual-time-budget=5000 \
  --screenshot="$PWD/brand/_raw.png" \
  "file://$PWD/brand/linkedin-banner.html"

convert brand/_raw.png -crop 1584x396+0+0 +repage brand/linkedin-banner.png
rm brand/_raw.png
```

(The same command is also embedded as a comment at the top of `brand/linkedin-banner.html` for convenience.)

See [[Troubleshooting#Headless Chrome under-renders height]] for the diagnostic details.

## How to edit copy / colors

Open `brand/linkedin-banner.html` and tweak:
- `.headline` → the big tagline
- `.eyebrow` → the small uppercase line
- `.keywords` → the tech keywords row
- `.url` → the URL pill text + sizing
- `.banner` `background:` → the gradient

Then re-run the regen command above.

## Uploading to LinkedIn

LinkedIn profile → Edit profile → camera icon on the banner → Add/Edit background → pick `brand/linkedin-banner.png`.
