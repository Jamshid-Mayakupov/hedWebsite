<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">
        <button @click="$emit('close')" class="absolute right-4 top-3 text-2xl text-gray-500 hover:text-red-500">×</button>
  
        <h2 class="text-xl font-bold mb-6">
          {{ product.id ? 'Редактирование продукта' : 'Добавление продукта' }}
        </h2>
  
        <form @submit.prevent="$emit('submit')" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Название продукта</label>
            <input v-model="product.name" type="text" placeholder="Введите название" class="w-full border rounded-lg p-2" />
          </div>
  
          <div>
            <label class="block text-sm font-medium mb-1">Описание</label>
            <textarea v-model="product.description" placeholder="Введите описание" class="w-full border rounded-lg p-2 min-h-[100px]"></textarea>
          </div>
  
          <div>
            <label class="block text-sm font-medium mb-1">Производитель</label>
            <input v-model="product.manufacturer" type="text" placeholder="Введите производителя" class="w-full border rounded-lg p-2" />
          </div>
  
          <div>
            <label class="block text-sm font-medium mb-1">Изображение продукта</label>
            <input type="file" @change="uploadImage" accept="image/*" class="w-full border rounded-lg p-2" />
            <img :src="product.image" v-if="product.image" class="w-full h-40 object-contain mt-4" />
          </div>
  
          <div class="flex justify-end space-x-2 pt-4">
            <button type="button" @click="$emit('close')" class="border px-4 py-2 rounded-md hover:bg-gray-100">Отмена</button>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600">
              {{ product.id ? 'Сохранить' : 'Добавить' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import fileApi from '@/utils/fileApi';
  const FILE_ACCESS_URL = 'http://192.168.1.96:8084/document/profile?id=';
  
  defineProps({
    product: Object
  });
  
  async function uploadImage(event) {
    const file = event.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fileApi.post('/document/save-file?docGrName=products', formData);
      if (response.data.docId) {
        product.fileId = response.data.docId[0];
        product.image = `${FILE_ACCESS_URL}${product.fileId}`;
      } else {
        alert('Ошибка при загрузке изображения');
      }
    } catch (error) {
      console.error('Ошибка загрузки изображения:', error);
    }
  }
  </script>
  