<template>
  <div @click="toggleDark" class="color-switch">
    <i class="iconfont leading-[18px]" :class="`${colorMode.preference==='dark'?'icon-taiyang':'icon-yueliang'}`"
       style="font-size: 18px"/>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const setColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

// 切换动画
async function toggleDark(e) {
  const x = e.clientX
  const y = e.clientY
  const isDark = colorMode.preference === 'dark'
  if (!enableTransitions()) {
    setColorMode()
    return
  }
  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    setColorMode()
    await nextTick()
  }).ready

  document.documentElement.animate(
      {clipPath: !isDark ? clipPath.reverse() : clipPath},
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${!isDark ? 'old' : 'new'}(root)`
      }
  )
}
</script>

<style>

.color-switch {
  user-select: none;
  cursor: pointer;
  padding: 4px;

  &:hover {
    background-color: var(--button-hover-color);
    border-radius: 5px;
  }
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
