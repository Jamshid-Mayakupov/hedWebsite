<template>
	<div class="relative group">
		<button class="flex items-center space-x-2 transition-transform hover:text-Blue duration-300 ease-in-out">
			<a href="/complains" class=" ">Комплаенс</a>
			<img :src="arrowDown" alt="Раскрывающееся меню"
				class="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
		</button>

		<div
			class="absolute right-0 mt-1 w-64 bg-gray-100 shadow-lg scale-95 translate-y-1 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out">
			<ul class="py-0">
				<li class="relative group/documents">
					<button
						class="w-full text-left px-4 py-1.5 bg-white text-black hover:bg-Blue hover:text-white transition-colors duration-300 ease-in-out flex justify-between items-center">
						<span>Ведомственные документы</span>
						<img :src="arrowDown" alt="Раскрывающееся подменю"
							class="w-5 h-5 transition-transform duration-300 group-hover/documents:rotate-180" />
					</button>

					<div
						class="absolute left-52 top-2 ml-2 w-48 bg-white shadow-lg opacity-0 scale-95 translate-y-1 invisible group-hover/documents:opacity-100 group-hover/documents:scale-100 group-hover/documents:translate-y-0 group-hover/documents:visible transition-all duration-300 ease-in-out">
						<ul class="py-0">
							<li v-for="item in documentLinks" :key="item.text">
								<a :href="item.file" target="_blank" rel="noopener noreferrer"
									class="block px-4 py-1.5 hover:bg-Blue hover:text-white transition-colors duration-300 ease-in-out"
									:aria-label="item.text">
									{{ item.text }}
								</a>
							</li>
						</ul>
					</div>
				</li>

				<li>
					<router-link :to="appealPage"
						class="block px-4 py-1.5 hover:bg-Blue hover:text-white transition-colors duration-300 ease-in-out"
						aria-label="Перейти к обращению">
						Обращение
					</router-link>
				</li>
				<li>
					<router-link :to="privacyPolicyPage"
						class="block px-4 py-1.5 hover:bg-Blue hover:text-white transition-colors duration-300 ease-in-out"
						aria-label="Перейти к политике конфиденциальности">
						Политика конфиденциальности
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import arrowDown from "@/assets/images/icons/chevron-down.svg"

import hedCodeOfConduct from "@/assets/images/complains/hed_code_of_conduct.pdf"
import hedKodeksPovedeniya from "@/assets/images/complains/hed_kodeks_povedeniya.pdf"
import hedOdobAhlok from "@/assets/images/complains/hed_odob-ahlok_koidalari.pdf"

const documentLinks = [
	{ text: "HED Кодекс поведения", file: hedKodeksPovedeniya },
	{ text: "HED Одоб-ахлок коидалари", file: hedOdobAhlok },
	{ text: "HED Code of Conduct", file: hedCodeOfConduct }
]

const appealPage = "/appeal"
const privacyPolicyPage = "/privacy-policy"
</script>