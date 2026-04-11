<script setup lang="ts">
const { trackEvent } = useTracking()

const onBookCall = () => {
  trackEvent('cta_click', { label: 'Book A Call', location: 'final_cta' })
}
</script>

<template>
  <section id="contact" class="cta section-space">
    <div class="container">
      <div class="cta__panel">
        <p class="cta__eyebrow">Let&apos;s Build Something That Converts</p>
        <h2>If your product deserves premium execution, let&apos;s talk.</h2>
        <p>
          Available for selected frontend consulting and high-impact implementation projects.
        </p>
        <UiBaseButton to="mailto:hello@yourdomain.com" variant="primary" @click="onBookCall">
          Book A Call
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cta {
  border-top: 1px solid var(--border);
}

.cta__panel {
  background: linear-gradient(145deg, rgba(154, 255, 45, 0.12), rgba(154, 255, 45, 0.04));
  border: 1px solid rgba(154, 255, 45, 0.3);
  border-radius: var(--radius);
  padding: clamp(24px, 4vw, 46px);
  text-align: center;

  h2 {
    font-size: clamp(1.7rem, 3.7vw, 3rem);
    letter-spacing: -0.02em;
    margin: 0;
  }

  p {
    color: var(--muted);
    margin: 14px auto 22px;
    max-width: 56ch;
  }
}

.cta__eyebrow {
  color: var(--accent) !important;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 0 0 12px !important;
  text-transform: uppercase;
}
</style>
