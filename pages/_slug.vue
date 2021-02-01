<template>
  <!-- 3 column wrapper -->
  <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
    <!-- Left sidebar & main wrapper -->
    <div class="flex-1 min-w-0 bg-gray-100 dark:bg-gray-900 xl:flex">
      <!-- left column -->
      <div
        class="xl:flex-shrink-0 xl:w-32 xl:border-r dark:lg:border-gray-500 lg:border-gray-200"
      >
        <div class="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
          <div class="flex items-center justify-between">
            <div class="flex-1 space-y-8">
              <!-- left column -->
            </div>
          </div>
        </div>
      </div>

      <!-- Center Column -->
      <div class="bg-white dark:bg-gray-900 lg:min-w-0 lg:flex-1">
        <div class="pl-4 pr-6">
          <post-title :author="author" :post="post" />
          <nuxt-content
            class="prose sm:prose-sm lg:prose-lg dark:text-gray-100 text-gray-700 pb-10 mx-auto text-justify"
            :document="post"
          />
        </div>
      </div>
    </div>
    <!-- right column -->
    <div
      class="bg-gray-100 dark:bg-gray-900 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l dark:lg:border-gray-500 lg:border-gray-200 xl:pr-0"
    >
      <post-right-column></post-right-column>
    </div>
  </div>
</template>

<script>
import PostRightColumn from '../components/blog/PostRightColumn'
import PostTitle from '../components/blog/PostTitle'
export default {
  components: { PostTitle, PostRightColumn },
  layout: 'home',
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    const author = await $content('authors', post.author).fetch()
    return { post, author }
  },
  computed: {
    keywords() {
      let keywords = ''
      for (const i in this.post.keywords) {
        keywords = keywords.concat(`${this.post.keywords[i]},`)
      }
      return keywords.replace(/(^\s*,)|(,\s*$)/g, '')
    },
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.summary,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://geekiam.io${this.post.cardImage.image}`,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: `https://geekiam.io${this.post.cardImage.image}`,
        },
        { hid: 'keywords', name: 'keywords', content: this.keywords },
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.post.date,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.summary,
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: 'https://twitter.com/geekiam1',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: 'https://twitter.com/gary_woodfine',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://geekiam.io${this.post.cardImage.image}`,
        },
      ],
      script: [{ src: 'https://platform.twitter.com/widgets.js', async: true }],
      link: [{ rel: 'canonical', href: `https://geekiam.io${this.post.slug}` }],
    }
  },
}
</script>
