// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: [
    ['@nuxtjs/i18n', {
      locales: [
        { code: 'en', language: 'en-US', name: 'English', files: ['en.json'] },
        { code: 'sk', language: 'sk-SK', name: 'Slovenčina', files: ['sk.json'] },
      ],
defaultLocale: 'en',
      strategy: 'prefix_except_default',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',
        alwaysRedirect: false,
      },
    }],
  ],
  runtimeConfig: {
    public: {
      clarityId: '', // overridden by NUXT_PUBLIC_CLARITY_ID in .env
    },
  },
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap',
        },
      ],
      meta: [
        { name: 'author', content: 'Juraj Paluš' },
        { name: 'theme-color', content: '#9aff2d' },
        { name: 'color-scheme', content: 'dark' },
      ],
      script: process.env.NUXT_PUBLIC_CLARITY_ID ? [
        {
          innerHTML: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${process.env.NUXT_PUBLIC_CLARITY_ID}");`,
          type: 'text/javascript',
        },
      ] : [],
    },
  },
})
