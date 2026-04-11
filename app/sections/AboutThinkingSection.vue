<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const { t } = useLocale()

onMounted(async () => {
  if (!root.value) {
    return
  }

  const { gsap } = await useGsap()

  gsap.from(root.value.querySelectorAll<HTMLElement>('.about-reveal'), {
    autoAlpha: 0,
    duration: 0.85,
    ease: 'power2.out',
    stagger: 0.12,
    y: 34,
    scrollTrigger: {
      trigger: root.value,
      start: 'top 75%'
    }
  })
})
</script>

<template>
  <section id="about" ref="root" class="about section-space">
    <div class="container about__grid">
      <div class="about__left about-reveal">
        <p class="about__eyebrow">{{ t('about_eyebrow') }}</p>
        <h2>
          {{ t('about_h2_1') }}
          <span>{{ t('about_h2_accent') }}</span>{{ t('about_h2_2') }}
        </h2>
        <p>{{ t('about_copy') }}</p>
      </div>

      <div class="about__right">
        <article class="about-point about-reveal">
          <h3>{{ t('about_perf_title') }}</h3>
          <p>{{ t('about_perf_copy') }}</p>
        </article>
        <article class="about-point about-reveal">
          <h3>{{ t('about_ux_title') }}</h3>
          <p>{{ t('about_ux_copy') }}</p>
        </article>
        <article class="about-point about-reveal">
          <h3>{{ t('about_scale_title') }}</h3>
          <p>{{ t('about_scale_copy') }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  border-top: 1px solid var(--border);
}

.about__grid {
  display: grid;
  gap: 36px;
  grid-template-columns: 1.1fr 1fr;
}

.about__left {
  position: sticky;
  top: 120px;
  align-self: start;

  h2 {
    font-size: clamp(1.8rem, 4.5vw, 3.5rem);
    letter-spacing: -0.02em;
    line-height: 1.12;
    margin: 0;
    max-width: 13ch;

    span {
      color: var(--accent);
    }
  }

  p {
    color: var(--muted);
    margin: 18px 0 0;
    max-width: 52ch;
  }
}

.about__eyebrow {
  color: var(--accent) !important;
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 14px !important;
  text-transform: uppercase;
}

.about__right {
  display: grid;
  gap: 14px;
}

.about-point {
  background: var(--bg-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;

  h3 {
    font-size: 1.05rem;
    margin: 0;
  }

  p {
    color: var(--muted);
    margin: 10px 0 0;
  }
}

@media (max-width: 980px) {
  .about__grid {
    grid-template-columns: 1fr;
  }

  .about__left {
    position: static;
  }
}
</style>
