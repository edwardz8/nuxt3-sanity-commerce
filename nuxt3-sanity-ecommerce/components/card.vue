<template>
  <div class="h-80 w-64 m-8">
    <img :src="image" class="h-72 w-64" />
    <span>
      <h1 class="font-bold text-lg text-gray-100">{{ title }}</h1>
      <h2 class="font-bold text-lg text-gray-100">{{ price }}</h2>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  price: Number,
  body: String
})
</script>

