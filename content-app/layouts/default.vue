<template>
  <main class="markdown-content">
    <NavBar />
    <div class="content-container">
      <slot />
    </div>

    <div class="giscus-container">
      <the-giscus :key="$route.path" />
    </div>
    <!-- <TheFooter /> -->
  </main>
</template>

<style scoped>
.content-container,
.giscus-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

@media (min-width: 1024px) {
  .content-container,
  .giscus-container {
    max-width: 900px;
  }
}

@media (min-width: 1440px) {
  .content-container,
  .giscus-container {
    max-width: 1000px;
  }
}

@media (min-width: 1920px) {
  .content-container,
  .giscus-container {
    max-width: 1200px;
  }
}
</style>
