// src / router.js;
import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Products from "./views/Products/indexProducts.vue";
import Contacts from "./views/Contacts.vue";
import Complains from "./views/Complains.vue";
import News from "./views/News/index.vue";
import Ourteam from "./views/Ourteam.vue";

import Appeal from "./views/mini-pages/Appeal.vue";
import PrivacyPolicy from "./views/mini-pages/PrivacyPolicy.vue";
import AdminNews from "./views/News/AdminNews.vue";
import AdminProduct from "./views/AdminProduct.vue";
// import AdminGallery from "./views/Gallery/AdminGallery.vue"; // 👈 Добавил AdminGallery
import Login from "./views/Login.vue";
// import Gallery from "./views/Gallery/Gallery.vue"; // 👈 Исправил путь на локальный
// 👆 здесь было '@/views/Gallery.vue', изменил на './views/Gallery.vue'

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/products", name: "products", component: Products },
  { path: "/contacts", name: "contacts", component: Contacts },
  { path: "/complains", name: "complains", component: Complains },
  { path: "/news", name: "news", component: News },
  { path: "/ourteam", name: "ourteam", component: Ourteam },
  {
    path: "/news/:slug",
    name: "news-detail",
    component: () => import("./views/News/[slug].vue"),
  },
  // {
  //   path: "/ourteam/:slug",
  //   name: "ourteam-detail",
  //   component: () => import("./views/Ourteam/[slug].vue"),
  // },
  {
    path: "/products/:slug",
    name: "product-detail",
    component: () => import("@/views/Products/[slug]Products.vue"),
  },
  // { path: "/gallery", name: "gallery", component: Gallery },
  { path: "/appeal", name: "appeal", component: Appeal },
  { path: "/privacy-policy", name: "privacypolicy", component: PrivacyPolicy },

  { path: "/login", name: "login", component: Login },
  {
    path: "/admin/news",
    name: "admin-news",
    component: AdminNews,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/products",
    name: "admin-product",
    component: AdminProduct,
    meta: { requiresAuth: true },
  },
  // {
  //   path: "/admin/gallery",
  //   name: "admin-gallery",
  //   component: AdminGallery,
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: '/gallery/:id',
  //   name: 'GalleryDetail',
  //   component: () => import('@/views/Gallery/GalleryDetail.vue')
  // },

  // {
  //   path: '/admin/gallery/:id',
  //   name: 'AdminGalleryDetail',
  //   component: () => import('@/views/Gallery/AdminGalleryDetail.vue') // Новый компонент
  // },
];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Если есть сохранённая позиция (например, при "Назад"), используем её
    if (savedPosition) {
      return savedPosition;
    }
    // В противном случае всегда скроллим вверх
    return { top: 0 };
  },
});

// // ✅ Навигационный guard: защита токеном
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('jwtToken')

//   if (to.meta.requiresAuth && !token) {
//     return next('/login')
//   }

//   if (to.path === '/login' && token) {
//     return next('/')
//   }

//   next()
// })

export default router;
