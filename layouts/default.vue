<template>
  <Header/>
  <main class="min-h-[calc(100vh-var(--header-height))] relative">
    <slot/>
  </main>
</template>
<script setup lang="ts">
import Header from "~/layouts/header.vue";
</script>