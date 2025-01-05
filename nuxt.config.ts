// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
    compatibilityDate: '2025-01-03',
    devtools: {enabled: false},
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    css: [resolve(__dirname, './assets/nuxt.css')],
    extends: '@nuxt-themes/docus',
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/'],
        },
    },
})