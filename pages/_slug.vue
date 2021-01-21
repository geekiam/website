<template>
  <!-- 3 column wrapper -->
  <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
    <!-- Left sidebar & main wrapper -->
    <div class="flex-1 min-w-0 bg-gray-100 dark:bg-gray-900 xl:flex">
      <!-- Account profile -->
      <div class="xl:flex-shrink-0 xl:w-32 xl:border-r lg:border-gray-500">
        <div class="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
          <div class="flex items-center justify-between">
            <div class="flex-1 space-y-8">
              <p class="text-gray-100">Left Column</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects List -->
      <div class="bg-white dark:bg-gray-900 lg:min-w-0 lg:flex-1">
        <div class="pl-4 pr-6">
          <post-title :author="author" :post="post" />
          <nuxt-content
            class="prose sm:prose-sm lg:prose-lg dark:text-gray-100 text-gray-700 pb-10 mx-auto"
            :document="post"
          />
        </div>
      </div>
    </div>
    <!-- Activity feed -->
    <div
      class="bg-gray-100 dark:bg-gray-900 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-500 xl:pr-0"
    >
      <right-column></right-column>
    </div>
  </div>
</template>

<script>
import RightColumn from '../components/blog/RightColumn'
import PostTitle from '../components/blog/PostTitle'
export default {
  components: { PostTitle, RightColumn },
  layout: 'home',
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    const author = await $content('authors', post.author).fetch()
    return { post, author }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article' },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.post.title,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.post.summary,
        },
      ],
    }
  },
}
</script>
