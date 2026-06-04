<!-- src/views/Products/[slug]Products.vue -->
<template>
  <section class="bg-gray-50 min-h-screen">
    <!-- Product Details -->
    <div v-if="product" class="section-container py-16 md:py-20">
      <!-- Back Button -->
      <div class="mb-8">
        <router-link 
          to="/products"
          class="inline-flex items-center gap-2 text-Blue hover:text-lightBlue transition-colors font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Назад к каталогу
        </router-link>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Product Image -->
        <div class="space-y-6" data-aos="fade-right" data-aos-duration="800">
          <div class="relative overflow-hidden bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-auto object-contain max-h-[500px]"
            />
          </div>

          <!-- Additional Info Cards -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div class="w-12 h-12 bg-Blue/10 rounded-lg flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-Blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-sm text-gray-600 mb-1">Качество</p>
              <p class="font-semibold text-gray-900">Сертифицировано</p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div class="w-12 h-12 bg-Blue/10 rounded-lg flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-Blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-sm text-gray-600 mb-1">Доставка</p>
              <p class="font-semibold text-gray-900">1-3 дня</p>
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-8" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <!-- Manufacturer Badge -->
          <div>
            <span class="inline-block px-4 py-2 bg-Blue/10 text-Blue font-semibold rounded-lg text-sm uppercase tracking-wider">
              {{ product.manufacturer }}
            </span>
          </div>

          <!-- Product Name -->
          <div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-raleway">
              {{ product.name }}
            </h1>
            <p class="text-lg text-gray-600">
              {{ product.description }}
            </p>
          </div>

          <!-- Full Description -->
          <div class="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 font-raleway">
              Описание
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ product.fullDescription }}
            </p>
          </div>

          <!-- Features List -->
          <div class="bg-gradient-to-br from-Blue to-darkBlue rounded-2xl p-8 text-white">
            <h3 class="text-xl font-bold mb-6 font-raleway">Преимущества</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Высокая эффективность</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Минимальные побочные эффекты</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Клинически протестировано</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Сертифицировано международными стандартами</span>
              </li>
            </ul>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link 
              to="/contacts"
              class="flex-1 text-center px-8 py-4 bg-Blue hover:bg-darkBlue text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Заказать препарат
            </router-link>
            <router-link 
              to="/contacts"
              class="flex-1 text-center px-8 py-4 bg-white border-2 border-Blue text-Blue hover:bg-Blue hover:text-white font-semibold rounded-lg transition-all duration-300">
              Задать вопрос
            </router-link>
          </div>

          <!-- Contact Info -->
          <div class="bg-gray-100 rounded-xl p-6 border border-gray-200">
            <p class="text-sm text-gray-600 mb-2">Нужна консультация?</p>
            <p class="text-lg font-semibold text-gray-900 mb-1">+998 (99) 863-77-07</p>
            <p class="text-sm text-gray-600">info@hurshidadelux.com</p>
          </div>
        </div>
      </div>

      <!-- Related Products Section -->
      <div class="mt-20">
        <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 font-raleway">
            Похожие продукты
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="(relatedProduct, index) in relatedProducts"
            :key="relatedProduct.slug"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
            data-aos-duration="700"
            class="bg-white rounded-xl shadow-md overflow-hidden card-hover group border border-gray-100">
            
            <div class="relative overflow-hidden bg-gray-50 aspect-square">
              <img 
                :src="relatedProduct.image" 
                :alt="relatedProduct.name"
                class="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div class="p-6">
              <p class="text-Blue text-sm font-semibold mb-2 uppercase tracking-wide">
                {{ relatedProduct.manufacturer }}
              </p>
              <h3 class="text-lg font-semibold text-gray-900 mb-4 line-clamp-2 leading-tight font-raleway">
                {{ relatedProduct.name }}
              </h3>
              <router-link 
                :to="`/products/${relatedProduct.slug}`"
                class="w-full block text-center px-6 py-3 bg-Blue hover:bg-darkBlue text-white font-semibold rounded-lg transition-all duration-300">
                Подробнее
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- Product Not Found -->
    <div v-else class="section-container py-20 text-center">
      <div class="max-w-md mx-auto">
        <svg class="w-24 h-24 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="text-2xl font-bold text-gray-900 mb-4 font-raleway">
          Продукт не найден
        </h2>
        <p class="text-gray-600 mb-8">
          К сожалению, запрашиваемый продукт не существует или был удален
        </p>
        <router-link 
          to="/products"
          class="inline-block px-8 py-4 bg-Blue hover:bg-darkBlue text-white font-semibold rounded-lg transition-all duration-300">
          Вернуться к каталогу
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Импорты изображений
import antagrixImg from '@/assets/product-card/antagrix.png'
import dcefImg from '@/assets/product-card/d-cef.png'
import infuziolImg from '@/assets/product-card/infuziol.png'
import letokarImg from '@/assets/product-card/letokar.png'
import lifeonImg from '@/assets/product-card/life-on.png'

const route = useRoute()
const product = ref(null)

// Все продукты
const allProducts = [
  {
    slug: 'antagrix',
    name: 'Antagrix',
    manufacturer: 'Pharma Solutions',
    description: 'Высокоэффективный препарат для лечения хронических заболеваний. Клинически протестирован и одобрен.',
    image: antagrixImg,
    fullDescription: 'Antagrix — современный фармацевтический препарат, разработанный для комплексного лечения хронических заболеваний. Обладает доказанной эффективностью и минимальными побочными эффектами. Препарат прошел все необходимые клинические испытания и сертифицирован в соответствии с международными стандартами качества.'
  },
  {
    slug: 'd-cef',
    name: 'D-Cef',
    manufacturer: 'BioMed Industries',
    description: 'Антибактериальный препарат широкого спектра действия третьего поколения для лечения инфекций.',
    image: dcefImg,
    fullDescription: 'D-Cef относится к цефалоспоринам третьего поколения. Эффективен против широкого спектра бактериальных инфекций. Применяется при тяжелых инфекционных заболеваниях дыхательных путей, мочевыводящих путей и других системных инфекциях.'
  },
  {
    slug: 'infuziol',
    name: 'Infuziol',
    manufacturer: 'MedTech Corp',
    description: 'Инфузионный раствор для восстановления водно-электролитного баланса и дезинтоксикации организма.',
    image: infuziolImg,
    fullDescription: 'Infuziol — сбалансированный инфузионный раствор для внутривенного введения. Применяется для коррекции водно-электролитного баланса и детоксикации организма при различных патологических состояниях, обезвоживании и интоксикации.'
  },
  {
    slug: 'letokar',
    name: 'Letokar',
    manufacturer: 'Global Pharma',
    description: 'Эффективное средство для профилактики и лечения сердечно-сосудистых заболеваний.',
    image: letokarImg,
    fullDescription: 'Letokar — кардиопротективный препарат нового поколения. Улучшает функцию сердечной мышцы, снижает риск сердечно-сосудистых осложнений. Рекомендован для профилактики и комплексной терапии заболеваний сердца и сосудов.'
  },
  {
    slug: 'life-on',
    name: 'Life-On',
    manufacturer: 'VitaHealth',
    description: 'Витаминно-минеральный комплекс для поддержания здоровья и повышения иммунитета.',
    image: lifeonImg,
    fullDescription: 'Life-On — сбалансированный витаминно-минеральный комплекс. Содержит все необходимые витамины и минералы для поддержания здоровья и активного образа жизни. Укрепляет иммунитет, повышает работоспособность и улучшает общее самочувствие.'
  }
]

// Похожие продукты (исключая текущий)
const relatedProducts = computed(() => {
  return allProducts
    .filter(p => p.slug !== route.params.slug)
    .slice(0, 3)
})

onMounted(() => {
  const slug = route.params.slug
  const found = allProducts.find(p => p.slug === slug)
  
  if (found) {
    product.value = found
  }
})
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>