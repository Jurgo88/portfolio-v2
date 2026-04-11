<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const { trackEvent } = useTracking()

const projects = [
  {
    title: 'Checkout Revamp For Subscription SaaS',
    description: 'Rebuilt checkout experience to reduce drop-off and lift paid conversions across desktop and mobile.',
    result: '+22% checkout conversion',
    challenge: 'Multi-step flow caused friction after pricing selection.',
    approach: 'Progressive forms, cleaner state handling, and faster interaction feedback.',
    image: '/previews/project-checkout.svg',
    href: '#'
  },
  {
    title: 'SEO-Led Content Platform Migration',
    description: 'Migrated a legacy SPA to Nuxt SSR with technical SEO architecture and content performance tuning.',
    result: '+64% organic traffic',
    challenge: 'Indexing instability and slow page delivery from legacy rendering.',
    approach: 'SSR routing, metadata templates, and cached payload strategy.',
    image: '/previews/project-seo.svg',
    href: '#'
  },
  {
    title: 'Performance Sprint For Enterprise Dashboard',
    description: 'Optimized rendering bottlenecks and interaction paths for high-frequency internal users.',
    result: '-41% time to interactive',
    challenge: 'Heavy data grids produced slow initial interactivity.',
    approach: 'Bundle splitting, virtualized tables, and scoped hydration.',
    image: '/previews/project-performance.svg',
    href: '#'
  }
]

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
      <p class="projects__eyebrow project-reveal">Selected Work</p>
      <h2 class="project-reveal">Projects Built To Move Business Metrics</h2>
      <p class="projects__intro project-reveal">
        Real outcomes from frontend engineering decisions grounded in performance, conversion, and SEO.
      </p>

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
