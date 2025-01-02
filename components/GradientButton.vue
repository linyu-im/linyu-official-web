<template>
  <div
      class="gradient-button"
      :style="{ '--gradient-direction': direction }"
      @click="$emit('click')"
  >
    <slot/>
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
  background: linear-gradient(to var(--gradient-direction), rgb(var(--minor-color)), rgb(var(--primary-color)));
  padding: 5px 30px;
  color: #FFF;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>