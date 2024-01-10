<template>
    <div>
      <Head>
        <Title>Nuxt Dojo | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
      </Head>
      <div>{{category}}</div>
      </div>
  </template>
  
  <script setup>
    const { category} = useRoute().params
 
  
    // if (!product.value) {
    //   throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
    // }
    definePageMeta({
      layout: 'category'
    })
  </script>
  
  <style lang="scss" scoped>
  
  </style>