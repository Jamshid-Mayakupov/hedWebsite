<!-- src/views/News/AdminNews.vue -->
<template>
  <section class="bg-gray-100 min-h-screen">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

      <SwitchTabs :admin="true" />


      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Новости</h1>
        <button @click="openAddForm"
          class="bg-blue-900 text-white font-semibold px-4 py-2 shadow hover:bg-blue-700 transition">
          Добавить новость
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <NewsCardEditable v-for="(story, index) in stories" :key="index" :story="story" @delete="deleteNews"
          @edit="startEdit" />
      </div>
    </div>

    <!-- Модалка добавления/редактирования новости -->
    <div v-if="showForm" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">
        <button @click="closeForm" class="absolute right-4 top-3 text-2xl text-gray-500 hover:text-red-500">
          ×
        </button>

        <h2 class="text-xl font-bold mb-6">
          {{ editingNews ? 'Редактирование новости' : 'Добавление новости' }}
        </h2>

        <form @submit.prevent="submitNews" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Заголовок</label>
            <input v-model="form.title" type="text" placeholder="Введите заголовок"
              class="w-full border rounded-lg p-2 " />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Описание</label>
            <textarea v-model="form.description" placeholder="Введите описание"
              class="w-full border rounded-lg p-2 min-h-[100px]"></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Изображение</label>
            <input type="file" accept="image/*" @change="handleImage" class="w-full border rounded-lg p-2" />
            <div class="w-40 h-40 p-4 overflow-hidden rounded">
              <img :src="form.image" alt="Превью" class="w-full h-full object-cover rounded" />
            </div>
          </div>

          <div class="flex justify-end space-x-2 pt-4">
            <button type="button" @click="resetForm"
              class="border px-4 py-2 rounded-md hover:bg-gray-100">Очистить</button>
            <button type="submit"
              class="bg-[#C3CAE9] text-[#1E1E2D] px-4 py-2 rounded-md font-semibold hover:bg-[#AAB4DA] transition">
              {{ editingNews ? 'Сохранить' : 'Добавить' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import api from '@/utils/axios'
import fileApi from '@/utils/fileApi'
import NewsCardEditable from '@/components/cards/NewsCardEditable.vue'
import SwitchTabs from '@/components/common/SwitchTabs.vue'

const FILE_ACCESS_URL = 'http://192.168.1.96:8084/document/profile?id='

const stories = ref([])
const showForm = ref(false)
const editingNews = ref(null)

const form = reactive({
  title: '',
  description: '',
  type: 'SITE_NEWS',
  url: '',
  image: ''
})

// 🖼 Загрузка изображения
async function handleImage(event) {
  const file = event.target.files[0]
  if (!file) return

  const formData = new FormData()
  formData.append('file', file)

  try {
    const res = await fileApi.post(
      'http://192.168.1.96:8084/document/save-file?docGrName=news',
      formData
    )
    if (res.data.docGroupId) {
      form.image = `${FILE_ACCESS_URL}${res.data.docId[0]}`
      form.url = res.data.docGroupId
    } else {
      throw new Error('Документ не загружен')
    }
  } catch (err) {
    alert('Ошибка загрузки изображения')
    console.error(err)
  }
}

// 🧹 Сброс формы
function resetForm() {
  form.title = ''
  form.description = ''
  form.image = ''
  form.url = ''
  editingNews.value = null
}

// 🟢 Открыть форму на добавление
function openAddForm() {
  resetForm()
  showForm.value = true
}

// ✏️ Начать редактирование
function startEdit(story) {
  editingNews.value = story
  form.title = story.title
  form.description = story.description
  form.url = story.url
  form.image = story.image
  showForm.value = true
}

// ❌ Закрыть форму
function closeForm() {
  showForm.value = false
  resetForm()
}

// 📤 Отправка (добавление или обновление)
async function submitNews() {
  if (!form.title || !form.description || !form.image) {
    alert('Пожалуйста, заполните все поля')
    return
  }

  try {
    if (editingNews.value) {
      // PUT - редактирование
      await api.put('/api/news', {
        newsId: editingNews.value.id,
        title: form.title,
        description: form.description,
        url: form.url
      })
      alert('Новость обновлена')
    } else {
      // POST - добавление
      await api.post('/api/news/save-send', form)
      alert('Новость добавлена')
    }

    resetForm()
    showForm.value = false
    await getAllNews()
  } catch (err) {
    alert('Ошибка при сохранении новости')
    console.error(err)
  }
}

// 📥 Загрузка всех новостей
async function getAllNews() {
  try {
    const res = await api.get('/api/news/all')
    const news = res.data.filter(item => item.type === 'SITE_NEWS')

    const withImages = await Promise.all(news.map(async item => {
      try {
        if (!item.url) {
          return { ...item, image: null, dateTime: null }
        }

        const docRes = await fileApi.get(`/document/get-files-by-doc-group?id=${item.url}`)
        const doc = docRes.data[0]?.document
        const docId = doc?.id
        const image = docId ? `${FILE_ACCESS_URL}${docId}` : null
        const dateTime = doc?.dateTime || null

        return { ...item, image, dateTime }
      } catch (err) {
        console.warn(`⚠️ Ошибка изображения: ${item.title}`, err)
        return { ...item, image: null, dateTime: null }
      }
    }))

    stories.value = withImages
  } catch (err) {
    console.error('❌ Ошибка при загрузке новостей', err)
  }
}

// 🗑 Удаление новости
async function deleteNews(story) {
  if (!confirm('Удалить новость?')) return

  try {
    await api.delete('/api/news', {
      params: {
        newsId: story.id
      }
    })
    alert('Новость удалена')
    await getAllNews()
  } catch (err) {
    alert('Ошибка при удалении')
    console.error(err)
  }
}

onMounted(getAllNews)
</script>