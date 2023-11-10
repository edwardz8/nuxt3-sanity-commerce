<template>
  <div class="h-80 w-64 border">
   <!--  <SanityImage
    :asset-id="image"
    auto="format"
    class="h-72 w-64"
  />   -->  
    <span class="pl-3">
      <h1 class="font-bold text-lg text-gray-100">{{ title }}</h1>
      <!-- <h1>{{ price }}</h1> -->
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
 // image: String,
  // price: Number,
  // desc: String
})
</script>

