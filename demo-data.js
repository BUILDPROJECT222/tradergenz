// Demo Data untuk Testing Admin Panel
// Copy dan paste kode berikut di Console Browser (F12) untuk menambahkan sample data

const demoData = [
  {
    broker: "Exness",
    accountNumber: "123456789",
    telegramUsername: "@trader_demo1",
    timestamp: new Date(2025, 11, 23, 10, 30).toISOString()
  },
  {
    broker: "Exness",
    accountNumber: "987654321",
    telegramUsername: "@trader_demo2",
    timestamp: new Date(2025, 11, 23, 11, 45).toISOString()
  },
  {
    broker: "Exness",
    accountNumber: "456789123",
    telegramUsername: "@pro_trader",
    timestamp: new Date(2025, 11, 22, 15, 20).toISOString()
  },
  {
    broker: "Exness",
    accountNumber: "789123456",
    telegramUsername: "@forex_master",
    timestamp: new Date(2025, 11, 20, 9, 10).toISOString()
  },
  {
    broker: "Exness",
    accountNumber: "321654987",
    telegramUsername: "@trading_king",
    timestamp: new Date(2025, 11, 15, 14, 30).toISOString()
  }
];

// Simpan ke localStorage
localStorage.setItem('rebateRegistrations', JSON.stringify(demoData));
console.log('✅ Demo data berhasil ditambahkan!');
console.log('Total data:', demoData.length);
console.log('Refresh halaman admin panel untuk melihat data');
