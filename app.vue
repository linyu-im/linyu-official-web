<template>
  <div>
    <toast-provider>
      <nuxt-layout>
        <nuxt-page/>
      </nuxt-layout>
    </toast-provider>
  </div>
</template>
<script setup lang="ts">
import ToastProvider from "~/components/ToastProvider.vue";
</script>