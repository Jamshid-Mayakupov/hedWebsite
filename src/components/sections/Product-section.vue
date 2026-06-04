<template>
    <section class="max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1440px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div class="text-center md:text-left">
        <SectionHeader>
          Продукция
        </SectionHeader>
      </div>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-4 gap-6 xl:gap-8 mt-6 max-w-7xl mx-auto px-0">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="bg-white w-full shadow-lg relative overflow-hidden transition-all rounded duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
          
          <div class="overflow-hidden">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-48 sm:h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
  
          <div class="p-6 sm:p-8">
            <p class="text-gray-500 text-xs sm:text-sm font-semibold mb-2">{{ product.manufacturer }}</p>
            <h3 class="text-base sm:text-lg font-semibold leading-tight text-gray-900 mb-4" :aria-label="product.name">
              {{ product.name }}
            </h3>
            <router-link
              :to="`/products/${product.id}`"
              class="text-Blue hover:text-lightBlue font-bold relative inline-block pb-1 group text-sm sm:text-base"
              aria-label="Подробнее о {{ product.name }}"
            >
              ПОДРОБНЕЕ <span class="text-lg sm:text-xl ">→</span>
              <span
                class="block w-20 sm:w-24 h-1 bg-Blue mt-1 transition-all duration-300 group-hover:w-24 sm:group-hover:w-28 group-hover:bg-lightBlue"
              ></span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import SectionHeader from '../common/SectionHeader.vue'
  import api from '@/utils/axios'
  import { ref, onMounted } from 'vue'
  
  const products = ref([])
  const FILE_ACCESS_URL = 'http://192.168.1.96:8084/document/profile?id='
  
  const getAllProducts = async () => {
    try {
      const res = await api.get('/api/hed-site/products/all')
      const productList = res.data.data.responseProducts.map(product => ({
        ...product,
        image: product.fileId ? `${FILE_ACCESS_URL}${product.fileId}` : '/assets/no-image.png'
      }))
      products.value = productList
    } catch (err) {
      console.error('Ошибка при загрузке продуктов:', err)
    }
  }
  
  onMounted(getAllProducts)
  </script>
  