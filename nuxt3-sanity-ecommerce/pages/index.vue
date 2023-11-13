<script setup>
const query = `*[_type == 'product']`
const { data } = await useSanityQuery(query)
console.log(data.value)

/* data.value.forEach((currentValue) => {
    console.log(currentValue.store.previewImageUrl)
}) */

</script>

<template>
    <UContainer>
        <h1>Nuxt 3 Sanity Shopify</h1>
        <NuxtLink to="/products">
            <UButton>
                All Products
            </UButton>
        </NuxtLink>
    </UContainer>
</template>

