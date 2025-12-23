# 🎯 Panduan Admin Panel - TraderGenz

## Cara Akses Admin Panel

Admin panel dapat diakses melalui beberapa cara:

### 1. Akses Langsung via URL

```
http://localhost:8080/admin
```

atau di production:

```
https://domain-anda.com/admin
```

### 2. Shortcut Keyboard (Recommended untuk keamanan)

Tekan kombinasi tombol:

- **Ctrl + Shift + A** (Windows/Linux)
- **Cmd + Shift + A** (Mac)

### 3. Triple Click pada Logo

Klik logo di navbar sebanyak 3 kali dalam 2 detik untuk membuka admin panel secara rahasia.

---

## 📊 Fitur Admin Panel

### 1. Dashboard Statistik

- **Total Registrasi**: Total semua pendaftar rebate
- **Bulan Ini**: Jumlah pendaftar dalam bulan berjalan
- **Minggu Ini**: Jumlah pendaftar dalam 7 hari terakhir
- **Hari Ini**: Jumlah pendaftar hari ini

### 2. Filter & Pencarian

- **Pencarian**: Cari berdasarkan nomor akun atau username Telegram
- **Filter Tanggal**:
  - Semua Waktu
  - Hari Ini
  - Minggu Ini
  - Bulan Ini

### 3. Tabel Data Registrasi

Setiap data registrasi menampilkan:

- Nomor urut
- Broker (Exness)
- Nomor Akun Exness
- Username Telegram (klik untuk chat langsung)
- Waktu pendaftaran
- Tombol aksi (Hapus)

### 4. Export Data

- **Export CSV**: Download semua data dalam format CSV untuk backup atau analisis lebih lanjut
- File akan terdownload dengan format: `registrasi-rebate-YYYY-MM-DD.csv`

### 5. Manajemen Data

- **Refresh**: Muat ulang data dari localStorage
- **Hapus Individual**: Hapus satu data registrasi
- **Hapus Semua**: Hapus semua data dengan konfirmasi ganda

---

## 💾 Sistem Penyimpanan

### LocalStorage

Data disimpan di browser menggunakan localStorage dengan key: `rebateRegistrations`

**Format Data:**

```json
[
  {
    "broker": "Exness",
    "accountNumber": "123456789",
    "telegramUsername": "@username",
    "timestamp": "2025-12-23T04:29:02.000Z"
  }
]
```

### ⚠️ Penting!

- Data akan hilang jika cache browser dibersihkan
- **WAJIB** melakukan backup data secara berkala dengan Export CSV
- Untuk solusi permanen, pertimbangkan menggunakan database backend

---

## 🔄 Integrasi dengan Form Pendaftaran

Setiap kali ada pendaftaran rebate melalui `/tutorial`:

1. Data akan tersimpan otomatis di localStorage
2. Email notifikasi tetap dikirim ke admin
3. Data dapat langsung dilihat di admin panel

---

## 🔒 Keamanan

### Cara Menjaga Keamanan Admin Panel:

1. **Jangan Share URL Admin Panel** ke publik
2. **Gunakan Shortcut Keyboard** untuk akses tersembunyi
3. **Disable Browser History** saat mengakses admin panel
4. **Backup Data Berkala** untuk menghindari kehilangan data

### Upgrade Keamanan (Opsional):

Untuk keamanan lebih tinggi, Anda bisa menambahkan:

- Password protection
- Authentication system
- Backend API dengan database
- Role-based access control

---

## 🛠️ Troubleshooting

### Data Tidak Muncul

1. Cek console browser (F12) untuk error
2. Pastikan localStorage tidak terblokir
3. Refresh halaman dengan Ctrl+F5
4. Cek apakah ada data di localStorage:
   ```javascript
   // Jalankan di browser console
   console.log(localStorage.getItem("rebateRegistrations"));
   ```

### Export CSV Tidak Berfungsi

1. Izinkan download di browser
2. Cek popup blocker
3. Pastikan ada data untuk diexport

### Data Hilang Setelah Clear Cache

- Data localStorage akan hilang jika cache dibersihkan
- Solusi: Export CSV secara berkala untuk backup

---

## 📞 Support

Jika ada pertanyaan atau perlu bantuan:

- Email: riandilesspaul30@gmail.com
- Telegram: @Wickeths

---

## 🚀 Upgrade ke Backend (Opsional)

Untuk sistem yang lebih robust, pertimbangkan:

### 1. Backend Options:

- **Node.js + Express + MongoDB**
- **Firebase Realtime Database**
- **Supabase PostgreSQL**
- **PHP + MySQL**

### 2. Keuntungan Backend:

- Data tidak hilang saat clear cache
- Akses multi-device
- Keamanan lebih baik
- Fitur lebih advance (analytics, export, dll)
- Backup otomatis

### 3. Estimasi Development Time:

- Setup backend: 2-4 jam
- Integration: 1-2 jam
- Testing: 1 jam
- **Total**: 4-7 jam

---

**Last Updated**: December 2025  
**Version**: 1.0.0  
**Developer**: TraderGenz Team
