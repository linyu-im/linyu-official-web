<template>
  <div
      class="gradient-button"
      :style="{ '--gradient-direction': direction }"
      @click="$emit('click')"
  >
    <div class="text-[20px] justify-center flex items-center">
      <gradient-text>
        <slot/>
      </gradient-text>
      <i class="iconfont icon-jiantou text-[rgb(var(--primary-color))] ml-[10px]" style="font-size: 20px"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'left',
    },
  },
};
</script>

<style lang="scss" scoped>
.gradient-button {
  position: relative;
  padding: 8px 10px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background: transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 100px;
    padding: 4px;
    background: linear-gradient(to var(--gradient-direction),
        rgb(var(--minor-color)),
        rgb(var(--primary-color)));
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }
}
</style>