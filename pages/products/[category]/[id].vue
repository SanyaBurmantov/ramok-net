<template>
    <div>
      <Head>
        <Title>Nuxt Dojo | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
      </Head>
      
      <ProductDetails :product="product"/>
    </div>
  </template>
  
  <script setup>
  import { useProductStore } from '@/stores/productStore.js'
  
//   const uri = 'https://fakestoreapi.com/products/' + id
//   const {data: product} = await useFetch(uri, { key: id })
//   if (!product.value) {
//     throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
//   }
  const id = useRoute().params.id.toString()
  const categoryName = useRoute().params.category.toString()
  const productStore = useProductStore()
  const products = productStore[categoryName]
  console.log(products)
  const product = products[id]

  definePageMeta({
    // layout: 'products'
  })
  </script>
  
  <style lang="scss" scoped>
  
  </style>