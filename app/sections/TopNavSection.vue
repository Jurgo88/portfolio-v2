<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const { trackEvent } = useTracking()
const { t } = useLocale()

const isScrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('')

const links = computed(() => [
  { label: t('nav_work'), to: '#projects', id: 'projects' },
  { label: t('nav_about'), to: '#about', id: 'about' },
  { label: t('nav_contact'), to: '#contact', id: 'contact' }
])

let cleanupFns: (() => void)[] = []

onMounted(async () => {
  if (!root.value) return

  const { gsap } = await useGsap()
  gsap.from(root.value, {
    autoAlpha: 0,
    duration: 0.6,
    ease: 'power2.out',
    y: -16
  })

  const onScroll = () => {
    isScrolled.value = window.scrollY > 24
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  cleanupFns.push(() => window.removeEventListener('scroll', onScroll))

  const sections = document.querySelectorAll('section[id]')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      })
    },
    { rootMargin: '-20% 0px -60% 0px' }
  )
  sections.forEach(s => observer.observe(s))
  cleanupFns.push(() => observer.disconnect())

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') mobileOpen.value = false
  }
  document.addEventListener('keydown', onKeydown)
  cleanupFns.push(() => document.removeEventListener('keydown', onKeydown))
})

onUnmounted(() => {
  cleanupFns.forEach(fn => fn())
})

const onNavClick = (label: string) => {
  trackEvent('nav_click', { label, location: 'top_nav' })
  mobileOpen.value = false
}

const onPrimaryCtaClick = () => {
  trackEvent('cta_click', { label: 'Start Project', location: 'top_nav' })
  mobileOpen.value = false
}
</script>

<template>
  <header ref="root" class="top-nav" :class="{ 'top-nav--scrolled': isScrolled }">
    <div class="container top-nav__inner">
      <a href="#top" class="top-nav__brand" @click="mobileOpen = false">
        <a href="#contact" class="top-nav__brand-available-wrap" :title="t('nav_available_tooltip')" @click.stop="mobileOpen = false">
          <span class="top-nav__brand-available" :aria-label="t('nav_available_tooltip')" />
        </a>
        <span class="top-nav__brand-text">
          <span v-for="(char, i) in 'Juraj'" :key="i" class="top-nav__brand-char" :style="{ '--i': i }">{{ char }}</span><span class="top-nav__brand-dot">.Paluš</span>
        </span>
      </a>

      <nav class="top-nav__nav" aria-label="Primary">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.to"
          class="top-nav__link"
          :class="{ 'top-nav__link--active': activeSection === link.id }"
          @click="onNavClick(link.label)"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="top-nav__right">
        <UiLangSwitcher />

        <UiBaseButton
          to="mailto:palus.dev@gmail.com"
          variant="accent-outline"
          :aria-label="t('nav_cta')"
          class="top-nav__cta"
          @click="onPrimaryCtaClick"
        >
          {{ t('nav_cta') }}
        </UiBaseButton>

        <button
          class="top-nav__hamburger"
          :class="{ 'top-nav__hamburger--open': mobileOpen }"
          :aria-label="mobileOpen ? t('mobile_menu_close') : t('mobile_menu_open')"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = !mobileOpen"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>

    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="top-nav__mobile" role="dialog" aria-modal="true">
        <nav class="top-nav__mobile-nav" aria-label="Mobile primary">
          <a
            v-for="(link, i) in links"
            :key="link.label"
            :href="link.to"
            class="top-nav__mobile-link"
            :class="{ 'top-nav__mobile-link--active': activeSection === link.id }"
            :style="{ '--i': i }"
            @click="onNavClick(link.label)"
          >
            <span class="top-nav__mobile-index">0{{ i + 1 }}</span>
            {{ link.label }}
          </a>
        </nav>

        <div class="top-nav__mobile-footer">
          <UiBaseButton
            to="#contact"
            variant="primary"
            class="top-nav__mobile-cta"
            @click="onPrimaryCtaClick"
          >
            {{ t('nav_cta') }}
          </UiBaseButton>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Mobile menu backdrop -->
  <Transition name="backdrop">
    <div
      v-if="mobileOpen"
      class="top-nav__backdrop"
      aria-hidden="true"
      @click="mobileOpen = false"
    />
  </Transition>
</template>

<style scoped lang="scss">
.top-nav {
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  background: rgba(10, 13, 16, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  left: 0;
  position: sticky;
  top: 0;
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  z-index: 100;

  &--scrolled {
    background: rgba(10, 13, 16, 0.9);
    border-bottom-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }
}

.top-nav__inner {
  align-items: center;
  display: flex;
  gap: 12px;
  min-height: 70px;
}

/* Brand */
.top-nav__brand {
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 10px;
  margin-right: auto;

  &:hover .top-nav__brand-char {
    animation: brandBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    animation-delay: calc(var(--i) * 0.06s);
  }

  &:hover .top-nav__brand-dot {
    animation: brandBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.32s both;
  }
}

.top-nav__brand-available-wrap {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.top-nav__brand-available {
  background: var(--accent);
  border-radius: 50%;
  display: block;
  flex-shrink: 0;
  height: 8px;
  position: relative;
  width: 8px;

  &::after {
    animation: availablePulse 2.4s ease-in-out infinite;
    background: var(--accent);
    border-radius: 50%;
    content: '';
    inset: -3px;
    opacity: 0.45;
    position: absolute;
  }
}

.top-nav__brand-text {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.top-nav__brand-char {
  display: inline-block;
}

.top-nav__brand-dot {
  color: var(--accent);
  display: inline-block;
}

@keyframes brandBounce {
  0%   { transform: translateY(0); }
  45%  { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

@keyframes availablePulse {
  0%, 100% { transform: scale(1);   opacity: 0.45; }
  60%       { transform: scale(2.4); opacity: 0; }
}

/* Desktop nav */
.top-nav__nav {
  display: flex;
  gap: 4px;
}

.top-nav__link {
  border-radius: 8px;
  color: var(--muted);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 6px 12px;
  position: relative;
  transition: color 0.2s ease, background 0.2s ease;

  &::after {
    background: var(--accent);
    border-radius: 99px;
    bottom: 0px;
    content: '';
    height: 2px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    width: 60%;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text);
  }

  &--active {
    color: var(--text);

    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
}

/* Right side */
.top-nav__right {
  align-items: center;
  display: flex;
  gap: 10px;
}

.top-nav__cta {
  font-size: 0.875rem !important;
  padding: 8px 18px !important;
}

/* Hamburger */
.top-nav__hamburger {
  align-items: center;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  display: none;
  flex-direction: column;
  gap: 4px;
  height: 38px;
  justify-content: center;
  padding: 0 10px;
  transition: border-color 0.2s ease, background 0.2s ease;
  width: 42px;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.2);
  }

  span {
    background: var(--text);
    border-radius: 2px;
    display: block;
    height: 1.5px;
    transform-origin: center;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, width 0.3s ease;
    width: 20px;

    &:nth-child(2) {
      width: 14px;
    }
  }

  &--open {
    background: rgba(154, 255, 45, 0.07);
    border-color: rgba(154, 255, 45, 0.25);

    span:nth-child(1) {
      transform: translateY(5.5px) rotate(45deg);
      width: 20px;
    }

    span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }

    span:nth-child(3) {
      transform: translateY(-5.5px) rotate(-45deg);
      width: 20px;
    }
  }
}

/* Mobile menu */
.top-nav__mobile {
  background: rgba(10, 13, 16, 0.98);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  padding: 12px 0 24px;
}

.top-nav__mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
}

.top-nav__mobile-link {
  align-items: center;
  animation: slideInLink 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(var(--i) * 0.06s);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--muted);
  cursor: pointer;
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
  gap: 16px;
  padding: 16px 8px;
  transition: color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover,
  &--active {
    color: var(--text);
  }

  &--active .top-nav__mobile-index {
    color: var(--accent);
  }
}

.top-nav__mobile-index {
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  transition: color 0.2s ease;
}

.top-nav__mobile-footer {
  animation: slideInLink 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
  padding: 16px 24px 0;
}

.top-nav__mobile-cta {
  width: 100%;
}

/* Backdrop */
.top-nav__backdrop {
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
  position: fixed;
  z-index: 99;
}

/* Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.25s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

@keyframes slideInLink {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 780px) {
  .top-nav__nav,
  .top-nav__cta {
    display: none;
  }

  .top-nav__hamburger {
    display: flex;
  }
}

@media (min-width: 781px) {
  .top-nav__mobile,
  .top-nav__backdrop {
    display: none;
  }
}
</style>
