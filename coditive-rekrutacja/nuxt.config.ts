// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: 'Coditive rekrutacja',
            meta: [
                { property: 'og:title', content: 'Coditive rekrutacja' },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:title', content: 'Coditive rekrutacja' },
                { name: 'twitter:description', content: 'Coditive rekrutacja - realizacja kalkulatora VAT w Nuxt' },
                { name: 'twitter:card', content: 'summary' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
        },
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