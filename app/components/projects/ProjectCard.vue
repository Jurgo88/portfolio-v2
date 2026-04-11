<script setup lang="ts">
import type { ProjectDetail } from '~/data/projects'

defineProps<{
  project: Pick<ProjectDetail, 'slug' | 'title' | 'description' | 'result' | 'image'>
}>()

const { locale } = useLocale()
</script>

<template>
  <article class="project-card">
    <NuxtLink :to="`/projects/${project.slug}`" class="project-card__link">
      <div class="project-card__media">
        <img
          :src="project.image"
          :alt="`${project.title} preview`"
          loading="lazy"
          width="1200"
          height="760"
        />
        <div class="project-card__overlay" aria-hidden="true">
          <span class="project-card__cta">View Case Study →</span>
        </div>
      </div>

      <div class="project-card__body">
        <p class="project-card__result">{{ project.result[locale] }}</p>
        <h3>{{ project.title }}</h3>
        <p class="project-card__desc">{{ project.description[locale] }}</p>
      </div>
    </NuxtLink>
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
    border-color: rgba(154, 255, 45, 0.4);
    box-shadow: 0 24px 55px rgba(0, 0, 0, 0.35);
    transform: translateY(-6px);
  }
}

.project-card__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
}

.project-card__media {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  position: relative;

  img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    width: 100%;
  }
}

.project-card__overlay {
  align-items: center;
  background: rgba(10, 13, 16, 0.72);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card:hover .project-card__media img {
  transform: scale(1.04);
}

.project-card__cta {
  background: var(--accent);
  border-radius: 8px;
  color: #0a0d10;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 10px 20px;
}

.project-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 22px;

  h3 {
    font-size: 1.25rem;
    line-height: 1.3;
    margin: 0 0 8px;
  }
}

.project-card__result {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 0 0 10px;
  text-transform: uppercase;
}

.project-card__desc {
  color: var(--muted);
  font-size: 0.93rem;
  line-height: 1.55;
  margin: 0;
}
</style>
