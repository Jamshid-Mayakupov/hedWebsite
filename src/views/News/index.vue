<template>
  <section class="bg-gray-50">
    <!-- Hero Section -->
    <div class="section-container py-16 md:py-20">
      <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
        <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
          Новостной центр
        </p>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-raleway">
          Новости
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Будьте в курсе последних событий и достижений компании Hurshida Enter Delux
        </p>
      </div>

      <!-- Subscription Form -->
      <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-2 font-raleway">Подпишитесь на обновления</h3>
          <p class="text-gray-600">Получайте актуальные новости и анонсы от наших экспертов</p>
        </div>
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              v-model="formData.firstName"
              placeholder="Имя"
              class="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-Blue focus:border-transparent outline-none"
            />
            <input
              type="text"
              v-model="formData.lastName"
              placeholder="Фамилия"
              class="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-Blue focus:border-transparent outline-none"
            />
          </div>
          <input
            type="email"
            v-model="formData.email"
            placeholder="Email адрес"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-Blue focus:border-transparent outline-none"
          />
          <button
            @click="handleSubscribe"
            class="w-full bg-Blue text-white py-3 rounded-lg font-semibold hover:bg-darkBlue transition-all shadow-lg"
          >
            Подписаться на обновления
          </button>
        </div>
      </div>
    </div>

    <!-- Tabs & Content -->
    <div class="section-container pb-16">
      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-8" data-aos="fade-up" data-aos-duration="800">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id; currentPage = 1"
          :class="[
            'px-6 py-3 rounded-lg font-semibold transition-all',
            activeTab === tab.id
              ? 'bg-Blue text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Search -->
      <div class="max-w-md mx-auto mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        <div class="relative">
          <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            v-model="searchQuery"
            @input="currentPage = 1"
            placeholder="Поиск по новостям..."
            class="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-Blue focus:border-transparent outline-none bg-white"
          />
        </div>
      </div>

      <div class="text-center text-gray-600 mb-8 text-sm">
        Показано {{ displayedNews.length }} из {{ filteredNews.length }} результатов
      </div>

      <!-- News Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in displayedNews"
          :key="item.id"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-Blue/30 group cursor-pointer"
          @click="$router.push(`/news/${item.slug}`)"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="index * 100"
        >
          <div class="h-56 overflow-hidden">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div class="p-6">
            <div class="text-sm text-Blue font-semibold mb-2">{{ item.date }}</div>
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

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-12">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-all',
            currentPage === page
              ? 'bg-Blue text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          ]"
        >
          {{ page }}
        </button>
        <button
          v-if="currentPage < totalPages"
          @click="currentPage++"
          class="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 font-medium transition-all"
        >
          Далее
        </button>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="section-container section-spacing-sm">
      <div 
        class="relative overflow-hidden bg-gradient-to-br from-Blue to-darkBlue rounded-2xl p-12 md:p-16 text-center"
        data-aos="fade-up" 
        data-aos-duration="800">
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 font-raleway">
            Хотите узнать больше?
          </h2>
          <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами и узнайте о новых возможностях сотрудничества
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contacts" 
              class="px-8 py-4 bg-white text-Blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Связаться с нами
            </router-link>
            <router-link 
              to="/products" 
              class="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Наша продукция
            </router-link>
          </div>
        </div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Демо данные
const newsData = [
  {
    id: 1,
    title: "Грандиозное празднование Sumalak Party 2025",
    description: "Компания 'Hurshida Enter Delux' организовала незабываемое мероприятие, посвященное традиционному весеннему празднику. Более 200 сотрудников и партнеров приняли участие в торжестве.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    date: "Март 2025",
    slug: "grandioznoe-prazdnovanie-sumalak-party-2025",
    category: "events",
    content: `<p>Мероприятие прошло в главном офисе компании, где была создана атмосфера настоящего восточного праздника.</p>`
  },
  {
    id: 2,
    title: "Новые достижения компании в области инноваций",
    description: "Hurshida Enter Delux представила революционные решения, которые изменят подход к современному бизнесу.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    date: "Март 2025",
    slug: "novye-dostizheniya-kompanii-v-oblasti-innovacij",
    category: "industry",
    content: `<p>Новые технологические решения включают использование искусственного интеллекта.</p>`
  },
  {
    id: 3,
    title: "Расширение команды и новые возможности",
    description: "Компания объявила о наборе 50 новых специалистов в различных областях.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    date: "Март 2025",
    slug: "rasshirenie-komandy-i-novye-vozmozhnosti",
    category: "company",
    content: `<p>Открытые вакансии включают позиции в области IT-разработки, маркетинга, продаж.</p>`
  },
  {
    id: 4,
    title: "Партнерство с международными компаниями",
    description: "Заключены стратегические соглашения с ведущими мировыми компаниями.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    date: "Февраль 2025",
    slug: "partnerstvo-s-mezhdunarodnymi-kompaniyami",
    category: "industry",
    content: `<p>Новые партнерства откроют двери на международные рынки.</p>`
  },
  {
    id: 5,
    title: "Запуск новой линейки продуктов",
    description: "Представлена инновационная линейка продуктов.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    date: "Февраль 2025",
    slug: "zapusk-novoj-liniejki-produktov",
    category: "company",
    content: `<p>Новая линейка демонстрирует наш инновационный подход.</p>`
  },
  {
    id: 6,
    title: "Конференция по цифровой трансформации",
    description: "Успешное проведение международной конференции с участием экспертов.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    date: "Январь 2025",
    slug: "konferenciya-po-cifrovoj-transformacii",
    category: "events",
    content: `<p>Конференция собрала более 500 участников из разных стран.</p>`
  }
]

const tabs = [
  { id: 'all', label: 'Все' },
  { id: 'company', label: 'Новости компании' },
  { id: 'industry', label: 'Отраслевые новости' },
  { id: 'events', label: 'Мероприятия' }
]

const activeTab = ref('all')
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 6
const formData = ref({
  firstName: '',
  lastName: '',
  email: ''
})

const filteredNews = computed(() => {
  return newsData.filter(item => {
    const matchesTab = activeTab.value === 'all' || item.category === activeTab.value
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesTab && matchesSearch
  })
})

const totalPages = computed(() => Math.ceil(filteredNews.value.length / itemsPerPage))

const displayedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredNews.value.slice(start, start + itemsPerPage)
})

function handleSubscribe() {
  if (formData.value.email) {
    alert('Подписка оформлена!')
    formData.value = { firstName: '', lastName: '', email: '' }
  }
}
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>