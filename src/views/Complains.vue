<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-24 relative overflow-hidden">
    <!-- Ambient Background Glow Accents -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-Blue/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 left-10 w-96 h-96 bg-lightBlue/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Header Banner -->
      <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="800">
        <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
          <!-- <span class="w-2 h-2 rounded-full bg-Blue"></span> -->
          <span>Комплаенс и Деловая Этика</span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight font-raleway tracking-tight mb-6">
          Комплаенс и Высокие Стандарты
        </h1>

        <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
          В компании <strong class="text-gray-900 font-semibold">HURSHIDA ENTER DELUX</strong> мы придерживаемся принципов открытости, добросовестности и абсолютного соблюдения норм этики на каждом этапе нашей работы.
        </p>
      </div>

      <!-- Core Compliance Principles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
        <div 
          v-for="(pillar, idx) in pillars" 
          :key="idx" 
          class="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl hover:border-Blue/30 transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <div class="w-12 h-12 rounded-2xl bg-Blue/10 text-Blue group-hover:bg-Blue group-hover:text-white flex items-center justify-center transition-colors mb-5 shadow-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="pillar.iconPath" />
              </svg>
            </div>
            <h3 class="text-xl font-bold font-raleway text-gray-900 group-hover:text-Blue transition-colors mb-3">
              {{ pillar.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ pillar.desc }}
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
            <span class="font-medium">Стандарт компании</span>
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
        </div>
      </div>

      <!-- Official PDF Documents Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-duration="800">
        <h2 class="text-2xl sm:text-3xl font-bold font-raleway text-gray-900 mb-3">
          Официальные документы комплаенса
        </h2>
        <p class="text-gray-600 text-sm sm:text-base">
          Ознакомьтесь с утвержденными локальными и международными правилами ведения бизнеса
        </p>
      </div>

      <!-- PDF Documents Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(doc, index) in documents" 
          :key="index"
          class="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-lg hover:shadow-2xl hover:border-Blue/40 transition-all duration-500 group flex flex-col justify-between"
          data-aos="fade-up" 
          data-aos-duration="800"
          :data-aos-delay="index * 150"
        >
          <!-- Top Card Graphic -->
          <div class="p-8 bg-gradient-to-br from-blue-50/70 via-gray-50 to-blue-100/50 border-b border-gray-100 relative overflow-hidden">
            <div class="flex items-center justify-between mb-6 relative z-10">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-Blue border border-Blue/20 shadow-sm">
                {{ doc.lang }}
              </span>
              <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">PDF ДОКУМЕНТ</span>
            </div>

            <!-- PDF Icon -->
            <div class="w-16 h-16 bg-Blue text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-Blue/20 mx-auto relative z-10">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            
            <!-- Ambient Background Watermark -->
            <div class="absolute -right-6 -bottom-6 text-Blue/5 font-black text-8xl select-none pointer-events-none">PDF</div>
          </div>

          <!-- Document Info Body -->
          <div class="p-7 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-Blue transition-colors mb-3 font-raleway">
                {{ doc.name }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6">
                {{ doc.desc }}
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="pt-4 border-t border-gray-100 flex items-center space-x-3">
              <button 
                @click="openPdf(doc.file)"
                class="flex-1 py-3 px-4 bg-Blue hover:bg-darkBlue text-white rounded-xl text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Открыть PDF</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Ethics Hotline & Appeals Banner -->
      <div 
        class="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-Blue via-darkBlue to-Blue text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div class="max-w-2xl text-center lg:text-left">
          <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-3">
            <!-- <span class="w-2 h-2 rounded-full bg-emerald-400"></span> -->
            <span>Горячая линия комплаенс</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-bold font-raleway mb-2 leading-tight">
            Есть вопросы или сообщения по этике?
          </h3>
          <p class="text-blue-100 text-sm sm:text-base leading-relaxed">
            Мы гарантируем анонимность и полную конфиденциальность рассмотрения любых обращений.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto flex-shrink-0">
          <router-link 
            to="/appeal"
            class="px-7 py-3.5 bg-white text-darkBlue hover:bg-blue-50 font-bold rounded-xl text-center text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Написать обращение</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </router-link>
          <a 
            href="tel:+998998637707"
            class="px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-darkBlue font-bold rounded-xl text-center text-sm text-white transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+998 (99) 863-77-07</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'

import hedCodeOfConduct from "@/assets/images/complains/hed_code_of_conduct.pdf"
import hedKodeksPovedeniya from "@/assets/images/complains/hed_kodeks_povedeniya.pdf"
import hedOdobAhlok from "@/assets/images/complains/hed_odob-ahlok_koidalari.pdf"

const documents = [
  { 
    file: hedCodeOfConduct, 
    name: "Code of Conduct",
    lang: "English",
    desc: "International standards of corporate behavior, ethics guidelines, and compliance rules."
  },
  { 
    file: hedKodeksPovedeniya, 
    name: "Кодекс поведения",
    lang: "Русский",
    desc: "Официальный кодекс корпоративного поведения и этических норм группы компаний HURSHIDA ENTER DELUX."
  },
  { 
    file: hedOdobAhlok, 
    name: "Одоб-Аҳлоқ Қоидалари",
    lang: "Ўзбекча",
    desc: "Корхонанинг ички одоб-ахлоқ қоидалари ва корпоратив маданият стандартлари."
  }
]

const pillars = [
  {
    title: "Прозрачность & Законность",
    desc: "Полное соответствие законодательству Республики Узбекистан и международным фармацевтическим нормам.",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Деловая Этика",
    desc: "Высокие стандарты честности и взаимоуважения с партнёрами, дистрибьюторами и клиентами.",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    title: "Антикоррупционная Политика",
    desc: "Принцип нулевой толерантности к любым проявлениям коррупции и недопущение конфликта интересов.",
    iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  }
]

const openPdf = (file) => {
  window.open(file, "_blank")
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  setTimeout(() => {
    AOS.refreshHard()
  }, 100)
})
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>