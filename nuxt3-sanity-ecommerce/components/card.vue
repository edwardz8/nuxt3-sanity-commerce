<template>
  <div class="h-80 w-64 m-8">
    <NuxtLink :to="`/products/${slug}`">
      <img :src="image" class="h-72 w-64" />
    </NuxtLink>
    <span>
      <!--  <h1 class="font-bold text-lg text-gray-100">{{ title }}</h1> -->
      <h2 class="font-bold text-lg text-gray-100">{{ price }}</h2>
    </span>
    <NuxtLink :to="`/products/${slug}`">{{ title }}</NuxtLink>
    <ul class="mt-4 text-green-400">
      <li>{{ tags }}</li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  price: Number,
  body: String,
  slug: String,
  tags: String
})
</script>

