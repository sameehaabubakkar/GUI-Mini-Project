<script setup lang="ts">
type FeaturedItem = {
  id: number
  name: string
  price: string
  badge: string
  image: string
}

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    name: 'Urban Sprint Max',
    price: 'LKR 13,900',
    badge: 'New Arrival',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Street Flex Runner',
    price: 'LKR 11,500',
    badge: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Court Blaze Pro',
    price: 'LKR 16,200',
    badge: 'Limited Drop',
    image:
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=900&q=80',
  },
]
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
    <header class="rounded-3xl bg-slate-900 px-6 py-8 text-white shadow-panel md:px-10">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="mb-2 text-xs uppercase tracking-[0.24em] text-slate-300">Day 01 Setup</p>
          <h1 class="text-3xl font-semibold leading-tight md:text-5xl">
            Sameeha Shoes
            <span class="block text-brand-100">Modern Street Collection</span>
          </h1>
          <p class="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
            Vue 3 + TypeScript + Tailwind foundation is ready. Next step: connect DummyJSON API for product
            listing, filtering, and detail view.
          </p>
        </div>
        <button
          class="h-fit rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white/20"
        >
          Explore Collection
        </button>
      </div>
    </header>

    <main class="mt-10">
      <div class="mb-5 flex items-end justify-between">
        <h2 class="text-xl font-semibold text-slate-900 md:text-2xl">Featured Preview</h2>
        <p class="text-sm text-slate-500">UI direction inspired by local fashion storefront layouts.</p>
      </div>

      <section class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in featuredItems"
          :key="item.id"
          class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-panel"
        >
          <div class="relative">
            <img :src="item.image" :alt="item.name" class="h-64 w-full object-cover" loading="lazy" />
            <span
              class="absolute left-3 top-3 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
              >{{ item.badge }}</span
            >
          </div>
          <div class="space-y-2 p-5">
            <h3 class="text-lg font-semibold text-slate-900">{{ item.name }}</h3>
            <p class="text-sm text-slate-500">Performance comfort with everyday street style.</p>
            <p class="text-base font-semibold text-brand-700">{{ item.price }}</p>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>
