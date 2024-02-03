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
  import { useRouterStore } from "@/stores/routerStore.js";

  const test = useRoute().params
  const routerStore = useRouterStore()
  const categoryFromState = routerStore.getCategory()
  useRoute().params.category = categoryFromState
  const id = useRoute().params.id.toString()
  const categoryName = useRoute().params.category.toString()
  const productStore = useProductStore()
  const products = productStore[categoryFromState]
  getProductByid()
  const product = routerStore.getCurrentProduct()

    function getProductByid(){
      let product = {}
      products?.map(el => {
        if(el.id === id){
          product =  el
        }
      })
      routerStore.setProduct(product)
      // return product
  }

  definePageMeta({
    // layout: 'products'
  })
  </script>
  
  <style lang="scss" scoped>
  
  </style>