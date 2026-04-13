<script setup lang="ts">
import AboutThinkingSection from '~/sections/AboutThinkingSection.vue'
import CtaSection from '~/sections/CtaSection.vue'
import ExperienceSection from '~/sections/ExperienceSection.vue'
import HeroSection from '~/sections/HeroSection.vue'
import InteractiveSection from '~/sections/InteractiveSection.vue'
import ProjectsSection from '~/sections/ProjectsSection.vue'
import ResultsSection from '~/sections/ResultsSection.vue'
import SiteFooter from '~/sections/SiteFooter.vue'
import TopNavSection from '~/sections/TopNavSection.vue'
import ValueStripSection from '~/sections/ValueStripSection.vue'

const { t, locale } = useLocale()

useHead(computed(() => ({
  title: t('page_title'),
  link: [
    {
      rel: 'canonical',
      href: locale.value === 'sk' ? 'https://jurgo.sk/sk' : 'https://jurgo.sk'
    },
    { rel: 'alternate', hreflang: 'en', href: 'https://jurgo.sk' },
    { rel: 'alternate', hreflang: 'sk', href: 'https://jurgo.sk/sk' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://jurgo.sk' },
  ],
  meta: [
    { name: 'description', content: t('page_description') },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: t('page_title') },
    { property: 'og:description', content: t('page_description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://jurgo.sk' },
    { property: 'og:site_name', content: 'Juraj Paluš' },
    { property: 'og:locale', content: locale.value === 'sk' ? 'sk_SK' : 'en_US' },
    { property: 'og:image', content: 'https://jurgo.sk/og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Juraj Paluš — Frontend Engineer' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page_title') },
    { name: 'twitter:description', content: t('page_description') },
    { name: 'twitter:image', content: 'https://jurgo.sk/og-image.png' },
    { name: 'twitter:image:alt', content: 'Juraj Paluš — Frontend Engineer' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Juraj Paluš',
        url: 'https://jurgo.sk',
        email: 'palus.dev@gmail.com',
        jobTitle: 'Frontend Engineer',
        description: 'Frontend Engineer specialising in Vue, Nuxt and TypeScript. Building fast, scalable web applications that drive measurable results.',
        image: 'https://jurgo.sk/og-image.png',
        knowsAbout: ['Vue.js', 'Nuxt.js', 'TypeScript', 'React', 'Supabase', 'GSAP', 'Frontend Performance', 'Web Development', 'UX Engineering'],
        sameAs: [
          'https://github.com/jurgo-sk',
          'https://linkedin.com/in/juraj-palus',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Juraj Paluš — Frontend Engineer',
        url: 'https://jurgo.sk',
      }),
    },
  ],
})))
</script>

<template>
  <main>
    <TopNavSection />
    <HeroSection />
    <ValueStripSection />
    <ProjectsSection />
    <AboutThinkingSection />
    <ExperienceSection />
    <InteractiveSection />
    <ResultsSection />
    <CtaSection />
    <SiteFooter />
  </main>
</template>
