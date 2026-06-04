<!-- src/views/Products/indexProducts.vue -->
<template>
  <section class="bg-gray-50">
    <!-- Hero Section -->
    <div class="section-container py-16 md:py-20">
      <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
        <p
          class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3"
        >
          Наша продукция
        </p>
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-raleway"
        >
          Каталог продуктов
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Высококачественные фармацевтические препараты от ведущих мировых
          производителей
        </p>
      </div>

      <!-- Products Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
      >
        <article
          v-for="(product, index) in products"
          :key="product.slug"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          data-aos-duration="700"
          class="bg-white rounded-xl shadow-md overflow-hidden card-hover group border border-gray-100 flex flex-col"
        >
          <!-- Product Image -->
          <div class="relative overflow-hidden bg-gray-50 aspect-square">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Product Info -->
          <div class="p-6 flex flex-col flex-grow">
            <p
              class="text-Blue text-sm font-semibold mb-2 uppercase tracking-wide"
            >
              {{ product.manufacturer }}
            </p>

            <h3
              class="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight font-raleway"
            >
              {{ product.name }}
            </h3>

            <p class="text-gray-600 text-sm mb-4 line-clamp-4 leading-relaxed">
              {{ product.description }}
            </p>

            <!-- Button -->
            <router-link
              :to="`/products/${product.slug}`"
              class="mt-auto w-full block text-center px-6 py-3 bg-Blue hover:bg-darkBlue text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Подробнее
            </router-link>
          </div>
        </article>
      </div>
    </div>

    <!-- Info Section -->
    <div class="bg-white py-16 md:py-20">
      <div class="section-container">
        <div class="max-w-4xl mx-auto text-center">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-raleway"
          >
            Качество и надежность
          </h2>
          <p class="text-gray-700 text-lg leading-relaxed mb-8">
            Все наши продукты сертифицированы и соответствуют международным
            стандартам качества. Мы работаем только с проверенными
            производителями и гарантируем подлинность всех препаратов.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-Blue/10 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-Blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Сертификация</h3>
              <p class="text-sm text-gray-600">Все продукты сертифицированы</p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-Blue/10 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-Blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Быстрая доставка</h3>
              <p class="text-sm text-gray-600">
                Оперативная доставка по всей стране
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-Blue/10 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-Blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Поддержка 24/7</h3>
              <p class="text-sm text-gray-600">Всегда на связи с вами</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="section-container pb-16 md:pb-20">
      <div
        class="relative overflow-hidden bg-gradient-to-br from-Blue to-darkBlue rounded-2xl p-12 md:p-16 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div class="relative z-10">
          <h2
            class="text-3xl md:text-4xl font-bold text-white mb-4 font-raleway"
          >
            Не нашли нужный препарат?
          </h2>
          <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы поможем подобрать необходимую продукцию
          </p>
          <router-link
            to="/contacts"
            class="inline-block px-8 py-4 bg-white text-Blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Связаться с нами
          </router-link>
        </div>
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Импорты изображений
import antagrixImg from "@/assets/product-card/antagrix.png";
import dcefImg from "@/assets/product-card/d-cef.png";
import infuziolImg from "@/assets/product-card/infuziol.png";
import letokarImg from "@/assets/product-card/letokar.png";
import lifeonImg from "@/assets/product-card/life-on.png";

const router = useRouter();

// Статичные данные продуктов
const products = ref([
  {
    slug: "antagrix",
    name: "Antagrix",
    manufacturer: "Pharma Solutions",
    description:
      "Высокоэффективный препарат для лечения хронических заболеваний. Клинически протестирован и одобрен.",
    image: antagrixImg,
    fullDescription:
      "Antagrix — современный фармацевтический препарат, разработанный для комплексного лечения хронических заболеваний. Обладает доказанной эффективностью и минимальными побочными эффектами.",
  },
  {
    slug: "d-cef",
    name: "D-Cef",
    manufacturer: "BioMed Industries",
    description:
      "Антибактериальный препарат широкого спектра действия третьего поколения для лечения инфекций.",
    image: dcefImg,
    fullDescription:
      "D-Cef относится к цефалоспоринам третьего поколения. Эффективен против широкого спектра бактериальных инфекций. Применяется при тяжелых инфекционных заболеваниях.",
  },
  {
    slug: "infuziol",
    name: "Infuziol",
    manufacturer: "MedTech Corp",
    description:
      "Инфузионный раствор для восстановления водно-электролитного баланса и дезинтоксикации организма.",
    image: infuziolImg,
    fullDescription:
      "Infuziol — сбалансированный инфузионный раствор для внутривенного введения. Применяется для коррекции водно-электролитного баланса и детоксикации организма.",
  },
  {
    slug: "letokar",
    name: "Letokar",
    manufacturer: "Global Pharma",
    description:
      "Эффективное средство для профилактики и лечения сердечно-сосудистых заболеваний.",
    image: letokarImg,
    fullDescription:
      "Letokar — кардиопротективный препарат нового поколения. Улучшает функцию сердечной мышцы, снижает риск сердечно-сосудистых осложнений.",
  },
  {
    slug: "life-on",
    name: "Life-On",
    manufacturer: "VitaHealth",
    description:
      "Витаминно-минеральный комплекс для поддержания здоровья и повышения иммунитета.",
    image: lifeonImg,
    fullDescription:
      "Life-On — сбалансированный витаминно-минеральный комплекс. Содержит все необходимые витамины и минералы для поддержания здоровья и активного образа жизни.",
  },
]);
</script>

<style scoped>
.font-raleway {
  font-family: "Raleway", sans-serif;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>
