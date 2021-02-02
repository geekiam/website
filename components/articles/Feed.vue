<template>
  <ul class="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
    <li
      v-for="post of posts"
      :key="post.slug"
      class="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
    >
      <div class="flex items-center justify-between space-x-4">
        <div class="min-w-0 space-y-3">
          <div class="flex items-center space-x-3">
            <span class="block">
              <card :post="post" :section="section" />
            </span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Feed',
  props: {
    posts: {
      type: Array,
      required: true,
    },
    section: {
      type: String,
      default: 'slug',
    },
  },
}
</script>
