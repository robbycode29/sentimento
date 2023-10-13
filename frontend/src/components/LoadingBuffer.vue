<template>
    <div class="flex gap-2 py-4">
        <div class="bg-white w-1 h-1 rounded-full animate-bounce-custom "></div>
        <div class="bg-white w-1 h-1 rounded-full animate-bounce-custom delay-150"></div>
        <div class="bg-white w-1 h-1 rounded-full animate-bounce-custom delay-300"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoadingBuffer',
});
</script>
<style scoped>
.animate-bounce-custom {
  animation: bounce 1s infinite;
}

.delay-150 {
  animation-delay: 150ms;
}
.delay-300 {
  animation-delay: 300ms;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
