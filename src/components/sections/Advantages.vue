<template>
  <div class="bg-gradient-to-b from-gray-50/50 via-white to-gray-50/70 overflow-hidden">
    <!-- Advantages / Why Choose Us Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative" data-aos="fade-up" data-aos-duration="800">
      <!-- Ambient Glow Background Blobs -->
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-Blue/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-lightBlue/5 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Section Header -->
      <div class="text-center mb-16 relative z-10">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-semibold uppercase tracking-wider mb-4">
          <!-- <span class="w-2 h-2 rounded-full bg-Blue"></span> -->
          <span>Наши достижения</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-raleway">
          Почему выбирают нас
        </h2>
        <p class="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Надежный и инновационный эксперт в сфере фармацевтической дистрибуции с многолетним опытом работы
        </p>
      </div>

      <!-- Stat Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
        <div 
          v-for="(advantage, index) in advantages" 
          :key="index" 
          data-aos="fade-up" 
          :data-aos-delay="index * 100"
          data-aos-duration="800"
          class="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-Blue/40 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
        >
          <!-- Ambient Card Hover Glow -->
          <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-Blue/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

          <div>
            <!-- Icon Badge -->
            <div class="mb-6 flex items-center justify-between">
              <div class="w-16 h-16 bg-gradient-to-br from-Blue/10 via-lightBlue/10 to-transparent border border-Blue/20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-Blue group-hover:border-Blue group-hover:scale-110 shadow-sm">
                <img 
                  :src="advantage.icon" 
                  :alt="advantage.alt" 
                  class="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>
              <span class="text-xs font-bold text-Blue/40 uppercase tracking-widest group-hover:text-Blue transition-colors font-mono">
                0{{ index + 1 }}
              </span>
            </div>

            <!-- Metric Number -->
            <h3 class="text-4xl sm:text-5xl font-black bg-gradient-to-r from-Blue via-darkBlue to-lightBlue bg-clip-text text-transparent mb-3 font-raleway group-hover:scale-105 transition-transform duration-300 origin-left">
              {{ advantage.number }}
            </h3>

            <!-- Metric Text -->
            <p class="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
              {{ advantage.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-gray-100">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Feature Image Frame -->
        <div class="relative order-2 lg:order-1 h-full flex flex-col justify-center" data-aos="fade-right" data-aos-duration="800">
          <div class="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200/80 group h-full min-h-[440px] lg:min-h-[560px] flex">
            <img
              :src="aboutLabImg"
              alt="Фармацевтические исследования и контроль качества" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-darkBlue/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>
            
            <!-- Floating Experience Badge -->
            <div class="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/40 flex items-center space-x-4 z-10">
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-Blue flex items-center justify-center text-white font-bold text-lg sm:text-xl font-raleway flex-shrink-0 shadow-lg shadow-Blue/30">
                15+
              </div>
              <div>
                <h4 class="text-gray-900 font-bold text-xs sm:text-sm font-raleway">Лет успешной работы</h4>
                <p class="text-gray-600 text-[11px] sm:text-xs">Лидер фармацевтического рынка Узбекистана</p>
              </div>
            </div>
          </div>
          
          <!-- Decorative Background Accents -->
          <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-Blue/10 rounded-3xl -z-10 blur-xl pointer-events-none"></div>
          <div class="absolute -top-6 -left-6 w-48 h-48 bg-lightBlue/10 rounded-3xl -z-10 blur-xl pointer-events-none"></div>
        </div>

        <!-- Content Section -->
        <div class="space-y-6 order-1 lg:order-2 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <div class="space-y-3">
            <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-semibold uppercase tracking-wider">
              <!-- <span class="w-2 h-2 rounded-full bg-Blue"></span> -->
              <span>О компании</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight font-raleway">
              Немного о нашей компании
            </h2>
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
              Мы обеспечиваем клиентов высоким качеством предоставляемого сервиса, надежностью поставок и широким спектром высокоэффективных фармацевтических решений.
            </p>
          </div>

          <!-- Feature Pillars List -->
          <div class="space-y-3.5 pt-1">
            <div 
              v-for="(pillar, idx) in pillars" 
              :key="idx" 
              class="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-Blue/30 transition-all duration-300 flex items-start space-x-3.5 group"
            >
              <div class="w-7 h-7 rounded-xl bg-Blue/10 group-hover:bg-Blue group-hover:text-white text-Blue flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-sm sm:text-base font-raleway group-hover:text-Blue transition-colors">{{ pillar.title }}</h4>
                <p class="text-gray-600 text-xs sm:text-sm leading-relaxed mt-0.5">{{ pillar.desc }}</p>
              </div>
            </div>
          </div>

          <!-- CTA Control -->
          <div class="pt-1">
            <router-link 
              to="/about" 
              class="inline-flex items-center space-x-2 px-7 py-3.5 bg-gradient-to-r from-Blue via-lightBlue to-Blue hover:brightness-110 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-Blue/30 text-sm sm:text-base"
            >
              <span>Подробнее о компании</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import clientsIcon from "@/assets/images/icon-clients.png"
import workingDaysIcon from "@/assets/images/icon-days.png"
import experienceIcon from "@/assets/images/icon-experience.png"
import ordersIcon from "@/assets/images/icon-orders.png"
import aboutLabImg from "@/assets/images/about-lab.png"

const advantages = [
  { 
    icon: experienceIcon, 
    alt: "Опыт работы", 
    number: "15+", 
    text: "Лет безупречного опыта работы" 
  },
  { 
    icon: clientsIcon, 
    alt: "Постоянные клиенты", 
    number: "3000+", 
    text: "Постоянных клиник и аптек-партнеров" 
  },
  { 
    icon: ordersIcon, 
    alt: "Количество заказов", 
    number: "5000+", 
    text: "Выполненных поставок в год" 
  },
  { 
    icon: workingDaysIcon, 
    alt: "Рабочие дни", 
    number: "365", 
    text: "Дней в году непрерывной работы" 
  },
]

const pillars = [
  {
    title: "Сертифицированное качество",
    desc: "Прямые поставки оригинальных фармацевтических препаратов от ведущих мировых брендов.",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Надежное и долгосрочное партнерство",
    desc: "Персональные прозрачные условия сотрудничества для каждого дистрибьютора.",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    title: "Комплексная логистика 24/7",
    desc: "Собственная инфраструктура хладовой цепи и строгий температурный контроль.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  }
]
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>