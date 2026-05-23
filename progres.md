# 📌 Progress Log — Portfolio Website

Catatan progres untuk memudahkan melanjutkan proyek di sesi berikutnya.

---

## ✅ Status saat ini: LIVE 🎉 (deployed 2026-05-23)

Website lama (single-file `index.html`, vanilla HTML/CSS/JS) sudah dirombak total
menjadi proyek **Astro** dengan desain **minimalis & bersih** (gimmick terminal dihapus),
mengikuti benchmark <https://www.rezadwiputra.com/>.

Sudah **tayang di <https://ampradana.github.io>** via GitHub Actions (Pages source =
"GitHub Actions"). Diverifikasi live: HTTP 200, OG tags aktif, 8 logo Simple Icons,
section Clients tampil, situs lama tergantikan total, CV & foto reachable.
Setiap push ke `main` otomatis build & deploy.

---

## 🆕 Update 2026-05-23 (sesi 2) — CV ATS + foto bertema

- **Foto** `public/andika.jpg` diganti jadi **duotone indigo pekat** (sesuai tema situs;
  dipilih user dari beberapa varian). Foto warna asli di-backup ke `legacy/andika-original.jpg`
  (gitignored). Filename tetap → tidak perlu ubah kode hero/og.
- **CV ATS** dibuat dari sumber data yang sama (`src/data/site.ts`):
  - Halaman web `/cv` ([src/pages/cv.astro](src/pages/cv.astro)) — 1 kolom, teks polos, heading
    standar, tanpa foto/ikon/tabel → ATS-parseable. Urutan baca linear (diverifikasi pdftotext).
  - PDF `public/cv_andika.pdf` = print teks-asli dari `/cv` (A4, 2 halaman, tanpa header/footer cetak).
  - Regenerasi: `npm run cv:pdf` (butuh Chrome lokal; script `scripts/build-cv-pdf.sh`).
    CI tidak meregenerasi PDF — hanya menyajikan file yang sudah di-commit.
  - Data CV tambahan masuk ke `site.ts`: `cvSummary`, `cvSkills`, `languages`, `organizations`,
    `social.phone`, `social.website`.
- ⚠️ Catatan ATS: CV Canva lama itu 2-kolom (sidebar) → buruk untuk ATS. Versi baru sengaja 1 kolom.

---

## 🧱 Tech stack baru

- **Astro 5.x** — output statis murni (zero JS by default), deploy ke GitHub Pages via GitHub Actions.
- CSS custom properties (dark/light theme, default dark, no-flash).
- Konten terpusat di **`src/data/site.ts`** (edit teks di sini, bukan di markup).
- Ikon brand: Simple Icons CDN (`cdn.simpleicons.org`) + inline SVG untuk social.
- Font: Google Fonts — Sora.

## 📁 Struktur penting

```
src/data/site.ts          ← SEMUA konten (profile, skills, experience, projects, clients, education)
src/layouts/Base.astro    ← <head>, SEO/Open Graph, theme init, fonts, reveal observer
src/components/*.astro     ← Nav, Hero, About, Skills, Experience, Projects, Clients, Education, Contact, Footer
src/styles/global.css      ← design tokens + primitives
src/pages/index.astro      ← perakitan halaman
.github/workflows/deploy.yml ← build + deploy ke Pages
public/                    ← andika.jpg, cv_andika.pdf (disajikan di root)
legacy/index.legacy.html   ← backup site lama (gitignored)
```

---

## ⚙️ Cara menjalankan (PENTING: Node)

Node sistem = v10 (terlalu tua). **WAJIB pakai Node 20 dari nvm**:

```bash
export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"
npm install
npm run dev      # http://localhost:4321
npm run build    # → ./dist
npm run preview
```

---

## ⚠️ Langkah manual SEKALI (deploy)

Pages harus dipindah dari "deploy from branch" ke Actions:
**Settings → Pages → Build and deployment → Source → "GitHub Actions"**.
Setelah itu setiap push ke `main` otomatis build & publish ke ampradana.github.io.

> Catatan: root `index.html` lama sudah dihapus. Kalau Pages MASIH "deploy from branch"
> saat push, situs bisa 404 sebentar sampai Source dipindah ke GitHub Actions
> (lalu re-run workflow bila perlu).

---

## 🎯 Selesai di sesi ini

- [x] Migrasi vanilla → Astro (komponen + data file terpisah)
- [x] Desain minimalis, hapus terminal card, palet netral 1 aksen, dark/light no-flash
- [x] Fix mobile (hamburger menu — bug lama: menu hilang di HP)
- [x] Tambah SEO + Open Graph + Twitter card + canonical + favicon SVG
- [x] Foto base64 50KB → file terpisah di public/
- [x] Ikon emoji → logo brand asli (Simple Icons)
- [x] Section baru: Clients & Collaborations
- [x] GitHub Actions workflow untuk Pages
- [x] README diperbarui

## 🔭 Ide lanjutan (belum dikerjakan)

- [ ] Tambah halaman **Blog** (Astro content collections / Markdown) — seperti referensi.
- [ ] Custom domain (mis. andikapradana.com) bila diinginkan.
- [ ] Logo client asli (saat ini pakai monogram tekstual).
- [ ] OG image khusus (saat ini pakai foto profil).
- [ ] Animasi marquee untuk Clients (opsional, sengaja dibuat statis demi minimalis).
