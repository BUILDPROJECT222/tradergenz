<template>
  <main
    class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden flex items-center justify-center"
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

    <div class="relative z-10 w-full max-w-md px-4">
      <!-- Login Card -->
      <div
        class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-2xl"
      >
        <!-- Logo/Icon -->
        <div class="text-center mb-8">
          <div
            class="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
          >
            <svg
              class="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-white mb-2">Admin Panel</h1>
          <p class="text-gray-400 text-sm">Masuk untuk melanjutkan</p>
        </div>

        <!-- Error Message -->
        <div
          v-if="errorMessage"
          class="mb-6 bg-red-500/20 border border-red-500/50 rounded-lg p-4"
        >
          <p class="text-red-300 text-sm text-center">{{ errorMessage }}</p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Username -->
          <div>
            <label class="block text-white text-sm font-medium mb-2">
              👤 Username
            </label>
            <input
              type="text"
              v-model="username"
              placeholder="Masukkan username"
              class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
              autocomplete="username"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-white text-sm font-medium mb-2">
              🔒 Password
            </label>
            <input
              type="password"
              v-model="password"
              placeholder="Masukkan password"
              class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
              autocomplete="current-password"
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 disabled:scale-100 shadow-lg"
          >
            <span v-if="isLoading">⏳ Memproses...</span>
            <span v-else>🚀 Masuk</span>
          </button>
        </form>

        <!-- Back to Home -->
        <div class="mt-6 text-center">
          <button
            @click="$router.push('/')"
            class="text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            ← Kembali ke Home
          </button>
        </div>

        <!-- Info -->
        <div
          class="mt-8 bg-blue-600/20 border border-blue-500/30 rounded-lg p-4"
        >
          <p class="text-blue-300 text-xs text-center">
            🔐 Admin Panel dilindungi dengan autentikasi
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "AdminLoginView",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
      isLoading: false,
    };
  },
  mounted() {
    // Check if already logged in
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    if (isAuthenticated === "true") {
      this.$router.push("/admin");
    }
  },
  methods: {
    handleLogin() {
      this.isLoading = true;
      this.errorMessage = "";

      // Simulate small delay for better UX
      setTimeout(() => {
        // Check credentials (trim to remove extra spaces)
        if (
          this.username.trim() === "tradergenz" &&
          this.password.trim() === "tradergenz"
        ) {
          // Set authentication
          localStorage.setItem("adminAuthenticated", "true");
          localStorage.setItem("adminLoginTime", new Date().toISOString());

          // Redirect to admin panel
          this.$router.push("/admin");
        } else {
          // Show error with debug info
          console.log("Login failed:", {
            username: this.username,
            usernameTrimmed: this.username.trim(),
            password: this.password,
            passwordTrimmed: this.password.trim()
          });
          
          this.errorMessage = "❌ Username atau password salah!";
          this.isLoading = false;

          // Clear password field
          this.password = "";
        }
      }, 500);
    },
  },
};
</script>

<style scoped>
/* Add pulse animation to logo */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.bg-gradient-to-br {
  animation: pulse 3s ease-in-out infinite;
}
</style>
