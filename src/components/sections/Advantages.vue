<template>
  <div class="bg-white">
    <!-- Advantages Section -->
    <section class="section-container section-spacing" data-aos="fade-up" data-aos-duration="800">
      <div class="text-center mb-16">
        <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
          Наши достижения
        </p>
        <SectionHeader>Почему выбирают нас</SectionHeader>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          Надежный партнер в сфере фармацевтики с многолетним опытом
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(advantage, index) in advantages" 
          :key="index" 
          :data-aos="'fade-up'" 
          :data-aos-delay="index * 100"
          data-aos-duration="800"
          class="text-center group">
          <div class="mb-6 flex justify-center">
            <div class="relative">
              <div class="w-20 h-20 bg-Blue/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-Blue group-hover:scale-110">
                <img 
                  :src="advantage.icon" 
                  :alt="advantage.alt" 
                  class="w-10 h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>
            </div>
          </div>
          
          <h3 class="text-4xl sm:text-5xl font-bold text-Blue mb-3 font-raleway">
            {{ advantage.number }}
          </h3>
          <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
            {{ advantage.text }}
          </p>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="section-container section-spacing bg-gray-50">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Image Section -->
        <div class="relative order-2 lg:order-1" data-aos="fade-right" data-aos-duration="800">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Медицинское оборудование и исследования" 
              class="w-full h-[400px] lg:h-[550px] object-cover" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-Blue/20 to-transparent"></div>
          </div>
          
          <!-- Декоративный элемент -->
          <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-Blue/10 rounded-2xl -z-10"></div>
          <div class="absolute -top-6 -left-6 w-32 h-32 bg-lightBlue/10 rounded-2xl -z-10"></div>
        </div>

        <!-- Content Section -->
        <div class="space-y-6 order-1 lg:order-2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <div class="space-y-4">
            <p class="text-Blue font-semibold text-sm uppercase tracking-wider">
              О компании
            </p>
            <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight font-raleway">
              Немного о нас
            </h2>
          </div>

          <div class="space-y-5 text-gray-600 text-base lg:text-lg leading-relaxed">
            <p>
              Мы будем искренне рады, если в нашем лице Вы найдете
              достойного и надёжного партнера. Мы обеспечиваем
              клиента высоким качеством предоставляемого сервиса, а
              это, в свою очередь, не может остаться незамеченным.
            </p>

            <p>
              Наша компания создаёт для клиента все возможные
              преимущества и обратившись к нам и почувствовав на себе
              весь комфорт широкого спектра предоставляемых услуг, Вы
              уже не захотите покидать нас.
            </p>
          </div>

          <!-- Features List -->
          <ul class="space-y-3 pt-4">
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-Blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Высокое качество продукции</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-Blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Надежное партнерство</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-Blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Комплексный сервис</span>
            </li>
          </ul>

          <div class="pt-6">
            <router-link to="/about" class="btn-primary inline-block">
              Подробнее о компании
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
import SectionHeader from '../common/SectionHeader.vue'

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
    text: "Постоянных клиентов" 
  },
  { 
    icon: ordersIcon, 
    alt: "Количество заказов", 
    number: "5000+", 
    text: "Выполняемых заказов в год" 
  },
  { 
    icon: workingDaysIcon, 
    alt: "Рабочие дни", 
    number: "365", 
    text: "Рабочих дней в году" 
  },
]
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>