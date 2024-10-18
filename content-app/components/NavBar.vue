<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="navbar-logo">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>
      <div class="navbar-links">
        <NuxtLink to="/blogs">
          <div>博客</div>
        </NuxtLink>
        <NuxtLink to="/weekly">
          <div>周刊</div>
        </NuxtLink>
        <NuxtLink to="https://github.com/hiyongliz/hiyongliz.github.io" target="_blank">
          <div>GitHub</div>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .navbar-content {
    max-width: 900px;
  }
}

@media (min-width: 1440px) {
  .navbar-content {
    max-width: 1000px;
  }
}

@media (min-width: 1920px) {
  .navbar-content {
    max-width: 1200px;
  }
}
</style>
