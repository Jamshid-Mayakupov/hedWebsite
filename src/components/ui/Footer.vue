<template>
  <footer class="w-full bg-gradient-to-b from-[#080f2d] via-[#0d1847] to-[#050a1f] text-white relative overflow-hidden border-t border-white/10">
    <!-- Ambient Glassmorphism Glow Background Blobs -->
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-Blue/15 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-lightBlue/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
        
        <!-- Column 1: Brand Logo & Overview (lg:col-span-4) -->
        <div class="lg:col-span-4 space-y-6">
          <router-link to="/" class="inline-block group focus:outline-none focus:ring-2 focus:ring-lightBlue/50 rounded-xl">
              <img
                src="/src/assets/images/hed-logo.png"
                alt="HURSHIDA ENTER DELUX Logo"
                class="h-10 w-auto object-contain brightness-0 invert"
              />
          </router-link>

          <p class="text-gray-300 text-sm leading-relaxed max-w-sm">
            Фармацевтическая компания <strong class="text-white font-semibold">HURSHIDA ENTER DELUX</strong> — мы создаем инновационные и высококачественные решения для сохранения и укрепления здоровья каждого человека.
          </p>

          <!-- Social Links -->
          <div class="space-y-3 pt-2">
            <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-widest font-raleway">
              Мы в социальных сетях
            </h4>
            <div class="flex items-center space-x-3">
              <!-- Telegram -->
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-white/10 hover:bg-lightBlue border border-white/10 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lightBlue/30 group"
                aria-label="Telegram"
              >
                <svg class="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>

              <!-- Instagram -->
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 border border-white/10 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md group"
                aria-label="Instagram"
              >
                <svg class="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <!-- Facebook -->
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-white/10 hover:bg-[#1877F2] border border-white/10 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md group"
                aria-label="Facebook"
              >
                <svg class="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-white/10 hover:bg-[#0A66C2] border border-white/10 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md group"
                aria-label="LinkedIn"
              >
                <svg class="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Column 2: Navigation - Компания (lg:col-span-2) -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-lightBlue"></span>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider font-raleway">
              Компания
            </h4>
          </div>
          <nav class="flex flex-col space-y-2.5">
            <router-link
              to="/about"
              class="text-gray-300 hover:text-lightBlue text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center group"
            >
              <span class="text-lightBlue opacity-0 group-hover:opacity-100 transition-opacity mr-1.5 text-xs">›</span>
              О нас
            </router-link>
            <router-link
              to="/ourteam"
              class="text-gray-300 hover:text-lightBlue text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center group"
            >
              <span class="text-lightBlue opacity-0 group-hover:opacity-100 transition-opacity mr-1.5 text-xs">›</span>
              Наша команда
            </router-link>
            <router-link
              to="/direction"
              class="text-gray-300 hover:text-lightBlue text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center group"
            >
              <span class="text-lightBlue opacity-0 group-hover:opacity-100 transition-opacity mr-1.5 text-xs">›</span>
              Направления
            </router-link>
            <router-link
              to="/news"
              class="text-gray-300 hover:text-lightBlue text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center group"
            >
              <span class="text-lightBlue opacity-0 group-hover:opacity-100 transition-opacity mr-1.5 text-xs">›</span>
              Новости
            </router-link>
            <router-link
              to="/contacts"
              class="text-gray-300 hover:text-lightBlue text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center group"
            >
              <span class="text-lightBlue opacity-0 group-hover:opacity-100 transition-opacity mr-1.5 text-xs">›</span>
              Контакты
            </router-link>
          </nav>
        </div>

        <!-- Column 3: Compliance & Products (lg:col-span-3) -->
        <div class="lg:col-span-3 space-y-4">
          <div class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-lightBlue"></span>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider font-raleway">
              Комплаенс & Продукция
            </h4>
          </div>
          <nav class="flex flex-col space-y-2.5">
            <!--
            <router-link
              to="/products"
              class="text-gray-300 hover:text-lightBlue text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center group"
            >
              <span class="text-lightBlue opacity-0 group-hover:opacity-100 transition-opacity mr-1.5 text-xs">›</span>
              Каталог продукции
            </router-link>
            -->
            <router-link
              to="/complains"
              class="text-gray-300 hover:text-lightBlue text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center group"
            >
              <span class="text-lightBlue opacity-0 group-hover:opacity-100 transition-opacity mr-1.5 text-xs">›</span>
              Комплаенс-документы
            </router-link>
            <router-link
              to="/appeal"
              class="text-gray-300 hover:text-lightBlue text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center group"
            >
              <span class="text-lightBlue opacity-0 group-hover:opacity-100 transition-opacity mr-1.5 text-xs">›</span>
              Обращение граждан
            </router-link>
            <router-link
              to="/privacy-policy"
              class="text-gray-300 hover:text-lightBlue text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center group"
            >
              <span class="text-lightBlue opacity-0 group-hover:opacity-100 transition-opacity mr-1.5 text-xs">›</span>
              Конфиденциальность
            </router-link>
          </nav>
        </div>

        <!-- Column 4: Contacts & Newsletter (lg:col-span-3) -->
        <div class="lg:col-span-3 space-y-5">
          <div class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-lightBlue"></span>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider font-raleway">
              Контакты
            </h4>
          </div>

          <!-- Contact Quick Info -->
          <ul class="space-y-3 text-sm text-gray-300">
            <li class="flex items-start space-x-3">
              <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-lightBlue flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span class="block text-xs text-gray-400">Телефон для связи:</span>
                <a href="tel:+998998637707" class="font-medium text-white hover:text-lightBlue transition-colors">
                  +998 (99) 863-77-07
                </a>
              </div>
            </li>

            <li class="flex items-start space-x-3">
              <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-lightBlue flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span class="block text-xs text-gray-400">Электронная почта:</span>
                <a href="mailto:info@hurshidadelux.com" class="font-medium text-white hover:text-lightBlue transition-colors break-all">
                  info@hurshidadelux.com
                </a>
              </div>
            </li>

            <li class="flex items-start space-x-3">
              <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-lightBlue flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span class="block text-xs text-gray-400">Адрес офиса:</span>
                <span class="text-white text-xs leading-tight block">
                  313, ул. Гейдара Алиева, Ташкент, Узбекистан
                </span>
              </div>
            </li>
          </ul>

          <!-- Email Subscription Form -->
          <div class="pt-2">
            <h5 class="text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">
              Подпишитесь на новости
            </h5>
            
            <div v-if="isSubscribed" class="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center space-x-2 animate-fade-in">
              <svg class="w-4 h-4 flex-shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Спасибо! Вы успешно подписались на рассылку.</span>
            </div>

            <form v-else @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-2">
              <div class="relative flex-1">
                <input
                  v-model="subscriberEmail"
                  type="email"
                  required
                  placeholder="Ваш email..."
                  class="w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lightBlue focus:border-transparent transition-all backdrop-blur-sm"
                />
              </div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="px-4 py-2.5 bg-gradient-to-r from-Blue to-lightBlue hover:from-lightBlue hover:to-Blue text-white text-xs font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lightBlue/30 disabled:opacity-50 flex items-center justify-center whitespace-nowrap"
              >
                <span v-if="!isSubmitting">Подписаться</span>
                <span v-else class="inline-block animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
              </button>
            </form>
          </div>
        </div>

      </div>

      <!-- Bottom Bar Divider & Copyright -->
      <div class="mt-14 pt-8 border-t border-white/10">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© {{ currentYear }} <strong class="text-white font-semibold">HURSHIDA ENTER DELUX</strong>. Все права защищены.</p>
            <div class="hidden sm:block text-gray-600">•</div>
            <router-link to="/privacy-policy" class="hover:text-lightBlue transition-colors">
              Политика конфиденциальности
            </router-link>
          </div>

          <div class="flex items-center space-x-2 text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <svg class="w-3.5 h-3.5 text-lightBlue" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span class="text-xs font-medium">Ташкент, Узбекистан</span>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const subscriberEmail = ref('')
const isSubmitting = ref(false)
const isSubscribed = ref(false)

const currentYear = computed(() => new Date().getFullYear())

const handleSubscribe = () => {
  if (!subscriberEmail.value) return
  
  isSubmitting.value = true
  
  // Simulate network request
  setTimeout(() => {
    isSubmitting.value = false
    isSubscribed.value = true
    subscriberEmail.value = ''
  }, 700)
}
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>