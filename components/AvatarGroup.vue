<template>
  <div class="avatar-group">
    <div class="flex h-[60px]">
      <div
          v-for="(avatar, index) in avatars"
          :key="avatar.id"
          class="avatar"
      >
        <img class="avatar-img"
             :src="avatar.img"
             :alt="avatar.name"
             draggable="false"
             @mouseenter="() => onMousedown(index)"
             @mouseleave="onMouseleave"
             :class="{'active':activeAvatar?.id === avatar.id}"
             @click="openUrl(avatar.url)"
        />
      </div>
    </div>
    <transition name="fade">
      <div class="avatar-name" v-if="activeAvatar?.name">
        {{ activeAvatar.name }}
      </div>
    </transition>
  </div>
</template>

<script setup>
const avatars = [
  {
    id: 1,
    img: '/avatar/setSail_mountain.png',
    name: 'setSail_mountain',
    url: 'https://github.com/myujie'
  },
  {
    id: 2,
    img: '/avatar/heath.png',
    name: 'Heath',
    url: 'https://github.com/DWHengr'
  },
  {
    id: 3,
    img: '/avatar/colouredglaze.png',
    name: 'colouredglaze',
    url: 'https://github.com/COLOUREDGLAZES'
  },
];

const activeAvatar = ref(avatars[1]);

const onMousedown = (index) => {
  activeAvatar.value = avatars[index];
};

const onMouseleave = () => {
  activeAvatar.value = null
  nextTick(() => {
    activeAvatar.value = avatars[1]
  })
};
</script>

<style lang="scss" scoped>
.avatar-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  user-select: none;
  height: 100px;

  .avatar {
    display: flex;
    align-items: center;
    margin: 0 -5px;

    .avatar-img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        width: 65px;
        height: 65px;
        border: #EDF2F9 4px solid;
        z-index: 100;
      }
    }
  }

  .avatar-name {
    font-size: 16px;
    font-weight: 600;
  }

}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
