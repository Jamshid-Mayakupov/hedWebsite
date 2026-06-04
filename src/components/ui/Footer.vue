<!-- src/components/ui/Footer.vue: -->
<template>
  <footer class="w-full bg-gray-100 border-t-2">
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <!-- Левый блок с логотипом и описанием -->
          <div class="lg:col-span-5 space-y-6">
            <p class="text-gray-600 text-base leading-relaxed max-w-md">
              Мы создаем инновационные решения, чтобы каждый мог жить здоровой и полноценной жизнью.
            </p>

            <!-- Email подписка -->
            <div class="space-y-3">
              <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Подписаться на новости
              </h4>
              <div class="flex max-w-md">
                <div class="relative flex-1">
                  <input type="email" placeholder="Введите ваш email"
                    class="w-full px-4 py-3 border border-gray-300 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent" />
                </div>
                <button
                  class="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  Подписаться
                </button>
              </div>
            </div>
          </div>

          <!-- Навигационные ссылки -->
          <div class="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <!-- Компания -->
            <div class="space-y-4">
              <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Компания
              </h4>
              <nav class="flex flex-col space-y-3">
                <a href="/about" class="text-gray-600 hover:text-lightBlue text-sm transition-colors duration-200">
                  О нас
                </a>
                <a href="/news" class="text-gray-600 hover:text-lightBlue text-sm transition-colors duration-200">
                  Новости
                </a>
                <a href="/products" class="text-gray-600 hover:text-lightBlue text-sm transition-colors duration-200">
                  Продукты
                </a>
                <a href="/contacts" class="text-gray-600 hover:text-lightBlue text-sm transition-colors duration-200">
                  Контакты
                </a>
                <a href="/ourteam" class="text-gray-600 hover:text-lightBlue text-sm transition-colors duration-200">
                  Наша команда
                </a>
              </nav>
            </div>

            <!-- Комплаенс -->
            <div class="space-y-4">
              <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Комплаенс
              </h4>
              <nav class="flex flex-col space-y-3">
                <a href="/appeal" class="text-gray-600 hover:text-lightBlue text-sm transition-colors duration-200">
                  Обращение
                </a>
                <a href="/complains" class="text-gray-600 hover:text-lightBlue text-sm transition-colors duration-200">
                  Документы
                </a>
                <a href="/privacy-policy"
                  class="text-gray-600 hover:text-lightBlue text-sm transition-colors duration-200">
                  Конфиденциальность
                </a>
                <a href="/gallery" class="text-gray-600 hover:text-lightBlue text-sm transition-colors duration-200">
                  Галерея
                </a>
              </nav>
            </div>

            <!-- Социальные сети -->
            <div class="space-y-4">
              <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Следите за нами
              </h4>
              <div class="flex space-x-4">
                <a href="#"
                  class="w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-lightBlue hover:text-white transition-all duration-200"
                  aria-label="Facebook">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a href="#"
                  class="w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-lightBlue hover:text-white transition-all duration-200"
                  aria-label="Instagram">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a href="#"
                  class="w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-lightBlue hover:text-white transition-all duration-200"
                  aria-label="Telegram">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Разделительная линия -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <p class="text-sm text-gray-600">
                © 2025 <span class="font-semibold text-gray-900">Hurshida Enter Delux</span>. Все права защищены.
              </p>
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <a href="/privacy-policy" class="hover:text-gray-700 transition-colors duration-200">
                  Политика конфиденциальности
                </a>
                <span>•</span>
                <a href="/terms" class="hover:text-gray-700 transition-colors duration-200">
                  Условия использования
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-2 text-sm text-gray-500">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Ташкент, Узбекистан</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Используем цвета проекта */

/* Дополнительные стили для плавных переходов */
a {
  position: relative;
}

a:hover {
  text-decoration: none;
}

/* Подчеркивание при наведении для навигационных ссылок */
nav a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}

/* Анимация для иконок социальных сетей */
.social-icon {
  transform: scale(1);
  transition: transform 0.2s ease;
}

.social-icon:hover {
  transform: scale(1.1);
}

/* Фокусные состояния для доступности */
button:focus,
input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
</style>