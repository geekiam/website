<template>
  <div class="flex-1 lg:mb-0 lg:min-h-0 lg:min-w-0 py-3 px-3">
    <NuxtLink :to="{ name: name, params: { slug: post.slug } }">
      <div class="max-w-2xl w-full lg:flex border shadow-xl mb-5 text-center">
        <img
          :alt="post.feature.alt"
          :title="post.feature.alt"
          :src="post.feature.image"
          class="h-48 lg:h-auto lg:w-48 sm:w-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l"
        />
        <div
          class="border-r border-b border-l dark:border-gray-700 border-grey-light lg:border-l-0 lg:border-t lg:border-gray-100 dark:lg:border-gray-500 dark:bg-gray-900 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-8">
            <nuxt-link
              :to="{ name: name, params: { slug: post.slug } }"
              class="text-green-700 font-bold text-xl mb-2"
            >
              {{ post.title }}
            </nuxt-link>
            <div class="text-left">
              <p
                class="prose prose-xs text-gray-500 dark:text-gray-100 text-left"
                v-html="post.summary"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      default: 'slug',
    },
  },
}
</script>
