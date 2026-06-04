<!-- src/views/Login.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Вход в админку</h2>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Логин" class="w-full mb-4 border p-2 rounded" />
        <input type="password" v-model="password" placeholder="Пароль" class="w-full mb-4 border p-2 rounded" />
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Войти
        </button>
        <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import authApi from '../utils/ auth'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

async function login() {
  const requestBody = {
    username: username.value,
    password: password.value
  }
  const res = await authApi.post('/authenticate', requestBody)
  if (res.status === 200) {
    Cookies.set('jwtToken', res.data.token, { expires: 5 / 24, secure: false, samSite: 'Strict' }) // сохраняем токен на 7 дней
    router.push('/admin/news')

  } else {
    error.value = 'Неверный логин или пароль'
  }






  // if (username.value === 'admin' && password.value === '123456') {
  //   Cookies.set('token', , { expires: 1/192 }) // сохраняем токен на 7 дней
  //   router.push('/admin/news')
  // } else {
  //   error.value = 'Неверный логин или пароль'
  // }
}
</script>
