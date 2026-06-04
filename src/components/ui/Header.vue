<template>
  <header class="w-full z-50 bg-white shadow-lg sticky top-0">
    <div class="max-w-7xl mx-auto">
      <!-- Main Header -->
      <div class="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <!-- Logo -->
        <router-link to="/" class="flex-shrink-0 order-2 md:order-1">
          <img 
            src="/src/assets/images/hed-logo.png" 
            alt="Hurshida Enter Delux Logo" 
            class="h-12 w-auto hover:scale-105 transition-transform duration-300" 
          />
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8 order-2">
          <div v-for="link in links" :key="link.text" class="relative group">
            <router-link 
              v-if="!link.isComponent" 
              :to="link.link"
              class="text-gray-700 hover:text-Blue font-medium transition-all duration-300 relative py-2"
              :class="{ 
                'text-Blue font-semibold': route.path === link.link,
              }"
            >
              {{ link.text }}
              <!-- Active Indicator -->
              <span 
                v-if="route.path === link.link"
                class="absolute bottom-0 left-0 w-full h-0.5 bg-Blue"
              ></span>
              <!-- Hover Indicator -->
              <span 
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-lightBlue transition-all duration-300 group-hover:w-full"
              ></span>
            </router-link>
            <ComplainsMenu v-else />
          </div>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-4 order-3">
          <!-- Search Button -->
          <button 
            @click="toggleSearch" 
            class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-Blue/20" 
            aria-label="Поиск"
          >
            <svg class="w-5 h-5 text-gray-700 hover:text-Blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleSidebar" 
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-Blue/20" 
            aria-label="Меню"
          >
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Search Bar (Collapsible) -->
      <div 
        ref="searchContainer" 
        class="overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100"
        :style="{ maxHeight: isSearchOpen ? '80px' : '0' }"
      >
        <div class="bg-gradient-to-br from-gray-50 to-gray-100 py-4 px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto flex gap-2">
            <input 
              type="text" 
              placeholder="Поиск по сайту..." 
              class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-Blue focus:border-transparent outline-none transition-all"
            />
            <button class="bg-Blue hover:bg-darkBlue text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
              Найти
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import ComplainsMenu from "@/components/sections/ComplainsMenu.vue"

const route = useRoute()
const isSearchOpen = ref(false)

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
}

// Эта функция должна быть определена в родительском компоненте или Pinia store
const toggleSidebar = () => {
  // Добавьте вашу логику для открытия сайдбара
  console.log('Toggle sidebar')
}

const links = [
  { text: "Главная", link: "/" },
  { text: "О нас", link: "/about" },
  { text: "Продукция", link: "/products" },
  { text: "Новости", link: "/news" },
  { text: "Контакты", link: "/contacts" },
 { text: "Наша команда", link: "/ourteam" },
  { isComponent: true }
]
</script>

<style scoped>
/* Sticky header with smooth shadow transition */
header {
  transition: box-shadow 0.3s ease;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .flex-shrink-0 {
    order: 2;
  }
}
</style>