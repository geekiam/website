// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/css/main.css'
import DefaultLayout from '@/layouts/Default.vue'
import HomeLayout from '@/layouts/HomeLayout'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PostLayout from '@/layouts/PostLayout'
import PostCard from '@/components/PostCard'
import InfiniteLoading from 'vue-infinite-loading'

import config from '../gridsome.config'

export default function (Vue, { router, head, isClient }) {
    let copyRightNotice = `\u00a9 threenine.co.uk, ${new Date().getFullYear()}. All rights reserved`

    head.meta.push(
        {
            key: 'keywords',
            name: 'keywords',
            content: 'code, tutorials, free source code, software development ',
        },
        {
            name: 'author',
            content: 'threenine.co.uk',
        },
        {
            key: 'description',
            name: 'description',
            content: config.siteDescription,
        },

        { name: 'copyright', content: copyRightNotice },
        { key: 'og:type', property: 'og:type', content: 'website' },
        {
            key: 'og:description',
            property: 'og:description',
            content: config.siteDescription,
        },
        {
            key: 'og:image',
            property: 'og:image',
            content: 'https://geekiam.io/assets/static/logo.png',
        },
        { property: 'og:site_name', content: config.siteName }
    )

    Vue.component('Layout', DefaultLayout)
    Vue.component('SiteHeader', SiteHeader)
    Vue.component('SiteFooter', SiteFooter)
    Vue.component('HomeLayout', HomeLayout)
    Vue.component('PostLayout', PostLayout)
    Vue.component('PostCard', PostCard)
    Vue.use(InfiniteLoading)
}
