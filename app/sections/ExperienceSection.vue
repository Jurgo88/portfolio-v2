<script setup lang="ts">
import { experience } from '~/data/experience'

const root = ref<HTMLElement | null>(null)
const { t, locale } = useLocale()

const l = <T extends { en: string; sk: string }>(field: T) => field[locale.value]

const openIndex = ref<number>(0)

const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? -1 : i
}

const onEnter = (el: Element) => {
  (el as HTMLElement).style.height = el.scrollHeight + 'px'
}
const onAfterEnter = (el: Element) => {
  (el as HTMLElement).style.height = 'auto'
}
const onLeave = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = htmlEl.scrollHeight + 'px'
  // single rAF so the browser registers the starting height before we set 0
  htmlEl.getBoundingClientRect()
  htmlEl.style.height = '0'
}

onMounted(async () => {
  if (!root.value) return
  const { gsap } = await useGsap()

  gsap.from(root.value.querySelectorAll<HTMLElement>('.exp-row'), {
    autoAlpha: 0,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.08,
    y: 22,
    scrollTrigger: {
      trigger: root.value,
      start: 'top 78%',
    },
  })
})
</script>

<template>
  <section ref="root" class="experience section-space">
    <div class="container">
      <p class="experience__eyebrow">{{ t('experience_eyebrow') }}</p>
      <h2>{{ t('experience_h2') }}</h2>

      <div class="experience__list">
        <div
          v-for="(item, i) in experience"
          :key="i"
          class="exp-row"
          :class="{ 'exp-row--open': openIndex === i }"
        >
          <button class="exp-row__header" @click="toggle(i)">
            <div class="exp-row__meta">
              <span class="exp-row__role">{{ l(item.role) }}</span>
              <span class="exp-row__company">{{ l(item.company) }}</span>
            </div>
            <span class="exp-row__period">{{ l(item.period) }}</span>
            <span class="exp-row__arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>

          <Transition
            name="exp-body"
            @enter="onEnter"
            @after-enter="onAfterEnter"
            @leave="onLeave"
          >
            <div v-if="openIndex === i" class="exp-row__body">
              <p>{{ l(item.description) }}</p>
              <ul class="exp-row__tags">
                <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.experience {
  border-top: 1px solid var(--border);
}

.experience__eyebrow {
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
}

.experience__list {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-top: 40px;
  overflow: hidden;
}

// ── Row ───────────────────────────────────────────────────────────────────────
.exp-row {
  border-bottom: 1px solid var(--border);
  transition: background 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &--open {
    background: rgba(154, 255, 45, 0.04);

    .exp-row__arrow {
      color: var(--accent);
      transform: rotate(180deg);
    }

    .exp-row__role {
      color: var(--accent);
    }

    .exp-row__company {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.15);
      color: var(--muted);
    }
  }
}

.exp-row__header {
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  gap: 16px;
  padding: 20px 24px;
  text-align: left;
  transition: background 0.2s ease;
  width: 100%;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
}

.exp-row__meta {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 4px 14px;
  align-items: baseline;
  min-width: 0;
}

.exp-row__role {
  color: var(--text);
  font-size: 0.97rem;
  font-weight: 600;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.exp-row__company {
  background: rgba(154, 255, 45, 0.1);
  border: 1px solid rgba(154, 255, 45, 0.2);
  border-radius: 6px;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 2px 8px;
}

.exp-row__period {
  color: var(--muted);
  flex-shrink: 0;
  font-size: 0.82rem;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.exp-row__arrow {
  color: var(--muted);
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s ease;

  svg {
    display: block;
  }
}

// ── Body ──────────────────────────────────────────────────────────────────────
.exp-row__body {
  overflow: hidden;
  padding: 22px;

  p {
    color: var(--muted);
    line-height: 1.65;
    margin: 0;
  }
}

.exp-row__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin: 14px 0 0;
  padding: 0;

  li {
    background: var(--bg-soft);
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--muted);
    font-size: 0.78rem;
    padding: 3px 10px;
  }
}

// ── Transition ────────────────────────────────────────────────────────────────
.exp-body-enter-active,
.exp-body-leave-active {
  overflow: hidden;
  transition: height 0.32s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
}

.exp-body-enter-from,
.exp-body-leave-to {
  height: 0 !important;
  opacity: 0;
}

// ── Responsive ────────────────────────────────────────────────────────────────
@media (max-width: 600px) {
  .exp-row__header {
    flex-wrap: wrap;
    gap: 8px;
    padding: 16px;
  }

  .exp-row__period {
    flex: 1 0 100%;
    order: 3;
  }

  .exp-row__body {
    padding: 0 16px 18px;
  }
}
</style>
