<template>
  <section
    class="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#070e2b] via-[#0e194a] to-[#081033] text-white flex items-center justify-center min-h-[85vh]"
    aria-labelledby="contact-form-title"
  >
    <!-- Decorative Glowing Background Orbs -->
    <div class="absolute top-10 left-10 w-96 h-96 bg-Blue/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[500px] h-[500px] bg-lightBlue/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative w-full max-w-6xl z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

        <!-- Left Content Column (lg:col-span-6) -->
        <div class="lg:col-span-6 space-y-8" data-aos="fade-right" data-aos-duration="800">
          <div class="space-y-4">
            <!-- Simplified Badge -->
            <div class="flex items-center space-x-2.5 text-lightBlue text-xs font-bold uppercase tracking-widest">
              <span class="w-6 h-0.5 bg-lightBlue rounded-full"></span>
              <span>Свяжитесь с нами</span>
            </div>

            <h2 id="contact-form-title" class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight font-raleway">
              Готовы к <span class="bg-gradient-to-r from-white via-lightBlue to-white bg-clip-text text-transparent">сотрудничеству?</span>
            </h2>

            <p class="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl">
              Оставьте заявку, и наш специалист свяжется с вами в течение <strong class="text-white font-semibold">15 минут</strong> для обсуждения деталей.
            </p>
          </div>

          <!-- Contact Info: Phone & Email in ONE Line -->
          <div class="space-y-4 pt-2">
            <!-- Phone & Email Row -->
            <div class="flex flex-wrap items-center gap-6 sm:gap-8">
              <!-- Phone 1 -->
              <a
                href="tel:+998957313148"
                class="inline-flex items-center space-x-3 group focus:outline-none"
              >
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lightBlue group-hover:bg-lightBlue group-hover:text-white transition-all duration-200 flex-shrink-0 shadow-sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span class="block text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Телефон</span>
                  <span class="font-bold text-white text-sm sm:text-base group-hover:text-lightBlue transition-colors">+998 95 731 31 48</span>
                </div>
              </a>

              <!-- Phone 2 -->
              <a
                href="tel:+998915406268"
                class="inline-flex items-center space-x-3 group focus:outline-none"
              >
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lightBlue group-hover:bg-lightBlue group-hover:text-white transition-all duration-200 flex-shrink-0 shadow-sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span class="block text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Телефон</span>
                  <span class="font-bold text-white text-sm sm:text-base group-hover:text-lightBlue transition-colors">+998 91 540 62 68</span>
                </div>
              </a>

              <!-- Divider -->
              <div class="hidden sm:block w-px h-8 bg-white/15"></div>

              <!-- Email -->
              <a
                href="mailto:info@hurshidadelux.com"
                class="inline-flex items-center space-x-3 group focus:outline-none"
              >
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lightBlue group-hover:bg-lightBlue group-hover:text-white transition-all duration-200 flex-shrink-0 shadow-sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span class="block text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Email</span>
                  <span class="font-bold text-white text-sm group-hover:text-lightBlue transition-colors">info@hurshidadelux.com</span>
                </div>
              </a>
            </div>

            <!-- Address & Hours Line -->
            <div class="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-gray-300">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-lightBlue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>313, ул. Гейдара Алиева, Ташкент</span>
              </div>

              <span class="hidden sm:inline text-gray-500">•</span>

              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-lightBlue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Пн - Пт: 09:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Form Column (lg:col-span-6) -->
        <div
          class="lg:col-span-6 bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/40 text-gray-900 relative"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <!-- SUCCESS STATE VIEW -->
          <div v-if="isSuccess" class="py-8 text-center space-y-6 animate-fade-in">
            <div class="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div class="space-y-2">
              <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900 font-raleway">
                Заявка отправлена!
              </h3>
              <p class="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                Спасибо за обращение. Наш специалист свяжется с вами по указанному телефону в ближайшее время.
              </p>
            </div>

            <div class="pt-4">
              <button
                @click="resetForm"
                class="px-8 py-3.5 bg-Blue hover:bg-darkBlue text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                Отправить еще одно сообщение
              </button>
            </div>
          </div>

          <!-- FORM INPUT VIEW -->
          <template v-else>
            <div class="mb-8">
              <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-raleway">
                Оставьте заявку
              </h3>
              <p class="text-gray-600 text-sm">
                Заполните форму ниже, и мы ответим на все ваши вопросы
              </p>
            </div>

            <form @submit.prevent="handleSubmit" novalidate class="space-y-4">
              <!-- Name Input -->
              <div>
                <label for="form-name" class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Ваше имя <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <input
                    id="form-name"
                    v-model="formData.name"
                    type="text"
                    placeholder="Александр Иванов"
                    :class="[
                      errors.name
                        ? 'border-red-500 bg-red-50/50 focus:ring-red-400'
                        : 'border-gray-200 bg-gray-50/80 focus:ring-Blue'
                    ]"
                    class="w-full pl-11 pr-4 py-3 border rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  />
                  <div class="absolute left-3.5 top-3 text-gray-400 pointer-events-none">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <p v-if="errors.name" class="text-xs text-red-500 mt-1">Пожалуйста, укажите ваше имя</p>
              </div>

              <!-- Phone Input -->
              <div>
                <label for="form-phone" class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Ваш телефон <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <input
                    id="form-phone"
                    v-model="formData.phone"
                    type="tel"
                    placeholder="+998 (90) 123-45-67"
                    :class="[
                      errors.phone
                        ? 'border-red-500 bg-red-50/50 focus:ring-red-400'
                        : 'border-gray-200 bg-gray-50/80 focus:ring-Blue'
                    ]"
                    class="w-full pl-11 pr-4 py-3 border rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  />
                  <div class="absolute left-3.5 top-3 text-gray-400 pointer-events-none">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <p v-if="errors.phone" class="text-xs text-red-500 mt-1">Пожалуйста, укажите контактный телефон</p>
              </div>

              <!-- Email Input -->
              <div>
                <label for="form-email" class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Email
                </label>
                <div class="relative">
                  <input
                    id="form-email"
                    v-model="formData.email"
                    type="email"
                    placeholder="example@mail.com"
                    class="w-full pl-11 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent transition-all"
                  />
                  <div class="absolute left-3.5 top-3 text-gray-400 pointer-events-none">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Message Input -->
              <div>
                <label for="form-message" class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Ваше сообщение
                </label>
                <div class="relative">
                  <textarea
                    id="form-message"
                    v-model="formData.message"
                    rows="3"
                    placeholder="Опишите тему вашего обращения..."
                    class="w-full pl-11 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent transition-all"
                  ></textarea>
                  <div class="absolute left-3.5 top-3 text-gray-400 pointer-events-none">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Agreement Checkbox -->
              <div class="space-y-1 pt-1">
                <div class="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="form-agreement"
                    v-model="formData.agreement"
                    class="w-4 h-4 mt-0.5 text-Blue border-gray-300 rounded focus:ring-Blue focus:ring-2 cursor-pointer"
                  />
                  <label for="form-agreement" class="text-xs text-gray-600 leading-relaxed cursor-pointer select-none">
                    Я согласен с
                    <router-link to="/privacy-policy" class="text-Blue hover:underline font-semibold">
                      политикой конфиденциальности
                    </router-link>
                    и обработкой персональных данных
                  </label>
                </div>
                <p v-if="errors.agreement" class="text-xs text-red-500 pl-7">Необходимо подтвердить согласие</p>
              </div>

              <!-- Submit Button -->
              <div class="pt-2">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-gradient-to-r from-Blue via-lightBlue to-Blue hover:brightness-110 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-Blue/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base cursor-pointer"
                >
                  <span v-if="!isSubmitting">Отправить заявку</span>
                  <span v-else class="flex items-center space-x-2">
                    <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Отправка...</span>
                  </span>
                </button>
              </div>
            </form>
          </template>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
  agreement: false
})

const errors = ref({
  name: false,
  phone: false,
  agreement: false
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const validateForm = () => {
  errors.value.name = !formData.value.name || !formData.value.name.trim()
  errors.value.phone = !formData.value.phone || !formData.value.phone.trim()
  errors.value.agreement = !formData.value.agreement

  return !errors.value.name && !errors.value.phone && !errors.value.agreement
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  const subject = encodeURIComponent(`Новая заявка с сайта от ${formData.value.name}`)
  const body = encodeURIComponent([
    `Имя: ${formData.value.name}`,
    `Телефон: ${formData.value.phone}`,
    `Email: ${formData.value.email || 'Не указан'}`,
    '',
    `Сообщение: ${formData.value.message || 'Без сообщения'}`,
  ].join('\n'))

  const mailtoUrl = `mailto:info@hurshidadelux.com?subject=${subject}&body=${body}`

  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true

    try {
      window.location.href = mailtoUrl
    } catch (e) {
      console.warn("Mailto trigger:", e)
    }
  }, 500)
}

const resetForm = () => {
  formData.value = {
    name: '',
    phone: '',
    email: '',
    message: '',
    agreement: false
  }
  errors.value = {
    name: false,
    phone: false,
    agreement: false
  }
  isSuccess.value = false
}
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>
