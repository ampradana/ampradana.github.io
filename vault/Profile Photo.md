---
title: Profile Photo
tags: [area/asset, area/design]
---

# Profile Photo

## Current state

- **File served:** `public/andika.jpg` — **neutral grayscale (B&W)**, 685×824, ~32 KB.
- Used as: hero photo (circular crop on the homepage) **and** Open Graph image (link preview).
- Color original (backup): `legacy/andika-original.jpg` (gitignored — git history also has it).

## Recipe (B&W version currently in use)

```bash
convert legacy/andika-original.jpg \
  -colorspace Gray \
  -modulate 100,0 \
  -sigmoidal-contrast 3x50% \
  public/andika.jpg
```

(`-modulate 100,0` strips any residual saturation; `-sigmoidal-contrast 3x50%` adds a
gentle S-curve so skin/hair separate cleanly without crushing detail.)

## Why B&W (and not the indigo duotone we tried first)

The first themed attempt was a bold indigo duotone (recipe below). On the dark hero
inside the circular avatar frame it read as a **fake replaced background** — the
flat indigo behind the subject made it look like a Photoshop cut-out, not a portrait.

Neutral grayscale on white background reads cleanly inside the circle, looks classic
and professional, and works just as well for the Open Graph preview.

### Duotone recipe (kept for reference, not currently used)

```bash
convert legacy/andika-original.jpg \
  -colorspace Gray -sigmoidal-contrast 7x48% \
  -fill "#5b63e0" -colorize 50 \
  public/andika.jpg
```

## When to regenerate

- If the source photo changes (replace `legacy/andika-original.jpg`).
- If you want to swap treatments (B&W ↔ duotone ↔ subtle cool).

Then commit `public/andika.jpg`. Filename is referenced in `src/data/site.ts`
(`profile.photo = '/andika.jpg'`), so keeping the name avoids touching code.

Related: [[Design Decisions#Photo treatment]], [[Content Workflow]].
