// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    css: [resolve(__dirname, './assets/nuxt.css')],
})