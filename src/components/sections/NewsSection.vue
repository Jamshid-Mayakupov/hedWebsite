<template>
  <section class="bg-gradient-to-b from-white via-gray-50/70 to-white py-16 md:py-24 relative overflow-hidden" aria-labelledby="news-section-title">
    <!-- Ambient Glow Background Blobs -->
    <div class="absolute top-1/4 -left-40 w-96 h-96 bg-Blue/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 -right-40 w-96 h-96 bg-lightBlue/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="section-container relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="600">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-semibold uppercase tracking-wider mb-4">
          <!-- <span class="w-2 h-2 rounded-full bg-Blue animate-pulse"></span> -->
          <span>Будьте в курсе</span>
        </div>
        <h2 id="news-section-title" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-raleway">
          Новости & События
        </h2>
        <p class="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Следите за последними достижениями, научными событиями и развитием компании HURSHIDA ENTER DELUX
        </p>
      </div>

      <!-- News Cards Grid -->
      <div v-if="displayedNews.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(item, index) in displayedNews"
          :key="item.id || index"
          class="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/80 hover:border-Blue/40 group cursor-pointer flex flex-col justify-between overflow-hidden relative"
          role="link"
          tabindex="0"
          @click="openNews(item.slug)"
          @keydown.enter="openNews(item.slug)"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="index * 100"
        >
          <!-- Image Frame -->
          <div class="h-60 overflow-hidden relative bg-gray-100">
            <img
              :src="item.image || 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80'"
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

            <!-- Glassmorphic Date Badge -->
            <div class="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md flex items-center space-x-1.5 text-xs font-semibold text-Blue border border-white/40">
              <svg class="w-3.5 h-3.5 text-Blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ item.date || 'Недавно' }}</span>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-3.5 right-3.5 bg-Blue/90 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-bold text-white uppercase tracking-wider shadow-md">
              {{ item.category || 'События' }}
            </div>
          </div>

          <!-- News Content -->
          <div class="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-Blue transition-colors font-raleway line-clamp-2 leading-snug">
                {{ item.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {{ item.description }}
              </p>
            </div>

            <div class="pt-3 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-Blue group-hover:text-darkBlue transition-colors">
              <span>Читать далее</span>
              <div class="w-8 h-8 rounded-full bg-Blue/10 group-hover:bg-Blue group-hover:text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Loading State -->
      <div v-else class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-Blue mb-4"></div>
        <p class="text-gray-600">Загрузка новостей...</p>
      </div>

      <!-- View All News CTA -->
      <div class="text-center mt-12" data-aos="fade-up" data-aos-duration="800">
        <button
          @click="openNewsAll"
          class="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-Blue via-lightBlue to-Blue hover:brightness-110 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-Blue/30 text-sm sm:text-base cursor-pointer"
        >
          <span>Смотреть все новости</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/utils/axios'
import { buildFileUrl } from '@/utils/media'

const router = useRouter()

const openNews = (slug) => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  if (slug) {
    router.push(`/news/${slug}`)
  } else {
    router.push('/news')
  }
}

const openNewsAll = () => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  router.push('/news')
}

const newsItems = ref([
  {
    id: 1,
    title: "Грандиозное празднование Sumalak Party 2025",
    description: "Компания организовала незабываемое мероприятие, посвященное традиционному весеннему празднику.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    date: "Март 2025",
    category: "События",
    slug: "grandioznoe-prazdnovanie-sumalak-party-2025"
  },
  {
    id: 2,
    title: "Новые достижения компании в области инноваций",
    description: "Представлены революционные решения, которые изменят подход к современному бизнесу.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    date: "Март 2025",
    category: "Инновации",
    slug: "novye-dostizheniya-kompanii-v-oblasti-innovacij"
  },
  {
    id: 3,
    title: "Расширение команды и новые возможности",
    description: "Компания объявила о наборе 50 новых специалистов в различных областях.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    date: "Март 2025",
    category: "Компания",
    slug: "rasshirenie-komandy-i-novye-vozmozhnosti"
  }
])

const displayedNews = computed(() => newsItems.value.slice(0, 3))

function generateSlug(str) {
  if (!str) return Math.random().toString(36).substring(2, 8)
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\wа-яё-]+/gi, '')
    .replace(/--+/g, '-')
}

const getAllNews = async () => {
  try {
    const res = await api.get('/api/news/all')
    const news = res.data.filter(item => item.type === 'SITE_NEWS')

    if (news.length > 0) {
      newsItems.value = news.map((item, index) => ({
        ...item,
        image: buildFileUrl(item.fileId),
        date: item.dateTime ? new Date(item.dateTime).toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' }) : 'Недавно',
        category: item.category || 'События',
        slug: item.title ? generateSlug(`${item.title}-${index}`) : item.id,
        description: item.description || item.content || 'Подробнее читайте в полной версии...'
      }))
    }
  } catch (err) {
    console.error('Ошибка при загрузке новостей:', err)
  }
}

onMounted(() => {
  getAllNews()
})
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>
