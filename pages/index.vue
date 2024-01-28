<template>
  <SiteSectionMainHeader class="mb-10"/>

  <p>В Ramok-Net.by у вас есть выбор:</p>
  <p>1. Изберите стиль из наших тематических коллекций.</p>
  <p class="mb-8">2. Создайте свой уникальный дизайн – мы готовы воплотить ваши идеи в реальность!</p>

  <SectionsSectionCatalog />
  <FormCallback />
  <ExamplesSection />
</template>

<script setup>
import SiteSectionMainHeader from "~/components/sections/site-section-main.vue";
import SectionsSectionCatalog from "~/components/sections/section-catalog.vue";
import ExamplesSection from "~/components/sections/examples-section.vue";
import FormCallback from "~/components/forms/form-callback.vue";
import {useProductStore} from "~/stores/productStore.js";
const productStore = useProductStore()
productStore.getAllProducts();

</script>

<style lang="scss">


</style>