<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const { t } = useLocale()
const quality = ref(72)
const animatedLift = ref(0)
let gsapRef: any = null

const lcp = computed(() => Math.max(1.2, 5.1 - quality.value * 0.038))
const inputDelay = computed(() => Math.max(30, 310 - quality.value * 2.2))
const completionRate = computed(() => Math.min(96, 56 + quality.value * 0.42))
const conversionLift = computed(() => Math.max(0, (quality.value - 40) * 0.58))

const bars = computed(() => [
  { label: t('interactive_bar_1'), value: completionRate.value, suffix: '%' },
  { label: t('interactive_bar_2'), value: Math.max(0, 100 - (inputDelay.value / 3.1)), suffix: '%' },
  { label: t('interactive_bar_3'), value: Math.max(0, 100 - lcp.value * 14), suffix: '%' }
])

watch(
  conversionLift,
  (next) => {
    if (!gsapRef) {
      animatedLift.value = next
      return
    }

    const state = { value: animatedLift.value }
    gsapRef.to(state, {
      duration: 0.45,
      ease: 'power2.out',
      value: next,
      onUpdate: () => {
        animatedLift.value = state.value
      }
    })
  },
  { immediate: true }
)

onMounted(async () => {
  if (!root.value) {
    return
  }

  const { gsap } = await useGsap()
  gsapRef = gsap

  gsap.from(root.value.querySelectorAll<HTMLElement>('.interactive-reveal'), {
    autoAlpha: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.1,
    y: 28,
    scrollTrigger: {
      trigger: root.value,
      start: 'top 75%'
    }
  })
})
</script>

<template>
  <section ref="root" class="interactive section-space">
    <div class="container">
      <p class="interactive__eyebrow interactive-reveal">{{ t('interactive_eyebrow') }}</p>
      <h2 class="interactive-reveal">{{ t('interactive_h2') }}</h2>
      <p class="interactive__lead interactive-reveal">{{ t('interactive_lead') }}</p>

      <div class="interactive__panel interactive-reveal">
        <div class="interactive__controls">
          <label for="quality">{{ t('interactive_label') }} <strong>{{ quality }}</strong></label>
          <input id="quality" v-model.number="quality" type="range" min="0" max="100" step="1" />
          <p>
            {{ t('interactive_conversion') }}
            <span>+{{ animatedLift.toFixed(1) }}%</span>
          </p>
        </div>

        <div class="interactive__metrics">
          <article v-for="item in bars" :key="item.label" class="metric-row">
            <header>
              <span>{{ item.label }}</span>
              <strong>{{ item.value.toFixed(0) }}{{ item.suffix }}</strong>
            </header>
            <div class="metric-row__rail">
              <div class="metric-row__fill" :style="{ width: `${item.value}%` }" />
            </div>
          </article>

          <div class="interactive__statline">
            <p>{{ t('interactive_lcp') }} <strong>{{ lcp.toFixed(2) }}s</strong></p>
            <p>{{ t('interactive_fid') }} <strong>{{ inputDelay.toFixed(0) }}ms</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.interactive {
  border-top: 1px solid var(--border);
}

.interactive__eyebrow {
  color: var(--accent);
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 0;
  text-transform: uppercase;
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  letter-spacing: -0.02em;
  margin: 14px 0 10px;
}

.interactive__lead {
  color: var(--muted);
  margin: 0;
  max-width: 62ch;
}

.interactive__panel {
  background: linear-gradient(180deg, rgba(154, 255, 45, 0.08), rgba(154, 255, 45, 0.02));
  border: 1px solid rgba(154, 255, 45, 0.24);
  border-radius: var(--radius);
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1.2fr;
  margin-top: 28px;
  padding: 22px;
}

.interactive__controls {
  label {
    display: block;
    font-size: 0.95rem;
    margin-bottom: 16px;
  }

  input {
    accent-color: var(--accent);
    cursor: pointer;
    width: 100%;
  }

  p {
    color: var(--muted);
    margin: 14px 0 0;

    span {
      color: var(--accent);
      font-weight: 700;
    }
  }
}

.metric-row {
  margin-bottom: 14px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    span {
      color: var(--muted);
      font-size: 0.9rem;
    }

    strong {
      font-size: 0.95rem;
    }
  }
}

.metric-row__rail {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  height: 8px;
  overflow: hidden;
}

.metric-row__fill {
  background: linear-gradient(90deg, #8dfd22, #b6ff62);
  border-radius: inherit;
  height: 100%;
  transition: width 0.32s ease;
}

.interactive__statline {
  border-top: 1px dashed rgba(255, 255, 255, 0.2);
  display: flex;
  gap: 16px;
  margin-top: 18px;
  padding-top: 14px;

  p {
    color: var(--muted);
    margin: 0;

    strong {
      color: var(--text);
      font-weight: 600;
    }
  }
}

@media (max-width: 920px) {
  .interactive__panel {
    grid-template-columns: 1fr;
  }

  .interactive__statline {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
