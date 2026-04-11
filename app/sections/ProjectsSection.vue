<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const { trackEvent } = useTracking()
const { t } = useLocale()

const projects = computed(() => [
  {
    title: t('project_1_title'),
    description: t('project_1_description'),
    result: t('project_1_result'),
    challenge: t('project_1_challenge'),
    approach: t('project_1_approach'),
    image: '/previews/project-checkout.svg',
    href: '#'
  },
  {
    title: t('project_2_title'),
    description: t('project_2_description'),
    result: t('project_2_result'),
    challenge: t('project_2_challenge'),
    approach: t('project_2_approach'),
    image: '/previews/project-seo.svg',
    href: '#'
  },
  {
    title: t('project_3_title'),
    description: t('project_3_description'),
    result: t('project_3_result'),
    challenge: t('project_3_challenge'),
    approach: t('project_3_approach'),
    image: '/previews/project-performance.svg',
    href: '#'
  }
])

onMounted(async () => {
  if (!root.value) {
    return
  }

  const { gsap } = await useGsap()

  gsap.from(root.value.querySelectorAll<HTMLElement>('.project-reveal'), {
    autoAlpha: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.15,
    y: 38,
    scrollTrigger: {
      trigger: root.value,
      start: 'top 72%'
    }
  })
})

const onProjectOpen = (title: string) => {
  trackEvent('project_open', { title, location: 'projects_section' })
}
</script>

<template>
  <section id="projects" ref="root" class="projects section-space">
    <div class="container">
      <p class="projects__eyebrow project-reveal">{{ t('projects_eyebrow') }}</p>
      <h2 class="project-reveal">{{ t('projects_h2') }}</h2>
      <p class="projects__intro project-reveal">{{ t('projects_intro') }}</p>

      <div class="projects__grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          class="project-reveal"
          :description="project.description"
          :challenge="project.challenge"
          :approach="project.approach"
          :href="project.href"
          :image="project.image"
          :result="project.result"
          :title="project.title"
          @open="onProjectOpen"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects {
  border-top: 1px solid var(--border);
}

.projects__eyebrow {
  color: var(--accent);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  margin: 0;
  text-transform: uppercase;
}

h2 {
  font-size: clamp(1.7rem, 4vw, 3rem);
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 16px 0 10px;
  max-width: 20ch;
}

.projects__intro {
  color: var(--muted);
  margin: 0;
  max-width: 60ch;
}

.projects__grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 34px;
}

@media (max-width: 1100px) {
  .projects__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
