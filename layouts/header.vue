<template>
  <header
      class="lg:mb-0 lg:border-0 header">
    <div
        class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl sticky flex items-center justify-between gap-3 h-[--header-height]">
      <div class="text-2xl font-bold flex justify-center items-center select-none">
        <img src="/logo.png" alt="" class="w-12 h-12 m-2 lg:w-14 lg:h-14 cursor-pointer" draggable="false">
        <div class="text-[#003374] font-bold text-[20px] lg:text-[24px] hidden md:flex">Linyu</div>
      </div>
      <nav class="hidden md:flex space-x-2">
        <div class="link-tag">
          <i class="iconfont icon-github mr-1 leading-[1.3]" style="font-size: 1.3rem"/>
          <div>1000</div>
        </div>
        <div class="link-tag">
          <i class="iconfont icon-gitee mr-1 leading-[1.3] text-[#c71d23]" style="font-size: 1.3rem"/>
          <div>1000</div>
        </div>
      </nav>
      <button @click="isMenuOpen=!isMenuOpen" class="md:hidden text-xl">
        ☰
      </button>
    </div>
    <div v-if="isMenuOpen">
    </div>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)
</script>

<style scoped>
.header {
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 50;
  background-image: linear-gradient(to right, rgba(var(--primary-color), 0.2), rgba(var(--primary-color), 0.9), rgba(var(--primary-color), 0.2));
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  box-shadow: 0 2px 60px rgba(var(--primary-color), 0.5);

  .link-tag {
    padding: 2px 10px;
    background-color: #EAEAEA;
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
</style>
