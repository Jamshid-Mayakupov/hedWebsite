<!-- src/components/sections/Intro.vue -->
<template>
  <section class="relative w-full h-screen overflow-hidden" aria-labelledby="header-section">
    <!-- Video Background -->
    <VideoLoad class="absolute inset-0 w-full h-full object-cover z-0" />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>

    <!-- Hero Content -->
    <div class="relative z-20 h-full flex items-center justify-center pt-24 pb-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto text-center text-white space-y-8">

          <!-- Top Badge -->
          <div
            class="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-base font-semibold tracking-wider shadow-md"
            data-aos="fade-down"
            data-aos-duration="800">
            <span>HURSHIDA ENTER DELUX</span>
          </div>

          <!-- Main Title with Typing Effect -->
          <h1
            class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-tight font-raleway text-white tracking-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200">
            <span class="block typing-text text-white">
              {{ typedText }}<span class="cursor text-lightBlue">|</span>
            </span>
          </h1>

          <!-- Subtitle -->
          <p
            class="text-xl sm:text-3xl md:text-4xl text-lightBlue font-bold tracking-wide font-raleway uppercase"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400">
            В мире фармацевтики
          </p>

          <!-- Description -->
          <p
            class="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600">
            Надежный партнер с 15-летним опытом работы в сфере дистрибуции фармацевтических препаратов
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800">
            <router-link
              to="/contacts"
              class="px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-Blue hover:bg-lightBlue rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2">
              <span>Связаться с нами</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </router-link>
            <router-link
              to="/about"
              class="px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-gray-900 rounded-full transition-all duration-300 shadow-sm hover:scale-105 flex items-center justify-center space-x-2">
              <span>О компании</span>
            </router-link>
          </div>

        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce pointer-events-none"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="1400">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import VideoLoad from '@/components/VideoLoad.vue'
import { onBeforeUnmount, ref, onMounted } from 'vue'

// Typing effect
const fullText = 'На шаг впереди'
const typedText = ref('')
let typingIndex = 0
let typingTimer
let startTimer

const startTyping = () => {
  typedText.value = ''
  typingIndex = 0
  typeChar()
}

const typeChar = () => {
  if (typingIndex < fullText.length) {
    typedText.value += fullText[typingIndex]
    typingIndex++
    typingTimer = window.setTimeout(typeChar, 150)
  }
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typedText.value = fullText
    return
  }
  startTimer = window.setTimeout(startTyping, 500)
})

onBeforeUnmount(() => {
  window.clearTimeout(startTimer)
  window.clearTimeout(typingTimer)
})
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}

.typing-text {
  display: inline-block;
}

.cursor {
  animation: blink 1s infinite;
  color: #1C46F5;
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}

h1, p {
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
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
