<script setup>
const query = `*[_type == 'product']`
const { data } = await useSanityQuery(query)
console.log(data.value)

data.value.forEach((currentValue) => {
    console.log(currentValue.store.previewImageUrl)
})

</script>

<template>
    <UContainer>
        <h1>Nuxt 3 Sanity Shopify</h1>
        <div class="grid grid-cols-4 justify-items-center gap-y-5">
            <Card v-for="(product, i) in data" :key="i" :title="product.store.title" :price="product.store.price"
                :desc="product.store.desc" :image="product.store.previewImageUrl" />
        </div>
    </UContainer>
</template>

