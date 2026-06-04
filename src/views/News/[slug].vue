<template>
  <section class="bg-gray-50">
    <div class="section-container py-12">
      
      <template v-if="story">
        <!-- Image -->
        <div class="mb-8" data-aos="fade-up" data-aos-duration="800">
          <img 
            v-if="story.image" 
            :src="story.image" 
            :alt="story.title" 
            class="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl" 
          />
          <div v-else class="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-Blue to-darkBlue rounded-2xl shadow-2xl flex items-center justify-center">
            <div class="text-white text-center">
              <svg class="w-20 h-20 mx-auto mb-4 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
              </svg>
              <p class="text-lg opacity-70">{{ story.title }}</p>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
              {{ story.date }}
            </p>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-raleway">
              {{ story.title }}
            </h1>
            
            <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <div v-if="story.content" v-html="story.content" />
              <p v-else class="text-lg leading-8">
                {{ story.description }}
              </p>
            </div>
          </div>

          <!-- Back Button -->
          <div class="mt-8">
            <router-link 
              to="/news" 
              class="inline-flex items-center px-6 py-3 bg-Blue text-white rounded-lg font-semibold hover:bg-darkBlue transition-all shadow-lg"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Вернуться к новостям
            </router-link>
          </div>
        </div>
      </template>

      <!-- Not Found -->
      <template v-else>
        <div class="text-center py-20" data-aos="fade-up" data-aos-duration="800">
          <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"></path>
          </svg>
          <h2 class="text-2xl font-bold text-gray-900 mb-2 font-raleway">Новость не найдена</h2>
          <p class="text-gray-600 mb-6">К сожалению, запрашиваемая новость недоступна</p>
          <router-link 
            to="/news" 
            class="inline-flex items-center px-6 py-3 bg-Blue text-white rounded-lg font-semibold hover:bg-darkBlue transition-all shadow-lg"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Вернуться к новостям
          </router-link>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const story = ref(null)

const newsData = [
  {
    id: 1,
    title: "Грандиозное празднование Sumalak Party 2025",
    description: "Компания 'Hurshida Enter Delux' организовала незабываемое мероприятие.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    date: "Март 2025",
    slug: "grandioznoe-prazdnovanie-sumalak-party-2025",
    content: `<div class="space-y-4">
      <p>Мероприятие прошло в главном офисе компании, где была создана атмосфера настоящего восточного праздника. 
      Традиционное блюдо суммалак готовилось по древним рецептам, передаваемым из поколения в поколение.</p>
      <p>Сотрудники компании активно участвовали в процессе приготовления, что способствовало укреплению командного духа.</p>
      <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-4">Ключевые моменты:</h3>
        <ul class="space-y-2">
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-Blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Участие более 200 сотрудников и партнеров
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-Blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Приготовление традиционного суммалака по древним рецептам
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-Blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Укрепление корпоративной культуры и командного духа
          </li>
        </ul>
      </div>
    </div>`
  },
  {
    id: 2,
    title: "Новые достижения компании в области инноваций",
    description: "Hurshida Enter Delux представила революционные решения.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    date: "Март 2025",
    slug: "novye-dostizheniya-kompanii-v-oblasti-innovacij",
    content: `<p>Новые технологические решения включают использование искусственного интеллекта для оптимизации бизнес-процессов, 
              внедрение облачных технологий для повышения эффективности работы и разработку мобильных приложений для улучшения взаимодействия с клиентами.</p>`
  },
  {
    id: 3,
    title: "Расширение команды и новые возможности",
    description: "Компания объявила о наборе 50 новых специалистов.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    date: "Март 2025",
    slug: "rasshirenie-komandy-i-novye-vozmozhnosti",
    content: `<p>Открытые вакансии включают позиции в области IT-разработки, маркетинга, продаж и управления проектами. 
              Компания предлагает конкурентоспособную заработную плату, широкий социальный пакет и возможности для профессионального роста.</p>`
  }
]

onMounted(() => {
  const slug = route.params.slug
  story.value = newsData.find(item => item.slug === slug) || null
})
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>