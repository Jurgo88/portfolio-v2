<script setup lang="ts">
import { getProjectBySlug } from '~/data/projects'

const route = useRoute()
const slug = route.params.slug as string
const project = getProjectBySlug(slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

const { locale } = useLocale()

const l = <T extends { en: string; sk: string }>(field: T) => field[locale.value]
const lArr = (field: { en: string[]; sk: string[] }) => field[locale.value]

const labels = computed(() => ({
  caseStudy: locale.value === 'sk' ? 'Prípadová štúdia' : 'Case Study',
  back: locale.value === 'sk' ? '← Späť na projekty' : '← Back to Work',
  result: locale.value === 'sk' ? 'Výsledok' : 'Result',
  problem: locale.value === 'sk' ? 'Problém' : 'Problem',
  approach: locale.value === 'sk' ? 'Prístup' : 'Approach',
  architecture: locale.value === 'sk' ? 'Architektúra' : 'Architecture',
  decisions: locale.value === 'sk' ? 'Kľúčové rozhodnutia' : 'Key Decisions',
  outcome: locale.value === 'sk' ? 'Výsledok' : 'Result',
  stack: locale.value === 'sk' ? 'Tech stack' : 'Tech Stack',
  improvements: locale.value === 'sk' ? 'Čo by som zlepšil' : "What I'd Improve",
  cta: locale.value === 'sk' ? 'Páči sa vám to?' : 'Like what you see?',
  ctaHeading: locale.value === 'sk' ? 'Poďme niečo postaviť.' : "Let's build something together.",
  ctaBtn: locale.value === 'sk' ? 'Napíšte mi' : 'Get in touch',
  allProjects: locale.value === 'sk' ? '← Všetky projekty' : '← All projects',
}))

const localePath = useLocalePath()

const pageTitle = computed(() => `${project!.title} — ${labels.value.caseStudy} | Juraj Paluš`)
const pageDescription = computed(() => l(project!.hero.summary))
const pageUrl = computed(() => `https://jurgo.sk/projects/${slug}`)

const backToWork = computed(() => localePath({ path: '/', hash: '#projects' }))
const backToContact = computed(() => localePath({ path: '/', hash: '#contact' }))

useHead(computed(() => ({
  title: pageTitle.value,
  link: [
    { rel: 'canonical', href: pageUrl.value }
  ],
  meta: [
    { name: 'description', content: pageDescription.value },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: pageTitle.value },
    { property: 'og:description', content: pageDescription.value },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: pageUrl.value },
    { property: 'og:site_name', content: 'Juraj Paluš' },
    { property: 'og:locale', content: locale.value === 'sk' ? 'sk_SK' : 'en_US' },
    { property: 'og:image', content: 'https://jurgo.sk/og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: `${project!.title} — Juraj Paluš` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle.value },
    { name: 'twitter:description', content: pageDescription.value },
    { name: 'twitter:image', content: 'https://jurgo.sk/og-image.png' },
    { name: 'twitter:image:alt', content: `${project!.title} — Juraj Paluš` },
  ],
})))

const root = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (!root.value) return

  const { gsap } = await useGsap()

  gsap.from(root.value.querySelectorAll<HTMLElement>('.reveal'), {
    autoAlpha: 0,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.1,
    y: 28,
    scrollTrigger: {
      trigger: root.value,
      start: 'top 85%'
    }
  })

  root.value.querySelectorAll<HTMLElement>('.section-reveal').forEach((el) => {
    gsap.from(el, {
      autoAlpha: 0,
      duration: 0.7,
      ease: 'power2.out',
      y: 32,
      scrollTrigger: {
        trigger: el,
        start: 'top 82%'
      }
    })
  })
})
</script>

<template>
  <div class="project-page">
    <!-- Nav -->
    <header class="project-nav">
      <div class="container project-nav__inner">
        <NuxtLink to="/" class="project-nav__brand">
          Juraj<span class="project-nav__brand-dot">.</span>
        </NuxtLink>
        <div class="project-nav__right">
          <UiLangSwitcher />
          <NuxtLink :to="backToWork" class="project-nav__back">
            {{ labels.back }}
          </NuxtLink>
        </div>
      </div>
    </header>

    <main ref="root">
      <!-- Hero -->
      <section class="project-hero section-space">
        <div class="container">
          <p class="eyebrow reveal">{{ labels.caseStudy }}</p>
          <h1 class="reveal">{{ project.hero.title }}</h1>
          <p class="project-hero__summary reveal">{{ l(project.hero.summary) }}</p>
          <div class="project-hero__result reveal">
            <span class="result-label">{{ labels.result }}</span>
            <span class="result-value">{{ l(project.result) }}</span>
          </div>
        </div>
      </section>

      <!-- Problem -->
      <section class="cs-section section-reveal">
        <div class="container cs-section__inner">
          <div class="cs-section__label">
            <span>01</span>
            <h2>{{ labels.problem }}</h2>
          </div>
          <div class="cs-section__content">
            <p>{{ l(project.problem) }}</p>
          </div>
        </div>
      </section>

      <!-- Approach -->
      <section class="cs-section section-reveal">
        <div class="container cs-section__inner">
          <div class="cs-section__label">
            <span>02</span>
            <h2>{{ labels.approach }}</h2>
          </div>
          <div class="cs-section__content">
            <p>{{ l(project.approach) }}</p>
          </div>
        </div>
      </section>

      <!-- Architecture -->
      <section class="cs-section section-reveal">
        <div class="container cs-section__inner">
          <div class="cs-section__label">
            <span>03</span>
            <h2>{{ labels.architecture }}</h2>
          </div>
          <div class="cs-section__content">
            <ul class="arch-list">
              <li v-for="item in lArr(project.architecture)" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Key Decisions -->
      <section class="cs-section section-reveal">
        <div class="container cs-section__inner">
          <div class="cs-section__label">
            <span>04</span>
            <h2>{{ labels.decisions }}</h2>
          </div>
          <div class="cs-section__content">
            <div
              v-for="decision in project.decisions"
              :key="decision.title.en"
              class="decision"
            >
              <h3>{{ l(decision.title) }}</h3>
              <p>{{ l(decision.detail) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Result -->
      <section class="cs-section cs-section--result section-reveal">
        <div class="container cs-section__inner">
          <div class="cs-section__label">
            <span>05</span>
            <h2>{{ labels.outcome }}</h2>
          </div>
          <div class="cs-section__content">
            <p class="outcome">{{ l(project.outcome) }}</p>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="cs-section section-reveal">
        <div class="container cs-section__inner">
          <div class="cs-section__label">
            <span>06</span>
            <h2>{{ labels.stack }}</h2>
          </div>
          <div class="cs-section__content">
            <div class="stack-list">
              <span v-for="tech in project.stack" :key="tech" class="stack-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Improvements (optional) -->
      <section v-if="project.improvements" class="cs-section section-reveal">
        <div class="container cs-section__inner">
          <div class="cs-section__label">
            <span>07</span>
            <h2>{{ labels.improvements }}</h2>
          </div>
          <div class="cs-section__content">
            <ul class="improve-list">
              <li v-for="item in lArr(project.improvements)" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="project-cta section-reveal">
        <div class="container">
          <p class="eyebrow">{{ labels.cta }}</p>
          <h2>{{ labels.ctaHeading }}</h2>
          <NuxtLink :to="backToContact" class="cta-btn">{{ labels.ctaBtn }}</NuxtLink>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="project-footer">
      <div class="container project-footer__inner">
        <span>Juraj © {{ new Date().getFullYear() }}</span>
        <NuxtLink :to="backToWork">{{ labels.allProjects }}</NuxtLink>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
// ─── Nav ─────────────────────────────────────────────────────────────────────
.project-nav {
  backdrop-filter: blur(8px);
  background: rgba(10, 13, 16, 0.8);
  border-bottom: 1px solid var(--border);
  left: 0;
  position: sticky;
  top: 0;
  z-index: 30;
}

.project-nav__inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 68px;
}

.project-nav__brand {
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
}

.project-nav__brand-dot {
  color: var(--accent);
}

.project-nav__right {
  align-items: center;
  display: flex;
  gap: 12px;
}

.project-nav__back {
  color: var(--muted);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text);
  }
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
.project-hero {
  border-bottom: 1px solid var(--border);

  h1 {
    font-size: clamp(2rem, 5vw, 3.8rem);
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin: 14px 0 16px;
    // max-width: 18ch;
  }
}

.project-hero__summary {
  color: var(--muted);
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.6;
  margin: 0 0 32px;
  max-width: 52ch;
}

.project-hero__result {
  align-items: center;
  background: rgba(154, 255, 45, 0.07);
  border: 1px solid rgba(154, 255, 45, 0.25);
  border-radius: 10px;
  display: inline-flex;
  gap: 14px;
  padding: 12px 20px;
}

.result-label {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.result-value {
  color: var(--accent);
  font-size: 1rem;
  font-weight: 700;
}

// ─── Case Study Sections ──────────────────────────────────────────────────────
.cs-section {
  border-bottom: 1px solid var(--border);
  padding: 72px 0;

  &--result {
    background: linear-gradient(180deg, rgba(154, 255, 45, 0.03), transparent);
  }
}

.cs-section__inner {
  align-items: flex-start;
  display: grid;
  gap: 48px;
  grid-template-columns: 200px 1fr;
}

.cs-section__label {
  padding-top: 4px;
  position: sticky;
  top: 88px;

  span {
    color: var(--muted);
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin: 0;
  }
}

.cs-section__content {
  p {
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.7;
    margin: 0;
    max-width: 68ch;
  }
}

// ─── Architecture List ────────────────────────────────────────────────────────
.arch-list {
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    border-left: 2px solid var(--accent);
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.5;
    padding-left: 14px;
  }
}

// ─── Decisions ────────────────────────────────────────────────────────────────
.decision {
  border-bottom: 1px solid var(--border);
  padding: 22px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 8px;
  }

  p {
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.65;
    margin: 0;
    max-width: 64ch;
  }
}

// ─── Outcome ──────────────────────────────────────────────────────────────────
.outcome {
  color: var(--text) !important;
  font-size: 1.1rem !important;
  font-weight: 500;
}

// ─── Stack ────────────────────────────────────────────────────────────────────
.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stack-tag {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 0.88rem;
  font-weight: 600;
  padding: 6px 14px;
}

// ─── Improvements ────────────────────────────────────────────────────────────
.improve-list {
  display: grid;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.55;
    padding-left: 20px;
    position: relative;

    &::before {
      color: var(--accent);
      content: '→';
      left: 0;
      position: absolute;
    }
  }
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
.project-cta {
  padding: 100px 0;
  text-align: center;

  .eyebrow {
    color: var(--accent);
    font-size: 0.88rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    margin: 0 0 14px;
    text-transform: uppercase;
  }

  h2 {
    font-size: clamp(1.6rem, 3.5vw, 2.8rem);
    letter-spacing: -0.02em;
    margin: 0 0 32px;
  }
}

.cta-btn {
  background: var(--accent);
  border-radius: 10px;
  color: #0a0d10;
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 14px 32px;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
}

// ─── Footer ───────────────────────────────────────────────────────────────────
.project-footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
}

.project-footer__inner {
  align-items: center;
  color: var(--muted);
  display: flex;
  font-size: 0.88rem;
  justify-content: space-between;

  a {
    color: var(--muted);
    transition: color 0.2s ease;

    &:hover {
      color: var(--text);
    }
  }
}

// ─── Shared ───────────────────────────────────────────────────────────────────
.eyebrow {
  color: var(--accent);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  margin: 0;
  text-transform: uppercase;
}

// ─── Responsive ───────────────────────────────────────────────────────────────
@media (max-width: 860px) {
  .cs-section__inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .cs-section__label {
    position: static;
  }
}

@media (max-width: 600px) {
  .cs-section {
    padding: 52px 0;
  }

  .project-hero h1 {
    max-width: none;
  }
}
</style>
