<template>
  <main class="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
    <nuxt-content
      class="prose sm:prose-sm lg:prose-lg dark:text-gray-100 text-gray-700 pb-10"
      :document="post"
    />
  </main>
</template>

<script>
export default {
  layout: 'home',
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return { post }
  },
}
</script>
