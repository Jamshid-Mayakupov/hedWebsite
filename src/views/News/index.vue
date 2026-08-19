<!-- src/views/News/index.vue -->
<template>
  <section class="min-h-screen bg-gray-50/50 py-12 md:py-20 overflow-hidden" aria-labelledby="news-page-title">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">

      <!-- 1. Hero Header -->
      <div class="text-center max-w-4xl mx-auto space-y-4 pt-4" data-aos="fade-down" data-aos-duration="1000">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-semibold uppercase tracking-wider">
          <span>Пресс-центр</span>
        </div>

        <h1 id="news-page-title" class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight font-raleway leading-tight">
          Новости и <span class="bg-gradient-to-r from-Blue via-lightBlue to-blue-700 bg-clip-text text-transparent">события</span>
        </h1>

        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Будьте в курсе ключевых событий, благотворительных инициатив, отраслевых конференций и развития компании HURSHIDA ENTER DELUX.
        </p>
      </div>

      <!-- 2. Featured Top Story Card (If Available) -->
      <div v-if="featuredNews && !searchQuery && activeTab === 'all'" class="relative group cursor-pointer" data-aos="fade-up" data-aos-duration="1000" @click="goToNews(featuredNews.slug)">
        <div class="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-white border border-gray-200/80 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
          
          <div class="lg:col-span-7 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-gray-900">
            <img
              :src="featuredNews.image"
              :alt="featuredNews.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            <div class="absolute top-4 left-4 bg-Blue text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
              Главная новость
            </div>

            <!-- YouTube Video Pill Indicator -->
            <div v-if="featuredNews.hasVideo" class="absolute bottom-4 left-4 bg-red-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center space-x-1.5">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Видеорепортаж</span>
            </div>
          </div>

          <div class="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="flex items-center space-x-3 text-xs font-semibold text-gray-500">
                <span class="text-Blue font-bold uppercase tracking-wider">{{ featuredNews.category }}</span>
                <span>•</span>
                <span>{{ featuredNews.date }}</span>
              </div>

              <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 group-hover:text-Blue transition-colors font-raleway leading-snug">
                {{ featuredNews.title }}
              </h2>

              <p class="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-4">
                {{ featuredNews.description }}
              </p>
            </div>

            <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span class="font-bold text-Blue text-sm group-hover:text-darkBlue transition-colors flex items-center space-x-2">
                <span>Читать полностью</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span class="text-xs text-gray-400">4 мин чтения</span>
            </div>
          </div>

        </div>
      </div>

      <!-- 3. Filter Tabs & Search Controls -->
      <div class="space-y-6" data-aos="fade-up" data-aos-duration="1000">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <!-- Category Tabs -->
          <div class="flex flex-wrap items-center gap-2">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="setTab(tab.id)"
              class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm cursor-pointer"
              :class="[
                activeTab === tab.id
                  ? 'bg-Blue text-white shadow-Blue/30 shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              ]"
            >
              {{ tab.label }}
            </button>
          </div>

          <!-- Search Bar -->
          <div class="w-full md:w-80 relative">
            <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              v-model="searchQuery"
              @input="currentPage = 1"
              placeholder="Поиск новостей..."
              class="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent transition-all shadow-sm"
            />
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs cursor-pointer"
            >
              ✕
            </button>
          </div>

        </div>

        <!-- Result count -->
        <div class="flex justify-between items-center text-xs text-gray-500 px-1">
          <span>Найдено материалов: <strong class="text-gray-900">{{ filteredNews.length }}</strong></span>
          <span v-if="totalPages > 1">Страница {{ currentPage }} из {{ totalPages }}</span>
        </div>
      </div>

      <!-- 4. Main News Grid -->
      <div v-if="displayedNews.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="1000">
        <article
          v-for="(item, index) in displayedNews"
          :key="item.id || index"
          class="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/80 hover:border-Blue/40 group cursor-pointer flex flex-col justify-between overflow-hidden relative"
          role="link"
          tabindex="0"
          @click="goToNews(item.slug)"
          @keydown.enter="goToNews(item.slug)"
        >
          <!-- Image Frame -->
          <div class="h-56 sm:h-60 overflow-hidden relative bg-gray-900">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>

            <!-- Date Badge -->
            <div class="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-md flex items-center space-x-1.5 text-xs font-semibold text-Blue border border-white/40">
              <svg class="w-3.5 h-3.5 text-Blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ item.date }}</span>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-3.5 right-3.5 bg-Blue/90 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-bold text-white uppercase tracking-wider shadow-md">
              {{ item.category }}
            </div>

            <!-- Video Indicator Icon -->
            <div v-if="item.hasVideo" class="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-md">
              <svg class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
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

            <div class="pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-Blue group-hover:text-darkBlue transition-colors">
              <span>Подробнее</span>
              <div class="w-8 h-8 rounded-full bg-Blue/10 group-hover:bg-Blue group-hover:text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State When No News Found -->
      <div v-else class="text-center py-16 bg-white rounded-3xl border border-gray-200/80 p-8 shadow-sm">
        <div class="w-16 h-16 rounded-2xl bg-Blue/10 text-Blue flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2 font-raleway">По вашему запросу ничего не найдено</h3>
        <p class="text-gray-500 text-sm max-w-md mx-auto mb-6">
          Попробуйте изменить поисковый запрос или выбрать другую категорию
        </p>
        <button
          @click="resetFilters"
          class="px-6 py-2.5 rounded-full bg-Blue text-white font-bold text-sm shadow-md hover:bg-lightBlue transition-all cursor-pointer"
        >
          Сбросить фильтры
        </button>
      </div>

      <!-- 5. Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 pt-4">
        <button
          @click="currentPage > 1 && (currentPage--)"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-100 disabled:opacity-40 transition-all shadow-sm cursor-pointer"
        >
          Назад
        </button>

        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          class="w-10 h-10 rounded-xl font-bold text-sm transition-all shadow-sm cursor-pointer"
          :class="[
            currentPage === page
              ? 'bg-Blue text-white shadow-Blue/30 shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          ]"
        >
          {{ page }}
        </button>

        <button
          @click="currentPage < totalPages && (currentPage++)"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-100 disabled:opacity-40 transition-all shadow-sm cursor-pointer"
        >
          Далее
        </button>
      </div>

      <!-- 6. Newsletter Subscription Card -->
      <div class="bg-gradient-to-r from-gray-900 via-Blue to-darkBlue rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
        <div class="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <span>Рассылка</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-raleway">
            Подпишитесь на дайджест новостей
          </h2>
          <p class="text-base sm:text-lg text-gray-200 max-w-xl mx-auto">
            Получайте актуальные отраслевые обзоры и пресс-релизы компании первыми.
          </p>

          <form @submit.prevent="handleSubscribe" class="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              v-model="subscribeEmail"
              required
              placeholder="Ваш рабочий email..."
              class="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all text-sm"
            />
            <button
              type="submit"
              class="px-7 py-3.5 rounded-full bg-white hover:bg-gray-100 text-Blue font-extrabold text-sm transition-all shadow-lg hover:scale-105 cursor-pointer"
            >
              Подписаться
            </button>
          </form>

          <div v-if="subscribed" class="p-3 rounded-xl bg-green-500/20 border border-green-500/40 text-green-200 text-xs font-semibold">
            ✓ Спасибо! Вы успешно подписаны на обновления.
          </div>
        </div>

        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 pointer-events-none"></div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import AOS from 'aos'
import api from '@/utils/axios'
import { buildFileUrl } from '@/utils/media'

// Import top story news images
import news1_1 from '@/assets/images/news/news-1.1.jpg'
import sumalakImg from '@/assets/images/sumalak-party.jpg'
import about2 from '@/assets/images/about-2.JPG'
import springTour1 from '@/assets/images/news/spring-tournament-1.jpg'
import runningCompImg from '@/assets/images/news/running-competition.jpg'

const router = useRouter()

const activeTab = ref('all')
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 6

const subscribeEmail = ref('')
const subscribed = ref(false)

const tabs = [
  { id: 'all', label: 'Все материалы' },
  { id: 'society', label: 'Общество'},
  { id: 'events', label: 'События' },
  { id: 'company', label: 'О компании' },
  { id: 'industry', label: 'Инновации и рынок' }
]

const newsItems = ref([
  {
    id: 1,
    title: "В дом, куда пришла вода, приходит радость",
    description: "По инициативе и при спонсорской поддержке основателей компании «Hurshida Enter Delux» — Бахтиёра Примова и его сыновей Элёра и Сардора — более 2300 жителей Пайарыкского района обеспечены чистой питьевой водой.",
    image: news1_1,
    date: "Август 2026",
    slug: "v-dom-kuda-prishla-voda-prihodit-radost",
    category: "Общество",
    categoryKey: "society",
    hasVideo: true
  },
  {
    id: 6,
    title: "Корпоративный тимбилдинг и объединение команды HED",
    description: "В мае 2026 года состоялся масштабный корпоративный тимбилдинг компании «Hurshida Enter Delux», объединивший руководство, проектные офисы и специалистов всех ключевых подразделений.",
    image: about2,
    date: "Май 2026",
    slug: "korporativnyj-timbilding-komandy-hed-maj-2026",
    category: "События",
    categoryKey: "events",
    hasVideo: true
  },
  {
    id: 7,
    title: "Весенний детский спортивный праздник HED: перетягивание каната и прыжки со скакалкой",
    description: "В апреле 2026 года компания «Hurshida Enter Delux» организовала яркий весенний спортивный праздник для детей сотрудников с перетягиванием каната и прыжками со скакалкой.",
    image: springTour1,
    date: "Апрель 2026",
    slug: "vesennij-sportivnyj-turnir-i-iniciativy-hed-aprel-2026",
    category: "События",
    categoryKey: "events",
    hasVideo: true
  },
  {
    id: 8,
    title: "Корпоративный забег и марафон HED Running Competition 2026",
    description: "В феврале 2026 года состоялся масштабный легкоатлетический забег «HED Running Competition», объединивший сотрудников компании для преодоления дистанций и популяризации активного бега.",
    image: runningCompImg,
    date: "Февраль 2026",
    slug: "korporativnyj-zabeg-hed-running-competition-fevral-2026",
    category: "События",
    categoryKey: "events",
    hasVideo: true
  },
  {
    id: 2,
    title: "Грандиозное празднование Sumalak Party 2025",
    description: "Компания 'Hurshida Enter Delux' организовала масштабное корпоративное мероприятие, посвященное традиционному весеннему празднику с участием ключевых партнеров отрасли.",
    image: sumalakImg,
    date: "Март 2025",
    slug: "grandioznoe-prazdnovanie-sumalak-party-2025",
    category: "События",
    categoryKey: "events",
    hasVideo: true
  },
  {
    id: 3,
    title: "Новые достижения компании в области фармацевтических инноваций",
    description: "Hurshida Enter Delux представила современные решения в области холодовой цепи и автоматизированного складского учета стандартов GDP.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    date: "Март 2025",
    slug: "novye-dostizheniya-kompanii-v-oblasti-innovacij",
    category: "Инновации и рынок",
    categoryKey: "industry",
    hasVideo: false
  },
  {
    id: 4,
    title: "Расширение команды и масштабирование региональных складов",
    description: "Компания объявила об открытии новых распределительных центров и расширении логистического персонала на 50 квалифицированных специалистов.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    date: "Февраль 2025",
    slug: "rasshirenie-komandy-i-novye-vozmozhnosti",
    category: "О компании",
    categoryKey: "company",
    hasVideo: false
  },
  {
    id: 5,
    title: "Стратегическое партнерство с европейскими фармпроизводителями",
    description: "Заключены долгосрочные соглашения на прямую дистрибуцию жизненно необходимых медикаментов в лечебные учреждения Узбекистана.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    date: "Февраль 2025",
    slug: "partnerstvo-s-mezhdunarodnymi-kompaniyami",
    category: "Инновации и рынок",
    categoryKey: "industry",
    hasVideo: false
  },
  {
    id: 6,
    title: "Успешная сертификация центрального складского комплекса GDP",
    description: "Логистический хаб площадью 5000 кв.м. успешно подтвердил соответствие международным стандартам надлежащей дистрибьюторской практики.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    date: "Январь 2025",
    slug: "zapusk-novoj-liniejki-produktov",
    category: "О компании",
    categoryKey: "company",
    hasVideo: false
  },
  {
    id: 7,
    title: "Участие в международном фармацевтическом конгрессе 2025",
    description: "Руководство компании представило доклад о развитии импортозамещения и стабильных цепочках поставок в Центральной Азии.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    date: "Январь 2025",
    slug: "konferenciya-po-cifrovoj-transformacii",
    category: "События",
    categoryKey: "events",
    hasVideo: false
  }
])

const featuredNews = computed(() => newsItems.value[0] || null)

const filteredNews = computed(() => {
  return newsItems.value.filter(item => {
    const matchesTab = activeTab.value === 'all' || item.categoryKey === activeTab.value
    const query = searchQuery.value.toLowerCase().trim()
    const matchesSearch = !query || 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    return matchesTab && matchesSearch
  })
})

const totalPages = computed(() => Math.ceil(filteredNews.value.length / itemsPerPage) || 1)

const displayedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredNews.value.slice(start, start + itemsPerPage)
})

const setTab = (tabId) => {
  activeTab.value = tabId
  currentPage.value = 1
}

const resetFilters = () => {
  activeTab.value = 'all'
  searchQuery.value = ''
  currentPage.value = 1
}

const goToNews = (slug) => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  router.push(`/news/${slug}`)
}

const handleSubscribe = () => {
  if (!subscribeEmail.value) return
  subscribed.value = true
  subscribeEmail.value = ''
  setTimeout(() => {
    subscribed.value = false
  }, 5000)
}

function generateSlug(str) {
  if (!str) return Math.random().toString(36).substring(2, 8)
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\wа-яё-]+/gi, '')
    .replace(/--+/g, '-')
}

const loadApiNews = async () => {
  try {
    const res = await api.get('/api/news/all')
    const news = res.data.filter(item => item.type === 'SITE_NEWS')

    if (news.length > 0) {
      const mappedApiNews = news.map((item, index) => ({
        id: item.id || index + 1,
        title: item.title,
        description: item.description || item.content || 'Подробнее читайте в полной версии...',
        image: buildFileUrl(item.fileId) || 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
        date: item.dateTime ? new Date(item.dateTime).toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' }) : 'Недавно',
        category: item.category || 'События',
        categoryKey: item.category === 'Компания' ? 'company' : item.category === 'Инновации' ? 'industry' : 'events',
        slug: item.title ? generateSlug(`${item.title}-${index}`) : String(item.id),
        hasVideo: false
      }))
      // Prepend our top featured story
      newsItems.value = [newsItems.value[0], ...mappedApiNews]
    }
  } catch (err) {
    console.warn('API news endpoint unavailable, showing curated news data:', err)
  }
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  loadApiNews()
  setTimeout(() => {
    AOS.refreshHard()
  }, 100)
})
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>