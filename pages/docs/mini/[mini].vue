<template>
  <!-- 小窗口下，菜单列表 -->
  <div class="sm-menu-operation flex lg:hidden">
    <div class="text-[rgba(var(--text-color),0.7)] text-[14px] cursor-pointer" @click="isSmMenuShow=true">
      <i class="iconfont icon-liebiao" style="font-size: 14px"/>
      菜单
    </div>
  </div>
  <!-- 遮罩层 -->
  <div class="mask" v-if="isSmMenuShow" @click="isSmMenuShow=false"></div>

  <div class="flex relative flex-col lg:flex-row">
    <div class="h-[40px] lg:hidden"></div>
    <div
        class="lg:sticky lg:top-16 h-auto lg:h-[calc(100vh-var(--header-height))]
        lg:w-[400px] relative w-full border-b
        lg:border-b-0 lg:border-r border-gray-200 overflow-y-auto hidden lg:flex"
        :class="{'sm-menu-list':isSmMenuShow}"
    >
      <div class="p-4 space-y-1 absolute right-0" :class="{'left-0':isSmMenuShow}">
        <ul class="select-none">
          <li v-for="folder in menu" :key="folder.name">
            <span class="font-bold">{{ folder.displayName }}</span>
            <ul class="ml-[10px] mt-[5px]">
              <li
                  v-for="file in folder.files" :key="file._path"
                  class="mb-[5px] text-[rgba(var(--text-color),0.7)]"
                  :class="{ 'list-active': file._path === path }"
              >
                <NuxtLink :to="file._path">{{ file.title }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="max-w-3xl mx-auto lg:mx-24 px-4 sm:px-6 lg:px-8 lg:w-[705px]">
        <client-only>
          <ContentRenderer v-if="articles" :value="articles">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup>

const folderDisplayNames = {
  mini: "迷你版",
}
const isSmMenuShow = ref(false)

const {path} = useRoute()
const {data: articles, error} = await useAsyncData(`docs-post-${path}`, () =>
    queryContent(path).findOne(),
)

if (error.value) navigateTo('/')

const {data: menu} = await useAsyncData('menu', async () => {
  const allContent = await queryContent().only(['_path', '_dir', 'title', 'isNoShow']).find();
  const groupedContent = [];
  const folderMap = {};
  for (const item of allContent) {
    if (item.isNoShow) continue
    const folderName = item._dir.split('/')[0];
    if (!folderMap[folderName]) {
      folderMap[folderName] = {name: folderName, files: []};
    }
    folderMap[folderName].files.push(item);
  }
  for (const folderName in folderMap) {
    if (Object.hasOwn(folderMap, folderName)) {
      groupedContent.push({
        ...folderMap[folderName],
        displayName: folderDisplayNames[folderName] || folderName,
      });
    }
  }
  return groupedContent;
});

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
  background-color: rgba(var(--bg-color), 0.8);
  backdrop-filter: blur(20px);
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
  background-color: rgba(var(--bg-color));
  z-index: 100;
  display: flex;
}

.list-active {
  color: rgb(var(--primary-color));
  font-weight: bold;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
</style>

