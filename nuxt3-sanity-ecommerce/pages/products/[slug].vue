<script setup>
const route = useRoute();

//NOTE: fix, weren't properly reaching the slug property
const query = `*[_type == 'product' && store.slug.current == '${route.params.slug}']`

// const { data } = await useSanityQuery(query, { slug: route.params.slug }) //NOTE: don't need this if defining slug in query, can just do this...
const { data } = await useSanityQuery(query)

console.log(data.value)
console.log(route.params.slug)

</script>

<template>
    <UContainer>
        <h1>Product Dynamic Route {{ data }}</h1>
        <pre>{{ route.params.slug }}</pre>
        <pre> {{ query }}</pre>
    </UContainer>
</template>
