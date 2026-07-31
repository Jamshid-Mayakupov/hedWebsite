import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Products from "./views/Products/indexProducts.vue";
import Contacts from "./views/Contacts.vue";
import Complains from "./views/Complains.vue";
import News from "./views/News/index.vue";
import Ourteam from "./views/Ourteam.vue";
import Direction from "./views/Direction.vue";
import Appeal from "./views/mini-pages/Appeal.vue";
import PrivacyPolicy from "./views/mini-pages/PrivacyPolicy.vue";
import AdminNews from "./views/News/AdminNews.vue";
import AdminProduct from "./views/AdminProduct.vue";
import Aortika from "./views/direction/Aortika.vue";
import Hedmarketing from "./views/direction/Hedmarketing.vue";
import Neatron from "./views/direction/Neatron.vue";
import Login from "./views/Login.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/products", name: "products", component: Products },
  { path: "/contacts", name: "contacts", component: Contacts },
  { path: "/complains", name: "complains", component: Complains },
  { path: "/direction", name: "direction", component: Direction },
  { path: "/direction/aortika", name: "aortika", component: Aortika },
  { path: "/direction/hedmarketing", name: "hedmarketing", component: Hedmarketing },
  { path: "/direction/neatron", name: "neatron", component: Neatron },
  { path: "/news", name: "news", component: News },
  { path: "/ourteam", name: "ourteam", component: Ourteam },
  {
    path: "/news/:slug",
    name: "news-detail",
    component: () => import("./views/News/[slug].vue"),
  },
  {
    path: "/products/:slug",
    name: "product-detail",
    component: () => import("./views/Products/[slug]Products.vue"),
  },
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
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;