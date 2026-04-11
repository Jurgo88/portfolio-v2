<script setup lang="ts">
import { projects } from '~/data/projects'

const root = ref<HTMLElement | null>(null)
const track = ref<HTMLElement | null>(null)
const { trackEvent } = useTracking()
const { t } = useLocale()

let autoTimer: ReturnType<typeof setInterval> | null = null

const scrollNext = () => {
  if (!track.value) return
  const el = track.value
  const maxScroll = el.scrollWidth - el.clientWidth
  if (el.scrollLeft >= maxScroll - 4) {
    el.scrollTo({ left: 0, behavior: 'smooth' })
  } else {
    el.scrollBy({ left: 378, behavior: 'smooth' })
  }
}

const startAuto = () => {
  autoTimer = setInterval(scrollNext, 3500)
}

const stopAuto = () => {
  if (autoTimer) clearInterval(autoTimer)
}

onMounted(async () => {
  if (!root.value) return

  const { gsap } = await useGsap()

  gsap.from(root.value.querySelectorAll<HTMLElement>('.project-reveal'), {
    autoAlpha: 0,
    duration: 2.8,
    ease: 'power2.out',
    stagger: 0.15,
    // y: 20,
    scrollTrigger: {
      trigger: root.value,
      start: 'top 72%',
      onEnter: startAuto,
      onLeave: stopAuto,
      onEnterBack: startAuto,
      onLeaveBack: stopAuto
    }
  })
})

onUnmounted(stopAuto)

const onProjectOpen = (slug: string) => {
  trackEvent('project_open', { slug, location: 'projects_section' })
}
</script>

<template>
  <section id="projects" ref="root" class="projects section-space">
    <div class="container">
      <p class="projects_eyebrow project-reveal">{{ t('projects_eyebrow') }}</p>
      <h2 class="project-reveal">{{ t('projects_h2') }}</h2>
      <p class="projects_intro project-reveal">{{ t('projects_intro') }}</p>
    </div>

    <div class="projects_strip" @mouseenter="stopAuto" @mouseleave="startAuto">
      <div ref="track" class="projects_track">
        <ProjectsProjectCard
          v-for="project in projects"
          :key="project.slug"
          class="project-reveal"
          :project="project"
          @click="onProjectOpen(project.slug)"
        />
      </div>

      <button class="projects_arrow" aria-label="Next project" @click="scrollNext">
        →
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects {
  border-top: 1px solid var(--border);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.projects_eyebrow {
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

.projects_intro {
  color: var(--muted);
  margin: 0;
  max-width: 60ch;
}

.projects_strip {
  margin-top: 28px;
  overflow-x: clip;
  position: relative;
  padding: 0 24px;
}

.projects_track {
  display: flex;
  gap: 18px;
  overflow-x: scroll;
  overflow-y: visible;
  padding: 12px 24px 24px;
  padding-left: max(24px, calc((100vw - var(--container)) / 2 + 24px));
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  touch-action: pan-x;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
}

.projects_track > :deep(*) {
  flex: 0 0 360px;
  scroll-snap-align: start;
}

.projects_arrow {
  align-items: center;
  background: rgba(10, 13, 16, 0.7);
  backdrop-filter: blur(6px);
  border: 1px solid var(--border);
  border-radius: 50%;
  bottom: calc(24px + (100% - 48px) / 2);
  color: var(--text);
  cursor: pointer;
  display: flex;
  font-size: 1.1rem;
  height: 48px;
  justify-content: center;
  line-height: 1;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%) translateY(-12px);
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
  width: 48px;

  &:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #0a0d10;
  }
}

@media (max-width: 600px) {
  .projects_track > :deep(*) {
    flex-basis: calc(100vw - 64px);
  }

  .projects_arrow {
    display: none;
  }
}
</style>
