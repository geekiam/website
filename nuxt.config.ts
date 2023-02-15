
export default defineNuxtConfig({
    modules: [ '@nuxtjs/tailwindcss'],

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        config: {
            content: [
                'components/**/*.{vue,js}',
                'layouts/**/*.vue',
                'pages/**/*.vue',
                'composables/**/*.{js,ts}',
                'plugins/**/*.{js,ts}',
                'App.{js,ts,vue}',
                'app.{js,ts,vue}'
            ],
        },
    },
})
