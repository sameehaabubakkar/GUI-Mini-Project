<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ProductGrid from './components/ProductGrid.vue'
import { fetchProducts } from './services/productService'
import type { Product } from './types/product'

const products = ref<Product[]>([])
const isLoading = ref<boolean>(false)
const errorMessage = ref<string>('')

const loadProducts = async (): Promise<void> => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const result = await fetchProducts(12)
    products.value = result.products
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Something went wrong while loading products.'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  void loadProducts()
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
    <header class="rounded-3xl bg-slate-900 px-6 py-8 text-white shadow-panel md:px-10">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="mb-2 text-xs uppercase tracking-[0.24em] text-slate-300">Day 02 Data Integration</p>
          <h1 class="text-3xl font-semibold leading-tight md:text-5xl">
            Sameeha Shoes
            <span class="block text-brand-100">Live Product Feed</span>
          </h1>
          <p class="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
            Product cards are now loaded from DummyJSON with strict TypeScript interfaces and a reusable component
            structure.
          </p>
        </div>
        <button
          class="h-fit rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white/20"
          @click="loadProducts"
        >
          Refresh Products
        </button>
      </div>
    </header>

    <main class="mt-10">
      <div class="mb-5 flex items-end justify-between">
        <h2 class="text-xl font-semibold text-slate-900 md:text-2xl">Latest Sneakers</h2>
        <p class="text-sm text-slate-500">{{ products.length }} items loaded</p>
      </div>

      <section v-if="isLoading" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="skeleton in 6"
          :key="skeleton"
          class="h-96 animate-pulse rounded-2xl border border-slate-200 bg-white/70"
        />
      </section>

      <section
        v-else-if="errorMessage"
        class="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700 md:text-base"
      >
        <p>{{ errorMessage }}</p>
        <button class="mt-3 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700" @click="loadProducts">
          Try Again
        </button>
      </section>

      <ProductGrid v-else :products="products" />
    </main>
  </div>
</template>
