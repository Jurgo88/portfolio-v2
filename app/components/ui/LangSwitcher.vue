<script setup lang="ts">
const { locale, toggleLocale } = useLocale()
</script>

<template>
  <button
    class="lang-switcher"
    :aria-label="`Switch to ${locale === 'en' ? 'Slovak' : 'English'}`"
    @click="toggleLocale"
  >
    <span :class="{ 'lang-switcher__active': locale === 'en' }">EN</span>
    <span class="lang-switcher__sep">/</span>
    <span :class="{ 'lang-switcher__active': locale === 'sk' }">SK</span>
  </button>
</template>

<style scoped lang="scss">
.lang-switcher {
  align-items: center;
  background: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--muted);
  cursor: pointer;
  display: flex;
  font-size: 0.8rem;
  font-weight: 700;
  gap: 4px;
  letter-spacing: 0.06em;
  padding: 5px 10px;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--text);
  }
}

.lang-switcher__sep {
  color: var(--border);
}

.lang-switcher__active {
  color: var(--accent);
}
</style>
