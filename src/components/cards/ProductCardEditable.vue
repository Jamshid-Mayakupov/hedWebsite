<template>
    <div
      class="bg-white overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
    >
      <!-- Изображение продукта -->
      <img
        :src="productImage"
        :alt="product.name"
        class="w-full h-64 object-contain p-4 bg-gray-100"
      />
  
      <!-- Название продукта -->
      <div class="bg-gray-100 text-center py-3">
        <h3 class="text-lg font-bold text-gray-800 uppercase">{{ product.name }}</h3>
      </div>
  
      <!-- 📝 Описание продукта -->
      <p class="text-gray-700 text-sm text-center m-2 px-4 min-h-[2.5rem] ">
        {{ product.description }}
      </p>
  
      <!-- 🏭 Производитель -->
      <p class="text-gray-500 text-xs text-center mb-4 px-4 min-h-[2rem]">
        Производитель: {{ product.manufacturer }}
      </p>
  
      <!-- Кнопка Подробнее -->
      <button
        @click="navigateToLink"
        class="bg-blue-800 text-white font-bold py-2 px-4 w-full transition-all duration-300 hover:bg-blue-700"
      >
        Подробнее
      </button>
  
      <!-- Кнопки управления -->
      <div class="flex border-gray-200">
        <button
          @click="$emit('edit', product)"
          class="w-1/2 bg-green-600 hover:bg-green-500 font-medium py-2 transition flex justify-center items-center gap-2 text-white border-white"
        >
          <EditIcon class="w-5 h-5 text-white" />
          Редактировать
        </button>
        <button
          @click="$emit('delete', product)"
          class="w-1/2 bg-red-600 hover:bg-red-500 font-medium py-2 transition flex justify-center items-center gap-2 text-white"
        >
          <TrashIcon class="w-5 h-5 text-white" />
          Удалить
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import TrashIcon from '@/components/Icons/Trash.vue'
  import EditIcon from '@/components/Icons/Edit.vue'
  import { computed } from 'vue'
  
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  })
  
  const FILE_ACCESS_URL = 'http://192.168.1.96:8084/document/profile?id='
  
  const productImage = computed(() =>
    props.product.fileId
      ? `${FILE_ACCESS_URL}${props.product.fileId}`
      : '/assets/no-image.png'
  )
  
  // 🔗 Переход на страницу при клике на "Подробнее"
  function navigateToLink() {
    if (props.product.link && props.product.link.startsWith('http')) {
      window.open(props.product.link, '_blank')
    } else {
      alert('Ссылка на продукт не указана или неправильная')
    }
  }
  </script>
  
  <style scoped>
  .bg-gray-100 {
    background-color: #f7f7f7;
  }
  
  .uppercase {
    text-transform: uppercase;
  }
  
  .shadow-md {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .hover\:shadow-lg:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  }
  
  .object-contain {
    object-fit: contain;
  }
  
  .border-r {
    border-right-width: 1px;
  }
  
  .border-t {
    border-top-width: 1px;
  }
  </style>
  