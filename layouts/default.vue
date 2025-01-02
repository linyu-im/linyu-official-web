<template>
  <Header/>
  <main class="main-content">
    <slot/>
  </main>
</template>
<script setup lang="ts">
import Header from "~/layouts/header.vue";
</script>
<style lang="scss" scoped>
.main-content {
  min-height: calc(100vh - var(--header-height));
  position: relative;
  background: linear-gradient(to bottom,
      rgba(var(--primary-color), 0.1) 5%,
      rgba(var(--primary-color), 0.05) 10%,
      white 20%,
      white 80%,
      rgba(var(--primary-color), 0.05) 90%,
      rgba(var(--primary-color), 0.1) 95%
  );
}
</style>