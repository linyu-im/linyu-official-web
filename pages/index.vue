<template>
  <div class="official">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="gradient-sphere bg-gradient-to-r from-[rgba(125,239,243,1)]
      to-[rgba(125,239,243,0.8)] right-1 top-[-2.5rem] md:right-40"/>
      <div class="gradient-sphere bg-gradient-to-r from-[rgba(0,151,228,1)]
          to-[rgba(0,151,228,0.8)] left-1 top-36 md:left-40"/>
      <div class="official-content">
        <div class="content__title">
          <div class="content__title__h1 lg:text-5xl text-3xl">
            <text-print>
              <gradient-text>Linyu，</gradient-text>
              <span>您的IM系统！</span>
            </text-print>
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
          <gradient-button class="mt-[50px]" @click="openUrl('https://mini.linyu.chat/login?p=sun55@kong')">
            <i class="iconfont icon-fasong mr-[5px]" style="font-size: 20px;"/>
            立即体验
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
        <div class="content__version">
          <div class="content__version__h1 lg:text-5xl text-3xl">
            多版本选择，满足
            <gradient-text direction="left">多样化</gradient-text>
            需求
          </div>
          <div v-for="(version,index) in versionCardData" class="content__version__card md:max-h-[500px]"
               :class="{right:index%2==1}">
            <div
                class="gradient-sphere top-[-100px]"
                :class="`${index%2==0?'right-1 lg:right-[-100px]':'left-1 lg:left-[-100px]'}`"
                :style="{background: `linear-gradient(to right, rgba(${version.color}, 0.8), rgba(${version.color}, 0.7))`}"
            />
            <div class="version__card__content justify-center flex-col "
                 :class="`${index%2==0?'md:flex-row': 'md:flex-row-reverse'}`">
              <div class="card__content__tech items-center">
                <div class="tech__title">
                  <shadow-text>{{ version.title.highlight }}</shadow-text>
                  {{ version.title.content }}
                </div>
                <div v-for="tech in version.tech" class="flex items-center mt-[15px]">
                  <img :src="tech.icon" class="w-[26px] h-[26px] mr-[5px]" alt="" draggable="false"/>
                  <div class="text-[#4B5963]"> {{ tech.content }}</div>
                </div>
                <border-gradient-button @click="openUrl(version.link)" class="mt-[30px] w-full">
                  Github
                </border-gradient-button>
              </div>
              <div class="card__content__img">
                <img :src="version.img" alt="" draggable="false">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  documentDriven: true
})
import {openUrl} from "~/utils/common";

useHead({title: "Linyu：一款支持多端的及时通讯系统"})

const cardAreaData = [
  {
    icon: "icon-anquan",
    title: "数据安全",
    content: "支持 HTTPS 协议，全面保障用户隐私和数据安全。支持消息加密存储与传输，防止信息泄露或篡改。"
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

const versionCardData = [
  {
    color: '178, 131, 255',
    title: {highlight: "Mini版,", content: "技术选型"},
    tech: [
      {icon: "/vue.svg", content: "Vue3"},
      {icon: "/vite.svg", content: "Vite6"},
      {icon: "/rtc.svg", content: "WebRtc"},
      {icon: "/ws.svg", content: "WebSocket"},
      {icon: "/springboot.svg", content: "SpringBoot"},
    ],
    img: "/mini.png",
    link: "https://github.com/linyu-im/linyu-mini-web",
  },
  {
    color: '184, 255, 195',
    title: {highlight: "桌面端,", content: "技术选型"},
    tech: [
      {icon: "/tauri.svg", content: "Tauri"},
      {icon: "/react.svg", content: "React"},
      {icon: "/rtc.svg", content: "WebRtc"},
      {icon: "/ws.svg", content: "WebSocket"},
    ],
    img: "/desktop.png",
    link: "https://github.com/DWHengr/linyu-client"
  },
  {
    color: '255, 175, 215',
    title: {highlight: "移动端,", content: "技术选型"},
    tech: [
      {icon: "/getx.svg", content: "Getx"},
      {icon: "/flutter.svg", content: "Flutter"},
      {icon: "/rtc.svg", content: "WebRtc"},
      {icon: "/ws.svg", content: "WebSocket"}
    ],
    img: "/mobile.png",
    link: "https://github.com/DWHengr/linyu_mobile"
  }
]
</script>

<style lang="scss" scoped>
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
        padding: 10px 20px;
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

    .content__version {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 50px;

      .content__version__h1 {
        font-weight: 600;
        margin: 60px 0;
      }

      .content__version__card {
        background: linear-gradient(to left, #F4F8FB, #F5F7FA);
        border-radius: 10px;
        border: #D6D6D6 1px solid;
        position: relative;
        padding: 40px;
        display: flex;
        width: 85%;
        margin-bottom: 50px;
        align-items: center;
        justify-content: center;

        .version__card__content {
          display: flex;
          align-items: center;
          gap: 50px;

          .card__content__tech {
            display: flex;
            flex-direction: column;
            min-width: 200px;
            flex-shrink: 0;

            .tech__title {
              font-size: 24px;
              font-weight: 600;
              margin-bottom: 10px;
            }

            .tech__item {
            }
          }

          .card__content__img {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            padding: 10px;
            border-radius: 10px;

            img {
              max-height: 440px;
              object-fit: contain;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    }

  }
}

.gradient-sphere {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  filter: blur(64px);
  opacity: 0.05;
  z-index: 1;
  animation: gradient-sphere-animate 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes gradient-sphere-animate {
  50% {
    opacity: 0.25;
  }
}

</style>