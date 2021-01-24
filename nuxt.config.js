export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  generate: {
    fallback: true,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | Geek.I.Am',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Geek.I.Am' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~plugins/infiniteloading', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@/modules/sitemapRouteGenerator',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/moment',
    '@nuxtjs/netlify-files',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://geekiam.io',
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date(),
    },
  },
  moment: {
    defaultTimezone: 'Europe/London',
  },
  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  netlifyFiles: {
    headers: [
      {
        for: '/*',
        values: [
          { 'X-XSS-Protection': '1; mode=block' },
          { 'X-Frame-Options': 'DENY' },
          { 'Referrer-Policy': 'o-referrer' },
          { 'X-Content-Type-Options': 'nosniff' },
          {
            'Strict-Transport-Security':
              'max-age=2592000; includeSubDomains; preload',
          },
        ],
      },
    ],
  } /* module options */,

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
