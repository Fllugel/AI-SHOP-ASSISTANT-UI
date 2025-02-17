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

  compatibilityDate: '2025-02-15',
})
