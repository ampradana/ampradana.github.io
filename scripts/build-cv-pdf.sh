#!/usr/bin/env bash
# Regenerate the ATS résumé PDF (public/cv_andika.pdf) from src/pages/cv.astro.
# Run locally whenever CV content in src/data/site.ts changes, then commit the PDF.
# (The GitHub Actions deploy does NOT run this — it just serves the committed PDF.)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "▶ Building site (generates dist/cv/index.html)…"
npm run build

CHROME="$(command -v google-chrome || command -v chromium || command -v chromium-browser || true)"
if [ -z "$CHROME" ]; then
  echo "✗ No Chrome/Chromium found. Install one, or print /cv to PDF manually from a browser." >&2
  exit 1
fi

echo "▶ Rendering text-based PDF via ${CHROME##*/}…"
"$CHROME" --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer \
  --user-data-dir=/tmp/chrome-cv \
  --print-to-pdf="$ROOT/public/cv_andika.pdf" \
  "file://$ROOT/dist/cv/index.html" 2>/dev/null

echo "✓ public/cv_andika.pdf regenerated ($(du -h "$ROOT/public/cv_andika.pdf" | cut -f1), $(pdftotext "$ROOT/public/cv_andika.pdf" - 2>/dev/null | grep -c . ) text lines)"
