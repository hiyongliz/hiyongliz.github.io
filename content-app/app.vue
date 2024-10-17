<script lang="ts" setup>
import '~/styles/main.css';
</script>

<template>
  <NuxtLayout>
    <NuxtPage :key="$route.fullPath" />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  line-height: 1.5;
}

@media (min-width: 1921px) {
  body {
    font-size: 18px;
  }
}
</style>
