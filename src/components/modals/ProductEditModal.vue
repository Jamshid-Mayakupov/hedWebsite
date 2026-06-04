<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow w-96">
        <h2 class="text-xl font-semibold mb-4">
          {{ form.id ? 'Редактировать продукт' : 'Добавить продукт' }}
        </h2>
        <form @submit.prevent="onSave">
          <input v-model="form.name" type="text" placeholder="Название продукта" class="input" required />
          <textarea v-model="form.description" placeholder="Описание" class="input mt-2"></textarea>
          <input v-model="form.link" type="text" placeholder="Ссылка на продукт" class="input mt-2" />
          <input v-model="form.manufacturer" type="text" placeholder="Производитель" class="input mt-2" />
  
          <div class="mt-4">
            <label class="block text-sm font-medium mb-1">Изображение</label>
            <input type="file" @change="handleImage" class="input" />
            <div class="w-40 h-40 p-4 overflow-hidden rounded mt-2">
              <img :src="form.image" alt="Превью" class="w-full h-full object-cover rounded" />
            </div>
          </div>
  
          <div class="flex justify-end gap-2 mt-4">
            <button @click="$emit('close')" type="button" class="btn-secondary">Отмена</button>
            <button type="submit" class="btn-primary">
              {{ form.id ? 'Сохранить' : 'Добавить' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import fileApi from '@/utils/fileApi'
  
  const props = defineProps({ product: Object })
  const emit = defineEmits(['close', 'save'])
  
  const form = reactive({
    id: props.product.id || null,
    name: props.product.name || '',
    description: props.product.description || '',
    link: props.product.link || '',
    manufacturer: props.product.manufacturer || '',
    image: props.product.fileId
      ? `http://192.168.1.96:8084/document/profile?id=${props.product.fileId}`
      : '/assets/no-image.png',
    fileId: props.product.fileId || ''
  })
  
  async function handleImage(event) {
    const file = event.target.files[0]
    if (!file) return
  
    const formData = new FormData()
    formData.append('file', file)
  
    try {
      const res = await fileApi.post(
        'http://192.168.1.96:8084/document/save-file?docGrName=products',
        formData
      )
      if (res.data.docGroupId) {
        form.image = `http://192.168.1.96:8084/document/profile?id=${res.data.docId[0]}`
        form.fileId = res.data.docId[0]
      } else {
        throw new Error('Документ не загружен')
      }
    } catch (err) {
      alert('Ошибка загрузки изображения')
      console.error(err)
    }
  }
  
  function onSave() {
    emit('save', form)
  }
  </script>
  
  <style scoped>
  .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .btn-primary {
    background-color: #4f46e5;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
  .btn-secondary {
    background-color: #e5e7eb;
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
  </style>
  