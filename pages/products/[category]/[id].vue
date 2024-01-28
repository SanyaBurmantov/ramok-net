<template>
    <div>
      <Head>
        <Title>{{ product.title }} | Ramok-net.by</Title>
        <Meta name="description" :content="product.description" />
      </Head>
      
      <ProductDetails :product="product"/>
    </div>
  </template>
  
  <script setup>
  import { useProductStore } from '@/stores/productStore.js'

  const id = useRoute().params.id.toString()
  const categoryName = useRoute().params.category.toString()
  const productStore = useProductStore()
  const products = productStore[categoryName]
  const product = getProductByid()
  function getProductByid(){
    let product = {}
    products.map(el => {
      if(el.id === id){
        product =  el
      }
    })
    return product
  }


  definePageMeta({
    // layout: 'products'
  })
  </script>
  
  <style lang="scss" scoped>
  
  </style>