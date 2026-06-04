<template>
  <section class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-2 sm:px-6 lg:px-8 bg-gray-100">
      <div ref="searchContainer" class="transition-all duration-300 ease-in-out overflow-hidden"
        :style="{ height: isSearchOpen ? 'auto' : '0', opacity: isSearchOpen ? '1' : '0' }">
        <div class="mb-6 flex justify-center">
          <input type="text" v-model="searchQuery" placeholder="Поиск новостей..."
            class="w-1/3 px-4 py-2 border border-gray-400 focus:outline-none" />
        </div>
      </div>

      <div class="relative w-full flex bg-white rounded shadow-lg overflow-hidden" v-if="filteredNews.length">
        <img :src="filteredNews[currentIndex].image" :alt="filteredNews[currentIndex].title"
          class="w-1/2 h-96 object-cover" />

        <div class="w-1/2 p-8 flex flex-col justify-center">
          <p class="text-sm uppercase text-Blue font-semibold mb-2">
            {{ filteredNews[currentIndex].category }}
          </p>
          <h3 class="text-2xl text-black font-light mb-3">
            {{ filteredNews[currentIndex].title }}
          </h3>
          <p class="text-gray-500 text-sm">{{ formatDate(filteredNews[currentIndex].date) }}</p>
        </div>
      </div>

      <p v-else class="text-center text-gray-500 mt-6">Новости не найдены.</p>

      <div class="relative flex items-center justify-center mt-4 w-full" v-if="filteredNews.length > 1">
        <button @click="prevSlide"
          class="bg-Blue text-white w-12 h-12 flex items-center justify-center font-thin absolute left-0 z-10">
          ❮
        </button>

        <div class="flex space-x-2 pb-16">
          <span v-for="(news, index) in filteredNews" :key="index" @click="setSlide(index)"
            class="w-3 h-3 rounded-full cursor-pointer transition-all duration-300"
            :class="currentIndex === index ? 'bg-Blue w-4 h-4' : 'bg-gray-300'">
          </span>
        </div>

        <button @click="nextSlide"
          class="bg-Blue text-white w-12 h-12 flex items-center justify-center font-thin absolute right-0 z-10">
          ❯
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import dentalCongressImg from "@/assets/images/Dental-congress.webp"
import new2Img from "@/assets/images/new2.png"
import { computed, ref } from "vue"

const newsList = ref([
  { title: "Стоматологический конгресс в Хорезме – новый этап современной стоматологии", date: "2025-01-23", category: "Сообщество", image: dentalCongressImg },
  { title: "88-я Китайская Международная выставка медицинского оборудования", date: "2025-02-10", category: "Наука", image: new2Img },
  { title: "88-я Китайская Международная выставка медицинского оборудования", date: "2025-02-10", category: "Наука", image: dentalCongressImg },
])

const searchQuery = ref("")
const currentIndex = ref(0)

const filteredNews = computed(() =>
  newsList.value.filter(news =>
    news.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    news.category.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("ru-RU", options)
}

const nextSlide = () => {
  if (filteredNews.value.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % filteredNews.value.length
  }
}

const prevSlide = () => {
  if (filteredNews.value.length > 0) {
    currentIndex.value = (currentIndex.value - 1 + filteredNews.value.length) % filteredNews.value.length
  }
}

const setSlide = (index) => {
  currentIndex.value = index
}
</script>

<style scoped>
.bg-Blue {
  background-color: #1D4ED8;
}

.text-Blue {
  color: #1D4ED8;
}
</style>
