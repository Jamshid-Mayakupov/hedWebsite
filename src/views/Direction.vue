<!-- src/views/Direction.vue -->
<template>
  <section class="min-h-screen bg-gray-50/50 py-12 md:py-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">

      <!-- 1. Header Block -->
      <div class="text-center max-w-4xl mx-auto space-y-4" data-aos="fade-up" data-aos-duration="800">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-bold uppercase tracking-wider">
          <span>Наши направления & Проекты</span>
        </div>

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-raleway leading-tight">
          Инновационные направления <span class="bg-gradient-to-r from-Blue via-lightBlue to-blue-700 bg-clip-text text-transparent">группы компаний</span>
        </h1>

        <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Многопрофильная экосистема ООО «HURSHIDA ENTER DELUX»: от дистрибуции жизненно необходимых медикаментов и кардиохирургического оборудования до современных логистических хабов GDP и международного образования.
        </p>
      </div>

      <!-- 2. Navigation Tabs (Clean, responsive pill buttons with flex-wrap centered layout) -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto px-2" data-aos="fade-up" data-aos-duration="800">
        <button
          v-for="project in projectsList"
          :key="project.id"
          type="button"
          @click="handleTabClick(project)"
          role="tab"
          :aria-selected="activeTab === project.id"
          class="px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 shadow-sm cursor-pointer select-none"
          :class="activeTab === project.id 
            ? 'bg-Blue text-white border-Blue shadow-lg shadow-Blue/25 scale-[1.02]' 
            : 'bg-white text-gray-700 border-gray-200/80 hover:border-Blue/40 hover:text-Blue hover:bg-gray-50 active:scale-95'"
        >
          <span>{{ project.title }}</span>
        </button>
      </div>

      <!-- 3. Active Project Details Display with Silky Smooth Vue Transition -->
      <transition name="tab-fade" mode="out-in">
        <div class="space-y-10 sm:space-y-14" :key="activeProject.id" v-if="activeProject">

          <!-- A. Hero Showcase Card -->
          <div class="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-200/80 shadow-xl space-y-8">
            
            <div class="space-y-4">
              <div class="flex flex-wrap items-center gap-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-Blue/10 text-Blue text-xs font-bold uppercase tracking-wider">
                  {{ activeProject.category }}
                </span>
                <span class="text-xs text-gray-500 font-semibold" v-if="activeProject.metaBadge">
                  • {{ activeProject.metaBadge }}
                </span>
              </div>

              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 font-raleway tracking-tight">
                    {{ activeProject.title }}
                  </h2>
                  <p class="text-base sm:text-lg font-bold text-Blue mt-1">
                    {{ activeProject.subtitle }}
                  </p>
                </div>

                <!-- External Link Button (if available) -->
                <div v-if="activeProject.link" class="shrink-0">
                  <a
                    :href="activeProject.link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-Blue hover:bg-lightBlue text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <span>{{ activeProject.link.label }}</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <p class="text-sm sm:text-base text-gray-700 leading-relaxed pt-2">
                {{ activeProject.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 pt-2" v-if="activeProject.tags && activeProject.tags.length">
                <span
                  v-for="(tag, tIdx) in activeProject.tags"
                  :key="tIdx"
                  class="px-3 py-1 rounded-xl bg-gray-100 border border-gray-200/80 text-gray-700 text-xs font-semibold"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Hero Showcase Image -->
            <div class="relative overflow-hidden rounded-3xl shadow-xl border border-gray-200/80 group" v-if="activeProject.image">
              <img
                :src="activeProject.image"
                :alt="activeProject.title"
                class="w-full h-[280px] sm:h-[400px] md:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <!-- Bottom Image Glass Badge -->
              <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-between shadow-lg">
                <div>
                  <span class="text-[11px] uppercase tracking-widest font-bold text-cyan-300">Направление группы HURSHIDA</span>
                  <h3 class="text-sm sm:text-base font-bold font-raleway">{{ activeProject.title }}</h3>
                </div>
                <span class="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold tracking-wider backdrop-blur-sm border border-white/30 hidden sm:inline-block">
                  {{ activeProject.category }}
                </span>
              </div>
            </div>

          </div>

          <!-- B. Strategy & Portfolio Pillars Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" v-if="activeProject.sections && activeProject.sections.length">
            
            <!-- Pillar 1: Strategy -->
            <div class="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-lg flex flex-col justify-between space-y-6 hover:border-Blue/40 transition-all duration-300">
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <span class="w-8 h-8 rounded-xl bg-Blue/10 text-Blue text-xs font-black flex items-center justify-center border border-Blue/20">
                    01
                  </span>
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900 font-raleway">
                    {{ activeProject.sections[0]?.title || 'Стратегическая цель' }}
                  </h3>
                </div>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {{ activeProject.sections[0]?.text }}
                </p>
              </div>

              <!-- High Standards Highlight Box -->
              <div class="bg-gray-50 rounded-2xl p-5 border border-gray-200/60 space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-Blue mt-1.5 shrink-0"></span>
                  <div>
                    <div class="text-xs sm:text-sm font-bold text-gray-900 font-raleway">Высокий стандарт надежности</div>
                    <div class="text-xs text-gray-500">Полное соответствие международным стандартам качества и безопасности</div>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-lightBlue mt-1.5 shrink-0"></span>
                  <div>
                    <div class="text-xs sm:text-sm font-bold text-gray-900 font-raleway">Инновационный подход</div>
                    <div class="text-xs text-gray-500">Внедрение передовых разработок от признанных мировых лидеров</div>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-semibold">
                <span>Уровень соответствия стандартам</span>
                <span class="text-Blue font-bold">100% Гарантия</span>
              </div>
            </div>

            <!-- Pillar 2: Portfolio & Competencies -->
            <div class="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-lg flex flex-col justify-between space-y-6 hover:border-Blue/40 transition-all duration-300">
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <span class="w-8 h-8 rounded-xl bg-Blue/10 text-Blue text-xs font-black flex items-center justify-center border border-Blue/20">
                    02
                  </span>
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900 font-raleway">
                    {{ activeProject.sections[1]?.title || 'Ключевые компетенции' }}
                  </h3>
                </div>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {{ activeProject.sections[1]?.text }}
                </p>
              </div>

              <!-- Portfolio Items List -->
              <div class="space-y-2.5" v-if="activeProject.sections[1]?.items">
                <div
                  v-for="(item, iIdx) in activeProject.sections[1].items"
                  :key="iIdx"
                  class="flex items-center space-x-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200/60 hover:bg-Blue/5 hover:border-Blue/30 transition-colors"
                >
                  <span class="w-2 h-2 rounded-full bg-Blue shrink-0"></span>
                  <span class="text-xs sm:text-sm font-semibold text-gray-800">{{ item }}</span>
                </div>
              </div>

              <div class="pt-4 border-t border-gray-100 flex items-center space-x-2 text-xs font-bold text-Blue">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Надежный сервис и экспертное сопровождение</span>
              </div>
            </div>

          </div>

          <!-- C. Key Metrics Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6" v-if="activeProject.metrics && activeProject.metrics.length">
            <div
              v-for="(m, mIdx) in activeProject.metrics"
              :key="mIdx"
              class="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-md text-center space-y-1 hover:shadow-lg hover:border-Blue/40 transition-all duration-300"
            >
              <div class="text-2xl sm:text-3xl font-extrabold text-Blue font-raleway">
                {{ m.value }}
              </div>
              <div class="text-xs font-semibold text-gray-600">
                {{ m.label }}
              </div>
            </div>
          </div>

          <!-- D. Key Advantages Cards -->
          <div class="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-xl space-y-8" v-if="activeProject.advantages && activeProject.advantages.length">
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
              <div>
                <h3 class="text-xl sm:text-2xl font-extrabold text-gray-900 font-raleway">
                  Ключевые преимущества направления
                </h3>
                <p class="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Почему ведущие медицинские центры и партнеры выбирают {{ activeProject.title }}
                </p>
              </div>
              <span class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider">
                Преимущества
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div
                v-for="(adv, aIdx) in activeProject.advantages"
                :key="aIdx"
                class="rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/80 shadow-sm group hover:shadow-lg hover:border-Blue/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div class="h-40 overflow-hidden bg-gray-100" v-if="adv.image">
                  <img
                    :src="adv.image"
                    :alt="adv.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="p-6 space-y-2 flex-1">
                  <h4 class="text-base font-bold text-gray-900 font-raleway group-hover:text-Blue transition-colors">
                    {{ adv.title }}
                  </h4>
                  <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {{ adv.text }}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </transition>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AOS from 'aos'
import schoolStemLab from '@/assets/images/school-stem-lab.jpg'

const route = useRoute()
const router = useRouter()

const projectsList = ref([
  {
    id: 'neotron',
    title: 'Neotron',
    subtitle: 'Современные решения для эндоваскулярной хирургии и интервенционной кардиологии',
    category: 'Эндоваскулярная хирургия',
    metaBadge: 'Интервенционная медицина',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    description: 'Neotron — специализированное направление компании, осуществляющее поставку современных решений для эндоваскулярной хирургии. Мы предлагаем широкий ассортимент периферических сосудистых стентов, баллонных катетеров и другой высокотехнологичной продукции от ведущих мировых производителей. Наша цель — обеспечить медицинские учреждения надежными и инновационными решениями, способствующими эффективному лечению пациентов и развитию современной интервенционной медицины.',
    tags: ['Эндоваскулярная хирургия', 'Сосудистые стенты', 'Баллонные катетеры', 'Интервенционная медицина', 'Малоинвазивная хирургия'],
    sections: [
      {
        title: 'Наша стратегическая цель',
        text: 'Обеспечить медицинские центры и кардиохирургические клиники надежными и инновационными изделиями для малоинвазивных вмешательств, способствующими эффективному лечению пациентов и ускоренной реабилитации.'
      },
      {
        title: 'Высокотехнологичный портфель',
        text: 'Инновационные разработки для современной интервенционной хирургии от ведущих мировых производителей.',
        items: [
          'Периферические и коронарные сосудистые стенты нового поколения',
          'Специализированные баллонные катетеры высокого давления',
          'Высокоточные проводники и микрокатетеры для сосудистых операций'
        ]
      }
    ],
    metrics: [
      { value: '100%', label: 'Безопасность и клиническая точность' },
      { value: 'ISO / CE', label: 'Международные стандарты качества' },
      { value: '24/7', label: 'Консультации специалистов' },
      { value: 'Top', label: 'Мировые производители' }
    ],
    advantages: [
      {
        title: 'Мировые стандарты',
        text: 'Прямые поставки сертифицированной продукции с гарантией оригинальности.',
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Экспертная поддержка',
        text: 'Консультации и обучение специалистов правильной технике применения изделий.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Клиническая эффективность',
        text: 'Снижение рисков повторных стенозов и сокращение времени госпитализации.',
        image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'aortica',
    title: 'Аортика',
    subtitle: 'Высокотехнологичное оборудование для кардиохирургии и искусственного кровообращения',
    category: 'Кардиохирургия',
    metaBadge: 'Аппараты АИК • Перфузиология',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    description: '«Аортика» — специализированное направление компании, занимающееся дистрибуцией высокотехнологичного оборудования для кардиохирургии. Основным направлением проекта является обеспечение медицинских учреждений современными аппаратами искусственного кровообращения (АИК) и сопутствующими технологиями, необходимыми для проведения операций на открытом сердце. Мы сотрудничаем с ведущими мировыми производителями медицинского оборудования и предлагаем решения, соответствующие международным стандартам качества, безопасности и эффективности.',
    tags: ['Аппараты АИК', 'Кардиохирургия', 'Операции на открытом сердце', 'Перфузиология', 'Реанимация'],
    sections: [
      {
        title: 'Миссия и стандарты качества',
        text: 'Нашей целью является внедрение передовых технологий, которые помогают кардиохирургическим центрам выполнять сложнейшие операции с максимальной надежностью и высокой клинической эффективностью.'
      },
      {
        title: 'Комплексное сопровождение',
        text: 'Помимо поставок оборудования, специалисты «Аортики» обеспечивают полный цикл поддержки медицинских учреждений.',
        items: [
          'Поставка аппаратов искусственного кровообращения (АИК) и оксигенаторов',
          'Круглосуточный инженерно-технический сервис и оперативное обслуживание',
          'Профессиональное обучение врачей-перфузиологов и кардиохирургов'
        ]
      }
    ],
    metrics: [
      { value: '100%', label: 'Клиническая надежность' },
      { value: '24/7', label: 'Техническая поддержка' },
      { value: 'АИК', label: 'Экспертный класс' },
      { value: 'ISO', label: 'Стандарты ЕС и СНГ' }
    ],
    advantages: [
      {
        title: 'Мировые производители',
        text: 'Официальные партнерские соглашения с флагманами кардиохирургического оборудования.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Бесперебойная работа',
        text: 'Строгий регламент превентивного технического обслуживания оборудования в операционных.',
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Обучение персонала',
        text: 'Регулярные мастер-классы и практические тренинги от ведущих зарубежных специалистов.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'hed-logistics',
    title: 'HED Logistics',
    subtitle: 'Современный логистический и складской комплекс международных стандартов GDP / GSP',
    category: 'Логистика & Склады',
    metaBadge: 'Площадь: 0.87 га • GDP / GSP',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    description: 'HED Logistics — современное логистическое направление компании, обеспечивающее полный комплекс услуг по хранению, таможенному оформлению и дистрибуции фармацевтической и медицинской продукции. Логистический комплекс занимает площадь 0.87 гектара и включает склады классов A, B и C общей вместимостью более 1 440 паллетомест, с высотой хранения до 8 метров, оснащенные современными системами управления и контроля. Все складские объекты соответствуют международным стандартам GDP (Good Distribution Practice) и GSP (Good Storage Practice), что гарантирует соблюдение требований к качеству, безопасности и прослеживаемости продукции. Комплекс также располагает современной офисной инфраструктурой и обеспечивает эффективное управление логистическими процессами, позволяя нашим партнерам получать надежный сервис на каждом этапе цепочки поставок.',
    tags: ['GDP / GSP Стандарты', '0.87 гектара', '1 440+ Паллетомест', 'Высота хранения 8м', 'Склады классов A, B, C', 'Холодовая цепь'],
    sections: [
      {
        title: 'Инфраструктура и соблюдение норм',
        text: 'Складские площади на территории 0.87 га полностью соответствуют международным стандартам GDP и GSP, обеспечивая непрерывный контроль температурного режима, влажности и безопасность каждой партии продукции.'
      },
      {
        title: 'Комплексные логистические услуги',
        text: 'Надежное и прозрачное управление цепочкой поставок от завода-изготовителя до конечного получателя.',
        items: [
          'Ответственное хранение медикаментов и изделий медицинского назначения',
          'Оперативное таможенное оформление и сертификация грузов',
          'Транспортировка с валидированным температурным трекингом (2–8°C и 15–25°C)',
          'Современная офисная инфраструктура и автоматизированный WMS-учет'
        ]
      }
    ],
    metrics: [
      { value: '1 440+', label: 'Паллетомест общей емкости' },
      { value: '0.87 га', label: 'Общая площадь комплекса' },
      { value: '8 метров', label: 'Рабочая высота хранения' },
      { value: 'GDP / GSP', label: 'Международная сертификация' }
    ],
    advantages: [
      {
        title: 'Склады классов A, B, C',
        text: 'Высокостеллажное хранение до 8 метров с современными погрузочными терминалами.',
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Холодовая цепь 24/7',
        text: 'Автономные холодильные камеры с автоматическим мониторингом микроклимата.',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Таможенный терминал',
        text: 'Быстрое оформление деклараций и прохождение инспекционного контроля.',
        image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'hed-marketing',
    title: 'HED Marketing',
    subtitle: 'Дистрибуция безрецептурной (OTC) продукции и товаров для здоровья',
    category: 'Маркетинг & Дистрибуция',
    metaBadge: 'OTC Сегмент • Аптечный ритейл',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    description: 'HED Marketing — направление компании, специализирующееся на дистрибуции безрецептурной (OTC) продукции для аптечных сетей и розничного фармацевтического рынка. В нашем портфеле представлены современные товары для здоровья и повседневного ухода. Мы сотрудничаем с ведущими международными производителями, обеспечивая рынок качественными, безопасными и эффективными решениями для поддержания здоровья и повышения качества жизни.',
    tags: ['OTC Продукция', 'Аптечные сети', 'Товары для здоровья', 'Фарм-маркетинг', 'Дистрибуция'],
    sections: [
      {
        title: 'Наша стратегическая цель',
        text: 'Обеспечение аптечных сетей и населения широким ассортиментом качественных безрецептурных препаратов, средств личной гигиены и биологически активных добавок от ведущих мировых брендов.'
      },
      {
        title: 'Ключевые компетенции',
        text: 'Прямые контракты с производителями и омниканальный маркетинг в национальном масштабе.',
        items: [
          'Широкая дистрибьюторская сеть по всем регионам Республики Узбекистан',
          'Профессиональный трейд-маркетинг и мерчандайзинг в аптеках',
          'Аналитика спроса и оптимизация товарных запасов'
        ]
      }
    ],
    metrics: [
      { value: '100%', label: 'Оригинальная продукция' },
      { value: '1000+', label: 'Аптек-партнеров' },
      { value: '14', label: 'Регионов покрытия' },
      { value: '24/7', label: 'Бесперебойная логистика' }
    ],
    advantages: [
      {
        title: 'Прямые контракты',
        text: 'Поставки напрямую от международных фармзаводов без посредников.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Маркетинговое продвижение',
        text: 'Комплексные промо-кампании, обучение фармацевтов и рекламная поддержка.',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Оперативная доставка',
        text: 'Регулярные поставки в аптечные сети с соблюдением всех условий хранения.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'inspiring-school',
    title: 'Inspiring Education School',
    subtitle: 'Современная международная школа нового поколения и углубленное развитие лидеров',
    category: 'Международное образование',
    metaBadge: 'Кембриджская программа • Олимпиады',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    description: 'Inspiring Education School — современная международная школа, ориентированная на подготовку нового поколения успешных и конкурентодоступных лидеров. Образовательный процесс сочетает высокие академические стандарты, современные методики обучения и всестороннее развитие личности. Особое внимание уделяется углубленному изучению иностранных языков, включая китайский язык с преподаванием носителями языка. Ученики школы регулярно становятся победителями и призерами национальных и международных олимпиад, демонстрируя высокий уровень знаний и подготовки. Наша миссия — создать образовательную среду, в которой каждый ребенок раскрывает свой потенциал, развивает критическое мышление, лидерские качества и уверенно готовится к обучению и успешной карьере в глобальном мире.',
    tags: ['Международная школа', 'Китайский с носителями', 'STEM Образование', 'Олимпиадная подготовка', 'Критическое мышление'],
    sections: [
      {
        title: 'Наша миссия и концепция',
        text: 'Создать образовательную среду, в которой каждый ребенок раскрывает свой потенциал, развивает критическое мышление, лидерские качества и уверенно готовится к обучению и успешной карьере в глобальном мире.'
      },
      {
        title: 'Приоритетные направления',
        text: 'Углубленная академическая программа с акцентом на практику и языки.',
        items: [
          'Углубленное изучение английского и китайского языков с преподавателями-носителями',
          'Профессиональная подготовка к национальным и международным олимпиадам',
          'Развитие эмоционального интеллекта, soft skills и лидерских качеств'
        ]
      }
    ],
    metrics: [
      { value: '100%', label: 'Академический стандарт' },
      { value: 'Global', label: 'Международная подготовка' },
      { value: '2+', label: 'Иностранных языка' },
      { value: 'STEM', label: 'Практические лаборатории' }
    ],
    advantages: [
      {
        title: 'Языковая среда',
        text: 'Погружение в иностранные языки с первых классов под руководством экспатов.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'STEM-лаборатории',
        text: 'Современные кабинеты робототехники, химии, физики и программирования.',
        image: schoolStemLab
      },
      {
        title: 'Победы в олимпиадах',
        text: 'Системный менторинг для участия в престижных мировых состязаниях.',
        image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'daantec-pediatrics',
    title: 'Daantec Pediatrics',
    subtitle: 'Специализированная педиатрическая продукция, витамины и БАДы',
    category: 'Педиатрия',
    metaBadge: 'Здоровье детей • Доказательная медицина',
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=1200&q=80',
    description: 'Daantec Pediatrics — специализированное направление компании, ориентированное на дистрибуцию высококачественной педиатрической продукции для поддержки здоровья и гармоничного развития детей. Портфель бренда включает современные витаминно-минеральные комплексы, биологически активные добавки и другие продукты, разработанные с учетом международных стандартов качества и безопасности. Daantec Pediatrics стремится предоставлять детям эффективные и безопасные решения, а медицинским специалистам и родителям — продукцию, отвечающую современным требованиям доказательного качества и инноваций.',
    tags: ['Педиатрия', 'Витаминные комплексы', 'Биологически активные добавки', 'Здоровье детей', 'Доказательное качество'],
    sections: [
      {
        title: 'Наша основная цель',
        text: 'Предоставлять детям эффективные и безопасные решения, а педиатрам и родителям — продукцию, полностью отвечающую принципам доказательной медицины и премиального европейского качества.'
      },
      {
        title: 'Продуктовый портфель',
        text: 'Сбалансированные формулы для гармоничного роста и надежного иммунитета.',
        items: [
          'Сбалансированные витаминно-минеральные комплексы для детей разных возрастов',
          'Гипоаллергенные биологически активные добавки (БАДы) высокой биодоступности',
          'Инновационные формы выпуска (капли, сиропы, жевательные пастилки)'
        ]
      }
    ],
    metrics: [
      { value: '100%', label: 'Безопасность и гипоаллергенность' },
      { value: '0+', label: 'Поддержка с первых дней жизни' },
      { value: 'GMP', label: 'Европейские стандарты' },
      { value: '100%', label: 'Натуральные компоненты' }
    ],
    advantages: [
      {
        title: 'Европейские стандарты',
        text: 'Строгий контроль качества сырья и готовой продукции на каждом этапе.',
        image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Доказательная база',
        text: 'Формулы разработаны совместно с ведущими международными педиатрами.',
        image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Приятный вкус',
        text: 'Натуральные фруктовые вкусы, которые нравятся детям и облегчают прием.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'alba-dent',
    title: 'Alba Dent',
    subtitle: 'Передовое стоматологическое оборудование и расходные материалы',
    category: 'Стоматология',
    metaBadge: 'Стоматологические системы',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    description: 'Alba Dent — специализированное высокотехнологичное направление, предлагающее клиникам современные стоматологические системы, сертифицированные имплантаты, ортопедические материалы и инновационное диагностическое оборудование премиум-класса.',
    tags: ['Стоматология', 'Премиум материалы', 'Оборудование', 'Имплантология'],
    link: {
      url: 'https://albadent.uz',
      label: 'Перейти на сайт albadent.uz'
    },
    sections: [
      {
        title: 'Наша стратегическая цель',
        text: 'Комплексное оснащение ведущих стоматологических центров передовыми технологиями, цифровыми сканерами и безопасными сертифицированными материалами для безупречного лечения пациентов.'
      },
      {
        title: 'Комплексный сервис и поддержка',
        text: 'Полный цикл услуг для стоматологических клиник любой сложности.',
        items: [
          'Прямые поставки сертифицированной продукции',
          'Профессиональный консалтинг и мастер-классы',
          'Оперативное гарантийное и постгарантийное обслуживание'
        ]
      }
    ],
    metrics: [
      { value: '100%', label: 'Сертифицированное качество' },
      { value: '24/7', label: 'Техническая поддержка' },
      { value: 'Top', label: 'Оборудование премиум-класса' },
      { value: 'ISO', label: 'Международная сертификация' }
    ],
    advantages: [
      {
        title: 'Цифровая стоматология',
        text: '3D сканеры, томографы и фрезерные станки последнего поколения.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Премиум имплантология',
        text: 'Высокоприживляемые имплантаты с пожизненной гарантией производителя.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Сервисный центр',
        text: 'Собственная служба инженеров для калибровки и обслуживания оборудования.',
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'daantec',
    title: 'Daantec',
    subtitle: 'Высокоточное диагностическое оборудование и медицинские приборы',
    category: 'Медицинская техника',
    metaBadge: 'Диагностика & Медтехника',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Daantec — авторитетный бренд, специализирующийся на поставках современного диагностического, электрофизиологического и терапевтического оборудования, помогающего медицинским учреждениям выявлять заболевания на ранних стадиях.',
    tags: ['Диагностика', 'Электрофизиология', 'Медоборудование', 'Инновации'],
    sections: [
      {
        title: 'Наша стратегическая цель',
        text: 'Оснащение клиник и научно-исследовательских институтов высокоточными приборами для функциональной диагностики экспертного уровня.'
      },
      {
        title: 'Ключевые преимущества',
        text: 'Безупречная точность исследований и эргономичность приборов.',
        items: [
          'Инновационные диагностические комплексы',
          'Квалифицированный инженерный сервис',
          'Экспертное сопровождение клиницистов'
        ]
      }
    ],
    metrics: [
      { value: 'ISO', label: 'Международный стандарт' },
      { value: '100%', label: 'Точность диагностики' },
      { value: '24/7', label: 'Инженерная служба' },
      { value: 'CE', label: 'Европейская сертификация' }
    ],
    advantages: [
      {
        title: 'Экспертный уровень',
        text: 'Аппараты с непревзойденной детализацией сигналов и снимков.',
        image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Эргономика и ПО',
        text: 'Интуитивные интерфейсы, ускоряющие проведение диагностических процедур.',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Обучение врачей',
        text: 'Курсы повышения квалификации для операторов и врачей-диагностов.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'spherix',
    title: 'Spherix',
    subtitle: 'Комплексная аналитическая платформа финансового и товарного учета',
    category: 'ERP / CRM & Аналитика',
    metaBadge: 'ERP / CRM • P&L / Cash Flow',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description: 'Spherix — это передовая корпоративная платформа для глубокого сбора финансовых, медицинских и статистических данных, детального анализа бизнес-трендов, контроля инвестиций, управления P&L, Cash Flow, а также мониторинга товарооборота и сроков годности продукции в реальном времени.',
    tags: ['Финансовая аналитика', 'P&L / Cash Flow', 'Управление запасами', 'Мониторинг продаж', 'Сроки годности'],
    sections: [
      {
        title: 'Финансовый мониторинг и инвестиции',
        text: 'Платформа обеспечивает полный контроль над структурой инвестиций (распределение собственного капитала, кредитов и складов), детальный учет доходов, расходов, маржинальности и рентабельности бизнеса с визуализацией по месяцам.'
      },
      {
        title: 'Товарный учет и контроль сроков',
        text: 'Интегрированный модуль управления складом и продажами позволяет отслеживать динамику реализации продуктов по менеджерам, контролировать остатки товаров на складах и заблаговременно выявлять продукцию с критическим сроком годности.',
        items: [
          'Детальный учет P&L (Доходы, Расходы, Прибыль) и денежных потоков (Cash Flow)',
          'Контроль дебиторской и кредиторской задолженности в режиме реального времени',
          'Анализ динамики продаж по продуктам и эффективности менеджеров',
          'Автоматический мониторинг критических сроков годности товаров и регистрационных документов'
        ]
      }
    ],
    metrics: [
      { value: '99.9%', label: 'Точность аналитики и отчетности' },
      { value: '24/7', label: 'Непрерывный мониторинг метрик' },
      { value: 'Realtime', label: 'Обновление данных' },
      { value: 'P&L', label: 'Сквозной контроль финансов' }
    ],
    advantages: [
      {
        title: 'Сквозная аналитика',
        text: 'Объединение всех финансовых и складских потоков в единый дашборд.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Контроль сроков годности',
        text: 'Предиктивная система оповещения о партиях с истекающим сроком хранения.',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80'
      },
      {
        title: 'Безопасность данных',
        text: 'Многоуровневое шифрование и разграничение прав доступа для сотрудников.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
])

// Read tab from query or hash, fallback to first project
const activeTab = ref(
  (typeof route.query.tab === 'string' && projectsList.value.some(p => p.id === route.query.tab))
    ? route.query.tab
    : (route.hash ? route.hash.replace('#', '') : 'neotron')
)

const handleTabClick = (project) => {
  activeTab.value = project.id
  router.replace({ query: { ...route.query, tab: project.id } }).catch(() => {})
}

// Keep activeTab in sync with query parameter
watch(() => route.query.tab, (newTab) => {
  if (newTab && projectsList.value.some(p => p.id === newTab)) {
    activeTab.value = newTab
  }
})

const activeProject = computed(() => {
  return projectsList.value.find(p => p.id === activeTab.value) || projectsList.value[0]
})

onMounted(() => {
  if (route.query.tab && projectsList.value.some(p => p.id === route.query.tab)) {
    activeTab.value = String(route.query.tab)
  }
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

/* Custom scrollbar hiding for clean tab aesthetics */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Smooth Tab Fade Transition */
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>