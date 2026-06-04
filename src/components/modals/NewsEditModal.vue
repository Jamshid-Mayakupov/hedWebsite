<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow w-96">
        <h2 class="text-xl font-semibold mb-4">Редактировать новость</h2>
        <form @submit.prevent="onSave">
          <input v-model="form.title" type="text" placeholder="Заголовок" class="input" required />
          <textarea v-model="form.description" placeholder="Описание" class="input mt-2"></textarea>
          <input v-model="form.url" type="text" placeholder="URL изображения" class="input mt-2" />
          <div class="flex justify-end gap-2 mt-4">
            <button @click="$emit('close')" type="button" class="btn-secondary">Отмена</button>
            <button type="submit" class="btn-primary">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  const props = defineProps({ news: Object })
  const emit = defineEmits(['close', 'save'])
  
  const form = reactive({ ...props.news })
  
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
  