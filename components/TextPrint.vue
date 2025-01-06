<template>
  <div class="typing-text">
    <slot/>
  </div>
</template>

<script setup>
const resetTypingAnimation = () => {
  const typingText = document.querySelector('.typing-text')
  if (typingText) {
    typingText.style.animation = 'none'
    void typingText.offsetWidth
    typingText.style.animation = null
  }
}
let intervalId
onMounted(() => {
  intervalId = setInterval(resetTypingAnimation, 6000)
})
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.typing-text {
  padding: 8px;
  display: inline-block;
  overflow: hidden;
  border-right: 4px solid rgb(var(--text-color));
  white-space: nowrap;
  margin: 0;
  animation: typing 3s steps(40, end),
  blink-caret .75s step-end infinite;
  vertical-align: bottom;
}

@keyframes typing {
  from {
    width: 0
  }
  to {
    width: 100%
  }
}

@keyframes blink-caret {
  from, to {
    border-color: transparent
  }
  50% {
    border-color: rgb(var(--text-color))
  }
}
</style>