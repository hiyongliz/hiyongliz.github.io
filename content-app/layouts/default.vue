<template>
  <main items-center class="markdown-content">
    <NavBar />
    <div px-80 py-10>
      <slot />
    </div>

    <div px-80 py-10>
      <the-giscus />
    </div>
  </main>
</template>
