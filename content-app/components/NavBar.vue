<template>
  <div flex="~" justify-between w-full h-100px items-center px-50>
    <div flex="~" items-center>
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
    </div>
    <div flex="~" gap-4 items-center>
      <NuxtLink to="/blogs">
        <div>博客</div>
      </NuxtLink>
      <NuxtLink to="/weekly">
        <div>周刊</div>
      </NuxtLink>
      <div>RSS</div>
    </div>
  </div>
</template>
