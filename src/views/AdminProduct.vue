<!-- src/views/AdminProduct.vue -->
<template>
	<section class="bg-gray-100 min-h-screen">
	  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
  
		<div class="flex justify-between items-center mb-6">
		  <h1 class="text-2xl font-bold">Продукты</h1>
		  <button
			@click="openAddForm"
			class="bg-Blue text-white font-semibold px-4 py-2 shadow hover:bg-lightBlue transition"
		  >
			Добавить продукт
		  </button>
		</div>

		
  
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12 max-w-6xl mx-auto">
		  <ProductCardEditable
			v-for="(product, index) in products"
			:key="index"
			:product="product"
			@edit="startEdit"
			@delete="deleteProduct"
		  />
		</div>
  
		<ProductEditModal
		  v-if="showForm"
		  :product="selectedProduct"
		  @save="submitProduct"
		  @close="closeForm"
		/>
	  </div>
	</section>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted } from 'vue'
  import api from '@/utils/axios'
  import ProductCardEditable from '@/components/cards/ProductCardEditable.vue'
  import ProductEditModal from '@/components/modals/ProductEditModal.vue'
  
  const products = ref([])
  const showForm = ref(false)
  const selectedProduct = reactive({
	id: null,
	name: '',
	description: '',
	link: '',
	manufacturer: '',
	image: '',
	fileId: ''
  })
  
  const FILE_ACCESS_URL = 'http://192.168.1.96:8084/document/profile?id='
//   const FILE_ACCESS_URL = 'http://84.54.116.154:8084/document/profile?id='
  
  async function getAllProducts() {
	try {
	  const res = await api.get('/api/hed-site/products/all')
	  products.value = res.data.data.responseProducts.map(product => ({
		...product,
		image: product.fileId ? `${FILE_ACCESS_URL}${product.fileId}` : '/assets/no-image.png'
	  }))
	} catch (err) {
	  console.error('Ошибка при загрузке продуктов:', err)
	}
  }
  
  function openAddForm() {
	Object.assign(selectedProduct, {
	  id: null,
	  name: '',
	  description: '',
	  link: '',
	  manufacturer: '',
	  image: '',
	  fileId: ''
	})
	showForm.value = true
  }
  
  function startEdit(product) {
	Object.assign(selectedProduct, product)
	showForm.value = true
  }
  
  function closeForm() {
	showForm.value = false
  }
  
  async function submitProduct(form) {
	try {
	  if (form.id) {
		// PUT - редактирование продукта
		await api.put('/api/hed-site/products/update', form)
		alert('Продукт успешно обновлён')
	  } else {
		// POST - добавление нового продукта
		await api.post('/api/hed-site/products', form)
		alert('Продукт успешно добавлен')
	  }
	  await getAllProducts()
	  closeForm()
	} catch (err) {
	  console.error('Ошибка при сохранении продукта:', err)
	  alert('Ошибка при сохранении продукта')
	}
  }
  
async function deleteProduct(product) {
  if (confirm(`Удалить продукт: ${product.name}?`)) {
    try {
      await api.delete(`/api/hed-site/products/delete?id=${product.id}`)
      alert('Продукт успешно удалён')
      await getAllProducts()
    } catch (err) {
      console.error('Ошибка при удалении продукта:', err)
      alert('Ошибка при удалении продукта')
    }
  }
}

  
  onMounted(getAllProducts)
  </script>
  