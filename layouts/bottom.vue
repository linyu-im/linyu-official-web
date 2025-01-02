<template>
  <div class="bottom">
    <div class="h-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col justify-center items-center">
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-[60px]">
        <div class="info">
          <div class="info__title">E-Mail</div>
          <div class="info__content">电子邮件 duweihengmr@163.com</div>
        </div>
        <div class="info">
          <div class="info__title">QQ-Group</div>
          <div class="info__content">QQ群 729158695</div>
        </div>
        <div class="info">
          <div class="info__title">关于我们</div>
          <div class="info__content">
            <i class="iconfont icon-github mr-[10px] leading-[1.3]" style="font-size: 1.3rem"/>
            <i class="iconfont icon-gitee leading-[1.3] text-[#c71d23]" style="font-size: 1.3rem"/>
          </div>
        </div>
      </div>
      <div class="copyright">Copyright © 2025 Linyu All Rights Reserved.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom {
  background-color: rgba(var(--primary-color), 0.15);
  padding: 10px;

  .info {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    justify-items: center;
    align-items: center;
    padding: 5px;

    .info__title {
      color: #4B5963;
      margin-bottom: 4px;
      font-weight: 600;
    }

    .info__content {
      color: #4B5963;
    }
  }

  .copyright {
    font-size: 12px;
    color: #4B5963;
  }
}
</style>
<script setup lang="ts">
</script>