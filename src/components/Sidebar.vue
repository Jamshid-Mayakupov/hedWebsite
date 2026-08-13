<template>
  <teleport to="body">
    <transition name="drawer-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex justify-start xl:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Мобильная навигация"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          @click="toggleSidebar"
        ></div>

        <!-- Drawer Content Container -->
        <div
          class="relative w-85 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col justify-between z-10 overflow-y-auto"
        >
          <div>
            <!-- Header Bar -->
            <div class="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50/80">
              <router-link to="/" @click="toggleSidebar" class="flex-shrink-0">
                <img src="/src/assets/images/hed-logo.png" alt="Logo" class="h-10 w-auto" />
              </router-link>

              <button
                @click="toggleSidebar"
                class="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-Blue hover:border-Blue/40 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Закрыть меню"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Navigation Links List -->
            <nav class="p-5 space-y-1.5">
              <template v-for="link in links" :key="link.text">
                <!-- Standard Navigation Link -->
                <router-link
                  v-if="!link.isCompliance"
                  :to="link.link"
                  @click="toggleSidebar"
                  class="flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-200"
                  :class="[
                    route.path === link.link
                      ? 'bg-Blue/10 text-Blue font-bold'
                      : 'text-gray-800 hover:bg-gray-50 hover:text-Blue'
                  ]"
                >
                  <span>{{ link.text }}</span>
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </router-link>

                <!-- Compliance Accordion Item -->
                <div v-else class="space-y-1 pt-1">
                  <button
                    @click="isComplianceOpen = !isComplianceOpen"
                    class="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-200"
                    :class="[
                      route.path.includes('/complains') || route.path.includes('/appeal')
                        ? 'bg-Blue/10 text-Blue font-bold'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-Blue'
                    ]"
                  >
                    <span>{{ link.text }}</span>
                    <svg
                      class="w-4 h-4 text-gray-400 transition-transform duration-300"
                      :class="{ 'rotate-180 text-Blue': isComplianceOpen }"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <!-- Compliance Sublinks -->
                  <div v-show="isComplianceOpen" class="pl-4 space-y-1">
                    <router-link
                      to="/complains"
                      @click="toggleSidebar"
                      class="flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-Blue hover:bg-gray-50 transition-colors"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-Blue"></span>
                      <span>Раздел комплаенса</span>
                    </router-link>
                    <router-link
                      to="/appeal"
                      @click="toggleSidebar"
                      class="flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-Blue hover:bg-gray-50 transition-colors"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-Blue"></span>
                      <span>Обращение к сотрудникам</span>
                    </router-link>
                    <router-link
                      to="/privacy-policy"
                      @click="toggleSidebar"
                      class="flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-Blue hover:bg-gray-50 transition-colors"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-Blue"></span>
                      <span>Политика конфиденциальности</span>
                    </router-link>
                  </div>
                </div>
              </template>
            </nav>
          </div>

          <!-- Drawer Footer Info -->
          <div class="p-5 border-t border-gray-100 bg-gray-50/80 space-y-3">
            <a
              href="tel:+998998637707"
              class="flex items-center space-x-3 px-4 py-3 rounded-xl bg-Blue text-white font-semibold text-sm shadow-md hover:bg-darkBlue transition-colors justify-center"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+998 (99) 863-77-07</span>
            </a>
            <p class="text-center text-xs text-gray-400 font-medium">
              © HURSHIDA ENTER DELUX
            </p>
          </div>

        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  isOpen: Boolean,
  toggleSidebar: Function
})

const route = useRoute()
const isComplianceOpen = ref(false)

const links = [
  { text: 'Главная', link: '/' },
  { text: 'О нас', link: '/about' },
  { text: 'Новости', link: '/news' },
  { text: 'Направление', link: '/direction' },
  { text: 'Наша команда', link: '/ourteam' },
  { text: 'Контакты', link: '/contacts' },
  { text: 'Комплаенс', link: '/complains', isCompliance: true },
]
</script>

<style scoped>
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-fade-enter-active > div:last-child,
.drawer-fade-leave-active > div:last-child {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-fade-enter-from {
  opacity: 0;
}

.drawer-fade-enter-from > div:last-child {
  transform: translateX(-100%);
}

.drawer-fade-leave-to {
  opacity: 0;
}

.drawer-fade-leave-to > div:last-child {
  transform: translateX(-100%);
}
</style>
