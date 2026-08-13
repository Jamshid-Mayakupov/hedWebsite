<template>
  <header
    class="w-full z-50 transition-all duration-300"
    :class="[
      isHome ? 'fixed top-0 left-0' : 'sticky top-0 bg-white shadow-lg',
      isHome && !isScrolled ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white' : 'bg-white/95 backdrop-blur-md shadow-md text-gray-900'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        
        <!-- Mobile Left Hamburger Button -->
        <button
          ref="menuButton"
          @click="toggleSidebar"
          class="xl:hidden p-2 rounded-xl transition-colors focus:outline-none"
          :class="[
            isHome && !isScrolled ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
          ]"
          aria-label="Открыть меню"
          aria-controls="inner-mobile-menu"
          :aria-expanded="isSidebarOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Brand Logo -->
        <router-link to="/" class="flex-shrink-0 flex items-center">
          <img
            src="/src/assets/images/hed-logo.png"
            alt="Hurshida Enter Delux Logo"
            class="h-11 sm:h-12 w-auto hover:scale-105 transition-transform duration-300"
            :class="{ 'brightness-0 invert': isHome && !isScrolled }"
          />
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden xl:flex items-center space-x-7">
          <template v-for="link in links" :key="link.text">
            <router-link
              v-if="!link.isComponent"
              :to="link.link"
              class="font-medium transition-all duration-300 relative py-2 text-base"
              :class="[
                isHome && !isScrolled
                  ? (route.path === link.link ? 'text-lightBlue font-bold' : 'text-white hover:text-lightBlue')
                  : (route.path === link.link ? 'text-Blue font-bold' : 'text-gray-700 hover:text-Blue')
              ]"
            >
              {{ link.text }}
              <span
                v-if="route.path === link.link"
                class="absolute bottom-0 left-0 w-full h-0.5"
                :class="isHome && !isScrolled ? 'bg-lightBlue' : 'bg-Blue'"
              ></span>
            </router-link>
            <ComplainsMenu v-else :tone="isHome && !isScrolled ? 'light' : 'dark'" />
          </template>
        </nav>

      </div>
    </div>

    <!-- Universal Mobile Sidebar Drawer -->
    <Sidebar ref="sidebar" :is-open="isSidebarOpen" :toggle-sidebar="toggleSidebar" />
  </header>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import ComplainsMenu from "@/components/sections/ComplainsMenu.vue"
import Sidebar from '@/components/Sidebar.vue'

const route = useRoute()
const isSidebarOpen = ref(false)
const isScrolled = ref(false)
const menuButton = ref(null)
const sidebar = ref(null)

const isHome = computed(() => route.path === '/')

const handleScroll = () => {
  requestAnimationFrame(() => {
    isScrolled.value = window.scrollY > 40
  })
}

const toggleSidebar = async () => {
  isSidebarOpen.value = !isSidebarOpen.value
  document.body.style.overflow = isSidebarOpen.value ? 'hidden' : ''
  if (isSidebarOpen.value) {
    window.addEventListener('keydown', handleSidebarKeydown)
    await nextTick()
    sidebar.value?.$el?.querySelector('button, a[href]')?.focus()
  } else {
    window.removeEventListener('keydown', handleSidebarKeydown)
    await nextTick()
    menuButton.value?.focus()
  }
}

const handleSidebarKeydown = (event) => {
  if (event.key === 'Escape' && isSidebarOpen.value) toggleSidebar()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleSidebarKeydown)
  document.body.style.overflow = ''
})

const links = [
  { text: "Главная", link: "/" },
  { text: "О нас", link: "/about" },
  { text: "Новости", link: "/news" },
  { text: "Направление", link: "/direction" },
  { text: "Наша команда", link: "/ourteam" },
  { text: "Контакты", link: "/contacts" },
  { text: "Комплаенс", isComponent: true },
]
</script>

<style scoped>
header {
  will-change: transform, background-color;
}
</style>
