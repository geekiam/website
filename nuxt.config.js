export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  generate: {
    fallback: true,
  },
  dev: process.env.NODE_ENV !== 'production',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3850',
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | Geek.I.Am',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Geek.I.Am' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'Geek.I.Am',
        href: 'https://geekiam.io/feed.xml',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/infiniteloading', '~/plugins/vue-instantsearch'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    'nuxt-content-algolia',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
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
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
  ],
  nuxtContentAlgolia: {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_API_KEY,
    paths: [
      {
        name: 'posts',
        index: 'site_search',
        fields: ['title', 'summary', 'description', 'bodyPlainText'],
      },
    ],
  },
  feed: [
    // A default feed configuration object
    {
      path: '/feed.xml', // The route to your feed.
      // eslint-disable-next-line require-await
      async create(feed, data) {
        feed.options = {
          title: 'Geek.I.Am',
        }
        data.forEach((post) => {
          feed.addItem({
            title: post.title,
            id: post.url,
            link: post.url,
            date: new Date(post.date),
            description: post.description,
            content: post.body,
          })
        })
      }, // The create function (see below)
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      data: ['Some additional data'], // Will be passed as 2nd argument to `create` function
    },
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://geekiam.io',
    defaults: {
      changefreq: 'daily',
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
          {
            'Feature-Policy':
              "geolocation 'none'; midi 'none'; sync-xhr 'none';microphone 'none'; camera 'none'; magnetometer 'none'; gyroscope 'none'; speaker 'none'; fullscreen 'none'; payment 'none'",
          },
          {
            'Content-Security-Policy':
              "default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline'",
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
  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      const removeMd = require('remove-markdown')
      const stats = require('reading-time')(document.text)
      if (document.extension === '.md') {
        document.bodyPlainText = removeMd(document.text)
        document.readTime = stats
      }
    },
  },
}
