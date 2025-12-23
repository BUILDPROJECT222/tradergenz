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

    <div class="relative z-10 container mx-auto px-4 py-12 md:py-20">
      <div class="max-w-4xl mx-auto">
        <!-- Back Button -->
        <button
          @click="$router.go(-1)"
          class="mb-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Kembali
        </button>

        <!-- Article Content -->
        <article class="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Itu Rebate?
          </h1>

          <div class="prose prose-lg max-w-none text-gray-700">
            <p class="text-lg text-gray-600 mb-6">
              Dalam dunia trading forex, ada banyak istilah dan konsep yang
              mungkin terdengar asing bagi para trader pemula. Salah satu konsep
              yang sering muncul adalah rebate forex. Artikel ini akan
              menjelaskan secara detail apa itu rebate forex, bagaimana cara
              kerjanya, dan manfaat yang dapat diperoleh trader dari program
              ini.
            </p>

            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Apa Itu Rebate Forex?
            </h2>
            <p class="mb-6">
              Rebate forex adalah program yang ditawarkan oleh broker atau pihak
              ketiga kepada trader, di mana sejumlah uang dikembalikan kepada
              trader berdasarkan volume trading mereka. Singkatnya, setiap kali
              trader melakukan transaksi, mereka akan mendapatkan sebagian dari
              spread atau komisi yang telah dibayarkan kepada broker.
            </p>

            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Bagaimana Cara Kerja Rebate Forex?
            </h2>
            <p class="mb-4">
              Untuk lebih memahami cara kerja rebate forex, mari kita lihat
              langkah-langkahnya:
            </p>

            <div class="space-y-6 mb-8">
              <div class="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  1. Registrasi Program Rebate
                </h3>
                <ul class="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>
                    Trader harus mendaftar di bawah mitra kita, anda tidak bisa
                    mendaftar sendiri kepada pihak broker tanpa bergabung dengan
                    Team Trader Gen - Z, Pendaftaran ini gratis tanpa memerlukan
                    biaya tambahan.
                  </li>
                  <li>
                    Registrasi akun Broker exness anda menggunakan Tautan Link
                    Kita
                  </li>
                  <li>
                    Registrasi Program rebate anda melalui team Trader Gen - Z
                    yang sudah terpilih sebagai penyedia rebate pihak ke 2 dari
                    exness.
                  </li>
                </ul>
              </div>

              <div
                class="bg-green-50 rounded-lg p-6 border-l-4 border-green-500"
              >
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  2. Melakukan Trading
                </h3>
                <p>
                  Setelah terdaftar, trader melakukan transaksi seperti biasa di
                  platform trading mereka. Tidak ada perubahan dalam cara
                  trading atau strategi yang digunakan.
                </p>
              </div>

              <div
                class="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500"
              >
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  3. Mengumpulkan Rebate
                </h3>
                <p>
                  Setiap kali trader melakukan transaksi, broker akan mencatat
                  volume trading tersebut. Berdasarkan volume ini, rebate akan
                  dihitung dan dikumpulkan.
                </p>
              </div>

              <div
                class="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500"
              >
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  4. Pembayaran Rebate
                </h3>
                <p>
                  Rebate yang telah dikumpulkan akan dibayarkan kepada trader
                  pada interval waktu tertentu, misalnya mingguan atau bulanan.
                  Pembayaran ini bisa dilakukan melalui transfer bank, e-wallet,
                  atau langsung ke akun trading trader.
                </p>
              </div>
            </div>

            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Manfaat Rebate Forex
            </h2>
            <p class="mb-4">Beberapa manfaat rebate forex bagi trader:</p>

            <div class="grid md:grid-cols-2 gap-4 mb-8">
              <div class="bg-slate-50 rounded-lg p-5">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  📉 Pengurangan Biaya Trading
                </h3>
                <p class="text-sm">
                  Rebate forex secara efektif mengurangi biaya trading Anda.
                  Dengan mendapatkan kembali sebagian dari spread atau komisi,
                  total biaya yang Anda keluarkan untuk trading menjadi lebih
                  rendah.
                </p>
              </div>

              <div class="bg-slate-50 rounded-lg p-5">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  💰 Peningkatan Profitabilitas
                </h3>
                <p class="text-sm">
                  Dengan biaya trading yang lebih rendah, profitabilitas Anda
                  sebagai trader akan meningkat. Rebate forex bisa menjadi
                  tambahan keuntungan yang signifikan, terutama bagi mereka yang
                  sering melakukan transaksi.
                </p>
              </div>

              <div class="bg-slate-50 rounded-lg p-5">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  🚀 Motivasi untuk Trading Aktif
                </h3>
                <p class="text-sm">
                  Program rebate sering kali memotivasi trader untuk lebih aktif
                  melakukan trading. Semakin besar volume trading, semakin besar
                  rebate yang akan diperoleh.
                </p>
              </div>

              <div class="bg-slate-50 rounded-lg p-5">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  ✅ Tidak Mengubah Strategi Trading
                </h3>
                <p class="text-sm">
                  Salah satu keuntungan utama dari rebate forex adalah Anda
                  tidak perlu mengubah strategi atau gaya trading Anda. Anda
                  bisa tetap trading seperti biasa dan mendapatkan manfaat
                  tambahan dari rebate.
                </p>
              </div>

              <div class="bg-slate-50 rounded-lg p-5 md:col-span-2">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  🌐 Peluang Diversifikasi Penghasilan
                </h3>
                <p class="text-sm">
                  Bagi trader yang bergabung dengan program rebate dari beberapa
                  broker atau pihak ketiga, ada peluang untuk mendiversifikasi
                  sumber penghasilan mereka. Ini bisa menjadi strategi yang
                  cerdas untuk memaksimalkan keuntungan dari berbagai platform
                  trading.
                </p>
              </div>
            </div>

            <div
              class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mt-8"
            >
              <h2 class="text-2xl font-bold mb-4">Kesimpulan</h2>
              <p class="text-lg">
                Rebate forex adalah program yang bermanfaat bagi trader,
                memungkinkan mereka untuk mendapatkan kembali sebagian dari
                biaya trading yang telah dikeluarkan. Dengan mengurangi biaya
                dan meningkatkan profitabilitas, rebate forex dapat menjadi alat
                yang efektif untuk meningkatkan keberhasilan dalam trading
                forex. Jika Anda adalah seorang trader aktif, bergabung dengan
                program rebate bisa menjadi langkah cerdas untuk memaksimalkan
                potensi keuntungan Anda.
              </p>
            </div>

            <div class="mt-8 pt-6 border-t border-gray-200">
              <router-link
                to="/tutorial"
                class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Kembali ke Tutorial
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "RebateArticleView",
};
</script>

<style scoped>
.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.7;
}
</style>

