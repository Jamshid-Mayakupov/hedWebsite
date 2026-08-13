<template>
  <section class="bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden" aria-labelledby="partners-section-title">
    <!-- Ambient Background Decorative Blobs -->
    <div class="absolute top-1/2 -left-40 w-96 h-96 bg-Blue/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/4 -right-40 w-96 h-96 bg-lightBlue/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="section-container relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="600">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-semibold uppercase tracking-wider mb-4">
          <span>Международное сотрудничество</span>
        </div>
        <SectionHeader id="partners-section-title">Наши партнеры</SectionHeader>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
          Мы сотрудничаем с ведущими мировыми фармацевтическими производителями и брендами
        </p>
      </div>

      <!-- Marquee Wrapper Frame -->
      <div
        class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-50/80 via-white to-gray-50/80 py-8 border border-gray-200/80 shadow-lg space-y-6"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <!-- Side Gradient Fade Masks -->
        <div class="absolute left-0 top-0 z-20 w-24 sm:w-36 lg:w-48 h-full bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none"></div>
        <div class="absolute right-0 top-0 z-20 w-24 sm:w-36 lg:w-48 h-full bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none"></div>

        <!-- Marquee Track Row 1 (Scrolls Left) -->
        <div class="marquee-container" aria-label="Партнеры ряд 1">
          <div class="animate-marquee-left">
            <!-- First Loop Set -->
            <div
              v-for="(partner, index) in row1Logos"
              :key="`row1-a-${index}`"
              class="partner-card group"
            >
              <img
                :src="partner.image"
                :alt="`${partner.name} логотип`"
                class="partner-logo"
                loading="lazy"
              />
              <span class="partner-badge">{{ partner.name }}</span>
            </div>

            <!-- Second Loop Set (For Seamless Loop) -->
            <div
              v-for="(partner, index) in row1Logos"
              :key="`row1-b-${index}`"
              class="partner-card group"
              aria-hidden="true"
            >
              <img
                :src="partner.image"
                alt=""
                class="partner-logo"
                loading="lazy"
              />
              <span class="partner-badge">{{ partner.name }}</span>
            </div>
          </div>
        </div>

        <!-- Marquee Track Row 2 (Scrolls Right) -->
        <div class="marquee-container" aria-label="Партнеры ряд 2">
          <div class="animate-marquee-right">
            <!-- First Loop Set -->
            <div
              v-for="(partner, index) in row2Logos"
              :key="`row2-a-${index}`"
              class="partner-card group"
            >
              <img
                :src="partner.image"
                :alt="`${partner.name} логотип`"
                class="partner-logo"
                loading="lazy"
              />
              <span class="partner-badge">{{ partner.name }}</span>
            </div>

            <!-- Second Loop Set (For Seamless Loop) -->
            <div
              v-for="(partner, index) in row2Logos"
              :key="`row2-b-${index}`"
              class="partner-card group"
              aria-hidden="true"
            >
              <img
                :src="partner.image"
                alt=""
                class="partner-logo"
                loading="lazy"
              />
              <span class="partner-badge">{{ partner.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Metric Stats Grid -->
      <div class="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" data-aos="fade-up" data-aos-duration="600">
        <!-- Stat 1 -->
        <div class="bg-gradient-to-br from-white to-Blue/5 border border-gray-200/80 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-12 h-12 rounded-2xl bg-Blue/10 text-Blue group-hover:bg-Blue group-hover:text-white flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1 font-raleway group-hover:text-Blue transition-colors">
            24+
          </p>
          <p class="text-xs sm:text-sm font-semibold text-gray-600">
            Международных партнеров
          </p>
        </div>

        <!-- Stat 2 -->
        <div class="bg-gradient-to-br from-white to-Blue/5 border border-gray-200/80 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-12 h-12 rounded-2xl bg-Blue/10 text-Blue group-hover:bg-Blue group-hover:text-white flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.5a2.5 2.5 0 00-2.5-2.5H16a2 2 0 01-2-2V5.5A2.5 2.5 0 0011.5 3h-.5a2.5 2.5 0 00-2.5 2.5v.435z" />
            </svg>
          </div>
          <p class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1 font-raleway group-hover:text-Blue transition-colors">
            15+
          </p>
          <p class="text-xs sm:text-sm font-semibold text-gray-600">
            Стран поставок & экспорта
          </p>
        </div>

        <!-- Stat 3 -->
        <div class="bg-gradient-to-br from-white to-Blue/5 border border-gray-200/80 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-12 h-12 rounded-2xl bg-Blue/10 text-Blue group-hover:bg-Blue group-hover:text-white flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1 font-raleway group-hover:text-Blue transition-colors">
            100%
          </p>
          <p class="text-xs sm:text-sm font-semibold text-gray-600">
            Стандарты качества GMP & ISO
          </p>
        </div>

        <!-- Stat 4 -->
        <div class="bg-gradient-to-br from-white to-Blue/5 border border-gray-200/80 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-12 h-12 rounded-2xl bg-Blue/10 text-Blue group-hover:bg-Blue group-hover:text-white flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1 font-raleway group-hover:text-Blue transition-colors">
            24/7
          </p>
          <p class="text-xs sm:text-sm font-semibold text-gray-600">
            Логистика & поддержка
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from './common/SectionHeader.vue'

// Partner Images Import
import acino from '@/assets/images/partners/Acino-1.png'
import actavis from '@/assets/images/partners/Actavis-2.png'
import bayer from '@/assets/images/partners/Bayer-3.png'
import bionorica from '@/assets/images/partners/Bionorica-4.png'
import boston from '@/assets/images/partners/Boston-5.png'
import darnitsa from '@/assets/images/partners/Darnitsa-6.png'
import drReddys from '@/assets/images/partners/DrReddys-7.png'
import egis from '@/assets/images/partners/Egis-8.png'
import euromed from '@/assets/images/partners/Euromed-9.png'
import feron from '@/assets/images/partners/Feron-10.png'
import geropharm from '@/assets/images/partners/Geropharm-11.png'
import glenmark from '@/assets/images/partners/Glenmark-12.png'
import gm from '@/assets/images/partners/GM-13.png'
import interlek from '@/assets/images/partners/Interlek-14.png'
import materia from '@/assets/images/partners/Materia-15.png'
import nobel from '@/assets/images/partners/Nobel-16.png'
import novartis from '@/assets/images/partners/Novartis-17.png'
import phs from '@/assets/images/partners/Phs-18.png'
import pierre from '@/assets/images/partners/Pierre-19.png'
import sandoz from '@/assets/images/partners/Sandoz-20.png'
import sanofi from '@/assets/images/partners/Sanofi-21.png'
import sintez from '@/assets/images/partners/Sintez-22.png'
import worwag from '@/assets/images/partners/Worwag-23.png'
import yuriya from '@/assets/images/partners/Yuriya-24.png'

const row1Logos = [
  { name: 'Acino', image: acino },
  { name: 'Actavis', image: actavis },
  { name: 'Bayer', image: bayer },
  { name: 'Bionorica', image: bionorica },
  { name: 'Boston', image: boston },
  { name: 'Darnitsa', image: darnitsa },
  { name: 'Dr.Reddy\'s', image: drReddys },
  { name: 'Egis', image: egis },
  { name: 'Euromed', image: euromed },
  { name: 'Feron', image: feron },
  { name: 'Geropharm', image: geropharm },
  { name: 'Glenmark', image: glenmark }
]

const row2Logos = [
  { name: 'GM Pharma', image: gm },
  { name: 'Interlek', image: interlek },
  { name: 'Materia Medica', image: materia },
  { name: 'Nobel', image: nobel },
  { name: 'Novartis', image: novartis },
  { name: 'Phs', image: phs },
  { name: 'Pierre Fabre', image: pierre },
  { name: 'Sandoz', image: sandoz },
  { name: 'Sanofi', image: sanofi },
  { name: 'Sintez', image: sintez },
  { name: 'Wörwag Pharma', image: worwag },
  { name: 'Yuriya-Pharm', image: yuriya }
]
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}

.marquee-container {
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
}

.animate-marquee-left {
  display: flex;
  width: max-content;
  animation: marquee-left 40s linear infinite;
  will-change: transform;
}

.animate-marquee-right {
  display: flex;
  width: max-content;
  animation: marquee-right 40s linear infinite;
  will-change: transform;
}

.marquee-container:hover .animate-marquee-left,
.marquee-container:hover .animate-marquee-right {
  animation-play-state: paused;
}

@keyframes marquee-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.partner-card {
  @apply bg-white border border-gray-200/90 rounded-2xl shadow-sm p-4 sm:p-5 flex flex-col items-center justify-center relative min-w-[150px] sm:min-w-[180px] lg:min-w-[200px] h-[95px] sm:h-[110px] mx-3 backdrop-blur-sm transition-all duration-300 ease-out cursor-pointer hover:shadow-xl hover:border-Blue/40 hover:-translate-y-1 select-none;
}

.partner-logo {
  @apply max-h-10 sm:max-h-12 lg:max-h-14 max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] object-contain transition-all duration-300 filter grayscale opacity-75 group-hover:filter-none group-hover:opacity-100 group-hover:scale-110;
}

.partner-badge {
  @apply absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-Blue text-white text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shadow-md whitespace-nowrap pointer-events-none;
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee-left,
  .animate-marquee-right {
    animation: none;
    overflow-x: auto;
  }
}
</style>
