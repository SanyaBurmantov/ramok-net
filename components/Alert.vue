<template>
  <div v-if="alertState.alert.length" class="alert">
    <UAlert
      :title="alertState.alert"
    />
  </div>
</template>


<script setup lang="ts">
  import {useAlertStore} from "~/stores/alertStore";

  const alertState = useAlertStore()

</script>

<style scoped lang="scss">
.alert{
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
  width: 280px;
  opacity: 0.9;
}

</style>