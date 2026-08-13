import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import { getSiteUrl } from '@/config/env'
import { hasSession, onUnauthorized } from '@/utils/session'

const companyName = 'HURSHIDA ENTER DELUX'
const defaultDescription = 'Фармацевтическая компания HURSHIDA ENTER DELUX: информация о компании, продукции, новостях и контактах.'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: `${companyName} — фармацевтическая компания`,
      description: defaultDescription,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue'),
    meta: { title: `О компании | ${companyName}`, description: 'Информация о компании HURSHIDA ENTER DELUX и её деятельности.' },
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('./views/Products/indexProducts.vue'),
    meta: { title: `Продукция | ${companyName}`, description: 'Каталог продукции HURSHIDA ENTER DELUX.' },
  },
  {
    path: '/products/:slug',
    name: 'product-detail',
    component: () => import('./views/Products/[slug]Products.vue'),
    meta: { title: `Информация о продукте | ${companyName}`, description: 'Подробная информация о продукте.' },
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('./views/News/index.vue'),
    meta: { title: `Новости | ${companyName}`, description: 'Новости и события HURSHIDA ENTER DELUX.' },
  },
  {
    path: '/news/:slug',
    name: 'news-detail',
    component: () => import('./views/News/[slug].vue'),
    meta: { title: `Новость | ${companyName}`, description: 'Новость компании HURSHIDA ENTER DELUX.', ogType: 'article' },
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('./views/Contacts.vue'),
    meta: { title: `Контакты | ${companyName}`, description: 'Адреса, телефон и электронная почта HURSHIDA ENTER DELUX.' },
  },
  {
    path: '/complains',
    name: 'complains',
    component: () => import('./views/Complains.vue'),
    meta: { title: `Комплаенс | ${companyName}`, description: 'Комплаенс-документы и правила делового поведения HURSHIDA ENTER DELUX.' },
  },
  {
    path: '/direction',
    name: 'direction',
    component: () => import('./views/Direction.vue'),
    meta: { title: `Направления | ${companyName}`, description: 'Основные направления деятельности HURSHIDA ENTER DELUX.' },
  },
  {
    path: '/ourteam',
    name: 'ourteam',
    component: () => import('./views/Ourteam.vue'),
    meta: { title: `Наша команда | ${companyName}`, description: 'Команда HURSHIDA ENTER DELUX.' },
  },
  {
    path: '/appeal',
    name: 'appeal',
    component: () => import('./views/mini-pages/Appeal.vue'),
    meta: { title: `Обращение | ${companyName}`, description: 'Обращение компании HURSHIDA ENTER DELUX.' },
  },
  {
    path: '/privacy-policy',
    name: 'privacypolicy',
    component: () => import('./views/mini-pages/PrivacyPolicy.vue'),
    meta: { title: `Политика конфиденциальности | ${companyName}`, description: 'Политика конфиденциальности HURSHIDA ENTER DELUX.' },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login.vue'),
    meta: { title: `Вход | ${companyName}`, description: 'Вход в панель управления.', guestOnly: true, noindex: true },
  },
  {
    path: '/admin/news',
    name: 'admin-news',
    component: () => import('./views/News/AdminNews.vue'),
    meta: { title: `Управление новостями | ${companyName}`, requiresAuth: true, noindex: true },
  },
  {
    path: '/admin/products',
    name: 'admin-product',
    component: () => import('./views/AdminProduct.vue'),
    meta: { title: `Управление продукцией | ${companyName}`, requiresAuth: true, noindex: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('./views/NotFound.vue'),
    meta: { title: `Страница не найдена | ${companyName}`, description: 'Запрошенная страница не найдена.', noindex: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !hasSession()) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  if (to.meta.guestOnly && hasSession()) return { name: 'admin-news' }
  return true
})

function setMetaTag(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value))
}

function updateDocumentMetadata(route) {
  const title = route.meta.title || companyName
  const description = route.meta.description || defaultDescription
  const canonicalBase = getSiteUrl()
  const canonicalUrl = canonicalBase ? new URL(route.path, `${canonicalBase}/`).toString() : ''

  document.title = title
  setMetaTag('meta[name="description"]', { name: 'description', content: description })
  setMetaTag('meta[property="og:title"]', { property: 'og:title', content: title })
  setMetaTag('meta[property="og:description"]', { property: 'og:description', content: description })
  setMetaTag('meta[property="og:type"]', { property: 'og:type', content: route.meta.ogType || 'website' })
  setMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
  setMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
  if (canonicalUrl) {
    setMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    const socialImageUrl = new URL('/hero.jpg', `${canonicalBase}/`).toString()
    setMetaTag('meta[property="og:image"]', { property: 'og:image', content: socialImageUrl })
    setMetaTag('meta[name="twitter:image"]', { name: 'twitter:image', content: socialImageUrl })
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }
  setMetaTag('meta[name="robots"]', {
    name: 'robots',
    content: route.meta.noindex ? 'noindex, nofollow' : 'index, follow',
  })
}

router.afterEach(updateDocumentMetadata)

onUnauthorized(() => {
  const currentRoute = router.currentRoute.value
  if (currentRoute.name !== 'login') {
    router.replace({ name: 'login', query: { redirect: currentRoute.fullPath } })
  }
})

export default router
