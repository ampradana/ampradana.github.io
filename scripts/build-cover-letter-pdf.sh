#!/usr/bin/env bash
# Render cover-letters/cover-letter.html → cover-letters/cover_letter.pdf via headless Chrome.
# Run after editing the HTML for a new application. Commit both HTML + PDF for archival.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

CHROME="$(command -v google-chrome || command -v chromium || command -v chromium-browser || true)"
if [ -z "$CHROME" ]; then
  echo "✗ No Chrome/Chromium found. Install one, or print cover-letter.html to PDF manually from a browser." >&2
  exit 1
fi

OUT="$ROOT/cover-letters/cover_letter.pdf"
SRC="file://$ROOT/cover-letters/cover-letter.html"

echo "▶ Rendering cover letter PDF via ${CHROME##*/}…"
"$CHROME" --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer \
  --user-data-dir=/tmp/chrome-cover \
  --print-to-pdf="$OUT" "$SRC" 2>/dev/null

PAGES=$(pdfinfo "$OUT" 2>/dev/null | awk '/Pages/{print $2}')
SIZE=$(du -h "$OUT" | cut -f1)
echo "✓ $OUT regenerated (${SIZE}, ${PAGES} page${PAGES:+s})"
