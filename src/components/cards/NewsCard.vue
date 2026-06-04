<!-- src/components/cards/NewsCard.vue -->
<template>
  <div class="shadow hover:shadow-lg border border-gray-200 bg-white transition  overflow-hidden flex flex-col">
    <!-- Изображение -->
    <router-link :to="`/news/${story.slug}`" class="block">
      <img
        :src="story.image"
        :alt="story.alt || 'News Image'"
        class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
    </router-link>

    <!-- Контент -->
    <div class="p-5 flex flex-col flex-1 justify-between">
      <!-- Верхняя строка: дата и категория -->
      <div class="flex justify-between items-center text-sm text-gray-500 mb-2">
        <span>{{ formatDate(story.dateTime) }}</span>
        <span
          v-if="story.category"
          class="px-3 py-1 rounded-full text-white text-xs font-semibold"
          :class="badgeColorClass(story.category)"
        >
          {{ story.category }}
        </span>
      </div>

      <!-- Заголовок -->
      <router-link :to="`/news/${story.slug}`" class="block">
        <h3 class="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-700 transition-colors">
          {{ story.title }}
        </h3>
      </router-link>

      <!-- Описание -->
      <p
        v-if="story.description"
        class="text-gray-600 text-sm mb-4 overflow-hidden leading-snug"
        style="max-height: 2.5rem"
      >
        {{ story.description }}
      </p>


      <!-- Кнопка Подробнее -->
      <div class="mt-auto text-right">
        <slot name="button">
          <router-link
            :to="`/news/${story.slug}`"
            class="text-sm font-semibold text-blue-700 inline-flex items-center hover:underline"
          >
            READ MORE
            <svg
              class="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

function formatDate(dateTime) {
  if (!dateTime) return ''
  return dayjs(dateTime).format('DD MMMM YYYY')
}


defineProps({
  story: {
    type: Object,
    required: true
  }
})

// Возвращает цвет бейджа по категории (можно кастомизировать)
function badgeColorClass(category) {
  switch (category?.toLowerCase()) {
    case 'animals':
      return 'bg-green-600'
    case 'lifestyle':
      return 'bg-teal-600'
    case 'history':
      return 'bg-blue-800'
    default:
      return 'bg-gray-500'
  }
}
</script>