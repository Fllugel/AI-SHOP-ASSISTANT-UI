export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],

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
      apiBase: 'http://localhost:8000',
    },
  },

  compatibilityDate: '2025-02-15',
})
