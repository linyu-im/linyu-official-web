<script setup>
const {data} = await useAsyncData('home', () => queryContent('/docs').sort({_id: -1}).find())
const formattedData = computed(() => {
  return (
      data.value?.map((articles) => {
        return {
          path: articles._path,
          title: articles.title || 'no-title available',
          description: articles.description || 'no-description available',
          image: articles.image || '/not-found.jpg',
          alt: articles.alt || 'no alter data available',
          ogImage: articles.ogImage || '/not-found.jpg',
          date: articles.date || 'not-date-available',
          tags: articles.tags || [],
          published: articles.published || false,
        }
      }) || []
  )
})
</script>
<template>
  <template v-for="post in formattedData" :key="post.title">
    <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
  </template>
</template>
