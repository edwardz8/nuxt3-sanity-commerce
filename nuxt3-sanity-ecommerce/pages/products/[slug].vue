<script setup>
const route = useRoute();

const query = `*[_type == 'product' && store.slug.current == '${route.params.slug}']`

const { data } = await useSanityQuery(query);
const product = ref({});
/**
 * NOTE: data for a single product is stored in an array; basically an array with one object (product) in it. 
 * this is how Sanity handles single data, so we just fetch the first item of that array
 * data or data.value will give you an array. data.value[0] will give you what you want
 */
product.value = data.value[0];


console.log(data.value);
console.log(product);
console.log(route.params.slug)

</script>

<template>
    <UContainer>
        <h1>Product - Dynamic Route</h1>
        <!-- see what i mean (regarding my above comment) here in this pre tag -->
        <pre>{{ data }}</pre>
        <!-- NOTE: all your product data is under a store object, that was the main thing i changed here -->
        <Card :title="product.store.title" :price="product.store.price" :body="product.store.body"
            :image="product.store.previewImageUrl" :slug="product.store.slug.current" />
    </UContainer>
</template>
