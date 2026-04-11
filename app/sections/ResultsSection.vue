<script setup lang="ts">
const root = ref<HTMLElement | null>(null)

const metrics = [
  { label: 'Faster load time', value: 43, suffix: '%' },
  { label: 'Improved conversion', value: 27, suffix: '%' },
  { label: 'Lighthouse performance', value: 96, suffix: '/100' },
  { label: 'Reduced support friction', value: 31, suffix: '%' }
]

const displayed = ref(metrics.map(() => 0))

const formatMetric = (value: number) => Math.round(value)

onMounted(async () => {
  if (!root.value) {
    return
  }

  const { gsap } = await useGsap()

  gsap.from(root.value.querySelectorAll<HTMLElement>('.result-card'), {
    autoAlpha: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.12,
    y: 30,
    scrollTrigger: {
      trigger: root.value,
      start: 'top 78%'
    }
  })

  metrics.forEach((metric, index) => {
    const state = { value: 0 }

    gsap.to(state, {
      duration: 1.15,
      ease: 'power2.out',
      value: metric.value,
      scrollTrigger: {
        trigger: root.value,
        start: 'top 72%',
        once: true
      },
      onUpdate: () => {
        displayed.value[index] = state.value
      }
    })
  })
})
</script>

<template>
  <section ref="root" class="results section-space">
    <div class="container">
      <p class="results__eyebrow">Results</p>
      <h2>Outcomes Clients Actually Care About</h2>

      <div class="results__grid">
        <article v-for="(metric, index) in metrics" :key="metric.label" class="result-card">
          <p class="result-card__value">{{ formatMetric(displayed[index]) }}{{ metric.suffix }}</p>
          <p class="result-card__label">{{ metric.label }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.results {
  border-top: 1px solid var(--border);
}

.results__eyebrow {
  color: var(--accent);
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 0;
  text-transform: uppercase;
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.9rem);
  letter-spacing: -0.02em;
  margin: 14px 0 0;
  max-width: 18ch;
}

.results__grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 26px;
}

.result-card {
  background: var(--bg-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
}

.result-card__value {
  color: var(--accent);
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
}

.result-card__label {
  color: var(--muted);
  margin: 8px 0 0;
}

@media (max-width: 1000px) {
  .results__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .results__grid {
    grid-template-columns: 1fr;
  }
}
</style>
