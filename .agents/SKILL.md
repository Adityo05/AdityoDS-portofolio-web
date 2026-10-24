---
name: portfolio-distinctive
description: Gunakan skill ini setiap kali membuat, mendesain ulang, atau mereview website portofolio (personal, desainer, developer, fotografer, penulis, studio kecil). Tujuannya tampilan elegan, punya karakter sendiri, dan TIDAK terlihat seperti template hasil AI. Mencakup arah konsep, tipografi, palet warna, layout, motion, dan checklist anti-template.
---

# Portfolio Distinctive

Kamu mendesain portofolio untuk satu orang atau satu studio tertentu. Hasil akhirnya harus terasa seperti dibuat oleh manusia yang punya selera, bukan hasil generator. Elegan di sini berarti terkendali, presisi, dan punya sudut pandang, bukan sekadar bersih dan rapi.

## 1. Mulai dari identitas, bukan dari template

Sebelum menulis kode, tentukan hal berikut. Kalau user belum memberi informasinya, tanya singkat (maksimal 3 pertanyaan) atau ambil asumsi yang masuk akal dan sebutkan asumsinya.

- Siapa orangnya, bidangnya apa, dan siapa yang akan melihat portofolio ini (recruiter, klien, kurator, sesama praktisi).
- Satu kata sifat utama yang harus terasa: misalnya tenang, tajam, hangat, editorial, industrial, playful-terkendali.
- Satu "objek referensi" dari dunia nyata sebagai jangkar visual: majalah cetak, label arsip, poster teater, buku katalog museum, manual teknis lama, sampul vinil, peta, kartu perpustakaan. Semua keputusan visual (grid, tipografi, warna, detail kecil) harus bisa dijelaskan lewat referensi ini.

Tulis konsep dalam 2-3 kalimat di awal jawaban. Jika konsep tidak bisa dirangkum, desainnya akan terasa acak.

## 2. Tipografi

### Hindari (terlalu identik dengan tampilan AI/template)
Inter, Roboto, Poppins, Montserrat, Open Sans, Space Grotesk, DM Sans sebagai font utama, Plus Jakarta Sans sebagai default, Playfair Display, serta font sistem (system-ui) sebagai identitas. Hindari juga pola "heading Space Grotesk + body Inter".

### Pilih
Gunakan maksimal 2 keluarga font (3 jika ada mono untuk detail). Kontras harus nyata: serif vs grotesk, atau display karakter vs teks netral. Sumber yang mudah dipakai: Google Fonts dan Fontshare (gratis, lisensi aman untuk web).

Contoh pasangan sebagai titik awal, pilih sesuai konsep, jangan selalu pakai yang sama:

| Karakter | Display | Teks | Detail/label |
|---|---|---|---|
| Editorial hangat | Instrument Serif | Familjen Grotesk | IBM Plex Mono |
| Arsip / katalog | Newsreader (opsz besar, italic) | Hanken Grotesk | DM Mono |
| Tegas, modern | Gambarino atau Young Serif | Switzer (Fontshare) | JetBrains Mono |
| Teknis, hemat | Familjen Grotesk (bobot berat) | Newsreader | Martian Mono |
| Humanis, lembut | Fraunces (WONK/SOFT aktif, jangan default) | Be Vietnam Pro | Spline Sans Mono |

Aturan tipografi:
- Skala besar dan berani untuk judul (clamp(3rem, 9vw, 9rem) itu wajar), teks isi tetap kecil dan nyaman (16-18px, line-height 1.55-1.7).
- Pakai fitur OpenType yang relevan: `font-variant-numeric: tabular-nums`, `font-feature-settings: "ss01", "liga"`, `text-wrap: balance` untuk judul, `text-wrap: pretty` untuk paragraf.
- Letter-spacing negatif tipis (-0.02em sampai -0.04em) untuk display besar; label kapital kecil diberi spasi (+0.08em).
- Satu momen tipografi yang berani per halaman (misalnya nama besar yang dipotong layar, atau angka proyek raksasa), sisanya tenang.
- Jangan semua teks di-center. Rata kiri dengan ritme yang jelas hampir selalu lebih elegan.

## 3. Warna

### Hindari (palet yang langsung terbaca "AI")
- Gradasi ungu-ke-biru atau ungu-ke-pink, indigo/violet sebagai aksen utama.
- Latar hitam/navy gelap + aksen cyan atau neon hijau.
- Putih bersih + abu-abu slate + satu aksen biru (gaya SaaS generik).
- Gradient mesh, blob blur berwarna, glow neon, glassmorphism berlebihan.
- Skema peach/pastel serba lembut tanpa kontras.

### Pilih
Bangun palet dari objek referensi, bukan dari generator palet. Struktur yang disarankan: 1 warna latar, 1 warna teks, 1 aksen yang dipakai sedikit (di bawah 10% permukaan), dan 1 warna netral pendukung. Latar dan teks tidak harus hitam-putih murni.

Arah palet contoh (ambil satu, modifikasi, jangan salin mentah):

- **Kertas koran & tinta**: latar `#EDE6D6`, teks `#1B1A17`, aksen merah bata `#B5391E`, netral `#CFC6B0`.
- **Arsip hijau lumut**: latar `#E4E2D3`, teks `#1F2A1F`, aksen oker `#C48A1B`, netral `#B9BBA2`.
- **Gelap hangat (bukan navy)**: latar `#1A1512` (cokelat hitam), teks `#EDE3D1`, aksen terakota `#D9663B`, netral `#4A3F36`.
- **Biru cetak teknis**: latar `#F1EFE8`, teks `#0F2A44`, aksen oranye keselamatan `#E8591A`, netral `#C7CBC9`.
- **Tanah liat & sage**: latar `#E9DCCB`, teks `#2B2420`, aksen sage tua `#5E6B4E`, netral `#C4B29B`.

Aturan warna:
- Definisikan semua sebagai CSS variables di `:root`, termasuk varian untuk dark mode jika dipakai.
- Cek kontras teks minimal WCAG AA (4.5:1) untuk teks isi.
- Aksen dipakai untuk satu fungsi saja (misalnya hover, status, penanda proyek terbaru), bukan untuk dekorasi acak.
- Tambahkan tekstur halus bila cocok dengan konsep: noise grain sangat tipis (opacity 3-6%), garis halus 1px, bukan bayangan tebal.

## 4. Layout dan struktur

- Gunakan grid 12 kolom yang terlihat disengaja: asimetri, margin lebar di satu sisi, elemen yang sengaja keluar dari kolom. Hindari susunan hero-center + 3 kartu fitur sejajar.
- Daftar proyek bisa berbentuk tabel/indeks bergaya katalog (nomor, judul, tahun, peran, kategori) dengan preview gambar muncul saat hover, bukan grid kartu seragam bergaris-radius besar.
- Variasikan skala gambar: satu gambar penuh lebar, satu kecil dengan caption panjang, satu vertikal. Ritme visual lebih penting daripada keseragaman.
- Border radius konsisten dan dipilih sadar: 0px (tegas) atau sangat kecil (2-4px). Hindari semua elemen membulat 16-24px dengan bayangan lembut, itu ciri khas template.
- Jarak: pakai skala spacing yang tetap (4/8/16/24/48/96/160). Ruang kosong besar itu sinyal elegan; jangan takut ruang kosong.
- Detail yang membuat terasa dibuat tangan: nomor indeks (01/08), koordinat atau jam lokal, caption bergaya museum, garis pemisah tipis, tanda silang/registration mark, label kecil kapital.
- Navigasi sederhana dan konsisten, tidak lebih dari 4-5 item. Tombol CTA jelas (kontak/email) tanpa gaya "pill gradient".
- Salinan teks: tulis dengan suara orang itu sendiri, spesifik, tanpa klise ("passionate", "crafting digital experiences", "turning ideas into reality"). Judul proyek harus menyebut hasil atau konteks nyata.

## 5. Motion dan interaksi

- Motion sedikit dan bermakna: reveal teks per baris saat masuk, transisi halaman halus, hover yang mengubah satu hal (warna, posisi, gambar). Durasi 300-600ms, easing seperti `cubic-bezier(0.22, 1, 0.36, 1)`.
- Hindari: efek parallax berlebihan, partikel melayang, kursor kustom yang menghalangi, animasi gradient bergerak, elemen yang bergoyang tanpa henti.
- Hormati `prefers-reduced-motion`.
- Satu interaksi "tanda tangan" yang unik dan relevan dengan bidang orangnya (misalnya preview gambar mengikuti kursor di indeks proyek, atau jam lokal yang berjalan).

## 6. Teknis

- HTML semantik, satu file per halaman atau komponen terstruktur rapi, CSS variables untuk token desain.
- Responsif dengan pendekatan mobile dulu; uji lebar 360px sampai 1440px. Tidak ada scroll horizontal tak sengaja.
- Gambar: `loading="lazy"`, ukuran eksplisit untuk mencegah layout shift, format modern (WebP/AVIF) jika memungkinkan.
- Aksesibilitas: fokus terlihat jelas, alt text bermakna, urutan heading benar, kontras teks cukup.
- Performa: muat hanya bobot font yang dipakai, gunakan `font-display: swap`, hindari library animasi berat kalau CSS cukup.

## 7. Checklist anti-template (wajib dijalankan sebelum menyerahkan hasil)

Jawab jujur. Jika ada jawaban "ya" pada poin bahaya, ulangi bagian terkait.

1. Apakah hero berisi sapaan generik + tombol ganda + gradient di belakangnya? (bahaya)
2. Apakah ada gradasi ungu/biru, glow neon, atau blob blur? (bahaya)
3. Apakah font utama salah satu dari daftar hindari? (bahaya)
4. Apakah semua kartu sama ukuran, radius besar, bayangan lembut? (bahaya)
5. Apakah ada ikon emoji atau ikon gaya generik di tiap section? (bahaya)
6. Apakah semua section di-center dengan pola judul-subjudul-3 kolom? (bahaya)
7. Apakah ada satu konsep yang bisa dijelaskan dalam satu kalimat dan terlihat di setiap keputusan? (harus ya)
8. Apakah ada setidaknya satu detail kecil yang spesifik untuk orang ini dan tidak akan cocok di portofolio orang lain? (harus ya)
9. Apakah teks salinan terdengar seperti orangnya, bukan brosur? (harus ya)
10. Jika semua logo, nama, dan foto diganti, apakah desainnya tetap terlihat punya karakter? (harus ya)

## 8. Cara bekerja

1. Tulis konsep, referensi, palet (hex), dan pasangan font dalam ringkasan singkat sebelum kode.
2. Bangun token desain dulu (warna, font, spacing, radius), baru layout, lalu detail dan motion.
3. Buat konten placeholder yang realistis dan spesifik, bukan "Lorem ipsum" atau "Project Name".
4. Jalankan checklist di bagian 7, perbaiki, lalu serahkan dengan catatan singkat tentang pilihan desain dan cara menggantinya (variabel CSS mana yang diubah untuk palet/font lain).
5. Jika user menolak arah tertentu, ganti referensi dan palet secara menyeluruh, jangan hanya menukar warna aksen.
