let cached: { gsap: any; ScrollTrigger: any } | null = null

export const useGsap = async () => {
  if (cached) return cached

  const gsapModule = await import('gsap')
  const scrollTriggerModule = await import('gsap/ScrollTrigger')

  const gsap = gsapModule.gsap || gsapModule.default || gsapModule
  const ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default

  gsap.registerPlugin(ScrollTrigger)

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0)
  }

  cached = { gsap, ScrollTrigger }
  return cached
}
