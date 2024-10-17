<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Lazy</p>
      <div class="footer-links">
        <a href="https://github.com/hiyongliz/hiyongliz.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: var(--c-bg-mute);
  padding: 2rem 0;
  margin-top: 2rem;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

a {
  color: var(--c-text);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-links {
    margin-top: 1rem;
  }
}
</style>
