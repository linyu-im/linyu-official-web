<template>
  <div class="shadow-text">
    <slot></slot>
  </div>
</template>

<style scoped>
.shadow-text {
  position: relative;
  display: inline-block;
  color: #000;
  text-align: center;
  z-index: 1;
  margin: 0 5px;
}

.shadow-text::after {
  content: '';
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 20px);
  height: 12px;
  background: linear-gradient(to right, rgba(var(--primary-color), 0.6), rgba(var(--primary-color), 0.3));
  pointer-events: none;
  z-index: -1;
  border-radius: 10px;
}
</style>
