// https://nuxt.com/docs/api/configuration/nuxt-config
import {isProduction} from "std-env";
export default defineNuxtConfig({
    app:{
        head: {
            script: [
                { src: 'https://cdn.usefathom.com/script.js', defer: true, 'data-site': 'RKXXTVSI', 'data-spa': 'auto', 'data-excluded-domains':'localhost' }
            ],
        }
    },
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss'  ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
    },
    content: {
        highlight: {

            theme: {
                // Default theme (same as single string)
                default: 'monokai',
                // Theme used if `html.dark`
                dark: 'github-dark',
                // Theme used if `html.sepia`
                sepia: 'monokai'
            }
        },
        runtimeConfig: {
            public: {
                fantom_analytics_id: process.env.fantom_analytics_id,
                production_mode: isProduction

            }
        }
    }
});

