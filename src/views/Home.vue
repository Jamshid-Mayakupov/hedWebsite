<template>
  <main class="overflow-x-hidden bg-gray-50">
    <!-- Hero Section -->
    <SectionIntro />

    <!-- Advantages -->
    <SectionAdvantages />

    <!-- News Section -->
    <section class="bg-white py-16 md:py-20">
      <div class="section-container">
        <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
          <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
            Будьте в курсе
          </p>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-raleway">
            Новости
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Следите за последними событиями и достижениями нашей компании
          </p>
        </div>

        <!-- Debug: показать количество новостей -->
        <!-- <div class="text-center mb-4 text-sm text-gray-500">
          Загружено новостей: {{ newsItems.length }}
        </div> -->

        <!-- News Cards Grid -->
        <div v-if="displayedNews.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(item, index) in displayedNews"
            :key="item.id || index"
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-Blue/30 group cursor-pointer"
            @click="$router.push(item.slug ? `/news/${item.slug}` : '/news')"
            data-aos="fade-up"
            data-aos-duration="800"
            :data-aos-delay="index * 100"
          >
            <div class="h-56 overflow-hidden bg-gray-100">
              <img 
                :src="item.image || 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80'" 
                :alt="item.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <div class="text-sm text-Blue font-semibold mb-2">
                {{ item.date || 'Недавно' }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-Blue transition-colors font-raleway">
                {{ item.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                {{ item.description }}
              </p>
              <div class="flex items-center text-Blue font-semibold group-hover:text-darkBlue transition-colors">
                Читать далее
                <svg class="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        <div v-else class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-Blue mb-4"></div>
          <p class="text-gray-600">Загрузка новостей...</p>
        </div>

        <div class="text-center mt-12" data-aos="fade-up" data-aos-duration="800">
          <router-link 
            to="/news" 
            class="inline-block px-8 py-4 border-2 border-Blue text-Blue font-semibold rounded-lg hover:bg-Blue hover:text-white transition-all duration-300"
          >
            Все новости
          </router-link>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="bg-gray-50 py-16 md:py-20">
      <div class="section-container">
        <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
          <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
            Наша продукция
          </p>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-raleway">
            Продукция
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Высококачественные фармацевтические препараты от ведущих производителей
          </p>
        </div>

        <!-- Products Cards Grid -->
        <div v-if="displayedProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(product, index) in displayedProducts"
            :key="product.id || index"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
            data-aos-duration="800"
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-Blue/30 group flex flex-col"
          >
            <!-- Product Image -->
            <div class="relative overflow-hidden bg-gray-50 aspect-square">
              <img
                :src="product.image || 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80'"
                :alt="product.name"
                class="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <!-- Product Info -->
            <div class="p-6 flex flex-col flex-grow">
              <p class="text-Blue text-sm font-semibold mb-2 uppercase tracking-wide">
                {{ product.manufacturer || 'Производитель' }}
              </p>

              <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight font-raleway group-hover:text-Blue transition-colors">
                {{ product.name }}
              </h3>

              <p class="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                {{ product.description || 'Высококачественный препарат для эффективного лечения.' }}
              </p>

              <!-- Button -->
              <router-link
                :to="product.slug ? `/products/${product.slug}` : '/products'"
                class="mt-auto w-full block text-center px-6 py-3 bg-Blue hover:bg-darkBlue text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Подробнее
              </router-link>
            </div>
          </article>
        </div>

        <!-- Loading State -->
        <div v-else class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-Blue mb-4"></div>
          <p class="text-gray-600">Загрузка продуктов...</p>
        </div>

        <div class="text-center mt-12" data-aos="fade-up" data-aos-duration="800">
          <router-link 
            to="/products" 
            class="inline-block px-8 py-4 border-2 border-Blue text-Blue font-semibold rounded-lg hover:bg-Blue hover:text-white transition-all duration-300"
          >
            Вся продукция
          </router-link>
        </div>
      </div>
    </section>

    <!-- Partners Carousel -->
    <section class="bg-white py-16 md:py-20">
      <Carousel />
    </section>

    <!-- Map Section -->
    <section class="bg-gray-50">
      <YandexMap />
    </section>

    <!-- Contact Form -->
    <Form />
  </main>
</template>

<script setup>
import Form from "@/components/sections/Form.vue"
import Carousel from '../components/Carousel.vue'
import YandexMap from '../components/YandexMap.vue'
import SectionAdvantages from '../components/sections/Advantages.vue'
import SectionIntro from '../components/sections/Intro.vue'
import { ref, computed, onMounted } from 'vue'
import api from '@/utils/axios'

const FILE_ACCESS_URL = 'http://84.54.116.154:8084/document/profile?id='

// Инициализируем с демо-данными сразу
const newsItems = ref([
  {
    id: 1,
    title: "Грандиозное празднование Sumalak Party 2025",
    description: "Компания организовала незабываемое мероприятие, посвященное традиционному весеннему празднику.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    date: "Март 2025",
    slug: "grandioznoe-prazdnovanie-sumalak-party-2025"
  },
  {
    id: 2,
    title: "Новые достижения в области инноваций",
    description: "Представлены революционные решения, которые изменят подход к современному бизнесу.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    date: "Март 2025",
    slug: "novye-dostizheniya-v-oblasti-innovacij"
  },
  {
    id: 3,
    title: "Расширение команды и новые возможности",
    description: "Компания объявила о наборе 50 новых специалистов в различных областях.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    date: "Март 2025",
    slug: "rasshirenie-komandy-i-novye-vozmozhnosti"
  }
])

const products = ref([
  {
    id: 1,
    name: "Antagrix",
    manufacturer: "Pharma Solutions",
    description: "Высокоэффективный препарат для лечения хронических заболеваний.",
    image: null,
    slug: "antagrix"
  },
  {
    id: 2,
    name: "D-Cef",
    manufacturer: "BioMed Industries",
    description: "Антибактериальный препарат широкого спектра действия.",
    image: null,
    slug: "d-cef"
  },
  {
    id: 3,
    name: "Infuziol",
    manufacturer: "MedTech Corp",
    description: "Инфузионный раствор для восстановления водно-электролитного баланса.",
    image: null,
    slug: "infuziol"
  }
])

// Показываем только первые 3
const displayedProducts = computed(() => products.value.slice(0, 3))
const displayedNews = computed(() => newsItems.value.slice(0, 3))

function generateSlug(str) {
  if (!str) return Math.random().toString(36).substring(2, 8)
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-а-яё]+/gi, '')
    .replace(/\-\-+/g, '-')
}

const getAllProducts = async () => {
  try {
    const res = await api.get('/api/hed-site/products/all')
    if (res.data?.data?.responseProducts?.length > 0) {
      products.value = res.data.data.responseProducts.map(product => ({
        ...product,
        image: product.fileId ? `${FILE_ACCESS_URL}${product.fileId}` : null,
        slug: product.name ? generateSlug(product.name) : product.id
      }))
      console.log('Продукты загружены:', products.value.length)
    }
  } catch (err) {
    console.error('Ошибка при загрузке продуктов:', err)
    // Демо-данные уже установлены при инициализации
  }
}

const getAllNews = async () => {
  try {
    const res = await api.get('/api/news/all')
    const news = res.data.filter(item => item.type === 'SITE_NEWS')
    
    if (news.length > 0) {
      newsItems.value = news.map((item, index) => ({
        ...item,
        image: item.fileId ? `${FILE_ACCESS_URL}${item.fileId}` : null,
        date: item.dateTime ? new Date(item.dateTime).toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' }) : 'Недавно',
        slug: item.title ? generateSlug(`${item.title}-${index}`) : item.id,
        description: item.description || item.content || 'Подробнее читайте в полной версии...'
      }))
      console.log('Новости загружены:', newsItems.value.length)
    }
  } catch (err) {
    console.error('Ошибка при загрузке новостей:', err)
    // Демо-данные уже установлены при инициализации
  }
}

onMounted(() => {
  console.log('Компонент смонтирован')
  console.log('Начальные новости:', newsItems.value.length)
  console.log('Начальные продукты:', products.value.length)
  
  getAllProducts()
  getAllNews()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}

.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>