#!/usr/bin/env bash
# Start a new cover letter draft from the evergreen template.
# Refuses to overwrite an existing cover-letter.html so a draft-in-progress is never lost.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TEMPLATE="$ROOT/cover-letters/cover-letter.template.html"
DRAFT="$ROOT/cover-letters/cover-letter.html"

if [ ! -e "$TEMPLATE" ]; then
  echo "✗ Template missing: $TEMPLATE" >&2
  exit 1
fi

if [ -e "$DRAFT" ]; then
  echo "⚠ $DRAFT already exists — refusing to overwrite." >&2
  echo "  Archive (or delete) the current draft first, then re-run:" >&2
  echo "    mkdir -p cover-letters/archive" >&2
  echo "    mv cover-letters/cover-letter.html  cover-letters/archive/$(date +%F)-<company>-<role>.html" >&2
  echo "    mv cover-letters/cover_letter.pdf   cover-letters/archive/$(date +%F)-<company>-<role>.pdf" >&2
  exit 1
fi

cp "$TEMPLATE" "$DRAFT"
echo "✓ New draft started at cover-letters/cover-letter.html"
echo "  1. Replace the [BRACKETED] placeholders (search for '[' — 7 spots)."
echo "  2. Render the PDF:  npm run cover:pdf"
echo "  3. Upload cover-letters/cover_letter.pdf to the portal."
