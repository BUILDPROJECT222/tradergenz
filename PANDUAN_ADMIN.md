# 🎯 Admin Panel - Sistem Pendataan Registrasi Rebate

## ✨ Fitur Utama

### 📊 Dashboard Statistik Real-time

- Total Registrasi
- Registrasi Bulan Ini
- Registrasi Minggu Ini
- Registrasi Hari Ini

### 🔍 Pencarian & Filter

- Cari berdasarkan nomor akun atau username Telegram
- Filter berdasarkan waktu (Hari ini, Minggu ini, Bulan ini, Semua)

### 📋 Tabel Data Lengkap

- Nomor urut
- Broker
- Nomor Akun Exness
- Username Telegram (klik untuk chat langsung di Telegram)
- Waktu pendaftaran
- Aksi hapus data

### 💾 Export & Backup

- Export data ke CSV
- Hapus data individual atau seluruh data
- Refresh data

---

## 🚀 Cara Akses Admin Panel

### Metode 1: URL Langsung

```
http://localhost:8080/admin
```

### Metode 2: Keyboard Shortcut (RAHASIA)

Tekan: **Ctrl + Shift + A**

### Metode 3: Triple Click Logo (RAHASIA)

Klik logo "Tradergenz" di navbar 3x dalam 2 detik

---

## 📝 Cara Menggunakan

### 1. Melihat Data

- Buka halaman admin panel
- Data akan otomatis dimuat dari localStorage
- Scroll untuk melihat semua data

### 2. Mencari Data

- Ketik nomor akun atau username di kotak pencarian
- Hasil akan difilter secara otomatis

### 3. Filter Berdasarkan Tanggal

- Pilih filter: Hari Ini, Minggu Ini, Bulan Ini, atau Semua Waktu
- Data akan difilter sesuai pilihan

### 4. Export Data ke CSV

- Klik tombol "Export CSV"
- File akan terdownload otomatis
- Nama file: `registrasi-rebate-YYYY-MM-DD.csv`

### 5. Menghapus Data

- **Hapus 1 data**: Klik tombol "Hapus" di kolom aksi
- **Hapus semua**: Klik "Hapus Semua" → konfirmasi → ketik "HAPUS SEMUA"

### 6. Refresh Data

- Klik tombol "Refresh" untuk memuat ulang data

### 7. Chat Langsung dengan Member

- Klik username Telegram di tabel
- Akan membuka chat Telegram langsung

---

## 🧪 Testing dengan Demo Data

Untuk testing admin panel dengan data dummy:

1. Buka browser console (F12)
2. Copy isi file `demo-data.js`
3. Paste di console dan Enter
4. Refresh halaman admin panel
5. Data demo akan muncul

---

## ⚠️ Penting untuk Diketahui

### Sistem Penyimpanan

- Data disimpan di **localStorage** browser
- Data akan hilang jika cache browser dibersihkan
- **WAJIB backup** dengan Export CSV secara berkala

### Alur Kerja

```
User daftar di /tutorial
    ↓
Data tersimpan di localStorage
    ↓
Email terkirim ke admin
    ↓
Admin cek di Admin Panel
    ↓
Admin export CSV untuk backup
```

### Keamanan

- Jangan share URL admin panel
- Gunakan shortcut keyboard untuk akses
- Clear history setelah akses admin

---

## 🔧 Troubleshooting

### Data tidak muncul?

1. Pastikan ada registrasi melalui form `/tutorial`
2. Buka console (F12) cek error
3. Cek localStorage: `localStorage.getItem('rebateRegistrations')`
4. Klik tombol Refresh

### Export CSV tidak jalan?

1. Pastikan ada data
2. Izinkan download di browser
3. Disable popup blocker

### Data hilang setelah clear cache?

- Ini normal karena menggunakan localStorage
- Solusi: Export CSV secara berkala

---

## 📞 Kontak Admin

- **Email**: riandilesspaul30@gmail.com
- **Telegram**: @Wickeths
- **WhatsApp**: [Join Grup](https://chat.whatsapp.com/D58mavWj90vIMlSqCyNayT)

---

## 🎨 Screenshot Preview

Admin panel memiliki tampilan modern dengan:

- ✅ Dark theme gradient
- ✅ Responsive design
- ✅ Real-time statistics
- ✅ Interactive table
- ✅ Smooth animations

---

**Dibuat dengan ❤️ oleh TraderGenz Team**  
**Versi**: 1.0.0  
**Tanggal**: Desember 2025
