<template>
    <div
      class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <img
        :src="productImage"
        :alt="product.name"
        class="w-full h-56 object-contain p-4"
      />
  
      <div class="bg-gray-100 text-center py-3">
        <h3 class="text-lg font-bold text-gray-800 uppercase">{{ product.name }}</h3>
      </div>
  
      <button
        class="w-full bg-blue-900 text-white font-bold py-2 hover:bg-blue-700 transition-all"
      >
        Подробнее
      </button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    product: {
      type: Object,
      required: true
    }
  })
  
  const FILE_ACCESS_URL = 'http://192.168.1.96:8084/document/profile?id='
  
  const productImage = product.fileId
    ? `${FILE_ACCESS_URL}${product.fileId}`
    : '/assets/no-image.png'
  </script>
  
  <style scoped>
  /* Анимация при наведении */
  .hover\:shadow-lg:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  </style>
  