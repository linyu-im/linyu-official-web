<template>
  <header
      class="lg:mb-0 lg:border-0 header">
    <div
        class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl sticky flex items-center justify-between gap-3 h-[--header-height]">
      <NuxtLink to="/">
        <div class="text-2xl font-bold flex justify-center items-center select-none cursor-pointer">
          <img src="/logo.png" alt="" class="w-12 h-12 m-2 lg:w-14 lg:h-14" draggable="false">
          <div class="text-[#003374] dark:text-[#fff] font-bold text-[18px] md:text-[20px] lg:text-[24px]">Linyu</div>
        </div>
      </NuxtLink>
      <nav class="hidden md:flex space-x-2 justify-center items-center">
        <div class="link-operation">
          <div class="operation__item" @click="handlerToLink('/docs/mini/install')">
            文档
          </div>
          <div class="operation__item" @click="showToast('敬请期待~')">关于</div>
          <div class="operation__item" @click="showToast('敬请期待~')">服务</div>
          <div class="operation__item" @click="showToast('敬请期待~')">赞助</div>
        </div>
        <div class="link-tag">
          <color-mode-switch class="mr-[10px]"/>
          <img
              @click="openUrl('https://github.com/DWHengr/linyu-client')"
              src="https://img.shields.io/github/stars/DWHengr/linyu-client?style=social"
              alt="GitHub Stars"
          />
        </div>
      </nav>
      <div class="md:hidden flex items-center">
        <color-mode-switch/>
        <button @click="isMenuOpen=!isMenuOpen" class="w-[20px] text-xl m-2">
          <i v-if="!isMenuOpen" class="iconfont icon-caidan" style="font-size: 20px"/>
          <i v-else class="iconfont icon-guanbi" style="font-size: 20px"/>
        </button>
      </div>
    </div>
  </header>
  <div v-if="isMenuOpen" class="floating-menu">
    <div class="floating-menu__operation">
      <div class="operation__item" @click="handlerToLink('/docs/mini/install')">文档</div>
      <div class="operation__item" @click="showToast('敬请期待~')">关于</div>
      <div class="operation__item" @click="showToast('敬请期待~')">服务</div>
      <div class="operation__item" @click="showToast('敬请期待~')">赞助</div>
    </div>
    <div class="mt-[20px] cursor-pointer flex">
      <img
          @click="openUrl('https://github.com/DWHengr/linyu-client')"
          src="https://img.shields.io/github/stars/DWHengr/linyu-client?style=social"
          alt="GitHub Stars"
      />
    </div>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)

import {useToast} from "~/components/ToastProvider.vue";

const showToast = useToast()

const handleResize = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const handlerToLink = (path) => {
  isMenuOpen.value = false;
  useRouter().push(path);
}

</script>

<style scoped>
.header {
  background-color: rgba(var(--bg-color), 0.8);
  backdrop-filter: blur(20px);
  position: sticky;
  top: 0;
  z-index: 50;
  background-image: linear-gradient(to right, rgba(var(--primary-color), 0.2),
  rgba(var(--primary-color), 0.9), rgba(var(--primary-color), 0.2));
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  box-shadow: 0 2px 60px rgba(var(--primary-color), 0.5);

  .link-operation {
    display: flex;
    height: 40px;
    justify-items: center;
    align-items: center;
    padding: 0 10px;
    background-color: rgb(var(--bg-color));
    border-radius: 10px;
    border: #EDF2F9 2px solid;
    gap: 5px;

    .operation__item {
      font-size: 14px;
      user-select: none;
      padding: 2px 10px;
      cursor: pointer;

      &:hover {
        background-color: var(--button-hover-color);
        border-radius: 5px;
      }
    }
  }

  .link-tag {
    height: 40px;
    padding: 0 10px;
    background-color: rgb(var(--bg-color));
    border: #EDF2F9 2px solid;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    user-select: none;
    cursor: pointer;
  }
}

.floating-menu {
  position: fixed;
  top: var(--header-height);
  height: 100%;
  left: 0;
  right: 0;
  background-color: rgba(var(--bg-color), 0.8);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  z-index: 999;

  .floating-menu__operation {
    display: flex;
    flex-direction: column;
    user-select: none;

    .operation__item {
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        background-color: var(--button-hover-color);
        border-radius: 5px;
      }
    }
  }
}
</style>
