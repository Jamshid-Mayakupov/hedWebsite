<template>
  <section class="bg-gray-50">
    <!-- Breadcrumbs -->
    <!-- <div class="bg-white border-b border-gray-200">
      <nav class="section-container py-4" aria-label="Breadcrumb">
        <div class="flex items-center space-x-2 text-sm">
          <router-link to="/" class="text-Blue hover:text-lightBlue transition-colors font-medium">
            Главная
          </router-link>
          <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="text-gray-600">О нас</span>
        </div>
      </nav>
    </div> -->

    <!-- Hero Section -->
    <div class="section-container py-16 md:py-20">
      <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
        <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
          О компании
        </p>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-raleway">
          Hurshida Enter Delux
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Надежный партнер в сфере фармацевтики с 2017 года
        </p>
      </div>

      <!-- Main Image -->
      <div class="mb-16" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <div class="relative overflow-hidden rounded-2xl shadow-2xl">
          <img 
            :src="imageSrc" 
            alt="Офис компании Hurshida Enter Delux"
            class="w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>
    </div>

    <!-- Mission & Achievements -->
    <div class="bg-white py-16 md:py-20">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <!-- Left Column - Mission -->
          <div class="space-y-8" data-aos="fade-right" data-aos-duration="800">
            <div>
              <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
                Наша миссия
              </p>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-raleway">
                Качество и надежность
              </h2>
              <p class="text-gray-700 text-lg leading-relaxed">
                Мы обеспечиваем клиента высоким качеством предоставляемого сервиса и создаем все возможные преимущества. Наша цель — стать достойным и надежным партнером в сфере здравоохранения.
              </p>
            </div>

            <!-- Company Info Cards -->
            <div class="space-y-6">
              <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-Blue/30 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-Blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-Blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Основание компании</h3>
                    <p class="text-gray-700 leading-relaxed">
                      <strong class="text-Blue">ООО «HURSHIDA ENTER DELUX»</strong> начало деятельность в сентябре 2017 года. Основное направление — оптовая и розничная торговля социально значимых лекарственных средств и медицинских изделий.
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-Blue/30 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-Blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-Blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Экспертиза</h3>
                    <p class="text-gray-700 leading-relaxed">
                      Наша компания также занимается экспортом информационных услуг по исследованию рынка Узбекистана в сфере реализации различных типов лекарственных средств.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Achievements -->
          <div class="space-y-8" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <div>
              <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
                Наши достижения
              </p>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-raleway">
                Лидеры рынка
              </h2>
            </div>

            <!-- Top 10 Achievement Card -->
            <div class="relative overflow-hidden bg-gradient-to-br from-Blue to-darkBlue p-8 rounded-2xl shadow-xl">
              <div class="relative z-10">
                <div class="text-6xl font-bold text-white mb-4 font-raleway">ТОП-10</div>
                <p class="text-white/90 text-lg leading-relaxed">
                  В 2023 году мы вошли в ТОП-10 фармацевтических компаний по объему импорта и заняли 8-е место среди всех компаний Республики Узбекистан.
                </p>
              </div>
              <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:border-Blue/30 transition-all duration-300">
                <div class="text-4xl font-bold text-Blue mb-2 font-raleway">165+</div>
                <p class="text-gray-700 text-sm">Специалистов в команде</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:border-Blue/30 transition-all duration-300">
                <div class="text-4xl font-bold text-Blue mb-2 font-raleway">10+</div>
                <p class="text-gray-700 text-sm">Лет опыта работы</p>
              </div>
            </div>

            <!-- Partnership Info -->
            <div class="bg-lightBlue/5 p-6 rounded-xl border border-lightBlue/20">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-Blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Партнерство</h3>
                  <p class="text-gray-700 leading-relaxed">
                    Мы сотрудничаем с Министерством Здравоохранения Республики Узбекистан, обеспечивая население необходимыми лекарственными средствами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Infrastructure Section -->
    <div class="section-container section-spacing">
      <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
        <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
          Инфраструктура
        </p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-raleway">
          Наша инфраструктура
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Warehouse Card -->
        <div 
          class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-Blue/30 group"
          data-aos="fade-up" 
          data-aos-duration="800"
          data-aos-delay="100">
          <div class="flex items-start gap-6">
            <div class="w-16 h-16 bg-Blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-Blue transition-colors">
              <svg class="w-8 h-8 text-Blue group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7V10H4V19H20V10H22V7L12 2M18 17H6V10H18V17Z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-gray-900 mb-3 font-raleway group-hover:text-Blue transition-colors">
                Складской комплекс
              </h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Склад площадью 5000 кв.м. соответствует стандарту «GDP» и расположен близко к центру города и транспортным магистралям.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-Blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Стандарт GDP
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-Blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  5000 кв.м. площадь
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-Blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Центральное расположение
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Regional Branches Card -->
        <div 
          class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-Blue/30 group"
          data-aos="fade-up" 
          data-aos-duration="800"
          data-aos-delay="200">
          <div class="flex items-start gap-6">
            <div class="w-16 h-16 bg-Blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-Blue transition-colors">
              <svg class="w-8 h-8 text-Blue group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2Z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-gray-900 mb-3 font-raleway group-hover:text-Blue transition-colors">
                Региональные филиалы
              </h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Три филиала в Бухарской, Хорезмской и Каршинской областях обеспечивают покрытие всего региона по доставке товаров.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-Blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Бухарская область
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-Blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Хорезмская область
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-Blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Каршинская область
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Section -->
    <div class="bg-white py-16 md:py-20">
      <div class="section-container">
        <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
          <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
            О нас
          </p>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-raleway">
            Видео о компании
          </h2>
        </div>

        <div class="max-w-5xl mx-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <video 
              controls 
              class="w-full h-auto"
              poster="/src/assets/images/HED-video-img.png">
              <source :src="videoSrc" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="section-container section-spacing-sm">
      <div 
        class="relative overflow-hidden bg-gradient-to-br from-Blue to-darkBlue rounded-2xl p-12 md:p-16 text-center"
        data-aos="fade-up" 
        data-aos-duration="800">
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 font-raleway">
            Готовы к сотрудничеству?
          </h2>
          <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами и узнайте больше о возможностях партнерства
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contacts" 
              class="px-8 py-4 bg-white text-Blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Связаться с нами
            </router-link>
            <router-link 
              to="/products" 
              class="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Наша продукция
            </router-link>
          </div>
        </div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import imageSrc from "@/assets/images/about.webp"
import videoSrc from "@/assets/videos/hed-video-full.mp4"
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}

/* Custom scrollbar for video */
video::-webkit-media-controls-panel {
  background: linear-gradient(to bottom, rgba(22, 46, 174, 0.8), rgba(16, 31, 112, 0.9));
}
</style>