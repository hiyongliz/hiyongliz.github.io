<script lang="ts" setup>
const main = ref<HTMLElement | null>(null)
const contentWidth = computed(() => {
  return `width: calc(100vw - 300px)`
})
</script>

<template>
  <main>
    <div ref="main" flex="~">
      <div w-300px min-w-250px>
        <div w-full h-80px flex="~" items-center text-8 px-10 font-bold>
          🌰荔枝周刊
        </div>
      </div>
      <div h-100vh overflow-scroll :style="contentWidth">
        <div w-full h-80px flex="~" items-center text-8 font-bold>
          第01期 - 功不唐捐
        </div>
        <div>
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>
