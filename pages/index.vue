<template>
  <SiteSectionMainHeader class="mb-10"/>
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