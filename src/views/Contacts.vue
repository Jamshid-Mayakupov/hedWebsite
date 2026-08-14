<!-- src/views/Contacts.vue -->
<template>
  <section class="min-h-screen bg-gray-50/50 py-12 md:py-20 overflow-hidden" aria-labelledby="contacts-title">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

      <!-- 1. Hero Header Banner -->
      <div class="text-center max-w-4xl mx-auto space-y-4 pt-4" data-aos="fade-down" data-aos-duration="1000">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-semibold uppercase tracking-wider">
          <span>Контакты</span>
        </div>

        <h1 id="contacts-title" class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight font-raleway leading-tight">
          Свяжитесь с <span class="bg-gradient-to-r from-Blue via-lightBlue to-blue-700 bg-clip-text text-transparent">нами</span>
        </h1>

        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Мы всегда открыты для продуктивного диалога, долгосрочного партнерства и оперативных консультаций.
        </p>
      </div>

      <!-- 2. Two Primary Direct Phone Contact Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-duration="1000">
        
        <!-- Contact Card 1 -->
        <div class="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-xl hover:shadow-2xl hover:border-Blue/40 transition-all duration-300 relative group overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-Blue/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
          
          <div class="flex items-start justify-between mb-6">
            <div class="w-14 h-14 rounded-2xl bg-Blue/10 text-Blue flex items-center justify-center group-hover:bg-Blue group-hover:text-white transition-colors duration-300 shadow-sm">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200/60">
              <!-- <span class="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span> -->
              Пн - Пт 09:00 - 18:00
            </span>
          </div>

          <div class="space-y-3 mb-8">
            <span class="text-xs uppercase tracking-widest font-bold text-Blue">Основная линия • Дистрибуция</span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900 font-raleway">Отдел продаж и поставок</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Консультации по лекарственным препаратам, заказам и договорам поставок.
            </p>
          </div>

          <a
            href="tel:+998957313148"
            class="inline-flex items-center justify-center space-x-3 w-full py-4 px-6 rounded-2xl bg-Blue hover:bg-lightBlue text-white font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+998 95 731 31 48</span>
          </a>
        </div>

        <!-- Contact Card 2 -->
        <div class="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-xl hover:shadow-2xl hover:border-Blue/40 transition-all duration-300 relative group overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-Blue/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
          
          <div class="flex items-start justify-between mb-6">
            <div class="w-14 h-14 rounded-2xl bg-Blue/10 text-Blue flex items-center justify-center group-hover:bg-Blue group-hover:text-white transition-colors duration-300 shadow-sm">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200/60">
              <!-- <span class="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span> -->
              Пн - Пт 09:00 - 18:00
            </span>
          </div>

          <div class="space-y-3 mb-8">
            <span class="text-xs uppercase tracking-widest font-bold text-Blue">Сотрудничество • Партнерство</span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900 font-raleway">Отдел развития и проектов</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Международные поставки, тендеры и стратегические партнерские соглашения.
            </p>
          </div>

          <a
            href="tel:+998915406268"
            class="inline-flex items-center justify-center space-x-3 w-full py-4 px-6 rounded-2xl bg-Blue hover:bg-lightBlue text-white font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+998 91 540 62 68</span>
          </a>
        </div>

      </div>

      <!-- 3. Key Company Details (Address, Email, Working Hours) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-aos="fade-up" data-aos-duration="1000">
        
        <!-- Address Card -->
        <div class="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-lg hover:shadow-xl hover:border-Blue/30 transition-all duration-300 space-y-4">
          <div class="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 font-raleway">Главный офис</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            313, улица Гейдара Алиева, Яккасарайский район, г. Ташкент, Республика Узбекистан
          </p>
          <div class="text-xs font-semibold text-gray-400">
            Ориентир: Комплекс HED
          </div>
        </div>

        <!-- Working Hours Card -->
        <div class="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-lg hover:shadow-xl hover:border-Blue/30 transition-all duration-300 space-y-4">
          <div class="w-14 h-14 rounded-2xl bg-Blue/10 text-Blue flex items-center justify-center">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 font-raleway">График работы</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex justify-between items-center pb-2 border-b border-gray-100">
              <span>Понедельник — Пятница:</span>
              <strong class="text-gray-900 font-semibold">09:00 – 18:00</strong>
            </div>
            <div class="flex justify-between items-center pt-1">
              <span>Суббота — Воскресенье:</span>
              <span class="text-gray-400 font-medium">Выходной</span>
            </div>
          </div>
        </div>

        <!-- Email Card -->
        <div class="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-lg hover:shadow-xl hover:border-Blue/30 transition-all duration-300 space-y-4">
          <div class="w-14 h-14 rounded-2xl bg-blue-50 text-Blue flex items-center justify-center">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 font-raleway">Электронная почта</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Отправляйте коммерческие предложения и запросы на официальный email:
          </p>
          <a
            href="mailto:info@hurshidadelux.com"
            class="inline-block text-Blue hover:text-lightBlue font-bold text-base transition-colors">
            info@hurshidadelux.com
          </a>
        </div>

      </div>

      <!-- 4. Interactive Yandex Map & Fast Feedback Form Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" data-aos="fade-up" data-aos-duration="1000">
        
        <!-- Left: Quick Message Form -->
        <div class="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xl flex flex-col justify-between space-y-6">
          <div class="space-y-3">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-Blue/10 text-Blue text-xs font-bold uppercase tracking-wider">
              <span>Быстрая связь</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 font-raleway">Оставить сообщение</h2>
            <p class="text-sm text-gray-600 leading-relaxed">
              Заполните короткую форму, и наш менеджер оперативно свяжется с вами.
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="contact-name" class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Ваше имя *</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                required
                placeholder="Иван Иванов"
                class="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label for="contact-phone" class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Телефон *</label>
              <input
                id="contact-phone"
                v-model="form.phone"
                type="tel"
                required
                placeholder="+998 90 123 45 67"
                class="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label for="contact-message" class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Сообщение / Вопрос</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                rows="3"
                placeholder="Опишите ваш вопрос или тему сотрудничества..."
                class="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-4 px-6 rounded-2xl bg-Blue hover:bg-lightBlue text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50">
              <span v-if="!isSubmitting">Отправить сообщение</span>
              <span v-else>Отправка...</span>
              <svg v-if="!isSubmitting" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <!-- Success Alert -->
            <div v-if="isSuccess" class="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-medium flex items-center space-x-2">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Спасибо! Ваше сообщение принято. Мы свяжемся с вами в ближайшее время.</span>
            </div>
          </form>
        </div>

        <!-- Right: Yandex Map Container -->
        <div class="lg:col-span-6 bg-white p-3 rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden flex flex-col min-h-[420px]">
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.278784%2C41.271082&z=16&mode=whatshere&whatshere%5Bpoint%5D=69.278784%2C41.271082"
            width="100%"
            height="100%"
            class="w-full h-full min-h-[380px] rounded-2xl border-0 flex-1"
            loading="lazy"
            title="Интерактивная карта HED"></iframe>
        </div>

      </div>

      <!-- 5. Regional Branches Hubs -->
     

    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import AOS from 'aos'

const isSubmitting = ref(false)
const isSuccess = ref(false)

const form = reactive({
  name: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  isSubmitting.value = true
  // Simulate network request
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
    form.name = ''
    form.phone = ''
    form.message = ''
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  }, 600)
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