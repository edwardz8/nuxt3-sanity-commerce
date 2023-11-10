<script setup>
  const query = `*[_type == 'product']{title}`
  const { data } = useSanityQuery(query)
</script>

<template>
    <UContainer>
        <h1>Nuxt 3 Sanity Shopify</h1>
        <div class="grid grid-cols-4 justify-items-center gap-y-5">
            <Card v-for="(product, i) in data" :key="i"
            :title="product.title"
            :price="product.price"
            :desc="product.desc"
            />
        </div>
    </UContainer>
</template>

