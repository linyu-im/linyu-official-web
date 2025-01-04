<template>
  <!-- 小窗口下，菜单列表 -->
  <div class="sm-menu-operation flex md:hidden">
    <div class="text-[rgba(60,60,60,0.7)] text-[14px] cursor-pointer" @click="isSmMenuShow=true">
      <i class="iconfont icon-liebiao" style="font-size: 14px"/>
      菜单
    </div>
  </div>
  <!-- 遮罩层 -->
  <div class="mask" v-if="isSmMenuShow" @click="isSmMenuShow=false"></div>

  <div class="flex relative flex-col md:flex-row">
    <div class="h-[40px] md:hidden"></div>
    <div
        class="md:sticky md:top-16 h-auto md:h-[calc(100vh-var(--header-height))] md:w-44 md:ml-48 w-full border-b
        md:border-b-0 md:border-r border-gray-200 overflow-y-auto hidden md:flex"
        :class="{'sm-menu-list':isSmMenuShow}"
    >
      <div class="p-4 space-y-1">
        <ul class="select-none">
          <li v-for="folder in menu" :key="folder.name">
            <span class="font-bold">{{ folder.displayName }}</span>
            <ul class="ml-[10px] mt-[5px]">
              <li
                  v-for="file in folder.files" :key="file._path"
                  class="mb-[5px] text-[rgba(60,60,60,0.7)]"
                  :class="{ 'list-active': `/docs${file._path}` === currentPath }"
              >
                <NuxtLink :to="`/docs${file._path}`">{{ file.title }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="max-w-3xl mx-auto lg:mx-24 px-4 sm:px-6 lg:px-8">
        <ClientOnly>
          <ContentRenderer :value="blog">
            <template #empty>
              <p>没有找到任何内容。</p>
            </template>
          </ContentRenderer>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
<script setup>
const folderDisplayNames = {
  mini: "迷你版",
}

const isSmMenuShow = ref(false)

// 获取当前页面的路径
const currentPath = useRoute().path;

const slug = useRoute().params.slug.toString().replace(/,/g, "/");

const {data: blog} = await useAsyncData(slug, () => {
  return queryContent(slug).findOne();
});

if (blog.value?.title) {
  useHead({title: `${blog.value.title} | Linyu`})
} else {
  useHead({title: "未知地址 | Linyu"})
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

const handleResize = () => {
  isSmMenuShow.value = false;
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

</script>
<style scoped>
.sm-menu-operation {
  height: 40px;
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 99;
  align-items: center;
  padding: 0 20px;
  user-select: none;
}

.sm-menu-list {
  position: fixed;
  top: 0;
  height: 100%;
  width: 40%;
  background-color: #FFFFFF;
  z-index: 100;
  display: flex;
}

.list-active {
  color: rgb(var(--primary-color));
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
}
</style>
