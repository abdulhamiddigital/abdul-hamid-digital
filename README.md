# ABDUL HAMID DIGITAL

Website toko pribadi (statis) untuk menjual media pembelajaran HTML, e-book, template Excel, desain, dan kaos. Berjalan di GitHub Pages, tanpa server dan tanpa biaya hosting.

## Struktur
- `index.html` beranda, `toko.html` katalog, `preorder.html` form pre-order, `tentang.html` profil/CV/artikel, `donasi.html` donasi
- `data/products.json` **daftar produk** (edit di sini untuk tambah/ubah produk)
- `assets/js/app.js` **pengaturan toko** (`CONFIG`: nomor WhatsApp, email, sosmed, link donasi)
- `assets/css/style.css` tampilan

## Cara upload ke GitHub
1. Buat repository baru di github.com (misalnya `abdulhamiddigital`), set **Public**.
2. Klik **Add file > Upload files**, seret **seluruh isi folder ini** (termasuk folder `assets` dan `data`), lalu **Commit changes**.
3. Buka **Settings > Pages**, pada *Source* pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, klik **Save**.
4. Tunggu 1-2 menit. Situs tampil di `https://USERNAME.github.io/NAMA-REPO/`.

## Langkah wajib sebelum online
1. Buka `assets/js/app.js`, ganti `wa` dan `email`, lengkapi `sosmed`.
2. Buka `data/products.json`, ganti produk contoh dengan produk Anda.
3. Lengkapi `tentang.html` (profil, aktivitas, artikel, CV).

## Menambah produk
Salin satu blok `{...}` di `data/products.json`, ubah isinya, beri `id` baru. `status`: `ready` atau `preorder`. `unggulan: true` menampilkannya di beranda.

## Penting: jangan taruh file berbayar di repo publik
Siapa pun bisa mengunduh isi repo publik. Simpan file berbayar (HTML, e-book, Excel) di Google Drive atau penyimpanan lain, lalu kirim tautan setelah pembayaran dikonfirmasi lewat WhatsApp. Folder `file-berbayar/` sudah masuk `.gitignore` untuk keperluan simpan lokal.

## Domain sendiri (opsional)
Settings > Pages > Custom domain, lalu atur DNS sesuai petunjuk GitHub.
