// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    devtools: {
        enabled: true
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    }
})