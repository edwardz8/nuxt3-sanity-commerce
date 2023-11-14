<script setup>
const route = useRoute();

const query = `*[_type == 'product' && store.slug.current == '${route.params.slug}']`

const { data } = await useSanityQuery(query)

console.log(data.value)
console.log(route.params.slug)

</script>

<template>
    <UContainer>
        <h1>Product - Dynamic Route</h1>
        <p>{{ data }}</p>
        <pre>{{ route.params.slug }}</pre>
        <Card   
            :title="data.title"
            :price="data.price"
            :body="data.body"
            :image="data.image"
            :slug="data.slug"
        />
    </UContainer>
</template>
