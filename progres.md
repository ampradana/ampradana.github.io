# 📌 Progress Log — Portfolio Website

Catatan progres untuk memudahkan melanjutkan proyek di sesi berikutnya.

---

## ✅ Status saat ini: Migrasi ke Astro — SELESAI (belum diverifikasi visual oleh user)

Website lama (single-file `index.html`, vanilla HTML/CSS/JS) sudah dirombak total
menjadi proyek **Astro** dengan desain **minimalis & bersih** (gimmick terminal dihapus),
mengikuti benchmark <https://www.rezadwiputra.com/>.

Build lokal & preview lolos (HTTP 200, semua konten ter-render).

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
