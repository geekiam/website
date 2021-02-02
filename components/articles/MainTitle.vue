<template>
  <div class="mt-4 mb-4 text-green-700">
    <div
      class="text-bold text-3xl sm:text-3xl leading-tight mb-1 sm:mb-2n font-sans"
    >
      <h1 class="capitalize" v-html="post.title"></h1>
    </div>
    <div class="flex flex-row mb-3 mt-3 text-sm">
      <publish-date :publish-date="post.date" />
      <author :author="author" />
      <read-time :time-to-read="post.readTime.text" />
    </div>
    <tags :tags="post.tags" />
  </div>
</template>

<script>
import Author from './card/microbes/Author'
import PublishDate from './card/microbes/PublishDate'
import ReadTime from './card/microbes/ReadTime'
export default {
  name: 'MainTitle',
  components: { ReadTime, PublishDate, Author },
  props: {
    post: {
      type: Object,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>
