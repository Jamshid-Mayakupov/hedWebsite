<template>
  <section class="section-container section-spacing-sm">
    <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="600">
      <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
        Сотрудничество
      </p>
      <SectionHeader>Наши партнеры</SectionHeader>
      <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
        Мы работаем с ведущими мировыми фармацевтическими компаниями
      </p>
    </div>

    <div class="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 via-white to-gray-50 py-8">
      <!-- Градиентные края для плавного затухания -->
      <div class="absolute left-0 top-0 z-10 w-24 lg:w-32 h-full bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none"></div>
      <div class="absolute right-0 top-0 z-10 w-24 lg:w-32 h-full bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none"></div>

      <!-- Контейнер карусели -->
      <div class="carousel-container" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation">
        <div class="carousel-track" ref="carouselTrack">
          <!-- Первый набор логотипов -->
          <div 
            v-for="(item, index) in baseLogos" 
            :key="`first-${index}`" 
            class="partner-card">
            <img 
              :src="item.image" 
              :alt="`${item.name} логотип`" 
              class="partner-logo" 
              loading="lazy" 
            />
          </div>
          
          <!-- Дублированный набор для бесшовной прокрутки -->
          <div 
            v-for="(item, index) in baseLogos" 
            :key="`second-${index}`" 
            class="partner-card">
            <img 
              :src="item.image" 
              :alt="`${item.name} логотип`" 
              class="partner-logo" 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="600">
      <div class="text-center">
        <p class="text-3xl font-bold text-Blue mb-1 font-raleway">24+</p>
        <p class="text-gray-600 text-sm">Партнеров</p>
      </div>
      <div class="text-center">
        <p class="text-3xl font-bold text-Blue mb-1 font-raleway">15+</p>
        <p class="text-gray-600 text-sm">Стран</p>
      </div>
      <div class="text-center">
        <p class="text-3xl font-bold text-Blue mb-1 font-raleway">100%</p>
        <p class="text-gray-600 text-sm">Качество</p>
      </div>
      <div class="text-center">
        <p class="text-3xl font-bold text-Blue mb-1 font-raleway">24/7</p>
        <p class="text-gray-600 text-sm">Поддержка</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import SectionHeader from './common/SectionHeader.vue'

// Импорты изображений партнеров
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

const carouselTrack = ref(null)
let animationId = null
let isPaused = false

const baseLogos = [
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
  { name: 'Glenmark', image: glenmark },
  { name: 'GM', image: gm },
  { name: 'Interlek', image: interlek },
  { name: 'Materia', image: materia },
  { name: 'Nobel', image: nobel },
  { name: 'Novartis', image: novartis },
  { name: 'Phs', image: phs },
  { name: 'Pierre', image: pierre },
  { name: 'Sandoz', image: sandoz },
  { name: 'Sanofi', image: sanofi },
  { name: 'Sintez', image: sintez },
  { name: 'Worwag', image: worwag },
  { name: 'Yuriya', image: yuriya }
]

let currentTranslate = 0
const speed = 0.8

const animate = () => {
  if (!isPaused && carouselTrack.value) {
    currentTranslate -= speed
    const singleSetWidth = carouselTrack.value.scrollWidth / 2

    if (Math.abs(currentTranslate) >= singleSetWidth) {
      currentTranslate = 0
    }

    carouselTrack.value.style.transform = `translateX(${currentTranslate}px)`
  }

  animationId = requestAnimationFrame(animate)
}

const pauseAnimation = () => {
  isPaused = true
}

const resumeAnimation = () => {
  isPaused = false
}

onMounted(() => {
  setTimeout(() => {
    animate()
  }, 100)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.carousel-track {
  display: flex;
  width: fit-content;
  will-change: transform;
}

.partner-card {
  @apply flex justify-center items-center;
  @apply bg-white border border-gray-100;
  @apply rounded-xl shadow-sm;
  @apply p-6 lg:p-8;
  @apply transition-all duration-300 ease-out;
  @apply hover:shadow-md hover:border-Blue/30 hover:bg-gray-50;
  @apply cursor-pointer;
  @apply min-h-[100px] lg:min-h-[120px];
  @apply w-[160px] sm:w-[180px] lg:w-[200px];
  @apply mx-3 lg:mx-4;
  flex-shrink: 0;
}

.partner-card:hover {
  transform: translateY(-4px);
}

.partner-logo {
  @apply max-w-full max-h-full;
  @apply h-12 sm:h-14 lg:h-16;
  @apply object-contain;
  @apply transition-all duration-300;
  @apply filter grayscale opacity-50;
}

.partner-card:hover .partner-logo {
  @apply filter-none opacity-100;
  transform: scale(1.08);
}

.font-raleway {
  font-family: 'Raleway', sans-serif;
}

@media (max-width: 640px) {
  .partner-card {
    @apply p-4 min-h-[80px] w-[140px] mx-2;
  }

  .partner-logo {
    @apply h-10;
  }
}
</style>