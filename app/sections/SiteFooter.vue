<script setup lang="ts">
const year = new Date().getFullYear()
const { t } = useLocale()

const socials = [
  { label: 'GitHub', href: 'https://github.com/jurgo-sk' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/juraj-palus' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__contact">
        <p>palus.dev@gmail.com</p>
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.href"
          target="_blank"
          rel="noopener noreferrer"
          class="site-footer__social"
        >{{ s.label }}</a>
      </div>
      <p>&copy; {{ year }} Created by <a href="https://jurgo.sk" target="_blank" rel="noopener noreferrer">Jurgo</a></p>
      <p>{{ t('footer_built') }}</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  border-top: 1px solid var(--border);
  padding: 26px 0 34px;
}

.site-footer__inner {
  align-items: center;
  color: var(--muted);
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  justify-content: space-between;

  p {
    margin: 0;
  }
}

.site-footer__contact {
  align-items: center;
  display: flex;
  gap: 16px;

  p {
    margin: 0;
  }
}

.site-footer__social {
  color: var(--muted);
  font-size: 0.88rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text);
  }
}
</style>
