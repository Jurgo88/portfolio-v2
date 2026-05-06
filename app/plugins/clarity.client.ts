export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const projectId = config.public.clarityId

  if (!projectId) return

  const existingTag = document.querySelector(`script[data-clarity-id="${projectId}"]`)
  if (existingTag) return

  // Load Clarity using the official bootstrap snippet so queued calls are handled safely.
  ;(function (c: Window & { [key: string]: any }, l: Document, a: string, r: string, i: string, t?: HTMLScriptElement, y?: HTMLScriptElement) {
    c[a] = c[a] || function (...args: unknown[]) {
      ;(c[a].q = c[a].q || []).push(args)
    }

    t = l.createElement(r) as HTMLScriptElement
    t.async = true
    t.src = `https://www.clarity.ms/tag/${i}`
    t.setAttribute('data-clarity-id', i)

    y = l.getElementsByTagName(r)[0] as HTMLScriptElement
    y.parentNode?.insertBefore(t, y)
  })(window as Window & { [key: string]: any }, document, 'clarity', 'script', projectId)
})
