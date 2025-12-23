<template>
  <main
    class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
  >
    <!-- Animated background dots -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 2px 2px,
            rgba(59, 130, 246, 0.3) 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-8 md:py-12">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
              🎯 Admin Panel
            </h1>
            <p class="text-gray-400">
              Kelola data pendaftaran rebate dengan mudah
            </p>
          </div>
          <div class="flex gap-3">
            <button
              @click="handleLogout"
              class="px-6 py-3 bg-red-600/50 hover:bg-red-600/70 text-white rounded-lg transition-all flex items-center space-x-2 border border-red-500"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </button>
            <button
              @click="$router.push('/')"
              class="px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg transition-all flex items-center space-x-2 border border-slate-600"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Home</span>
            </button>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div
            class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-blue-200 text-sm font-medium mb-1">
                  Total Registrasi
                </p>
                <h3 class="text-3xl font-bold text-white">
                  {{ registrations.length }}
                </h3>
              </div>
              <div
                class="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center"
              >
                <span class="text-2xl">📊</span>
              </div>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 shadow-lg"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-green-200 text-sm font-medium mb-1">Bulan Ini</p>
                <h3 class="text-3xl font-bold text-white">
                  {{ getMonthlyRegistrations() }}
                </h3>
              </div>
              <div
                class="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center"
              >
                <span class="text-2xl">📅</span>
              </div>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 shadow-lg"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-purple-200 text-sm font-medium mb-1">
                  Minggu Ini
                </p>
                <h3 class="text-3xl font-bold text-white">
                  {{ getWeeklyRegistrations() }}
                </h3>
              </div>
              <div
                class="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center"
              >
                <span class="text-2xl">⏰</span>
              </div>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-6 shadow-lg"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-amber-200 text-sm font-medium mb-1">Hari Ini</p>
                <h3 class="text-3xl font-bold text-white">
                  {{ getTodayRegistrations() }}
                </h3>
              </div>
              <div
                class="w-12 h-12 bg-amber-500/30 rounded-lg flex items-center justify-center"
              >
                <span class="text-2xl">🌟</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter & Search -->
      <div
        class="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 mb-6"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Search -->
          <div class="md:col-span-2">
            <label class="block text-white text-sm font-medium mb-2"
              >🔍 Cari</label
            >
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Cari berdasarkan nomor akun atau username telegram..."
              class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Date Filter -->
          <div>
            <label class="block text-white text-sm font-medium mb-2"
              >📆 Filter Tanggal</label
            >
            <select
              v-model="dateFilter"
              class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Semua Waktu</option>
              <option value="today">Hari Ini</option>
              <option value="week">Minggu Ini</option>
              <option value="month">Bulan Ini</option>
            </select>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-3 mt-4">
          <button
            @click="exportToCSV"
            class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all flex items-center space-x-2 text-sm font-medium"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Export CSV</span>
          </button>

          <button
            @click="clearAllData"
            class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all flex items-center space-x-2 text-sm font-medium"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <span>Hapus Semua</span>
          </button>

          <button
            @click="refreshData"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all flex items-center space-x-2 text-sm font-medium"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Refresh</span>
          </button>
        </div>
      </div>

      <!-- Data Table -->
      <div
        class="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden"
      >
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-slate-700/50">
              <tr>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                >
                  Broker
                </th>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                >
                  Nomor Akun
                </th>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                >
                  Telegram
                </th>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                >
                  Waktu Daftar
                </th>
                <th
                  class="px-6 py-4 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider"
                >
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-700/50">
              <tr
                v-for="(reg, index) in filteredRegistrations"
                :key="index"
                class="hover:bg-slate-700/30 transition-colors"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {{ index + 1 }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium"
                  >
                    {{ reg.broker }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {{ reg.accountNumber }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <a
                    :href="`https://t.me/${reg.telegramUsername.replace(
                      '@',
                      ''
                    )}`"
                    target="_blank"
                    class="text-blue-400 hover:text-blue-300 text-sm flex items-center space-x-1"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
                      />
                    </svg>
                    <span>{{ reg.telegramUsername }}</span>
                  </a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {{ formatDate(reg.timestamp) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    @click="deleteRegistration(index)"
                    class="px-3 py-1 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg transition-all text-xs font-medium"
                  >
                    Hapus
                  </button>
                </td>
              </tr>

              <!-- Empty State -->
              <tr v-if="filteredRegistrations.length === 0">
                <td colspan="6" class="px-6 py-12 text-center">
                  <div class="flex flex-col items-center justify-center">
                    <svg
                      class="w-16 h-16 text-gray-600 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p class="text-gray-400 text-lg font-medium mb-2">
                      Tidak ada data registrasi
                    </p>
                    <p class="text-gray-500 text-sm">
                      Data pendaftaran rebate akan muncul di sini
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination Info -->
        <div
          v-if="filteredRegistrations.length > 0"
          class="bg-slate-700/30 px-6 py-4 border-t border-slate-700/50"
        >
          <p class="text-sm text-gray-400">
            Menampilkan
            <span class="font-semibold text-white">{{
              filteredRegistrations.length
            }}</span>
            dari
            <span class="font-semibold text-white">{{
              registrations.length
            }}</span>
            registrasi
          </p>
        </div>
      </div>

      <!-- Info Box -->
      <div
        class="mt-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6"
      >
        <div class="flex items-start space-x-4">
          <div
            class="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <span class="text-xl">ℹ️</span>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-2">
              Informasi Penting Admin
            </h3>
            <ul class="text-gray-300 text-sm space-y-1">
              <li>
                • Data registrasi disimpan secara lokal di browser
                (localStorage)
              </li>
              <li>
                • Klik nama Telegram untuk langsung membuka chat di Telegram
              </li>
              <li>• Gunakan fitur Export CSV untuk backup data</li>
              <li>
                • Data akan hilang jika cache browser dibersihkan, pastikan
                backup rutin
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "AdminPanelView",
  data() {
    return {
      registrations: [],
      searchQuery: "",
      dateFilter: "all",
    };
  },
  computed: {
    filteredRegistrations() {
      let filtered = [...this.registrations];

      // Filter by search query
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (reg) =>
            reg.accountNumber.toLowerCase().includes(query) ||
            reg.telegramUsername.toLowerCase().includes(query) ||
            reg.broker.toLowerCase().includes(query)
        );
      }

      // Filter by date
      if (this.dateFilter !== "all") {
        const now = new Date();
        filtered = filtered.filter((reg) => {
          const regDate = new Date(reg.timestamp);
          switch (this.dateFilter) {
            case "today":
              return regDate.toDateString() === now.toDateString();
            case "week": {
              const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
              return regDate >= weekAgo;
            }
            case "month":
              return (
                regDate.getMonth() === now.getMonth() &&
                regDate.getFullYear() === now.getFullYear()
              );
            default:
              return true;
          }
        });
      }

      // Sort by newest first
      return filtered.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
    },
  },
  methods: {
    loadRegistrations() {
      const data = localStorage.getItem("rebateRegistrations");
      if (data) {
        this.registrations = JSON.parse(data);
      }
    },
    saveRegistrations() {
      localStorage.setItem(
        "rebateRegistrations",
        JSON.stringify(this.registrations)
      );
    },
    formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString("id-ID", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    deleteRegistration(index) {
      if (
        confirm(
          "Apakah Anda yakin ingin menghapus registrasi ini?\n\nData yang sudah dihapus tidak dapat dikembalikan."
        )
      ) {
        const actualIndex = this.registrations.findIndex(
          (reg) => reg === this.filteredRegistrations[index]
        );
        this.registrations.splice(actualIndex, 1);
        this.saveRegistrations();
      }
    },
    clearAllData() {
      if (
        confirm(
          "⚠️ PERINGATAN!\n\nApakah Anda yakin ingin menghapus SEMUA data registrasi?\n\nTindakan ini tidak dapat dibatalkan!"
        )
      ) {
        const confirmation = prompt(
          'Ketik "HAPUS SEMUA" untuk konfirmasi penghapusan:'
        );
        if (confirmation === "HAPUS SEMUA") {
          this.registrations = [];
          this.saveRegistrations();
          alert("✅ Semua data telah dihapus");
        } else {
          alert("❌ Penghapusan dibatalkan");
        }
      }
    },
    exportToCSV() {
      if (this.filteredRegistrations.length === 0) {
        alert("Tidak ada data untuk diexport");
        return;
      }

      const headers = [
        "No",
        "Broker",
        "Nomor Akun",
        "Telegram",
        "Waktu Daftar",
      ];
      const rows = this.filteredRegistrations.map((reg, index) => [
        index + 1,
        reg.broker,
        reg.accountNumber,
        reg.telegramUsername,
        this.formatDate(reg.timestamp),
      ]);

      let csvContent = headers.join(",") + "\n";
      rows.forEach((row) => {
        csvContent += row.join(",") + "\n";
      });

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      const filename = `registrasi-rebate-${
        new Date().toISOString().split("T")[0]
      }.csv`;

      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert(`✅ Data berhasil diexport ke ${filename}`);
    },
    refreshData() {
      this.loadRegistrations();
      alert("✅ Data berhasil direfresh");
    },
    getTodayRegistrations() {
      const today = new Date().toDateString();
      return this.registrations.filter(
        (reg) => new Date(reg.timestamp).toDateString() === today
      ).length;
    },
    getWeeklyRegistrations() {
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      return this.registrations.filter(
        (reg) => new Date(reg.timestamp) >= weekAgo
      ).length;
    },
    getMonthlyRegistrations() {
      const now = new Date();
      return this.registrations.filter((reg) => {
        const regDate = new Date(reg.timestamp);
        return (
          regDate.getMonth() === now.getMonth() &&
          regDate.getFullYear() === now.getFullYear()
        );
      }).length;
    },
    handleLogout() {
      if (confirm("Apakah Anda yakin ingin logout?")) {
        // Clear authentication
        localStorage.removeItem("adminAuthenticated");
        localStorage.removeItem("adminLoginTime");
        
        // Redirect to login
        this.$router.push("/admin-login");
      }
    },
  },
  mounted() {
    this.loadRegistrations();

    // Listen for new registrations from TutorialView
    window.addEventListener("storage", () => {
      this.loadRegistrations();
    });
  },
};
</script>

<style scoped>
/* Custom scrollbar for table */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: rgba(51, 65, 85, 0.3);
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}
</style>
