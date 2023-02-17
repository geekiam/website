
export default defineNuxtConfig({
    modules: [ '@nuxtjs/tailwindcss'],

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
    },
})
