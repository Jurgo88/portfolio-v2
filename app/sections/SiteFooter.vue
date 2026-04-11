<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <p>hello@yourdomain.com</p>
      <p>Bratislava, Slovakia</p>
      <p>&copy; {{ year }} Juraj. Built with Nuxt 3.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  border-top: 1px solid var(--border);
  padding: 26px 0 34px;
}

.site-footer__inner {
  color: var(--muted);
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  justify-content: space-between;

  p {
    margin: 0;
  }
}
</style>
