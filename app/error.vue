<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const { t } = useLocale()

// ── Typewriter ────────────────────────────────────────────────────────────────
const fullText = computed(() => t('error_terminal'))
const displayed = ref('')
const typingDone = ref(false)

onMounted(() => {
  let i = 0
  const interval = setInterval(() => {
    displayed.value = fullText.value.slice(0, i + 1)
    i++
    if (i >= fullText.value.length) {
      clearInterval(interval)
      typingDone.value = true
    }
  }, 38)
})

// ── Refs ──────────────────────────────────────────────────────────────────────
const root = ref<HTMLElement | null>(null)
const d1 = ref<HTMLElement | null>(null)
const d2 = ref<HTMLElement | null>(null)
const d3 = ref<HTMLElement | null>(null)

let cleanupMouse: (() => void) | null = null

// ── GSAP entrance + parallax ──────────────────────────────────────────────────
onMounted(async () => {
  if (!root.value) return
  const { gsap } = await useGsap()

  gsap.from(d1.value, { autoAlpha: 0, x: -80, duration: 0.8, ease: 'power3.out', delay: 0.05 })
  gsap.from(d2.value, { autoAlpha: 0, y: 60, scale: 0.7, filter: 'blur(14px)', duration: 1, ease: 'expo.out', delay: 0.2 })
  gsap.from(d3.value, { autoAlpha: 0, x: 80, duration: 0.8, ease: 'power3.out', delay: 0.35 })
  gsap.from('.error-page__terminal', { autoAlpha: 0, y: 20, duration: 0.7, ease: 'power2.out', delay: 0.7 })
  gsap.from('.error-page__copy', { autoAlpha: 0, y: 16, duration: 0.6, ease: 'power2.out', delay: 0.9 })
  gsap.from('.error-page__btn', { autoAlpha: 0, y: 14, duration: 0.6, ease: 'power2.out', delay: 1.05 })

  // Mouse parallax
  const qD1x = gsap.quickTo(d1.value, 'x', { duration: 1.0, ease: 'power2' })
  const qD1y = gsap.quickTo(d1.value, 'y', { duration: 1.0, ease: 'power2' })
  const qD2x = gsap.quickTo(d2.value, 'x', { duration: 0.65, ease: 'power2' })
  const qD2y = gsap.quickTo(d2.value, 'y', { duration: 0.65, ease: 'power2' })
  const qD3x = gsap.quickTo(d3.value, 'x', { duration: 0.85, ease: 'power2' })
  const qD3y = gsap.quickTo(d3.value, 'y', { duration: 0.85, ease: 'power2' })

  const onMove = (e: MouseEvent) => {
    const nx = (e.clientX - window.innerWidth / 2) / window.innerWidth
    const ny = (e.clientY - window.innerHeight / 2) / window.innerHeight
    qD1x(nx * -20); qD1y(ny * -10)
    qD2x(nx * 28);  qD2y(ny * 18)
    qD3x(nx * -16); qD3y(ny * -8)
  }
  const onLeave = () => {
    gsap.to([d1.value, d2.value, d3.value], { x: 0, y: 0, duration: 1.1, ease: 'power3.out' })
  }
  root.value.addEventListener('mousemove', onMove)
  root.value.addEventListener('mouseleave', onLeave)
  cleanupMouse = () => {
    root.value?.removeEventListener('mousemove', onMove)
    root.value?.removeEventListener('mouseleave', onLeave)
  }
})

onBeforeUnmount(() => cleanupMouse?.())

// ── Glitch burst on click ─────────────────────────────────────────────────────
const onGlitchClick = async () => {
  const { gsap } = await useGsap()
  const tl = gsap.timeline()
  const digits = [d1.value, d2.value, d3.value]
  tl.to(digits, { skewX: 12, duration: 0.07, ease: 'none', stagger: 0.03 })
    .to(digits, { skewX: -8, duration: 0.07, ease: 'none', stagger: 0.03 })
    .to(digits, { skewX: 6, duration: 0.06, ease: 'none', stagger: 0.02 })
    .to(digits, { skewX: 0, duration: 0.1, ease: 'power2.out' })
    .to(d2.value, { color: '#ffffff', duration: 0.05 }, 0)
    .to(d2.value, { color: 'var(--accent)', duration: 0.25, ease: 'power2.out' }, 0.1)
}
</script>

<template>
  <div ref="root" class="error-page">
    <div class="container error-page__inner">

      <div class="error-page__digits" @click="onGlitchClick">
        <span ref="d1" class="error-digit" data-text="4">4</span>
        <span ref="d2" class="error-digit error-digit--accent" data-text="0">0</span>
        <span ref="d3" class="error-digit" data-text="4">4</span>
      </div>

      <div class="error-page__terminal">
        <span class="error-page__prompt">&gt;&nbsp;</span>
        <span class="error-page__typed">{{ displayed }}</span>
        <span class="error-page__cursor" :class="{ 'error-page__cursor--blink': typingDone }">_</span>
      </div>

      <p class="error-page__copy">{{ t('error_copy') }}</p>

      <a href="/" class="error-page__btn">{{ t('error_back') }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error-page {
  align-items: center;
  background:
    radial-gradient(circle at 15% 0%, rgba(154, 255, 45, 0.12), transparent 28%),
    radial-gradient(circle at 90% 15%, rgba(154, 255, 45, 0.05), transparent 25%),
    #0a0d10;
  color: #f4f7fb;
  display: flex;
  font-family: 'Sora', 'Space Grotesk', 'Avenir Next', sans-serif;
  justify-content: center;
  min-height: 100dvh;
}

.error-page__inner {
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
}

// ── Digits ──────────────────────────────────────────────────────────────────
.error-page__digits {
  cursor: pointer;
  display: flex;
  gap: 0.05em;
  justify-content: center;
  line-height: 1;
  margin-bottom: 32px;
  user-select: none;
}

.error-digit {
  color: rgba(244, 247, 251, 0.15);
  display: inline-block;
  font-size: clamp(7rem, 22vw, 17rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  position: relative;
  will-change: transform;

  &--accent {
    color: #9aff2d;
    text-shadow: 0 0 80px rgba(154, 255, 45, 0.35);
  }

  // Glitch layer 1 — cyan shift
  &::before {
    animation: glitch-1 4s infinite;
    animation-delay: inherit;
    color: rgba(0, 220, 255, 0.55);
    content: attr(data-text);
    inset: 0;
    position: absolute;
  }

  // Glitch layer 2 — red shift
  &::after {
    animation: glitch-2 4s infinite;
    color: rgba(255, 50, 80, 0.45);
    content: attr(data-text);
    inset: 0;
    position: absolute;
  }

  &--accent::before { color: rgba(0, 220, 255, 0.4); }
  &--accent::after  { color: rgba(255, 50, 80, 0.3); }
}

@keyframes glitch-1 {
  0%, 90%, 100%     { clip-path: inset(100% 0 0 0);    transform: translate(0, 0); }
  91%               { clip-path: inset(8% 0 78% 0);    transform: translate(-4px, 0); }
  93%               { clip-path: inset(55% 0 30% 0);   transform: translate(4px, 0); }
  95%               { clip-path: inset(30% 0 55% 0);   transform: translate(-3px, 0); }
  97%               { clip-path: inset(70% 0 15% 0);   transform: translate(3px, 0); }
}

@keyframes glitch-2 {
  0%, 92%, 100%     { clip-path: inset(100% 0 0 0);    transform: translate(0, 0); }
  93%               { clip-path: inset(20% 0 65% 0);   transform: translate(4px, 0); }
  95%               { clip-path: inset(65% 0 20% 0);   transform: translate(-4px, 0); }
  98%               { clip-path: inset(40% 0 45% 0);   transform: translate(2px, 0); }
}

// ── Terminal ─────────────────────────────────────────────────────────────────
.error-page__terminal {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: inline-flex;
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(0.8rem, 2vw, 1rem);
  gap: 0;
  margin-bottom: 20px;
  padding: 12px 20px;
}

.error-page__prompt {
  color: #9aff2d;
  font-weight: 700;
}

.error-page__typed {
  color: rgba(244, 247, 251, 0.8);
}

.error-page__cursor {
  color: #9aff2d;
  font-weight: 700;
  opacity: 1;

  &--blink {
    animation: blink 1s step-end infinite;
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

// ── Copy + button ─────────────────────────────────────────────────────────────
.error-page__copy {
  color: #9ba6b2;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  margin: 0 auto 32px;
  max-width: 46ch;
}

.error-page__btn {
  background: #9aff2d;
  border-radius: 10px;
  color: #0a0d10;
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 12px 28px;
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    box-shadow: 0 6px 24px rgba(154, 255, 45, 0.35);
    transform: translateY(-2px);
  }
}
</style>
