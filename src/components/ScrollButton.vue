<template>
  <!-- Кнопка прокрутки вверх -->
  <button @click="scrollToTop" class="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center
           bg-grayBrown text-white rounded-sm shadow-md transition-all duration-300 
           hover:bg-opacity-70 bg-Blue hover:bg-lightBlue"
    :class="{ 'opacity-100 scale-100': showScrollButton, 'opacity-0 scale-90 pointer-events-none': !showScrollButton }">
    ⬆
  </button>
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

onMounted(() => window.addEventListener("scroll", handleScroll))
onUnmounted(() => window.removeEventListener("scroll", handleScroll))
</script>
