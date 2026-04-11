export const useGsap = async () => {
  const gsapModule = await import('gsap')
  const scrollTriggerModule = await import('gsap/ScrollTrigger')

  const gsap = gsapModule.gsap || gsapModule.default || gsapModule
  const ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default

  gsap.registerPlugin(ScrollTrigger)

  return { gsap, ScrollTrigger }
}
