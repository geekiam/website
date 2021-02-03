<template>
  <!-- 3 column wrapper -->
  <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
    <!-- Left sidebar & main wrapper -->
    <div class="flex-1 min-w-0 bg-gray-100 dark:bg-gray-900 xl:flex">
      <!-- Left Column -->
      <div class="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200">
        <div class="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
          <div class="flex items-center justify-between">
            <div class="flex-1 space-y-8">
              <!-- left column -->
            </div>
          </div>
        </div>
      </div>

      <!-- Center column -->
      <div class="sticky bg-gray-100 dark:bg-gray-900 lg:min-w-0 lg:flex-1">
        <div
          class="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 dark:border-gray-500 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0"
        >
          <post-sort></post-sort>
        </div>
        <feed :posts="posts" section="nuxt-slug" />
      </div>
    </div>
    <!-- right column -->
    <div
      class="bg-gray-100 dark:bg-gray-900 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0"
    >
      <right-column></right-column>
    </div>
  </div>
</template>

<script>
import Feed from '@/components/articles/Feed'
import PostSort from '@/components/blog/PostSort'
import RightColumn from '@/components/blog/PostRightColumn'
export default {
  components: { RightColumn, PostSort, Feed },
  layout: 'home',

  async asyncData({ $content, params }) {
    const posts = await $content('nuxt', params.slug)
      .sortBy('order', 'asc')
      .fetch()
    return {
      posts,
    }
  },
  head() {
    return {
      title: 'Learning and Development for Geeks',
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:article:section',
          property: 'og:article:section',
          content: 'Technology',
        },
      ],
    }
  },
}
</script>
