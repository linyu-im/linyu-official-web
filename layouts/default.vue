<template>
  <Header/>
  <main class="main-content">
    <slot/>
  </main>
  <Bottom/>
</template>
<script setup lang="ts">
import Header from "~/layouts/header.vue";
import Bottom from "~/layouts/bottom.vue";
</script>
<style lang="scss" scoped>
.main-content {
  min-height: calc(100vh - var(--header-height));
  position: relative;
  background: linear-gradient(to bottom,
      rgba(var(--primary-color), 0.1) 5%,
      rgba(var(--primary-color), 0.05) 10%,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 80%,
      rgba(var(--primary-color), 0.05) 90%,
      rgba(var(--primary-color), 0.1) 95%
  );
}
</style>