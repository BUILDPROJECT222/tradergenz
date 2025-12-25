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
      <!-- Three Column Layout -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
      >
        <!-- Section 1: Daftar VIP -->
        <div
          class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 flex flex-col overflow-hidden hover:border-blue-500/50 transition-all duration-300"
        >
          <!-- Highlighted Title at Top -->
          <div
            class="relative mb-6 -mx-6 -mt-6 md:-mx-8 md:-mt-8 px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 animate-gradient border-b-2 border-blue-400/30"
          >
            <h2
              class="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg"
            >
              ✨ Daftar VIP
            </h2>
          </div>

          <div class="flex-1 flex flex-col space-y-6">
            <!-- Broker Selection Tabs -->
            <div class="flex gap-2 bg-slate-700/30 p-2 rounded-lg">
              <button
                v-for="broker in brokerOptions"
                :key="broker.name"
                @click="selectedBroker = broker.name"
                :class="[
                  'flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300',
                  selectedBroker === broker.name
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-700/50 text-gray-400 hover:text-white hover:bg-slate-600/50'
                ]"
              >
                {{ broker.name }}
              </button>
            </div>

            <!-- Dynamic Content Based on Selected Broker -->
            <div class="space-y-6">
              <h3
                class="text-lg md:text-xl font-semibold text-blue-300 text-center"
              >
                Daftar {{ selectedBroker }} melalui link VIP kami
              </h3>

              <div class="w-full">
                <code
                  class="block bg-slate-700/50 px-4 py-3 rounded-lg text-blue-300 text-xs md:text-sm break-all text-center border border-blue-500/30"
                >
                  {{ getCurrentBrokerLink() }}
                </code>
              </div>

              <a
                :href="getCurrentBrokerLink()"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-center block"
              >
                🚀 DAFTAR {{ selectedBroker.toUpperCase() }} SEKARANG
              </a>

              <!-- Partner Code Warning (Only for Exness) -->
              <div
                v-if="selectedBroker === 'Exness'"
                class="bg-red-500/20 border-2 border-red-500/50 rounded-lg p-4 w-full"
              >
                <p class="font-bold text-red-300 text-sm mb-2 text-center">
                  ⚠️ PENTING:
                </p>
                <p class="text-white text-xs md:text-sm text-center">
                  WAJIB MASUKAN PARTNER CODE:
                  <strong class="text-red-300">tn2bqeplq9</strong>
                </p>
              </div>

              <!-- Info for HFM/Valetax -->
              <div
                v-else
                class="bg-green-500/20 border-2 border-green-500/50 rounded-lg p-4 w-full"
              >
                <p class="font-bold text-green-300 text-sm mb-2 text-center">
                  ✅ INFO:
                </p>
                <p class="text-white text-xs md:text-sm text-center">
                  Link pendaftaran sudah include partner code kami
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Cara Pindah IB -->
        <div
          class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 flex flex-col overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
        >
          <!-- Highlighted Title at Top -->
          <div
            class="relative mb-6 -mx-6 -mt-6 md:-mx-8 md:-mt-8 px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-size-200 animate-gradient border-b-2 border-cyan-400/30"
          >
            <h2
              class="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg"
            >
              🔄 Cara Pindah IB
            </h2>
          </div>

          <div class="flex-1">
            <!-- Image -->
            <div class="mb-6 flex justify-center">
              <img
                src="@/assets/ib.png"
                alt="Cara Pindah IB"
                class="rounded-lg shadow-lg max-w-full h-auto border border-green-500/30"
              />
            </div>

            <!-- Instructions -->
            <div class="space-y-4 text-white text-sm">
              <div>
                <p class="mb-2">
                  <strong class="text-blue-400">Step 1:</strong> Silakan masuk
                  pada live chat Exness, lalu ketik
                  <strong class="text-yellow-400">"change partner"</strong>.
                </p>
                <p class="text-gray-300">
                  Bot akan otomatis memberikan link yang akan membantu anda
                  untuk berpindah IB.
                </p>
              </div>

              <div class="bg-slate-700/30 rounded-lg p-4">
                <p class="mb-3 font-semibold text-blue-400">
                  Cara pengisian form:
                </p>
                <ol
                  class="list-decimal list-inside space-y-2 text-xs md:text-sm"
                >
                  <li class="mb-2">
                    <strong>Reason/Alasan</strong> - isi terserah
                  </li>
                  <li class="mb-2">
                    <strong>Partner's link</strong> -
                    <code
                      class="bg-slate-800/50 px-2 py-1 rounded text-blue-300 text-xs"
                      >https://one.exnessonelink.com/a/tn2bqeplq9</code
                    >
                  </li>
                  <li class="mb-2">
                    <strong>Where/Dimana Ketemu Partner</strong> -
                    <code
                      class="bg-slate-800/50 px-2 py-1 rounded text-blue-300 text-xs"
                      >https://one.exnessonelink.com/a/tn2bqeplq9</code
                    >
                  </li>
                  <li><strong>Leave a comment</strong> - isi terserah</li>
                </ol>
              </div>

              <div
                class="bg-amber-500/20 border-2 border-amber-500/50 rounded-lg p-3"
              >
                <p class="font-semibold text-amber-300 mb-2 text-sm">
                  ⚠️ Penting:
                </p>
                <p class="text-xs md:text-sm text-gray-200">
                  Setelah permintaan penggantian IB disetujui, anda wajib untuk
                  menambahkan akun trade baru dan infokan nomor akunnya kembali
                  (jangan deposit terlebih dahulu, pastikan sudah konfirmasi
                  nomor akun barunya).
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Daftar Rebate -->
        <div
          class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 flex flex-col overflow-hidden hover:border-purple-500/50 transition-all duration-300"
        >
          <!-- Highlighted Title at Top -->
          <div
            class="relative mb-6 -mx-6 -mt-6 md:-mx-8 md:-mt-8 px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-size-200 animate-gradient border-b-2 border-purple-400/30"
          >
            <h2
              class="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg"
            >
              📝 Daftar Rebate
            </h2>
          </div>

          <div class="flex-1">
            <form class="space-y-5" @submit.prevent="handleSubmit">
              <div>
                <label class="block text-white text-sm font-medium mb-2"
                  >Pilih Broker</label
                >
                <select
                  v-model="formData.broker"
                  class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="Exness">Exness</option>
                  <option value="HFM">HFM</option>
                  <option value="Valetax">Valetax</option>
                </select>
              </div>

              <div>
                <label class="block text-white text-sm font-medium mb-2"
                  >Nomor Akun Trading</label
                >
                <input
                  type="text"
                  v-model="formData.accountNumber"
                  class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Masukkan nomor akun trading"
                  required
                />
              </div>

              <div>
                <label class="block text-white text-sm font-medium mb-2"
                  >Username Telegram</label
                >
                <input
                  type="text"
                  v-model="formData.telegramUsername"
                  class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="@username"
                  required
                />
              </div>

              <button
                type="submit"
                ref="submitButton"
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-purple-400 disabled:to-indigo-400 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 mt-6 shadow-lg hover:shadow-purple-500/50"
              >
                {{ isSubmitting ? "⏳ Mengirim..." : "📧 Daftar Sekarang" }}
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-16 max-w-4xl mx-auto">
        <div class="text-center mb-10">
          <div
            class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-6 py-2 mb-4"
          >
            <span
              class="text-white font-semibold text-sm uppercase tracking-wide"
              >❓ FAQ</span
            >
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p class="text-gray-400 text-sm md:text-base">
            Temukan jawaban untuk pertanyaan umum seputar program rebate
          </p>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
            >
              <span
                class="font-semibold text-gray-800 pr-4 group-hover:text-blue-700 transition-colors"
                >{{ faq.question }}</span
              >
              <div
                :class="[
                  'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md',
                  faq.isOpen
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 shadow-blue-500/50'
                    : 'bg-gradient-to-br from-gray-300 to-gray-400 group-hover:from-blue-500 group-hover:to-purple-500',
                ]"
              >
                <svg
                  :class="[
                    'w-6 h-6 text-white transition-transform duration-300',
                    faq.isOpen ? 'rotate-180' : '',
                  ]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            <div
              v-show="faq.isOpen"
              class="px-6 pb-5 text-gray-700 bg-gradient-to-br from-blue-50/30 to-purple-50/30"
            >
              <div class="pt-2 pb-3 border-t border-gray-200">
                <p class="mb-4 leading-relaxed">{{ faq.answer }}</p>
                <div
                  v-if="faq.linkBox"
                  class="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-4 border-l-4 border-blue-600"
                >
                  <p class="text-sm">
                    {{ faq.linkBox.text }}
                    <router-link
                      :to="faq.linkBox.url"
                      class="text-blue-700 font-semibold underline hover:text-purple-700 transition-colors"
                    >
                      {{ faq.linkBox.linkText }}
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "TutorialView",
  data() {
    return {
      isSubmitting: false,
      selectedBroker: "Exness",
      brokerOptions: [
        {
          name: "Exness",
          link: "https://one.exnessonelink.com/a/tn2bqeplq9"
        },
        {
          name: "HFM",
          link: "https://www.hfmtrade-ind.com/sv/en/?refid=30479483"
        },
        {
          name: "Valetax",
          link: "https://ma.valetax.com/p/2889954"
        }
      ],
      formData: {
        broker: "Exness",
        accountNumber: "",
        telegramUsername: "",
      },
      faqs: [
        {
          question: "Apa itu rebate forex dan bagaimana cara kerjanya?",
          answer:
            "Rebate adalah program cashback yang ditawarkan TraderGenz kepada para trader sebagai bentuk keuntungan tambahan setelah bertransaksi. Cukup daftar broker di link tradergenz",
          isOpen: true,
          linkBox: {
            text: "Pengertian rebate lebih lanjut dapat diakses melalui",
            linkText: "link ini",
            url: "/rebate-article",
          },
        },
        {
          question: "Broker apa saja yang didukung?",
          answer:
            "Kami mendukung 3 broker terpercaya: Exness, HFM, dan Valetax. Anda dapat memilih broker sesuai preferensi saat mendaftar program rebate. Pastikan untuk mendaftar melalui link VIP yang disediakan TraderGenz agar mendapatkan rebate.",
          isOpen: false,
        },
        {
          question: "Saya ingin dapat rebate tapi sudah punya akun",
          answer:
            'Jika anda sudah memiliki akun trading, anda dapat melakukan pindah IB (Introducing Broker) ke TraderGenz. Silakan ikuti panduan "Cara Pindah IB" yang tersedia di halaman ini.',
          isOpen: false,
        },
        {
          question: "Cara Pindah IB Exness Bagaimana?",
          answer:
            'Untuk pindah IB Exness, silakan ikuti langkah-langkah berikut: 1) Masuk ke live chat Exness, 2) Ketik "change partner", 3) Bot akan memberikan link form, 4) Isi form dengan partner link: https://one.exnessonelink.com/a/tn2bqeplq9. Detail lengkap dapat dilihat di section "Cara Pindah IB" di atas.',
          isOpen: false,
        },
        {
          question: "Bisakah saya meminta pembayaran rebate ke Akun Trading?",
          answer:
            "Ya, anda dapat meminta pembayaran rebate langsung ke akun trading anda. Silakan hubungi admin melalui Telegram untuk informasi lebih lanjut mengenai proses pembayaran rebate.",
          isOpen: false,
        },
        {
          question: "Mengapa ada dua skema rebate?",
          answer:
            "Kami menawarkan dua skema rebate untuk memberikan fleksibilitas kepada trader dalam memilih metode pembayaran yang paling sesuai dengan kebutuhan mereka. Detail mengenai kedua skema dapat ditanyakan langsung kepada admin.",
          isOpen: false,
        },
        {
          question: "Bagaimana jika saya mendaftar dengan link lain?",
          answer:
            "Jika anda mendaftar dengan link selain link TraderGenz, maka anda tidak akan mendapatkan rebate dari kami. Pastikan untuk selalu menggunakan link TraderGenz saat mendaftar broker agar dapat menerima rebate.",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    async handleSubmit() {
      if (this.isSubmitting) return;

      try {
        this.isSubmitting = true;

        // Save to localStorage
        const registrationData = {
          broker: this.formData.broker,
          accountNumber: this.formData.accountNumber,
          telegramUsername: this.formData.telegramUsername,
          timestamp: new Date().toISOString(),
        };

        // Get existing registrations
        const existingData = localStorage.getItem("rebateRegistrations");
        const registrations = existingData ? JSON.parse(existingData) : [];

        // Add new registration
        registrations.push(registrationData);

        // Save back to localStorage
        localStorage.setItem(
          "rebateRegistrations",
          JSON.stringify(registrations)
        );

        // Format email body
        const emailBody = `
Pendaftaran Rebate Baru

Broker: ${this.formData.broker}
Nomor Akun Trading: ${this.formData.accountNumber}
Username Telegram: ${this.formData.telegramUsername}

Waktu: ${new Date().toLocaleString("id-ID")}
        `.trim();

        // Mengirim email menggunakan FormSubmit
        const formData = new FormData();
        formData.append("email", "riandilesspaul30@gmail.com");
        formData.append("subject", "Pendaftaran Rebate Baru - TraderGenz");
        formData.append("message", emailBody);
        formData.append("_captcha", "false"); // Disable captcha
        formData.append("_template", "table"); // Format tabel yang lebih rapi

        const response = await fetch(
          "https://formsubmit.co/ajax/riandilesspaul30@gmail.com",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          // Reset form setelah submit berhasil
          this.formData = {
            broker: "Exness",
            accountNumber: "",
            telegramUsername: "",
          };

          alert(
            "✅ Terima kasih! Data anda telah dikirim ke email admin. Admin akan menghubungi anda melalui Telegram."
          );
        } else {
          throw new Error("Failed to send email");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert(
          "❌ Terjadi kesalahan saat mengirim data. Silakan coba lagi atau hubungi admin langsung melalui WhatsApp/Telegram."
        );
      } finally {
        this.isSubmitting = false;
      }
    },
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    },
    getCurrentBrokerLink() {
      if (!this.brokerOptions || !this.selectedBroker) {
        return "";
      }
      const broker = this.brokerOptions.find(b => b.name === this.selectedBroker);
      return broker ? broker.link : "";
    },
  },
};
</script>

<style scoped>
/* Gradient Animation */
.bg-size-200 {
  background-size: 200% 200%;
}

.animate-gradient {
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
