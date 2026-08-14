<!-- src/views/mini-pages/PrivacyPolicy.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 sm:py-20 relative overflow-hidden">
    <!-- Ambient Background Lighting Glows -->
    <div class="absolute top-0 left-1/3 w-96 h-96 bg-Blue/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 right-10 w-96 h-96 bg-lightBlue/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
      
      <!-- 1. Header Banner -->
      <div class="text-center max-w-3xl mx-auto space-y-4" data-aos="fade-up" data-aos-duration="800">
        <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs sm:text-sm font-semibold uppercase tracking-wider">
          <span>Официальная политика</span>
        </div>
        
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight font-raleway tracking-tight">
          Политика конфиденциальности
        </h1>

        <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
          Настоящий документ определяет порядок обработки и защиты персональных данных пользователей и контрагентов ООО «HURSHIDA ENTER DELUX».
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <span class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold">
            <svg class="w-3.5 h-3.5 text-Blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Действует с 17 мая 2026 года</span>
          </span>
          <span class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-Blue/5 border border-Blue/20 text-Blue text-xs font-semibold">
            <span>Редакция 2.4</span>
          </span>
        </div>
      </div>

      <!-- 2. Four Pillars of Data Protection -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" data-aos="fade-up" data-aos-duration="800">
        <div
          v-for="(pillar, pIdx) in pillars"
          :key="pIdx"
          class="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-Blue/40 transition-all duration-300 space-y-3"
        >
          <div class="w-10 h-10 rounded-xl bg-Blue/10 text-Blue flex items-center justify-center">
            <component :is="pillar.icon" class="w-5 h-5" />
          </div>
          <h3 class="font-bold text-gray-900 text-base font-raleway">{{ pillar.title }}</h3>
          <p class="text-xs text-gray-600 leading-relaxed">{{ pillar.text }}</p>
        </div>
      </div>

      <!-- 3. Main Policy Content Cards -->
      <div class="space-y-8" data-aos="fade-up" data-aos-duration="800">

        <!-- Section 1: Intro & Data Controller -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-lg space-y-4">
          <div class="flex items-center space-x-3">
            <span class="w-8 h-8 rounded-xl bg-Blue/10 text-Blue text-xs font-black flex items-center justify-center border border-Blue/20">
              01
            </span>
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900 font-raleway">
              Общие положения и оператор данных
            </h2>
          </div>
          <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
            В настоящей Политике конфиденциальности описываются данные и информация («Данные»), которые мы собираем о вас («Субъект данных») при посещении нашего веб-сайта, использовании услуг, заключении договоров или обращении в службу поддержки; цели и способы их использования; принимаемые меры безопасности; а также ваши законные права.
          </p>
          <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
            Оператором персональных данных является <strong>ООО «HURSHIDA ENTER DELUX»</strong> (Юридический адрес: Республика Узбекистан, г. Самарканд, ул. Амира Темура, д. 45). Для контроля за соблюдением законодательства Республики Узбекистан и международных регуляторных стандартов назначен ответственный сотрудник по защите данных (Data Protection Officer).
          </p>
        </div>

        <!-- Section 2: Data Collection & Purposes -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-lg space-y-6">
          <div class="flex items-center space-x-3">
            <span class="w-8 h-8 rounded-xl bg-Blue/10 text-Blue text-xs font-black flex items-center justify-center border border-Blue/20">
              02
            </span>
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900 font-raleway">
              Категории и цели сбора данных
            </h2>
          </div>
          
          <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
            Мы обрабатываем данные исключительно в объемах, необходимых для выполнения уставных целей, фармацевтической деятельности и договорных обязательств:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-200/70 space-y-2">
              <span class="text-xs font-bold uppercase text-Blue tracking-wider">Посетители сайта</span>
              <p class="text-xs text-gray-600">IP-адреса, метаданные сессии, технические файлы cookie, история переходов для обеспечения стабильности и защиты веб-ресурса.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-200/70 space-y-2">
              <span class="text-xs font-bold uppercase text-Blue tracking-wider">Партнеры & Клиенты</span>
              <p class="text-xs text-gray-600">ФИО представителей, контактные телефоны, email, реквизиты организаций для заключения контрактов и дистрибуции.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-200/70 space-y-2">
              <span class="text-xs font-bold uppercase text-Blue tracking-wider">Обратная связь</span>
              <p class="text-xs text-gray-600">Данные обращений через комплаенс-линию, запросы о продукции и отзывы для улучшения качества сервиса.</p>
            </div>
          </div>

          <!-- Highlight Box -->
          <div class="p-5 rounded-2xl bg-Blue/5 border border-Blue/20 space-y-3">
            <h4 class="text-sm font-bold text-gray-900 font-raleway">Мы используем данные для:</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
              <div class="flex items-center space-x-2">
                <span class="w-2 h-2 rounded-full bg-Blue"></span>
                <span>Предоставления запрашиваемых фармацевтических услуг</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-2 h-2 rounded-full bg-Blue"></span>
                <span>Исполнения договорных и логистических обязательств</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-2 h-2 rounded-full bg-Blue"></span>
                <span>Обеспечения фармаконадзора и безопасности пациентов</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-2 h-2 rounded-full bg-Blue"></span>
                <span>Соблюдения законодательных требований Республики Узбекистан</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Cookies -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-lg space-y-4">
          <div class="flex items-center space-x-3">
            <span class="w-8 h-8 rounded-xl bg-Blue/10 text-Blue text-xs font-black flex items-center justify-center border border-Blue/20">
              03
            </span>
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900 font-raleway">
              Использование файлов Cookie
            </h2>
          </div>
          <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
            Файлы cookie — это небольшие текстовые файлы, сохраняемые на вашем устройстве при посещении веб-сайта для сохранения настроек и повышения производительности.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="p-4 rounded-xl bg-gray-50 border border-gray-200/60">
              <span class="font-bold text-sm text-gray-900 font-raleway">Сеансовые Cookie</span>
              <p class="text-xs text-gray-600 mt-1">Удаляются автоматически после закрытия браузера. Необходимы для корректной навигации по сайту.</p>
            </div>
            <div class="p-4 rounded-xl bg-gray-50 border border-gray-200/60">
              <span class="font-bold text-sm text-gray-900 font-raleway">Постоянные Cookie</span>
              <p class="text-xs text-gray-600 mt-1">Сохраняются на определенный срок для запоминания языковых предпочтений и аналитики трафика.</p>
            </div>
          </div>
          <p class="text-xs text-gray-500 italic">
            * Вы можете в любой момент отключить сохранение cookie-файлов в настройках своего браузера.
          </p>
        </div>

        <!-- Section 4: Third Parties & Security -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-lg space-y-4">
          <div class="flex items-center space-x-3">
            <span class="w-8 h-8 rounded-xl bg-Blue/10 text-Blue text-xs font-black flex items-center justify-center border border-Blue/20">
              04
            </span>
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900 font-raleway">
              Передача данных и информационная безопасность
            </h2>
          </div>
          <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
            Компания не продает, не сдает в аренду и не передает персональные данные сторонним лицам в маркетинговых целях. Передача допускается строго в случаях:
          </p>
          <ul class="space-y-2.5 text-sm text-gray-700">
            <li class="flex items-start space-x-3">
              <span class="w-2 h-2 rounded-full bg-Blue mt-1.5 shrink-0"></span>
              <span>Официальным уполномоченным государственным органам по законному запросу;</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="w-2 h-2 rounded-full bg-Blue mt-1.5 shrink-0"></span>
              <span>Фармацевтическим партнерам и логистическим операторам в рамках исполнения соглашений GDP;</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="w-2 h-2 rounded-full bg-Blue mt-1.5 shrink-0"></span>
              <span>Медицинским учреждениям при возникновении вопросов фармаконадзора и безопасности.</span>
            </li>
          </ul>
          <p class="text-sm sm:text-base text-gray-700 leading-relaxed pt-2">
            Все серверы и базы данных защищены современными системами шифрования SSL/TLS 256-bit, строгим разграничением прав доступа и регулярным аудитом безопасности.
          </p>
        </div>

        <!-- Section 5: User Rights & DPO Contact -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-lg space-y-6">
          <div class="flex items-center space-x-3">
            <span class="w-8 h-8 rounded-xl bg-Blue/10 text-Blue text-xs font-black flex items-center justify-center border border-Blue/20">
              05
            </span>
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900 font-raleway">
              Ваши права и контактная информация
            </h2>
          </div>

          <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
            В соответствии с законодательством Республики Узбекистан вы имеете право запросить подтверждение факта обработки ваших данных, получить их копию, потребовать уточнения, блокирования или уничтожения неполных или недостоверных сведений.
          </p>

          <!-- Executive Contact Box -->
          <div class="rounded-2xl bg-gradient-to-r from-Blue/10 via-lightBlue/5 to-transparent p-6 border border-Blue/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="space-y-1">
              <span class="text-xs font-bold uppercase text-Blue tracking-wider">Отдел защиты данных (DPO)</span>
              <h3 class="text-lg font-bold text-gray-900 font-raleway">ООО «HURSHIDA ENTER DELUX»</h3>
              <p class="text-xs text-gray-600">Все запросы обрабатываются в течение 24 рабочих часов.</p>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <a
                href="mailto:privacy@hurshidadelux.com"
                class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-Blue hover:bg-lightBlue text-white text-xs sm:text-sm font-bold shadow-md transition-all duration-300"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>privacy@hurshidadelux.com</span>
              </a>

              <router-link
                to="/contacts"
                class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 hover:border-Blue/40 hover:text-Blue text-xs sm:text-sm font-bold shadow-sm transition-all duration-300"
              >
                <span>Контакты</span>
              </router-link>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { h, onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  setTimeout(() => {
    AOS.refreshHard()
  }, 100)
})

// Icons as render functions
const ShieldIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
])

const LockIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' })
])

const ScaleIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' })
])

const UserCheckIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' })
])

const pillars = [
  {
    title: 'Защита данных',
    text: 'Шифрование SSL/TLS 256-bit и строгие протоколы информационной безопасности.',
    icon: LockIcon
  },
  {
    title: 'Законность',
    text: 'Полное соответствие Закону Республики Узбекистан «О персональных данных».',
    icon: ScaleIcon
  },
  {
    title: 'Прозрачность',
    text: 'Четкие цели сбора и обработки без скрытых условий и передачи спамерам.',
    icon: ShieldIcon
  },
  {
    title: 'Права субъекта',
    text: 'Полное право на доступ, изменение, отзыв согласия и удаление информации.',
    icon: UserCheckIcon
  }
]
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>