<script setup>
const route = useRoute();

const query = `*[_type == 'product' && store.slug.current == '${route.params.slug}']`

const { data } = await useSanityQuery(query)

const product = ref({});

product.value = data.value[0];

/**
 * NOTE: data for a single product is stored in an array; basically an array with one object (product) in it. 
 * this is how Sanity handles single data, so we just fetch the first item of that array
 * data or data.value will give you an array. data.value[0] will give you what you want
 */

</script>

<template>
    <UContainer>
        <h1>Product - Dynamic Route</h1>
        <Card   
            :title="product.store.title"
            :price="product.store.price"
            :body="product.store.body"
            :image="product.store.previewImageUrl"
            :slug="product.store.slug.current"
        />
    </UContainer>
</template>
