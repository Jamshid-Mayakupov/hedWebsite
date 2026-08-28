<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-24 relative overflow-hidden">
    <!-- Ambient Background Lighting Orbs -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-Blue/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 right-10 w-96 h-96 bg-lightBlue/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header Banner -->
      <div class="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up" data-aos-duration="800">
        <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
          <!-- <span class="w-2 h-2 rounded-full bg-Blue animate-pulse"></span> -->
          <span>Профессиональная команда</span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight font-raleway tracking-tight mb-6">
          Наша Команда
        </h1>

        <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
          Команда экспертов и профессионалов, обеспечивающих надежность, инновации и высший уровень качества фармацевтической дистрибуции.
        </p>
      </div>

      <!-- Category Filter Controls -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 select-none border"
          :class="[
            activeCategory === category.id
              ? 'bg-Blue text-white border-Blue shadow-lg shadow-Blue/30 scale-105'
              : 'bg-white text-gray-700 border-gray-200 hover:border-Blue/40 hover:bg-gray-50'
          ]"
        >
          {{ category.label }}
        </button>
      </div>

      <!-- Team Members Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        <div
          v-for="(member, index) in filteredMembers"
          :key="member.name"
          class="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl hover:border-Blue/40 transition-all duration-500 group flex flex-col justify-between"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="(index % 4) * 100"
        >
          <div>
            <!-- Member Photo Frame -->
            <div class="relative overflow-hidden h-80 w-full bg-gray-100">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <!-- Role Badge -->
              <div class="absolute bottom-4 left-4 right-4 z-10">
                <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-Blue border border-white/40 shadow-md">
                  {{ member.roleBadge }}
                </span>
              </div>
            </div>

            <!-- Member Content Info -->
            <div class="p-6">
              <h2 class="text-xl font-bold font-raleway text-gray-900 group-hover:text-Blue transition-colors mb-2">
                {{ member.name }}
              </h2>
              <p class="text-sm text-gray-600 leading-relaxed font-medium">
                {{ member.position }}
              </p>
              <p v-if="member.subPosition" class="text-sm text-gray-600 leading-relaxed font-medium">
                {{ member.subPosition }}
              </p>
            </div>
          </div>

          <!-- Bottom Decorative Line -->
          <div class="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
            <span class="font-medium">HURSHIDA ENTER DELUX</span>
            <span class="w-2 h-2 rounded-full bg-Blue/30 group-hover:bg-Blue transition-colors"></span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import AOS from 'aos'

import img1 from '@/assets/images/ourteamimages/IMG_1.JPG'
import img2 from '@/assets/images/ourteamimages/IMG_2.JPG'
import img3 from '@/assets/images/ourteamimages/IMG_3.JPG'
import img4 from '@/assets/images/ourteamimages/IMG_4.JPG'
import img5 from '@/assets/images/ourteamimages/IMG_5.JPG'
import img6 from '@/assets/images/ourteamimages/IMG_6.JPG'
import img7 from '@/assets/images/ourteamimages/IMG_7.JPG'
import img8 from '@/assets/images/ourteamimages/IMG_8.JPG'
import img9 from '@/assets/images/ourteamimages/IMG_9.JPG'
import img10 from '@/assets/images/ourteamimages/IMG_10.JPG'
import img11 from '@/assets/images/ourteamimages/IMG_11.JPG'
import img12 from '@/assets/images/ourteamimages/IMG_12.JPG'
import img13 from '@/assets/images/ourteamimages/IMG_13.JPG'
import img14 from '@/assets/images/ourteamimages/IMG_14.JPG'
import img15 from '@/assets/images/ourteamimages/IMG_15.JPG'
import img16 from '@/assets/images/ourteamimages/IMG_16.JPG'
import img17 from '@/assets/images/ourteamimages/IMG_17.JPG'
import img18 from '@/assets/images/ourteamimages/IMG_18.JPG'
import img19 from '@/assets/images/ourteamimages/IMG_19.JPG'

const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'Все специалисты' },
  { id: 'exec', label: 'Руководство' },
  { id: 'finance', label: 'Финансы & ВЭД' },
  { id: 'projects', label: 'Проекты & IT' },
  { id: 'logistics', label: 'Логистика & Склад' }
]

const teamMembers = [
  {
    name: 'Примов С.Б',
    position: 'Соучредитель и Председатель HED GROUP',
    roleBadge: 'Руководство',
    category: 'exec',
    image: img1
  },
  {
    name: 'Хасанжон Собиржонов',
    position: 'Генеральный Директор HED Group',
    roleBadge: 'Руководство',
    category: 'exec',
    image: img2
  },
  {
    name: 'Абдурахманов Хасан',
    position: 'Заместитель директора, член Центрального управления, Руководитель проекта Alba Dent',
    roleBadge: 'Руководство',
    category: 'exec',
    image: img15
  },
  {
    name: 'Абдумуталипов Темур',
    position: 'Директор Inspiring Education School',
    subPosition: 'Помощник председателя',
    roleBadge: 'Образование & Руководство',
    category: 'exec',
    image: img18
  },
  {
    name: 'Шахло Примова',
    position: 'Руководитель административного отдела',
    roleBadge: 'Администрация',
    category: 'exec',
    image: img5
  },
  {
    name: 'Икрамов Бахриддин',
    position: 'Юрисконсульт',
    roleBadge: 'Юриспруденция',
    category: 'exec',
    image: img17
  },
  {
    name: 'Одил Набиев',
    position: 'Руководитель отдела финансового планирования и аналитики HED GROUP',
    roleBadge: 'Аналитика',
    category: 'finance',
    image: img3
  },
  {
    name: 'Шодиер Уринов',
    position: 'Руководитель финансовых операций HED GROUP',
    roleBadge: 'Финансы',
    category: 'finance',
    image: img4
  },
  {
    name: 'Полина Коршунова',
    position: 'Главный бухгалтер',
    roleBadge: 'Бухгалтерия',
    category: 'finance',
    image: img8
  },
  {
    name: 'Нодир Ахунджанов',
    position: 'Главный специалист по ВЭД',
    roleBadge: 'ВЭД & Поставки',
    category: 'finance',
    image: img6
  },
  {
    name: 'Жамшид Маякубов',
    position: 'Руководитель IT-отдела',
    roleBadge: 'IT & Технологии',
    category: 'projects',
    image: img7
  },
  {
    name: 'Алишер Мадаминов',
    position: 'Руководитель проекта HED Marketing',
    roleBadge: 'Маркетинг & Проекты',
    category: 'projects',
    image: img9
  },
  {
    name: 'Саидов Акмал',
    position: 'Руководитель проекта Daantec Pediatrics',
    roleBadge: 'Управление проектами',
    category: 'projects',
    image: img19
  },
  {
    name: 'Жамшид Барнаев',
    position: 'Руководитель проекта Neotron',
    roleBadge: 'Управление проектами',
    category: 'projects',
    image: img10
  },
  {
    name: 'Сардор Кузибеков',
    position: 'Руководитель проекта AORTICA',
    roleBadge: 'Управление проектами',
    category: 'projects',
    image: img11
  },
  {
    name: 'Холматова Маъмура',
    position: 'Координатор проектов',
    roleBadge: 'Координация',
    category: 'projects',
    image: img14
  },
  {
    name: 'Собиров Жасур',
    position: 'Руководитель проекта HED Logistics',
    roleBadge: 'Логистика & Управление',
    category: 'logistics',
    image: img16
  },
  {
    name: 'Азизжон Раимджонов',
    position: 'Заведующий складом',
    roleBadge: 'Логистика',
    category: 'logistics',
    image: img12
  },
  {
    name: 'Достон Нарзуллаев',
    position: 'Работник склада',
    roleBadge: 'Логистика & Склад',
    category: 'logistics',
    image: img13
  }
]

const filteredMembers = computed(() => {
  if (activeCategory.value === 'all') {
    return teamMembers
  }
  return teamMembers.filter(m => m.category === activeCategory.value)
})

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
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
