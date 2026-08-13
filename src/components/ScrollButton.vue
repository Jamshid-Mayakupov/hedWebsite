<template>
  <transition name="scroll-fade">
    <button
      v-if="showScrollButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-Blue via-darkBlue to-lightBlue text-white shadow-2xl border border-white/20 hover:shadow-Blue/50 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lightBlue/50"
      aria-label="Вернуться наверх"
      title="Наверх"
    >
      <!-- Ambient Outer Pulse Glow -->
      <span class="absolute inset-0 rounded-2xl bg-lightBlue/30 animate-ping opacity-0 group-hover:opacity-75 transition-opacity pointer-events-none"></span>

      <!-- Vector Arrow Icon -->
      <svg
        class="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform duration-300 relative z-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue"

const showScrollButton = ref(false)

const handleScroll = () => {
  requestAnimationFrame(() => {
    showScrollButton.value = window.scrollY > 300
  })
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
.scroll-fade-enter-active,
.scroll-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-fade-enter-from,
.scroll-fade-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.85);
}
</style>
