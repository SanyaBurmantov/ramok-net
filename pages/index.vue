<template>
  <SiteSectionMainHeader class="mb-10"/>

  <p>В Ramok-Net.by у вас есть выбор:</p>
  <p>1. Вы можете выбрать стиль рамки из наших коллекций </p>
  <p class="mb-8">2. Или у вас есть возможность создать свой УНИКАЛЬНЫЙ дизайн. Просто скажите свою идею и мы воплотим ее в жизнь</p>

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