<!-- src/views/Login.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Вход в админку</h2>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Логин" class="w-full mb-4 border p-2 rounded" />
        <input type="password" v-model="password" placeholder="Пароль" class="w-full mb-4 border p-2 rounded" />
        <button type="submit" :disabled="loading" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60">
          {{ loading ? 'Вход…' : 'Войти' }}
        </button>
        <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import authApi from '@/utils/auth'
import { setSessionToken } from '@/utils/session'
import { getErrorMessage } from '@/utils/errors'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function login() {
  if (loading.value) return
  loading.value = true
  error.value = ''
  const requestBody = {
    username: username.value,
    password: password.value
  }
  try {
    const res = await authApi.post('/authenticate', requestBody)
    if (res.status !== 200 || typeof res.data?.token !== 'string' || !res.data.token.trim()) {
      throw new Error('Authentication response did not contain a token')
    }
    setSessionToken(res.data.token)
    await router.push('/admin/news')
  } catch (requestError) {
    error.value = getErrorMessage(requestError, 'Неверный логин или пароль')
  } finally {
    loading.value = false
  }






  // if (username.value === 'admin' && password.value === '123456') {
  //   Cookies.set('token', , { expires: 1/192 }) // сохраняем токен на 7 дней
  //   router.push('/admin/news')
  // } else {
  //   error.value = 'Неверный логин или пароль'
  // }
}
</script>
