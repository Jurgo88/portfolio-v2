<script setup lang="ts">
const { trackEvent } = useTracking()
const { t } = useLocale()

const onBookCall = () => {
  trackEvent('cta_click', { label: 'Book A Call', location: 'final_cta' })
}
</script>

<template>
  <section id="contact" class="cta section-space">
    <div class="container">
      <div class="cta__panel">
        <p class="cta__eyebrow">{{ t('cta_eyebrow') }}</p>
        <h2>
          {{ t('cta_h2') }}<br />
          <span class="cta__accent">{{ t('cta_h2_2') }}</span>
        </h2>

        <p>{{ t('cta_copy') }}</p>

        <p class="cta__note">{{ t('cta_note') }}</p>
        <UiBaseButton to="mailto:palus.dev@gmail.com" variant="primary" @click="onBookCall">
          {{ t('cta_btn') }}
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
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(154, 255, 45, 0.2);
  }

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
