<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <main
      class="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
      <div class="space-y-2 text-center md:text-left px-10">
        <p class="text-amber-200">Hallo</p>
        <h1 class="text-4xl font-bold md:text-5xl text-white fadein-up">TraderGenz</h1>
        <div class="py-2">
          <h1
            class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl fadein-up"
            ref="typewriter">
            <span class="wrap">{{ txt }}</span>
          </h1>
        </div>
        <p class="text-white pr-4 fade-in-from-left">Welcome to TraderGenz. <span class="wave">👋🏼</span></p>
        <br>
        <router-link
          to="/tutorial"
          class="fadein-bot fade-500 flex items-center justify-center py-3 px-6 mx-auto text-base font-bold rounded-lg transition-all duration-300 md:py-3.5 md:px-8 md:mx-0 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg focus:outline-none w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 w-5 h-5">
            <path d="M5.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM2.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM18.75 7.5a.75.75 0 00-1.5 0v2.25H15a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H21a.75.75 0 000-1.5h-2.25V7.5z" />
          </svg>
          Join Grup VIP GRATIS
        </router-link>
        
        <!-- Social Media Buttons -->
        <div class="flex items-center justify-center md:justify-start gap-4 mt-6 fadein-bot fade-500">
          <a
            href="https://chat.whatsapp.com/D58mavWj90vIMlSqCyNayT"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-110 shadow-lg">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          <a
            href="https://t.me/Wickeths"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110 shadow-lg">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex justify-center md:justify-start fadein-right"><img alt="avatar" fetchpriority="high" width="300" height="300" decoding="async" data-nimg="1"
          class="w-10/12 md:h-auto rounded-full border-4 border-amber-200 pict" src="https://i.ibb.co.com/23P7rsq7/Screenshot-2025-12-19-231201.png">
      </div>
    </main>

    <!-- Introducing Section -->
    <section class="container mx-auto px-4 py-16 md:py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 fadein-up">
          Introducing <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">TraderGenz</span>
        </h2>
        <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
          <p class="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            TraderGenz adalah platform terpercaya yang menyediakan layanan rebate forex untuk para trader. Kami membantu trader mendapatkan cashback dari setiap transaksi trading mereka tanpa mengubah strategi atau gaya trading yang sudah ada.
          </p>
          <p class="text-base md:text-lg text-gray-400 leading-relaxed">
            Dengan bergabung bersama TraderGenz, Anda tidak hanya mendapatkan rebate yang menguntungkan, tetapi juga akses ke signal trading berkualitas, edukasi trading, dan komunitas trader yang solid untuk mendukung perjalanan trading Anda.
          </p>
        </div>
      </div>
    </section>

    <!-- Manfaat Join TraderGenz Section -->
    <section class="container mx-auto px-4 py-16 md:py-24">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12 fadein-up">
          Manfaat <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Join TraderGenz</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(benefit, index) in benefits" 
            :key="index"
            class="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105 fadein-up"
            :style="{ animationDelay: `${index * 100}ms` }">
            <div class="text-4xl mb-4">{{ benefit.icon }}</div>
            <h3 class="text-xl font-bold text-white mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      toRotate: ["Signal Trading", "Edukasi Trading" , "Cashback Benefits"],
      period: 2000,
      txt: '',
      loopNum: 0,
      isDeleting: false,
      benefits: [
        {
          icon: '💰',
          title: 'Rebate Cashback',
          description: 'Dapatkan cashback dari setiap transaksi trading Anda. Semakin aktif trading, semakin besar rebate yang Anda terima.'
        },
        {
          icon: '📊',
          title: 'Signal Trading Berkualitas',
          description: 'Akses ke signal trading yang telah teruji dan diakurasi oleh trader berpengalaman untuk membantu keputusan trading Anda.'
        },
        {
          icon: '🎓',
          title: 'Edukasi Trading',
          description: 'Pelajari strategi trading, analisis teknikal, dan manajemen risiko dari para ahli melalui materi edukasi yang komprehensif.'
        },
        {
          icon: '👥',
          title: 'Komunitas Solid',
          description: 'Bergabung dengan komunitas trader aktif yang saling berbagi pengalaman, tips, dan strategi trading untuk berkembang bersama.'
        },
        {
          icon: '⚡',
          title: 'Pembayaran Cepat',
          description: 'Rebate dibayarkan secara berkala (mingguan/bulanan) dengan proses yang cepat dan transparan melalui berbagai metode pembayaran.'
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
  }
}
</script>

<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
}

.typewrite>.wrap {
  border-right: 0.08em solid #fff;
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg)
  }

  10% {
    transform: rotate(14deg)
  }

  20% {
    transform: rotate(-8deg)
  }

  30% {
    transform: rotate(14deg)
  }

  40% {
    transform: rotate(-4deg)
  }

  50% {
    transform: rotate(10deg)
  }

  60% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(0deg)
  }
}

.pict {
  box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
-webkit-box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
-moz-box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.5s forwards;
}

@keyframes fadeInBot {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadein-1 {
  animation-delay: 200ms;
}
.fadein-2 {
  animation-delay: 400ms;
}
.fadein-3 {
  animation-delay: 600ms;
}
.fade-500 {
  animation-delay: 500ms;
}
</style>
