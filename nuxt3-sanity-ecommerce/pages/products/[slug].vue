<script setup>
const route = useRoute();

const query = `*[_type == 'product' && slug.current == $slug][0]`

const { data } = await useSanityQuery(query, { slug: route.params.slug })

console.log(data.value)
console.log(route)

</script>

<template>
    <UContainer>
        <h1>Product Dynamic Route {{ data }}</h1>
    </UContainer>
</template>
