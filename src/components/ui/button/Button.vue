<script setup lang="ts">
import { Primitive } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { buttonVariants, type ButtonVariants } from '.'

// ✅ Пропсы с дефолтами
const props = withDefaults(defineProps<{
  as?: string
  asChild?: boolean
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}>(), {
  as: 'button',
  asChild: false,
  variant: 'default',
  size: 'default'
})

// ✅ Распаковка пропсов — именно ЭТО уберёт Vue warning-и
const { as, asChild, variant, size, class: className } = props
</script>

<template>
	<Primitive
	  :as="as"
	  :as-child="asChild"
	  :class="cn(buttonVariants({ variant, size }), className)"
	>
	  <slot />
	</Primitive>
  </template>
  
