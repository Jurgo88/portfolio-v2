type TrackingPayload = Record<string, string | number | boolean>

export const useTracking = () => {
  const { $posthog } = useNuxtApp()

  const trackEvent = (eventName: string, payload: TrackingPayload = {}) => {
    if (!import.meta.client) {
      return
    }

    const w = window as Window & {
      dataLayer?: Array<Record<string, unknown>>
      gtag?: (command: string, event: string, params?: Record<string, unknown>) => void
      plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void
    }

    w.dataLayer?.push({ event: eventName, ...payload })

    if (typeof w.gtag === 'function') {
      w.gtag('event', eventName, payload)
    }

    if (typeof w.plausible === 'function') {
      w.plausible(eventName, { props: payload })
    }

    if (typeof $posthog === 'function') {
      $posthog().capture(eventName, payload)
    }
  }

  return { trackEvent }
}
