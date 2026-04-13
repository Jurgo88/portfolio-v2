// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          // Microsoft Clarity — replace YOUR_CLARITY_ID with your project ID
          // Found at: clarity.microsoft.com → Settings → Overview
          innerHTML: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","YOUR_CLARITY_ID");`,
          type: 'text/javascript',
        },
      ],
    }
  }
})
