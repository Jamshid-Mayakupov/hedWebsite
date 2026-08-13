<!-- src/views/About.vue -->
<template>
  <section class="min-h-screen bg-gray-50/50 py-12 md:py-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

      <!-- 1. Hero Header Banner -->
      <div class="text-center max-w-4xl mx-auto space-y-4 pt-4" data-aos="fade-down" data-aos-duration="1000">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-semibold uppercase tracking-wider">
          <span>О компании</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight font-raleway leading-tight">
          Надежный лидер фармацевтического рынка <span class="bg-gradient-to-r from-Blue via-lightBlue to-blue-700 bg-clip-text text-transparent">Узбекистана</span>
        </h1>

        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          ООО «HURSHIDA ENTER DELUX» с сентября 2017 года обеспечивает систему здравоохранения Узбекистана высококачественными лекарственными средствами и медицинскими изделиями мирового стандарта.
        </p>
      </div>

      <!-- 2. Dynamic Dual-Photo Showcase Grid (about-1 & about-2) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" data-aos="fade-up" data-aos-duration="1000">
        
        <!-- Primary Main Image Card (about-1.JPG) -->
        <div class="lg:col-span-7 relative group">
          <div class="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-200/80">
            <img
              :src="aboutImg1"
              alt="Hurshida Enter Delux Главный корпус"
              class="w-full h-[380px] sm:h-[480px] md:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            <!-- Bottom Overlay Card -->
            <div class="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white space-y-1 shadow-lg">
              <span class="text-xs uppercase tracking-widest font-bold text-cyan-300">Главный комплекс</span>
              <h3 class="text-xl sm:text-2xl font-bold font-raleway">ООО «HURSHIDA ENTER DELUX»</h3>
              <p class="text-sm text-gray-200">Оптовая и розничная дистрибуция социально значимых препаратов</p>
            </div>
          </div>

          <!-- Floating Experience Badge -->
          <div class="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 bg-white/95 backdrop-blur-md border border-gray-100 p-4 sm:p-5 rounded-2xl shadow-xl hidden sm:flex items-center space-x-4">
            <div class="w-12 h-12 rounded-xl bg-Blue/10 flex items-center justify-center text-Blue font-bold text-xl">
              9+
            </div>
            <div>
              <div class="text-xs text-gray-500 uppercase tracking-wider font-semibold">Опыт работы</div>
              <div class="text-sm font-bold text-gray-900 font-raleway">С сентября 2017 года</div>
            </div>
          </div>
        </div>

        <!-- Secondary Image Card (about-2.JPG) & Lab Card -->
        <div class="lg:col-span-5 space-y-6">
          <div class="relative overflow-hidden rounded-3xl shadow-xl bg-white border border-gray-200/80 group">
            <img
              :src="aboutImg2"
              alt="Hurshida Enter Delux Инфраструктура"
              class="w-full h-[270px] sm:h-[320px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            <!-- Bottom Overlay Glass Card -->
            <div class="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white space-y-1 shadow-lg">
              <span class="text-xs font-bold text-cyan-300 uppercase tracking-wider">Инфраструктура & Склад GDP</span>
              <h4 class="text-lg sm:text-xl font-bold font-raleway">Современная логистика 5000 кв.м.</h4>
              <p class="text-xs text-gray-200">Сертифицированный холодный цех и логистический хаб</p>
            </div>
          </div>

          <!-- Laboratory & Research Showcase Card -->
          <div class="bg-white p-6 sm:p-7 rounded-3xl border border-gray-200/80 shadow-lg space-y-4 hover:border-Blue/40 transition-colors">
            <div class="flex items-center space-x-4">
              <img :src="aboutLabImg" alt="Контроль качества" class="w-16 h-16 rounded-2xl object-cover border border-gray-200 shadow-sm" />
              <div>
                <span class="text-xs font-bold text-Blue uppercase tracking-wider">Стандарт качества</span>
                <h4 class="text-lg font-bold text-gray-900 font-raleway">Исследования & Маркетинг</h4>
              </div>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed">
              Экспорт информационных и аналитических услуг по исследованию фармацевтического рынка Республики Узбекистан.
            </p>
          </div>
        </div>

      </div>

      <!-- 3. Company Video Presentation Section -->
      <div class="space-y-8" data-aos="fade-up" data-aos-duration="1000">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-semibold uppercase tracking-wider">
            <span>Видео-презентация</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 font-raleway">
            Презентация деятельности компании
          </h2>
          <p class="text-gray-600 text-base sm:text-lg">
            Узнайте больше о нашей миссии, складских комплексах GDP и стандартах качества
          </p>
        </div>

        <!-- Video Card Showcase Container -->
        <div class="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200/80 bg-gray-900 group">
          <img
            :src="heroPoster"
            alt="Презентация Hurshida Enter Delux"
            class="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>

          <!-- Centered Luxury Play Button -->
          <div class="absolute inset-0 flex items-center justify-center">
            <button
              @click="openVideoModal"
              class="relative group/btn w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-Blue/90 hover:bg-lightBlue text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-lightBlue/50"
              aria-label="Воспроизвести видео">
              <!-- Pulsing Ring -->
              <span class="absolute inset-0 rounded-full bg-Blue/50 animate-ping opacity-75"></span>
              <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <!-- Clean Sleek Bottom Overlay Bar -->
          <div class="absolute bottom-6 left-6 right-6 p-5 sm:p-6 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-xl">
            <div>
              <h3 class="text-lg sm:text-xl font-bold font-raleway">Видеопрезентация ООО «HURSHIDA ENTER DELUX»</h3>
              <p class="text-xs sm:text-sm text-gray-200">Нажмите на кнопку воспроизведения для просмотра видео</p>
            </div>
            <!-- <div class="px-4 py-1.5 rounded-full bg-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-white/30 flex-shrink-0">
              4K Ultra HD
            </div> -->
          </div>
        </div>
      </div>

      <!-- 4. Key Achievements & TOP-10 Banner -->
      <div class="bg-gradient-to-br from-Blue via-blue-700 to-darkBlue text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
        <div class="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute -left-16 -bottom-16 w-64 h-64 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-8 space-y-4">
            <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-cyan-300">
              Лидерство в отрасли
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold font-raleway leading-tight">
              8-е место среди всех фармкомпаний Республики Узбекистан
            </h2>
            <p class="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-normal">
              В 2023 году компания ООО «HURSHIDA ENTER DELUX» вошла в <strong class="text-white font-bold">ТОП-10 фармацевтических импортеров</strong> страны, заняв 8-е место по объему ввоза жизненно важных медикаментов.
            </p>
          </div>

          <div class="lg:col-span-4 flex justify-center lg:justify-end">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl text-center space-y-2 shadow-inner w-full max-w-xs">
              <div class="text-5xl sm:text-6xl font-black text-white font-raleway tracking-tight">ТОП-10</div>
              <div class="text-xs uppercase tracking-widest text-cyan-300 font-bold">Фарм импортер 2023</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 5. Stats Grid -->
      <div class="space-y-8" data-aos="fade-up" data-aos-duration="1000">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-semibold uppercase tracking-wider">
            <span>Ключевые показатели</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 font-raleway">
            Масштаб нашей работы
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-md text-center hover:shadow-xl hover:border-Blue/30 transition-all duration-300">
            <div class="text-3xl sm:text-5xl font-black text-Blue font-raleway mb-2">165+</div>
            <div class="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wider">Специалистов</div>
            <p class="text-xs text-gray-500 mt-1">Профессиональная команда</p>
          </div>

          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-md text-center hover:shadow-xl hover:border-Blue/30 transition-all duration-300">
            <div class="text-3xl sm:text-5xl font-black text-Blue font-raleway mb-2">5000 м²</div>
            <div class="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wider">Склад GDP</div>
            <p class="text-xs text-gray-500 mt-1">Центральный комплекс</p>
          </div>

          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-md text-center hover:shadow-xl hover:border-Blue/30 transition-all duration-300">
            <div class="text-3xl sm:text-5xl font-black text-Blue font-raleway mb-2">3</div>
            <div class="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wider">Филиала</div>
            <p class="text-xs text-gray-500 mt-1">Бухара, Хорезм, Карши</p>
          </div>

          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-md text-center hover:shadow-xl hover:border-Blue/30 transition-all duration-300">
            <div class="text-3xl sm:text-5xl font-black text-Blue font-raleway mb-2">25+</div>
            <div class="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wider">Партнеров</div>
            <p class="text-xs text-gray-500 mt-1">Мировые бренды</p>
          </div>
        </div>
      </div>

      <!-- 6. Mission & Core Values Grid -->
      <div class="space-y-10" data-aos="fade-up" data-aos-duration="1000">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-semibold uppercase tracking-wider">
            <span>Миссия и ценности</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 font-raleway">
            Наши ключевые приоритеты
          </h2>
          <p class="text-gray-600 text-base">
            Обеспечение населения и медицинских учреждений сертифицированными препаратами высшего качества
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <!-- Card 1 -->
          <div class="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-lg hover:shadow-xl hover:border-Blue/30 transition-all duration-300 space-y-4">
            <div class="w-14 h-14 rounded-2xl bg-Blue/10 flex items-center justify-center text-Blue">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 font-raleway">Стандарты GDP & Качество</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Строгое соблюдение правил надлежащей дистрибьюторской практики (GDP), контроль температурных режимов и герметичное хранение медикаментов.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-lg hover:shadow-xl hover:border-Blue/30 transition-all duration-300 space-y-4">
            <div class="w-14 h-14 rounded-2xl bg-Blue/10 flex items-center justify-center text-Blue">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 font-raleway">Государственное партнерство</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Плодотворное сотрудничество с Министерством Здравоохранения Республики Узбекистан в сфере поставки жизненно важных препаратов.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-lg hover:shadow-xl hover:border-Blue/30 transition-all duration-300 space-y-4">
            <div class="w-14 h-14 rounded-2xl bg-Blue/10 flex items-center justify-center text-Blue">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V55A2 2 0 006 7v1c0 .663.537 1.2 1.2 1.2h4.6c.663 0 1.2-.537 1.2-1.2V7a2 2 0 00-2-2h-1.065M15 19v-2a3 3 0 00-3-3H9" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 font-raleway">Широкая география</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Региональные логистические хабы в Бухаре, Хорезме и Карши обеспечивают непрерывную оперативную доставку в любую точку Республики.
            </p>
          </div>
        </div>
      </div>

      <!-- 7. Executive Call to Action Banner -->
      <div class="bg-gradient-to-r from-gray-900 via-Blue to-darkBlue rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl space-y-6 relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
        <div class="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 class="text-3xl sm:text-4xl font-extrabold font-raleway">
            Готовы обсудить взаимовыгодное партнерство?
          </h2>
          <p class="text-base sm:text-lg text-gray-200">
            Свяжитесь с нашей командой для получения подробной информации о поставках и совместных проектах.
          </p>
          <div class="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <router-link
              to="/contacts"
              class="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-Blue font-extrabold rounded-full transition-all duration-300 shadow-xl hover:scale-105 flex items-center justify-center space-x-2">
              <span>Связаться с нами</span>
              <svg class="w-4 h-4 text-Blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </router-link>
            <router-link
              to="/ourteam"
              class="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-full transition-all duration-300 shadow-md hover:scale-105">
              Наша команда
            </router-link>
          </div>
        </div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
      </div>

    </div>

    <!-- YouTube Video Modal -->
    <transition name="fade">
      <div
        v-if="isVideoModalOpen"
        class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        @click.self="closeVideoModal">
        
        <div class="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          <!-- Close Button -->
          <button
            @click="closeVideoModal"
            class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Закрыть видео">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- YouTube Embed Container (16:9 Aspect Ratio) -->
          <div class="relative w-full pb-[56.25%] h-0">
            <iframe
              :src="youtubeEmbedUrl"
              title="Hurshida Enter Delux YouTube Video"
              class="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import AOS from 'aos'
import aboutImg1 from "@/assets/images/about-1.JPG"
import aboutImg2 from "@/assets/images/about-2.JPG"
import aboutLabImg from "@/assets/images/about-lab.png"
import heroPoster from "@/assets/images/hero.jpg"

// YouTube Video Modal State
const isVideoModalOpen = ref(false)
// YouTube Video ID (Paste your YouTube Video ID or URL below)
const youtubeVideoId = ref('t6a8tgyk3cw') 

const youtubeEmbedUrl = computed(() => {
  return `https://www.youtube.com/embed/${youtubeVideoId.value}?autoplay=1&rel=0`
})

const openVideoModal = () => {
  isVideoModalOpen.value = true
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleKeydown)
}

const closeVideoModal = () => {
  isVideoModalOpen.value = false
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && isVideoModalOpen.value) {
    closeVideoModal()
  }
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  setTimeout(() => {
    AOS.refreshHard()
  }, 100)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
