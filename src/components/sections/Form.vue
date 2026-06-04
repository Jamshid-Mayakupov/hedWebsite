<template>
  <section
    class="relative overflow-hidden min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    aria-labelledby="contact-form-title">
    
    <!-- Background -->
    <div class="absolute inset-0 bg-cover bg-center bg-fixed bg-[url('../src/assets/images/bg-inverted.png')]"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-Blue/90 via-darkBlue/85 to-Blue/90"></div>

    <!-- Decorative Elements -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-lightBlue/10 rounded-full blur-3xl"></div>

    <div class="relative w-full max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <!-- Left Content -->
        <div class="text-white space-y-8" data-aos="fade-right" data-aos-duration="800">
          <div class="space-y-4">
            <p class="text-lightBlue font-semibold text-sm uppercase tracking-wider">
              Свяжитесь с нами
            </p>
            <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-raleway">
              Готовы к сотрудничеству?
            </h2>
            <p class="text-lg text-gray-200 leading-relaxed">
              Оставьте заявку, и мы свяжемся с вами в течение рабочего дня для обсуждения деталей сотрудничества
            </p>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6 pt-8">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="font-semibold mb-1">Телефон</p>
                <p class="text-gray-200">+998 (99) 863-77-07</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="font-semibold mb-1">Email</p>
                <p class="text-gray-200">info@hurshidadelux.com</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="font-semibold mb-1">Адрес</p>
                <p class="text-gray-200">313, улица Гейдара Алиева<br>Ташкент, Узбекистан</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Form -->
        <div
          class="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl"
          data-aos="fade-left" 
          data-aos-duration="800" 
          data-aos-delay="200">
          
          <div class="mb-8">
            <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 font-raleway">
              Оставьте заявку
            </h3>
            <p class="text-gray-600">
              Заполните форму, и мы свяжемся с вами
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                Ваше имя *
              </label>
              <input 
                id="name" 
                v-model="formData.name"
                type="text" 
                required
                placeholder="Введите ваше имя"
                class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                Ваш телефон *
              </label>
              <input 
                id="phone" 
                v-model="formData.phone"
                type="tel" 
                required
                placeholder="+998 (XX) XXX-XX-XX"
                class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input 
                id="email" 
                v-model="formData.email"
                type="email"
                placeholder="your@email.com"
                class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                Ваше сообщение
              </label>
              <textarea 
                id="message" 
                v-model="formData.message"
                rows="4"
                placeholder="Расскажите о вашем запросе..."
                class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent transition-all"
              ></textarea>
            </div>

            <div class="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="agreement" 
                v-model="formData.agreement"
                required
                class="w-5 h-5 mt-0.5 text-Blue border-gray-300 rounded focus:ring-Blue focus:ring-2"
              />
              <label for="agreement" class="text-sm text-gray-600">
                Я ознакомлен с 
                <router-link to="/privacy-policy" class="text-Blue hover:text-lightBlue underline transition-colors">
                  политикой конфиденциальности
                </router-link>
                и даю согласие на обработку персональных данных
              </label>
            </div>

            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-Blue hover:bg-darkBlue text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
              <span v-if="!isSubmitting">Отправить заявку</span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Отправка...
              </span>
            </button>
          </form>
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

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Здесь будет логика отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Очистка формы после успешной отправки
    formData.value = {
      name: '',
      phone: '',
      email: '',
      message: '',
      agreement: false
    }
    
    alert('Спасибо! Ваша заявка отправлена.')
  } catch (error) {
    console.error('Ошибка отправки формы:', error)
    alert('Произошла ошибка. Попробуйте позже.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>