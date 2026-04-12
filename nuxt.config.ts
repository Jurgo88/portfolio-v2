// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1'
    }
  }
})
