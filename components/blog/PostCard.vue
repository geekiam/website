<template>
  <div class="flex-1 pt-3 lg:mb-0 lg:min-h-0 lg:min-w-0">
    <NuxtLink :to="post.slug">
      <div class="max-w-2xl w-full lg:flex border shadow-xl mb-5">
        <img
          :alt="post.feature.alt"
          :title="post.feature.alt"
          :src="post.feature.image"
          class="h-48 lg:h-auto lg:w-48 sm:w-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        />
        <div
          class="border-r border-b border-l dark:border-gray-700 border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light dark:bg-gray-900 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-8">
            <nuxt-link
              :to="post.slug"
              class="text-green-700 font-bold text-xl mb-2"
            >
              {{ post.title }}
            </nuxt-link>
            <p
              class="mt-2 leading-2 text-sm text-gray-100"
              v-html="post.summary"
            ></p>
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
  },
}
</script>
