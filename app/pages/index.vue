<script setup lang="ts">
import AboutThinkingSection from '~/sections/AboutThinkingSection.vue'
import CtaSection from '~/sections/CtaSection.vue'
import HeroSection from '~/sections/HeroSection.vue'
import InteractiveSection from '~/sections/InteractiveSection.vue'
import ProjectsSection from '~/sections/ProjectsSection.vue'
import ResultsSection from '~/sections/ResultsSection.vue'
import SiteFooter from '~/sections/SiteFooter.vue'
import TopNavSection from '~/sections/TopNavSection.vue'
import ValueStripSection from '~/sections/ValueStripSection.vue'

useHead({
  title: 'Juraj | Frontend Engineer For High-Growth Products',
  meta: [
    {
      name: 'description',
      content:
        'Frontend engineer focused on high-performance Nuxt applications, conversion-driven UX, and measurable business outcomes.'
    }
  ]
})
</script>

<template>
  <main>
    <TopNavSection />
    <HeroSection />
    <ValueStripSection />
    <ProjectsSection />
    <AboutThinkingSection />
    <InteractiveSection />
    <ResultsSection />
    <CtaSection />
    <SiteFooter />
  </main>
</template>
