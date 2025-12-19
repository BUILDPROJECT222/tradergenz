<template>
  <main class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
    <!-- Animated background dots -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-12 md:py-20">
      <!-- Three Column Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        
        <!-- Section 1: Daftar Exness -->
        <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 flex flex-col relative overflow-hidden min-h-[500px]">
          <div class="flex-1 flex flex-col items-center justify-center space-y-6 mb-20">
            <h3 class="text-xl md:text-2xl font-bold text-white text-center">
              Daftar Exness melalui link ini
            </h3>
            
            <div class="w-full">
              <code class="block bg-slate-700/50 px-4 py-3 rounded-lg text-blue-300 text-xs md:text-sm break-all text-center">
                https://one.exnessonelink.com/a/tn2bqeplq9
              </code>
            </div>

            <a 
              href="https://one.exnessonelink.com/a/tn2bqeplq9" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center">
              DAFTAR SEKARANG
            </a>

            <div class="bg-red-500/20 border border-red-500/50 rounded-lg p-4 w-full">
              <p class="font-bold text-red-300 text-sm mb-2 text-center">⚠️ PENTING:</p>
              <p class="text-white text-xs md:text-sm text-center">
                WAJIB MASUKAN PARTNER CODE: <strong class="text-red-300">tn2bqeplq9</strong>
              </p>
            </div>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center absolute bottom-6 left-0 right-0">
            Daftar Exness
          </h2>
        </div>

        <!-- Section 2: Cara Pindah IB -->
        <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 flex flex-col relative overflow-hidden min-h-[500px]">
          <div class="flex-1 mb-20">
            <!-- Image -->
            <div class="mb-6 flex justify-center">
              <img src="@/assets/ib.png" alt="Cara Pindah IB" class="rounded-lg shadow-lg max-w-full h-auto">
            </div>
            
            <!-- Instructions -->
            <div class="space-y-4 text-white text-sm">
              <div>
                <p class="mb-2">
                  <strong class="text-blue-400">Step 1:</strong> Silakan masuk pada live chat Exness, lalu ketik <strong class="text-yellow-400">"change partner"</strong>.
                </p>
                <p class="text-gray-300">
                  Bot akan otomatis memberikan link yang akan membantu anda untuk berpindah IB.
                </p>
              </div>

              <div class="bg-slate-700/30 rounded-lg p-4">
                <p class="mb-3 font-semibold text-blue-400">Cara pengisian form:</p>
                <ol class="list-decimal list-inside space-y-2 text-xs md:text-sm">
                  <li class="mb-2"><strong>Reason/Alasan</strong> - isi terserah</li>
                  <li class="mb-2"><strong>Partner's link</strong> - 
                    <code class="bg-slate-800/50 px-2 py-1 rounded text-blue-300 text-xs">https://one.exnessonelink.com/a/tn2bqeplq9</code>
                  </li>
                  <li class="mb-2"><strong>Where/Dimana Ketemu Partner</strong> - 
                    <code class="bg-slate-800/50 px-2 py-1 rounded text-blue-300 text-xs">https://one.exnessonelink.com/a/tn2bqeplq9</code>
                  </li>
                  <li><strong>Leave a comment</strong> - isi terserah</li>
                </ol>
              </div>

              <div class="bg-amber-500/20 border border-amber-500/50 rounded-lg p-3">
                <p class="font-semibold text-amber-300 mb-2 text-sm">⚠️ Penting:</p>
                <p class="text-xs md:text-sm text-gray-200">
                  Setelah permintaan penggantian IB disetujui, anda wajib untuk menambahkan akun trade baru dan infokan nomor akunnya kembali (jangan deposit terlebih dahulu, pastikan sudah konfirmasi nomor akun barunya).
                </p>
              </div>
            </div>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center absolute bottom-6 left-0 right-0">
            Cara Pindah IB
          </h2>
        </div>

        <!-- Section 3: Daftar Rebate -->
        <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 flex flex-col relative overflow-hidden min-h-[500px]">
          <div class="flex-1 mb-20">
            <form class="space-y-5" @submit.prevent="handleSubmit">
              <div>
                <label class="block text-white text-sm font-medium mb-2">Pilih Broker</label>
                <select 
                  v-model="formData.broker"
                  class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required>
                  <option value="Exness">Exness</option>
                </select>
              </div>

              <div>
                <label class="block text-white text-sm font-medium mb-2">Nomor Akun Exness</label>
                <input 
                  type="text" 
                  v-model="formData.accountNumber"
                  class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nomor akun Exness"
                  required>
              </div>

              <div>
                <label class="block text-white text-sm font-medium mb-2">Username Telegram</label>
                <input 
                  type="text" 
                  v-model="formData.telegramUsername"
                  class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="@username"
                  required>
              </div>

              <button 
                type="submit" 
                ref="submitButton"
                :disabled="isSubmitting"
                class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-6 shadow-lg">
                {{ isSubmitting ? 'Mengirim...' : 'Daftar Sekarang' }}
              </button>
            </form>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center absolute bottom-6 left-0 right-0">
            Daftar Rebate
          </h2>
        </div>

      </div>

      <!-- FAQ Section -->
      <div class="mt-16 max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Pertanyaan yang Sering Diajukan
        </h2>
        
        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors">
              <span class="font-semibold text-gray-800 pr-4">{{ faq.question }}</span>
              <div 
                :class="[
                  'w-8 h-8 rounded-full flex items-center justify-center transition-transform',
                  faq.isOpen ? 'bg-purple-600' : 'bg-gray-300'
                ]">
                <svg 
                  :class="[
                    'w-5 h-5 text-white transition-transform',
                    faq.isOpen ? 'rotate-180' : ''
                  ]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div 
              v-show="faq.isOpen"
              class="px-6 pb-4 text-gray-700">
              <p class="mb-4">{{ faq.answer }}</p>
              <div v-if="faq.linkBox" class="bg-purple-100 rounded-lg p-4">
                <p class="text-sm">
                  {{ faq.linkBox.text }}
                  <router-link 
                    :to="faq.linkBox.url" 
                    class="text-blue-600 underline hover:text-blue-800">
                    {{ faq.linkBox.linkText }}
                  </router-link>
                </p>
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
  name: 'TutorialView',
  data() {
    return {
      isSubmitting: false,
      formData: {
        broker: 'Exness',
        accountNumber: '',
        telegramUsername: ''
      },
      faqs: [
        {
          question: 'Apa itu rebate forex dan bagaimana cara kerjanya?',
          answer: 'Rebate adalah program cashback yang ditawarkan TraderGenz kepada para trader sebagai bentuk keuntungan tambahan setelah bertransaksi. Cukup daftar broker di link tradergenz',
          isOpen: true,
          linkBox: {
            text: 'Pengertian rebate lebih lanjut dapat diakses melalui',
            linkText: 'link ini',
            url: '/rebate-article'
          }
        },
        {
          question: 'Saya ingin dapat rebate tapi sudah punya akun',
          answer: 'Jika anda sudah memiliki akun trading, anda dapat melakukan pindah IB (Introducing Broker) ke TraderGenz. Silakan ikuti panduan "Cara Pindah IB" yang tersedia di halaman ini.',
          isOpen: false
        },
        {
          question: 'Cara Pindah IB Exness Bagaimana?',
          answer: 'Untuk pindah IB Exness, silakan ikuti langkah-langkah berikut: 1) Masuk ke live chat Exness, 2) Ketik "change partner", 3) Bot akan memberikan link form, 4) Isi form dengan partner link: https://one.exnessonelink.com/a/tn2bqeplq9. Detail lengkap dapat dilihat di section "Cara Pindah IB" di atas.',
          isOpen: false
        },
        {
          question: 'Bisakah saya meminta pembayaran rebate ke Akun Trading?',
          answer: 'Ya, anda dapat meminta pembayaran rebate langsung ke akun trading anda. Silakan hubungi admin melalui Telegram untuk informasi lebih lanjut mengenai proses pembayaran rebate.',
          isOpen: false
        },
        {
          question: 'Mengapa ada dua skema rebate?',
          answer: 'Kami menawarkan dua skema rebate untuk memberikan fleksibilitas kepada trader dalam memilih metode pembayaran yang paling sesuai dengan kebutuhan mereka. Detail mengenai kedua skema dapat ditanyakan langsung kepada admin.',
          isOpen: false
        },
        {
          question: 'Bagaimana jika saya mendaftar dengan link lain?',
          answer: 'Jika anda mendaftar dengan link selain link TraderGenz, maka anda tidak akan mendapatkan rebate dari kami. Pastikan untuk selalu menggunakan link TraderGenz saat mendaftar broker agar dapat menerima rebate.',
          isOpen: false
        }
      ]
    };
  },
  methods: {
    async handleSubmit() {
      if (this.isSubmitting) return;
      
      try {
        this.isSubmitting = true;

        // Format email body
        const emailBody = `
Pendaftaran Rebate Baru

Broker: ${this.formData.broker}
Nomor Akun Exness: ${this.formData.accountNumber}
Username Telegram: ${this.formData.telegramUsername}

Waktu: ${new Date().toLocaleString('id-ID')}
        `.trim();

        // Mengirim email menggunakan FormSubmit
        const formData = new FormData();
        formData.append('email', 'riandilesspaul30@gmail.com');
        formData.append('subject', 'Pendaftaran Rebate Baru - TraderGenz');
        formData.append('message', emailBody);
        formData.append('_captcha', 'false'); // Disable captcha
        formData.append('_template', 'table'); // Format tabel yang lebih rapi

        const response = await fetch('https://formsubmit.co/ajax/riandilesspaul30@gmail.com', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          // Reset form setelah submit berhasil
          this.formData = {
            broker: 'Exness',
            accountNumber: '',
            telegramUsername: ''
          };

          alert('✅ Terima kasih! Data anda telah dikirim ke email admin. Admin akan menghubungi anda melalui Telegram.');
        } else {
          throw new Error('Failed to send email');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('❌ Terjadi kesalahan saat mengirim data. Silakan coba lagi atau hubungi admin langsung melalui WhatsApp/Telegram.');
      } finally {
        this.isSubmitting = false;
      }
    },
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    }
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
