// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
    compatibilityDate: '2025-01-03',
    devtools: {enabled: false},
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    css: [resolve(__dirname, './assets/nuxt.css')],
    extends: '@nuxt-themes/docus',
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/'],
        },
    },
    colorMode: {
        preference: 'system',
        fallback: 'light',
        storage: 'localStorage',
        storageKey: 'nuxt-color-mode1'
    }
})