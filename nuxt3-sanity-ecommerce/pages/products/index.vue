<script setup>
const query = `*[_type == 'product']`
const { data } = await useSanityQuery(query)

/* data.value.forEach((currentValue) => {
    console.log(currentValue.store.previewImageUrl)
}) */

</script>

<template>
    <UContainer>
        <div class="grid grid-cols-4 justify-items-center gap-y-5">
                <Card v-for="(product, i) in data" :key="i"
                :title="product.store.title"
                :price="product.store.price"
                :body="product.store.body"
                :image="product.store.previewImageUrl"
                :slug="product.store.slug.current"
                :tags="product.store.tags"
                />
        </div>
    </UContainer>
</template>