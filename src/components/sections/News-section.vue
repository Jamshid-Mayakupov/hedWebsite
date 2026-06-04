<template>
  <section class="max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1440px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
    <div class="text-center md:text-left">
      <SectionHeader>Новости</SectionHeader>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-4 gap-6 xl:gap-8 mt-6 max-w-7xl mx-auto px-0">
      <div v-for="(news, index) in newsItems" :key="index" :data-aos="'fade-up'" :data-aos-delay="index * 100"
        data-aos-duration="700"
        class="bg-white w-full shadow-lg relative overflow-hidden transition-all rounded duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
        <div class="overflow-hidden">
          <img :src="news.image" :alt="news.title"
            class="w-full h-48 sm:h-64 object-cover transition-transform duration-500 hover:scale-110" />
        </div>

        <div class="p-6 sm:p-8">
          <h3 class="text-base sm:text-lg font-semibold leading-tight text-gray-900 mb-4" :aria-label="news.title">
            {{ news.title }}
          </h3>
          <router-link to="/news"
                       class="text-Blue hover:text-lightBlue font-bold relative inline-block pb-1 group text-sm sm:text-base"
                       aria-label="Read more about {{ news.title }}">
            ЧИТАТЬ ДАЛЕЕ <span class="text-lg sm:text-xl">→</span>
            <span
                class="block w-20 sm:w-24 h-1 bg-Blue mt-1 transition-all duration-300 group-hover:w-24 sm:group-hover:w-28 group-hover:bg-lightBlue"></span>
          </router-link>

        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import SectionHeader from '../common/SectionHeader.vue'
import api from '@/utils/axios'
import fileApi from '@/utils/fileApi'
import { ref, onMounted } from 'vue'


const newsItems = ref([])
const FILE_ACCESS_URL = 'http://192.168.1.96:8084/document/profile?id='

const getAllNews = async () => {
  try {
    const res = await api.get('/api/news/all')
    const news = res.data.filter(item => item.type === 'SITE_NEWS')

    const withImages = await Promise.all(news.map(async item => {
      if (!item.url) return {
        ...item,
        image: null,
        date: new Date().toLocaleDateString("ru-RU", { day: "2-digit", month: "long", year: "numeric" }),
        link: '#'
      }
      try {
        const docRes = await fileApi.get(`/document/get-files-by-doc-group?id=${item.url}`)
        const doc = docRes.data[0]?.document
        const docId = doc?.id
        const image = docId ? `${FILE_ACCESS_URL}${docId}` : null
        return {
          ...item,
          image,
          date: new Date(item.dateTime).toLocaleDateString("ru-RU", { day: "2-digit", month: "long", year: "numeric" }),
          link: `/news/${item.url}`
        }
      } catch (err) {
        console.warn(`Ошибка получения изображения для: ${item.title}`, err)
        return {
          ...item,
          image: null,
          date: new Date().toLocaleDateString("ru-RU", { day: "2-digit", month: "long", year: "numeric" }),
          link: `/news/${item.url}`
        }
      }
    }))

    newsItems.value = withImages
  } catch (err) {
    console.error('Ошибка при загрузке новостей:', err)
  }
}

onMounted(getAllNews)
</script>
