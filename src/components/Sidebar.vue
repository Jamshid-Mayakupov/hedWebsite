<template>
	<aside
		class="fixed top-0 left-0 w-full bg-white text-dark-blue h-full z-40 transform transition-transform duration-300 overflow-hidden"
		:class="{ 'translate-y-0 h-full': isOpen, 'translate-y-full h-0': !isOpen }">
		<div class="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
			<h2 class="text-lg font-semibold text-black">Меню</h2>
			<!-- Кнопка закрытия сайтбара с иконкой -->
			<button @click="toggleSidebar" class="text-black focus:outline-none">
				<img src="/src/assets/images/icons/close-menu.svg" alt="Close" class="w-6 h-6 invert" />
			</button>
		</div>
		<nav class="p-4 space-y-4">
			<router-link v-for="link in links" :key="link.link" :to="link.link"
				class="flex justify-between items-center text-lg font-semibold text-Blue hover:text-darkBlue transition-colors">
				{{ link.text }}
				<span class="text-redOrange">&rsaquo;</span>
			</router-link>
		</nav>
	</aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['isOpen', 'toggleSidebar'])

const links = [
	{ text: 'Главная', link: '/' },
	{ text: 'О нас', link: '/about' },
	{ text: 'Комплаенс', link: '/complains' },
	{ text: 'Продукция', link: '/products' },
	{ text: 'Новости', link: '/news' },
	{ text: 'Направление', link:'/direction' },
	{ text: 'Контакты', link: '/contacts' },
	{ text: 'Наша команда', link: '/ourteam' },
]

const router = useRouter()

const handleLinkClick = () => {
	// Закрываем сайтбар после перехода на другую страницу
	props.toggleSidebar()
}
</script>

<style scoped>
aside {
	transform: translateY(100%);
	height: 0;
}

aside.translate-y-0 {
	transform: translateY(0);
	height: 100%;
}

aside.translate-y-full {
	transform: translateY(100%);
	height: 0;
}
</style>
