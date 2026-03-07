<script setup lang="ts">
import type { Product } from '../types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <article
    class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-panel"
  >
    <div class="relative">
      <img :src="product.thumbnail" :alt="product.title" class="h-64 w-full object-cover" loading="lazy" />
      <span class="absolute left-3 top-3 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
        {{ product.brand }}
      </span>
    </div>
    <div class="space-y-2 p-5">
      <p class="text-xs uppercase tracking-wider text-slate-500">{{ product.category }}</p>
      <h3 class="line-clamp-1 text-lg font-semibold text-slate-900">{{ product.title }}</h3>
      <p class="line-clamp-2 text-sm text-slate-500">{{ product.description }}</p>
      <div class="flex items-center justify-between pt-1">
        <p class="text-base font-semibold text-brand-700">USD {{ product.price }}</p>
        <p class="text-sm font-medium text-slate-600">Rating {{ product.rating }}</p>
      </div>
    </div>
  </article>
</template>
