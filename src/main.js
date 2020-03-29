// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/css/main.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {

  head.meta.push(
      {
        name: 'keywords',
        content: 'Toys, Games, Computer Games, product reviews, '
      },
      {
        name: 'author',
        content: 'threenine.co.uk'
      },
      { property: "og:type", content: 'article' },
      { property: "og:description", content: 'Toys, Games and Book reviews for kids by kids' },
      { property: "og:image", content: 'somewhere.jpg' },
      { property: "og:site_name", content:"Geek.I.Am" }

      );

  Vue.component('Layout', DefaultLayout)
}
