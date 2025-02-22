export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt'],

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
      apiBase: 'https://ai-shop-assistant-production.up.railway.app',
    },
  },

  compatibilityDate: '2025-02-15',
})
