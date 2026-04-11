<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const { trackEvent } = useTracking()
const { t } = useLocale()

const links = computed(() => [
  { label: t('nav_work'), to: '#projects' },
  { label: t('nav_about'), to: '#about' },
  { label: t('nav_contact'), to: '#contact' }
])

onMounted(async () => {
  if (!root.value) {
    return
  }

  const { gsap } = await useGsap()

  gsap.from(root.value, {
    autoAlpha: 0,
    duration: 0.6,
    ease: 'power2.out',
    y: -16
  })
})

const onNavClick = (label: string) => {
  trackEvent('nav_click', { label, location: 'top_nav' })
}

const onPrimaryCtaClick = () => {
  trackEvent('cta_click', { label: 'Start Project', location: 'top_nav' })
}
</script>

<template>
  <header ref="root" class="top-nav">
    <div class="container top-nav__inner">
      <a href="#top" class="top-nav__brand">Juraj.</a>

      <nav aria-label="Primary">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.to"
          @click="onNavClick(link.label)"
        >
          {{ link.label }}
        </a>
      </nav>

      <UiLangSwitcher />
      <UiBaseButton to="#contact" variant="ghost" :aria-label="t('nav_cta')" @click="onPrimaryCtaClick">
        {{ t('nav_cta') }}
      </UiBaseButton>
    </div>
  </header>
</template>

<style scoped lang="scss">
.top-nav {
  backdrop-filter: blur(8px);
  background: rgba(10, 13, 16, 0.75);
  border-bottom: 1px solid var(--border);
  left: 0;
  position: sticky;
  top: 0;
  z-index: 30;
}

.top-nav__inner {
  align-items: center;
  display: flex;
  gap: 18px;
  justify-content: space-between;
  min-height: 74px;
}

.top-nav__brand {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.03em;
}

nav {
  display: flex;
  gap: 22px;

  a {
    color: var(--muted);
    font-size: 0.94rem;
    font-weight: 600;
    position: relative;
    transition: color 0.25s ease;

    &::after {
      background: var(--accent);
      bottom: -5px;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.25s ease;
      width: 100%;
    }

    &:hover {
      color: var(--text);
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
}

@media (max-width: 780px) {
  nav {
    display: none;
  }
}
</style>
