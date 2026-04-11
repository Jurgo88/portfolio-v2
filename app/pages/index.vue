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

const { t } = useLocale()

useHead(computed(() => ({
  title: t('page_title'),
  meta: [
    {
      name: 'description',
      content: t('page_description')
    }
  ]
})))
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
