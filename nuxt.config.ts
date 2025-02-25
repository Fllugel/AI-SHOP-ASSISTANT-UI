export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt','@nuxt/icon'],

  css: ['@/assets/css/tailwind.css'],

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },

  app: {
    baseURL: '/AI-SHOP-ASSISTANT-UI/',
    buildAssetsDir: 'assets',
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://ai-shop-assistant-production.up.railway.app',
    },
  },

  compatibilityDate: '2025-02-15',
})
