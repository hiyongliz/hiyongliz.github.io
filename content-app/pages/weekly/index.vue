<script setup lang="ts">
import { data } from '~/data/weekly';

const sortedPosts = computed(() => {
  return [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})
</script>

<template>
  <div class="blogs-container">
    <h1 class="page-title">周刊</h1>
    <ul v-if="sortedPosts.length" class="post-list">
      <li v-for="post in sortedPosts" :key="post.title" class="post-item">
        <NuxtLink :to="`/blogs/${post.title}`" class="post-link" target="_blank">
          <h2 class="post-title">{{ post.title }}</h2>
          <p v-if="post.date" class="post-date">{{ new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
        </NuxtLink>
      </li>
    </ul>
    <p v-else class="no-posts">暂时没有周刊。</p>
  </div>
</template>

<style scoped>
.blogs-container {
  padding: 2rem 0;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  /* text-align: center; */
  color: var(--c-heading);
}

.post-list {
  list-style-type: none;
  padding: 0;
}

.post-item {
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--c-border);
  padding-bottom: 2rem;
}

.post-item:last-child {
  border-bottom: none;
}

.post-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.post-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--c-heading);
}

.post-description {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--c-text);
}

.post-date {
  font-size: 0.9rem;
  color: var(--c-text-light);
}

.no-posts {
  text-align: center;
  font-size: 1.2rem;
  color: var(--c-text-light);
}
</style>
