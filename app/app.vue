<script setup lang="ts">
const { locale } = useLocale()

useHead(computed(() => ({
  htmlAttrs: { lang: locale.value }
})))
</script>

<template>
  <div class="site-shell">
    <NuxtPage />
  </div>
</template>
