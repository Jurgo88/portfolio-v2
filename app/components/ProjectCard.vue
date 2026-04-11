<script setup lang="ts">
defineProps<{
  title: string
  description: string
  result: string
  image: string
  challenge: string
  approach: string
  href?: string
}>()

const emit = defineEmits<{
  (e: 'open', title: string): void
}>()

const { t } = useLocale()
</script>

<template>
  <article class="project-card">
    <a
      :href="href || '#'"
      class="project-card__link"
      target="_blank"
      rel="noreferrer"
      @click="emit('open', title)"
    >
      <div class="project-card__media">
        <img :src="image" :alt="`${title} preview`" loading="lazy" width="1200" height="760" />
      </div>
      <div class="project-card__body">
        <p class="project-card__result">{{ result }}</p>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <ul>
          <li><strong>{{ t('card_challenge') }}</strong> {{ challenge }}</li>
          <li><strong>{{ t('card_approach') }}</strong> {{ approach }}</li>
        </ul>
      </div>
    </a>
  </article>
</template>

<style scoped lang="scss">
.project-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    border-color: rgba(154, 255, 45, 0.45);
    box-shadow: 0 24px 55px rgba(0, 0, 0, 0.35);
    transform: translateY(-6px);
  }
}

.project-card__link {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card__media {
  aspect-ratio: 16 / 10;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    width: 100%;
  }
}

.project-card:hover .project-card__media img {
  transform: scale(1.04);
}

.project-card__body {
  padding: 22px;

  h3 {
    font-size: 1.3rem;
    margin: 0 0 8px;
  }

  p {
    color: var(--muted);
    margin: 0;
  }

  ul {
    color: var(--muted);
    display: grid;
    gap: 6px;
    list-style: none;
    margin: 14px 0 0;
    padding: 0;
  }

  li {
    font-size: 0.92rem;
  }

  strong {
    color: rgba(244, 247, 251, 0.92);
    font-weight: 600;
  }
}

.project-card__result {
  color: var(--accent) !important;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 10px !important;
  text-transform: uppercase;
}
</style>
