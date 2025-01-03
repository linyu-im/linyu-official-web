<template>
  <div
      class="flex relative flex-col md:flex-row"
  >
    <div
        class="md:sticky md:top-16 h-auto md:h-[calc(100vh-var(--header-height))] md:w-44 md:ml-48 w-full border-b
        md:border-b-0 md:border-r border-gray-200 dark:border-teal-900 overflow-y-auto">
      <div class="p-4 space-y-1">
        <nav>
          <ul>
            <li v-for="folder in menu" :key="folder.name">
              <span>{{ folder.displayName }}</span>
              <ul>
                <li v-for="file in folder.files" :key="file._path">
                  <NuxtLink :to="`/docs${file._path}`">{{ file.title }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="max-w-3xl mx-auto lg:mx-24 px-4 sm:px-6 lg:px-8">
        <ClientOnly>
          <ContentRenderer :value="blog">
            <template #empty>
              <p>No content found.{{ blog }}</p>
            </template>
          </ContentRenderer>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
<script setup>
const slug = useRoute().params.slug.toString().replace(/,/g, "/");
const {data: blog} = await useAsyncData(slug, () => {
  return queryContent(slug).findOne();
});
const folderDisplayNames = {
  mini: "迷你版",
}
const {data: menu} = await useAsyncData(async () => {
  const allContent = await queryContent().only(['_path', '_dir', 'title']).find()
  const groupedContent = Object.entries(
      allContent.reduce((acc, item) => {
        const folderName = item._dir.split('/')[0]
        acc[folderName] = acc[folderName] || {name: folderName, files: []}
        acc[folderName].files.push(item)
        return acc
      }, {})
  )
  return groupedContent.map(([folderName, folderData]) => ({
    ...folderData,
    displayName: folderDisplayNames[folderName] || folderName,
  }))
})

</script>
<style scoped>
.d {
  position: fixed;
}
</style>
