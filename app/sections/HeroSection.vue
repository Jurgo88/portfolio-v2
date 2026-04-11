<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const { trackEvent } = useTracking()

onMounted(async () => {
  if (!root.value) {
    return
  }

  const { gsap } = await useGsap()

  const revealNodes = root.value.querySelectorAll<HTMLElement>('[data-reveal]')

  gsap.from(revealNodes, {
    autoAlpha: 0,
    duration: 0.85,
    ease: 'power2.out',
    stagger: 0.13,
    y: 28
  })
})

const onCtaClick = (label: string) => {
  trackEvent('cta_click', { label, location: 'hero' })
}
</script>

<template>
  <section id="top" ref="root" class="hero section-space">
    <div class="container">
      <p class="hero__kicker" data-reveal>Frontend Engineering For Business Growth</p>
      <h1 data-reveal>
        I Build Fast Digital Products
        <br />
        That Convert Visitors Into Revenue.
      </h1>
      <p class="hero__copy" data-reveal>
        Senior frontend engineer focused on performance, UX, and measurable business outcomes.
        From first paint to final conversion, every detail is built to move metrics.
      </p>
      <div class="hero__cta" data-reveal>
        <UiBaseButton to="#projects" variant="primary" @click="onCtaClick('View Work')">
          View Work
        </UiBaseButton>
        <UiBaseButton to="#contact" variant="ghost" @click="onCtaClick('Contact')">
          Contact
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding-top: 132px;
}

.hero__kicker {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 0 0 18px;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(2.2rem, 6vw, 4.9rem);
  letter-spacing: -0.02em;
  line-height: 1.06;
  margin: 0;
  max-width: 16ch;
}

.hero__copy {
  color: var(--muted);
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  margin: 24px 0 0;
  max-width: 62ch;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

@media (max-width: 900px) {
  .hero {
    padding-top: 96px;
  }
}
</style>
