<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const track = ref<HTMLElement | null>(null)
let loopTween: { kill: () => void } | null = null

onMounted(async () => {
  if (!root.value || !track.value) {
    return
  }

  const { gsap } = await useGsap()

  gsap.from(root.value, {
    autoAlpha: 0,
    duration: 0.8,
    y: 18,
    scrollTrigger: {
      trigger: root.value,
      start: 'top 88%'
    }
  })

  loopTween = gsap.to(track.value, {
    duration: 20,
    ease: 'none',
    repeat: -1,
    xPercent: -50
  })
})

onBeforeUnmount(() => {
  loopTween?.kill()
})
</script>

<template>
  <section ref="root" class="value-strip" aria-label="Key value points">
    <div class="value-strip__viewport">
      <div ref="track" class="value-strip__track">
        <p>Fast. Scalable. SEO-ready.</p>
        <p>Conversion-focused frontend engineering.</p>
        <p>Fast. Scalable. SEO-ready.</p>
        <p>Conversion-focused frontend engineering.</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.value-strip {
  border-bottom: 1px solid var(--border);
  border-top: 1px solid var(--border);
  padding: 14px 0;
}

.value-strip__viewport {
  overflow: hidden;
}

.value-strip__track {
  display: flex;
  min-width: max-content;

  p {
    color: rgba(244, 247, 251, 0.82);
    font-size: clamp(0.95rem, 1.4vw, 1.1rem);
    font-weight: 600;
    letter-spacing: 0.03em;
    margin: 0;
    padding-right: 64px;
    white-space: nowrap;

    &:nth-child(odd) {
      color: var(--accent);
    }
  }
}
</style>
