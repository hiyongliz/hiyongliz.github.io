<template>
  <main class="markdown-content">
    <NavBar />
    <div px-100 py-10>
      <slot />
    </div>

    <div px-100 py-10>
      <the-giscus />
    </div>
  </main>
</template>
