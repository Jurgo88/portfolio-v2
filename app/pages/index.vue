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

const { t } = useLocale()

useHead(computed(() => ({
  title: t('page_title'),
  link: [
    { rel: 'canonical', href: 'https://jurgo.sk' }
  ],
  meta: [
    { name: 'description', content: t('page_description') },
    { property: 'og:title', content: t('page_title') },
    { property: 'og:description', content: t('page_description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://jurgo.sk' },
    { property: 'og:image', content: 'https://jurgo.sk/og-image.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('page_title') },
    { name: 'twitter:description', content: t('page_description') },
    { name: 'twitter:image', content: 'https://jurgo.sk/og-image.png' },
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
        sameAs: [
          'https://github.com/jurgo-sk',
          'https://linkedin.com/in/juraj-palus',
        ],
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
