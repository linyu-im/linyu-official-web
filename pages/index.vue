<template>
  <div class="official">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="gradient-sphere
          bg-gradient-to-r
          from-[rgba(125,239,243,1)]
          to-[rgba(125,239,243,0.8)]
          right-1 top-[-2.5rem] md:right-40"/>
      <div class="gradient-sphere
          bg-gradient-to-r
          from-[rgba(0,151,228,1)]
          to-[rgba(0,151,228,0.8)]
          left-1 top-36 md:left-40"/>
      <div class="official-content">
        <div class="content__title">
          <div class="content__title__h1 lg:text-5xl text-3xl">
            <gradient-text>Linyu，</gradient-text>
            <span>您的IM系统！</span>
          </div>
          <div class="content__title__h2 lg:text-[20px] text-[16px] lg:mb-[5px] mb-[10px]">
            林语（Linyu）是一款支持多端的
            <gradient-text direction="left">开源聊天系统</gradient-text>
            ，涵盖桌面端和移动端等多种平台。
          </div>
          <div class="content__title__h2 lg:text-[20px] text-[16px]">

            同时，林语迷你版（Linyu Mini）是一款支持多人在线的
            <gradient-text direction="left">轻量级聊天室</gradient-text>
            系统。
          </div>
          <gradient-button class="mt-[30px]"><i class="iconfont icon-fasong mr-[5px]" style="font-size: 20px;"/>立即体验
          </gradient-button>
        </div>
        <div class="content__card-area">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
            <div v-for="item in cardAreaData" class="card-area__item ">
              <div class="flex items-center">
                <gradient-text :class="`iconfont ${item.icon}`" direction="top" style="font-size: 20px"/>
                <div class="card-area__item__title">{{ item.title }}</div>
              </div>
              <div class="card-area__item__content">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cardAreaData = [
  {
    icon: "icon-anquan",
    title: "数据安全",
    content: "采用端到端加密和 HTTPS 协议，全面保障用户隐私和数据安全。支持消息加密存储与传输，防止信息泄露或篡改。"
  },
  {
    icon: "icon-duoyanghua",
    title: "多样化",
    content: "支持 Windows、MacOS、Linux、Android 和 iOS 等多端设备，确保统一的用户体验。基于 Tauri 和 Flutter 框架构建，同时提供专属管理端，便捷进行数据管理与维护。"
  },
  {
    icon: "icon-daima",
    title: "开放生态",
    content: "完全开源的架构设计，支持自由定制与二次开发。轻松实现功能扩展与系统集成，打造个性化 IM 解决方案。"
  }
]
</script>

<style lang="scss" scoped>
.gradient-sphere {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  filter: blur(64px);
  opacity: 0.3;
  z-index: 1;
}

.official {
  .official-content {
    display: flex;
    flex-direction: column;

    .content__title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 100px 50px;

      .content__title__h1 {
        font-weight: 600;
        margin: 30px 0;
      }

      .content__title__h2 {
        text-align: center;
      }
    }

    .content__card-area {
      display: flex;
      justify-content: center;
      align-items: center;

      .card-area__item {
        min-height: 120px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        cursor: pointer;

        &:hover {
          box-shadow: 0 0 20px rgba(var(--primary-color), 0.6);
        }

        .card-area__item__title {
          font-size: 16px;
          font-weight: 600;
          padding: 2px 0;
          margin-left: 5px;
        }

        .card-area__item__content {
          font-size: 13px;
          color: #4B5963;
        }
      }
    }
  }
}

</style>