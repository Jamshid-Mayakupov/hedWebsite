<template>
  <section class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-Blue to-darkBlue text-white">
      <div class="section-container py-16 md:py-20">
        <div class="text-center" data-aos="fade-up" data-aos-duration="800">
          <p class="text-lightBlue font-semibold text-sm uppercase tracking-wider mb-3">
            Свяжитесь с нами
          </p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-raleway">
            Контакты
          </h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Мы всегда готовы ответить на ваши вопросы и обсудить возможности сотрудничества
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="section-container py-12">
      
      <!-- Contact Cards & Map -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        
        <!-- Left Column - Quick Contacts -->
        <div class="lg:col-span-1 space-y-6">
          
          <!-- Address Card -->
          <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100" data-aos="fade-right" data-aos-duration="800">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 mb-2 text-lg">Наш адрес</h3>
                <p class="text-gray-600 leading-relaxed mb-2">
                  313, улица Гейдара Алиева<br />
                  Ташкент, Узбекистан
                </p>
                <p class="text-sm text-gray-500">
                  Современный бизнес-центр
                </p>
              </div>
            </div>
          </div>

          <!-- Working Hours Card -->
          <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-Blue" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 10.59 3.29 3.3-1.41 1.41L11 13V7h2Z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 mb-3 text-lg">Часы работы</h3>
                <div class="space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600">Пн - Пт</span>
                    <span class="font-semibold text-gray-900">9:00 - 18:00</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600">Сб - Вс</span>
                    <span class="text-gray-400">Выходной</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Email Card -->
          <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                <a 
                  href="mailto:info@hurshidadelux.com"
                  class="text-Blue hover:text-lightBlue font-medium transition-colors"
                >
                  info@hurshidadelux.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Map -->
        <div class="lg:col-span-2" data-aos="fade-left" data-aos-duration="800">
          <div class="bg-white rounded-2xl shadow-lg p-2 h-full overflow-hidden">
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.278784%2C41.271082&z=16&mode=whatshere&whatshere%5Bpoint%5D=69.278784%2C41.271082"
              width="100%"
              height="500"
              frameborder="0"
              class="rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="mb-12">
        <div class="text-center mb-8" data-aos="fade-up" data-aos-duration="800">
          <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
            Наши контакты
          </p>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-raleway">
            Наша команда
          </h2>
          <p class="text-gray-600 text-lg">
            Свяжитесь с нужным специалистом напрямую
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Director -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-duration="800">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center">
              <div class="w-16 h-16 bg-Blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 mb-2 text-xl">Директор</h3>
              <p class="text-gray-600 mb-6">
                Общие вопросы и стратегические решения
              </p>
              <a 
                href="tel:+998998637707"
                class="inline-flex items-center justify-center gap-2 bg-Blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-darkBlue transition-colors w-full"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.22 11.72 11.72 0 003.69.61 1 1 0 011 1v3.59a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.61 3.69 1 1 0 01-.22 1.11z" />
                </svg>
                <span>+998 (99) 863-77-07</span>
              </a>
            </div>
          </div>

          <!-- Foreign Partners -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-8 text-center">
              <div class="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 mb-2 text-xl">Зарубежные партнеры</h3>
              <p class="text-gray-600 mb-6">
                Импорт и международное сотрудничество
              </p>
              <a 
                href="tel:+998909597932"
                class="inline-flex items-center justify-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors w-full"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.22 11.72 11.72 0 003.69.61 1 1 0 011 1v3.59a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.61 3.69 1 1 0 01-.22 1.11z" />
                </svg>
                <span>+998 (90) 959-79-32</span>
              </a>
            </div>
          </div>

          <!-- Local Partners -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <div class="bg-gradient-to-br from-red-50 to-red-100 p-8 text-center">
              <div class="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 mb-2 text-xl">Местные партнеры</h3>
              <p class="text-gray-600 mb-12">
                Региональное сотрудничество
              </p>
              <a 
                href="tel:+998909971795"
                class="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors w-full"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.22 11.72 11.72 0 003.69.61 1 1 0 011 1v3.59a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.61 3.69 1 1 0 01-.22 1.11z" />
                </svg>
                <span>+998 (90) 997-17-95</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="relative overflow-hidden bg-gradient-to-br from-Blue to-darkBlue rounded-2xl p-12 md:p-16 text-center text-white" data-aos="fade-up" data-aos-duration="800">
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 font-raleway">
            Готовы к сотрудничеству?
          </h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и узнайте, как мы можем помочь вашему бизнесу
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+998998637707"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-Blue font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.22 11.72 11.72 0 003.69.61 1 1 0 011 1v3.59a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.61 3.69 1 1 0 01-.22 1.11z" />
              </svg>
              <span>Позвонить сейчас</span>
            </a>
            <a 
              href="mailto:info@hurshidadelux.com"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span>Написать email</span>
            </a>
          </div>
        </div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>