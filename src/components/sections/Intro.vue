<!-- src/components/sections/Intro.vue -->
<template>
  <section class="relative w-full h-screen overflow-hidden" aria-labelledby="header-section">
    <!-- Video Background -->
    <VideoLoad class="absolute inset-0 w-full h-full object-cover z-0" />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>

    <!-- Header -->
    <header class="absolute top-0 left-0 w-full z-50">
      <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent"></div>

      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between py-5 md:py-6" data-aos="fade-down" data-aos-duration="800">
          
          <!-- Mobile Menu Button (Left) -->
          <button
            @click="toggleSidebar"
            class="md:hidden text-white hover:text-lightBlue transition-colors z-50"
            aria-label="Открыть меню">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Logo (Center on mobile, Left on desktop) -->
          <router-link to="/" class="md:flex-shrink-0">
            <img
              src="/src/assets/images/hed-logo.png"
              alt="Hurshida Enter Delux"
              class="h-12 md:h-14 w-auto object-contain"
            />
          </router-link>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8 lg:space-x-10">
            <router-link
              v-for="link in links"
              :key="link.link"
              :to="link.link"
              class="text-white hover:text-lightBlue font-medium transition-all duration-300 relative group text-sm lg:text-base"
              :class="{ 'text-lightBlue': route.path === link.link }">
              {{ link.text }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-lightBlue group-hover:w-full transition-all duration-300"
                :class="{ 'w-full': route.path === link.link }"></span>
            </router-link>
          </nav>

          <!-- Search Button -->
          <button
            @click="toggleSearch"
            class="text-white hover:text-lightBlue transition-colors"
            aria-label="Открыть поиск">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <!-- Search Bar -->
        <transition name="slide-down">
          <div v-if="isSearchOpen" class="pb-6">
            <div class="max-w-2xl mx-auto">
              <div class="flex gap-3">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Поиск по сайту..."
                  class="flex-1 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lightBlue focus:border-transparent transition-all"
                  @keyup.enter="performSearch"
                />
                <button
                  @click="performSearch"
                  class="px-6 py-3 bg-Blue hover:bg-lightBlue text-white font-semibold rounded-lg transition-colors">
                  Поиск
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </header>

    <!-- Hero Content -->
    <div class="relative z-20 h-full flex items-center">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center text-white space-y-8">
          
          <!-- Main Title with Typing Effect -->
          <h1 
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight font-raleway uppercase"
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="200">
            <span class="block mb-2 typing-text">{{ typedText }}<span class="cursor">|</span></span>
          </h1>

          <!-- Subtitle -->
          <p 
            class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-200 uppercase tracking-wide"
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="600">
            В мире фармацевтики
          </p>

          <!-- Description -->
          <p 
            class="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="800"
            style="text-transform: none;">
            Надежный партнер с 15-летним опытом работы в сфере дистрибуции фармацевтических препаратов
          </p>

          <!-- CTA Buttons -->
          <div 
            class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="1000">
            <router-link 
              to="/contacts" 
              class="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg transition-all duration-300 hover:bg-Blue hover:border-Blue shadow-lg hover:shadow-xl transform hover:-translate-y-1 pointer-events-auto">
              Связаться с нами →
            </router-link>
            <router-link 
              to="/products" 
              class="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-Blue hover:bg-darkBlue text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Наша продукция
            </router-link>
          </div>

          <!-- Stats -->
          <div 
            class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-12"
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="1200">
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold text-lightBlue mb-1 font-raleway">15+</p>
              <p class="text-xs md:text-sm text-gray-300">Лет на рынке</p>
            </div>
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold text-lightBlue mb-1 font-raleway">3000+</p>
              <p class="text-xs md:text-sm text-gray-300">Клиентов</p>
            </div>
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold text-lightBlue mb-1 font-raleway">5000+</p>
              <p class="text-xs md:text-sm text-gray-300">Заказов в год</p>
            </div>
            <div class="text-center">
              <p class="text-3xl md:text-4xl font-bold text-lightBlue mb-1 font-raleway">24/7</p>
              <p class="text-xs md:text-sm text-gray-300">Поддержка</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div 
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      data-aos="fade-up" 
      data-aos-duration="1000"
      data-aos-delay="1400">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>

    <!-- Mobile Sidebar -->
    <transition name="slide-right">
      <div
        v-if="isSidebarOpen"
        class="fixed inset-0 z-50 md:hidden">
        
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          @click="toggleSidebar"></div>

        <!-- Sidebar -->
        <div class="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl">
          <div class="p-6 space-y-6">
            <!-- Close Button -->
            <div class="flex justify-between items-center pb-4 border-b">
              <img src="/src/assets/images/hed-logo.png" alt="Logo" class="h-10" />
              <button 
                @click="toggleSidebar"
                class="text-gray-600 hover:text-Blue transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Navigation -->
            <nav class="space-y-1">
              <router-link
                v-for="link in links"
                :key="link.link"
                :to="link.link"
                @click="toggleSidebar"
                class="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-Blue rounded-lg transition-all font-medium"
                :class="{ 'bg-Blue/10 text-Blue': route.path === link.link }">
                {{ link.text }}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </nav>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import VideoLoad from '@/components/VideoLoad.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isSearchOpen = ref(false)
const isSidebarOpen = ref(false)
const searchQuery = ref('')

// Typing effect
const fullText = 'На шаг впереди'
const typedText = ref('')
let typingIndex = 0

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
  if (isSearchOpen.value) {
    setTimeout(() => {
      document.querySelector('input[type="text"]')?.focus()
    }, 300)
  }
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  document.body.style.overflow = isSidebarOpen.value ? 'hidden' : ''
}

const performSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value } })
    isSearchOpen.value = false
    searchQuery.value = ''
  }
}

const startTyping = () => {
  typedText.value = ''
  typingIndex = 0
  typeChar()
}

const typeChar = () => {
  if (typingIndex < fullText.length) {
    typedText.value += fullText[typingIndex]
    typingIndex++
    setTimeout(typeChar, 150) // Скорость печати 150ms
  }
}

onMounted(() => {
  setTimeout(() => {
    startTyping()
  }, 500) // Задержка перед началом печати
})

const links = [
  { text: 'Главная', link: '/' },
  { text: 'О нас', link: '/about' },
  { text: 'Комплаенс', link: '/complains' },
  { text: 'Продукция', link: '/products' },
  { text: 'Новости', link: '/news' },
  { text: 'Контакты', link: '/contacts' },
  { text: 'Наша команда', link: '/ourteam' },
]
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}

/* Typing cursor animation */
.typing-text {
  display: inline-block;
}

.cursor {
  animation: blink 1s infinite;
  color: #1C46F5; /* lightBlue */
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}

/* Text shadows for better readability */
h1, p {
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-100%);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>