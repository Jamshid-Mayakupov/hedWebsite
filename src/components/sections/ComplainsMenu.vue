<template>
  <div ref="menuRoot" class="relative group" @keydown.esc="closeMenu">
    <div class="flex items-center">
      <router-link
        to="/complains"
        class="font-medium transition-colors duration-300"
        :class="linkClasses"
        @click="closeMenu">
        Комплаенс
      </router-link>
      <button
        type="button"
        class="grid min-h-11 min-w-11 place-items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightBlue"
        :class="buttonClasses"
        aria-label="Открыть меню комплаенса"
        aria-controls="compliance-menu"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen">
        <img
          :src="arrowDown"
          alt=""
          class="h-4 w-4 transition-transform duration-200"
          :class="[{ 'rotate-180': isOpen }, tone === 'light' ? 'brightness-0 invert' : '']" />
      </button>
    </div>

    <div
      id="compliance-menu"
      class="absolute right-0 top-full z-50 w-72 origin-top-right rounded-lg border border-gray-100 bg-white py-2 text-gray-800 shadow-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
      :class="isOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'">
      <router-link to="/complains" class="menu-link font-semibold" @click="closeMenu">
        Раздел комплаенса
      </router-link>
      <p class="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
        Документы
      </p>
      <a
        v-for="item in documentLinks"
        :key="item.text"
        :href="item.file"
        target="_blank"
        rel="noopener noreferrer"
        class="menu-link"
        @click="closeMenu">
        {{ item.text }}
      </a>
      <div class="my-2 border-t border-gray-100"></div>
      <router-link to="/appeal" class="menu-link" @click="closeMenu">Обращение</router-link>
      <router-link to="/privacy-policy" class="menu-link" @click="closeMenu">
        Политика конфиденциальности
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import arrowDown from "@/assets/images/icons/chevron-down.svg"

import hedCodeOfConduct from "@/assets/images/complains/hed_code_of_conduct.pdf"
import hedKodeksPovedeniya from "@/assets/images/complains/hed_kodeks_povedeniya.pdf"
import hedOdobAhlok from "@/assets/images/complains/hed_odob-ahlok_koidalari.pdf"

const documentLinks = [
	{ text: "HED Кодекс поведения", file: hedKodeksPovedeniya },
	{ text: "HED Одоб-ахлок коидалари", file: hedOdobAhlok },
	{ text: "HED Code of Conduct", file: hedCodeOfConduct }
]

const props = defineProps({
  tone: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value),
  },
})

const isOpen = ref(false)
const menuRoot = ref(null)
const linkClasses = computed(() => props.tone === 'light'
  ? 'text-white hover:text-lightBlue'
  : 'text-gray-700 hover:text-Blue')
const buttonClasses = computed(() => props.tone === 'light'
  ? 'text-white hover:bg-white/10'
  : 'text-gray-700 hover:bg-gray-100')

const closeMenu = () => {
  isOpen.value = false
}

const handleOutsideClick = (event) => {
  if (!menuRoot.value?.contains(event.target)) closeMenu()
}

onMounted(() => document.addEventListener('pointerdown', handleOutsideClick))
onBeforeUnmount(() => document.removeEventListener('pointerdown', handleOutsideClick))
</script>

<style scoped>
.menu-link {
  @apply block min-h-11 px-4 py-3 text-sm transition-colors hover:bg-Blue hover:text-white focus-visible:bg-Blue focus-visible:text-white focus-visible:outline-none;
}
</style>
