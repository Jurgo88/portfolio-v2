<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const kicker = ref<HTMLElement | null>(null)
const line1 = ref<HTMLElement | null>(null)
const line2 = ref<HTMLElement | null>(null)
const line3 = ref<HTMLElement | null>(null)
const copy = ref<HTMLElement | null>(null)
const cta = ref<HTMLElement | null>(null)
const { trackEvent } = useTracking()
const { t } = useLocale()

let cleanupMouse: (() => void) | null = null

onMounted(async () => {
  if (!root.value) return

  const { gsap } = await useGsap()

  // ── Entrance animations ──────────────────────────────────────────
  gsap.from(kicker.value, {
    autoAlpha: 0,
    y: -14,
    duration: 0.6,
    ease: 'power2.out',
    delay: 0.05
  })

  gsap.from(line1.value, {
    autoAlpha: 0,
    x: -55,
    duration: 0.7,
    ease: 'power3.out',
    delay: 0.2
  })

  gsap.from(line2.value, {
    autoAlpha: 0,
    y: 72,
    scale: 0.88,
    filter: 'blur(12px)',
    duration: 1.05,
    ease: 'expo.out',
    delay: 0.35
  })

  gsap.from(line3.value, {
    autoAlpha: 0,
    x: 55,
    duration: 0.7,
    ease: 'power3.out',
    delay: 0.52,
    scale: 0.1
  })

  gsap.from([copy.value, cta.value], {
    autoAlpha: 0,
    y: 22,
    duration: 0.75,
    ease: 'power2.out',
    stagger: 0.14,
    delay: 0.72,
    // Aktivuj mouse parallax po skončení entrance
    onComplete: () => attachMouseParallax(gsap)
  })
})

function attachMouseParallax(gsap: any) {
  if (!root.value) return

  // quickTo pre každý element — rôzna rýchlosť = pocit hĺbky
  const qKickX = gsap.quickTo(kicker.value, 'x', { duration: 1.1, ease: 'power2' })
  const qKickY = gsap.quickTo(kicker.value, 'y', { duration: 1.1, ease: 'power2' })

  const qL1x = gsap.quickTo(line1.value, 'x', { duration: 0.95, ease: 'power2' })
  const qL1y = gsap.quickTo(line1.value, 'y', { duration: 0.95, ease: 'power2' })

  const qL2x = gsap.quickTo(line2.value, 'x', { duration: 0.65, ease: 'power2' })
  const qL2y = gsap.quickTo(line2.value, 'y', { duration: 0.65, ease: 'power2' })
  const qL2skew = gsap.quickTo(line2.value, 'skewX', { duration: 0.65, ease: 'power2' })

  const qL3x = gsap.quickTo(line3.value, 'x', { duration: 0.8, ease: 'power2' })
  const qL3y = gsap.quickTo(line3.value, 'y', { duration: 0.8, ease: 'power2' })

  // Hover scale + line2 color shift
  const onL3Enter = () => {
    gsap.to(line3.value, { scale: 1.8, duration: 0.4, ease: 'back.out(1.7)', overwrite: 'auto' })
    gsap.to(line2.value, { color: '#ffffff', duration: 0.3, ease: 'power2.out' })
  }
  const onL3Leave = () => {
    gsap.to(line3.value, { scale: 1, duration: 0.35, ease: 'power2.inOut', overwrite: 'auto' })
    gsap.to(line2.value, { color: 'var(--accent)', duration: 0.4, ease: 'power2.out' })
  }
  line3.value?.addEventListener('mouseenter', onL3Enter)
  line3.value?.addEventListener('mouseleave', onL3Leave)

  const onMove = (e: MouseEvent) => {
    const rect = root.value!.getBoundingClientRect()
    // Normalizovaná poloha kurzora: -0.5 → 0.5
    const nx = (e.clientX - rect.left - rect.width / 2) / rect.width
    const ny = (e.clientY - rect.top - rect.height / 2) / rect.height

    qKickX(nx * 8)
    qKickY(ny * 4)

    // Riadok 1 — mierny pohyb rovnakým smerom
    qL1x(nx * 14)
    qL1y(ny * 6)

    // Riadok 2 — najrýchlejší + jemný skew pre dynamiku
    qL2x(nx * 22)
    qL2y(ny * 90)
    qL2skew(nx * -1.5)

    // Riadok 3 — stredný pohyb
    qL3x(nx * 18)
    qL3y(ny * 7)
  }

  const onLeave = () => {
    gsap.to([kicker.value, line1.value, line2.value, line3.value], {
      x: 0,
      y: 0,
      skewX: 0,
      duration: 1.0,
      ease: 'power3.out'
    })
  }

  root.value.addEventListener('mousemove', onMove)
  root.value.addEventListener('mouseleave', onLeave)

  cleanupMouse = () => {
    root.value?.removeEventListener('mousemove', onMove)
    root.value?.removeEventListener('mouseleave', onLeave)
    line3.value?.removeEventListener('mouseenter', onL3Enter)
    line3.value?.removeEventListener('mouseleave', onL3Leave)
  }
}

onBeforeUnmount(() => {
  cleanupMouse?.()
})

const onCtaClick = (label: string) => {
  trackEvent('cta_click', { label, location: 'hero' })
}
</script>

<template>
  <section id="top" ref="root" class="hero section-space">
    <div class="container">
      <p ref="kicker" class="hero_kicker">{{ t('hero_kicker') }}</p>

      <h1>
        <span ref="line1" class="hero_line hero_line-1">{{ t('hero_h1_1') }}</span>
        <span ref="line2" class="hero_line hero_line-2">{{ t('hero_h1_2') }}</span>
        <span ref="line3" class="hero_line hero_line-3">{{ t('hero_h1_3') }}</span>
      </h1>

      <p ref="copy" class="hero_copy">{{ t('hero_copy') }}</p>

      <div ref="cta" class="hero_cta">
        <UiBaseButton to="#projects" variant="primary" @click="onCtaClick(t('hero_cta_work'))">
          {{ t('hero_cta_work') }}
        </UiBaseButton>
        <UiBaseButton to="#contact" variant="ghost" @click="onCtaClick(t('hero_cta_contact'))">
          {{ t('hero_cta_contact') }}
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding-top: 140px;
}

.hero_kicker {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  margin: 0 0 28px;
  text-transform: uppercase;
}

h1 {
  margin: 0;
}

.hero_line {
  display: block;
  line-height: 1.1;
  will-change: transform;
}

// Riadok 1 — prefix, tlmená farba, ľahká váha
.hero_line-1 {
  color: rgba(244, 247, 251, 0.35);
  font-size: clamp(1.4rem, 3.2vw, 2.6rem);
  font-weight: 400;
  letter-spacing: -0.01em;
  margin-bottom: 4px;
}

// Riadok 2 — hero statement, dominantný
.hero_line-2 {
  color: var(--accent);
  font-size: clamp(3rem, 8.5vw, 7.2rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 0.97;
  text-shadow: 0 0 60px rgba(154, 255, 45, 0.2);
  text-transform: uppercase;
}

// Riadok 3 — záver s hover efektom
.hero_line-3 {
  color: rgba(244, 247, 251, 0.68);
  cursor: default;
  display: inline-block;
  position: relative;
  font-size: clamp(1.6rem, 3.8vw, 3.2rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-top: 6px;
  transform-origin: left center;
  transition:
    color 0.3s ease,
    text-shadow 0.3s ease;

  // Scale cez CSS, parallax cez GSAP — oddelené vlastnosti
  &::after {
    background: var(--accent);
    bottom: -3px;
    content: '';
    height: 1.5px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    width: 100%;
  }

  &:hover {
    color: var(--accent);
    text-shadow: 0 0 40px rgba(154, 255, 45, 0.28);

    &::after {
      transform: scaleX(1);
    }
  }
}

.hero_copy {
  color: var(--muted);
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.65;
  margin: 32px 0 0;
  max-width: 56ch;
  will-change: transform;
}

.hero_cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
  will-change: transform;
}

@media (max-width: 900px) {
  .hero {
    padding-top: 100px;
  }

  .hero_line-2 {
    line-height: 1.0;
  }
}

// Na mobile vypni parallax (touch zariadenia nemajú mousemove)
@media (hover: none) {
  .hero_line {
    will-change: auto;
  }
}
</style>
