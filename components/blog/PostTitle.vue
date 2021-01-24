<template>
  <div class="mt-4 mb-4 text-green-700">
    <div
      class="text-bold text-3xl sm:text-3xl leading-tight mb-1 sm:mb-2n font-sans"
    >
      <h1 class="capitalize" v-html="post.title"></h1>
    </div>
    <div class="flex flex-row mb-3 mt-3 text-gray-500 text-sm">
      <svg
        class="h-4 w-4 fill-current mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
        />
      </svg>

      <span
        class="mr-4 text-gray-500 dark:text-gray-100 ml-1"
        v-html="$moment(post.date).format('d MMMM yyyy')"
      ></span>
      <svg
        class="h-4 w-4 mr-1 ml-4 fill-current"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"
        />
      </svg>
      <nuxt-link
        class="hover:underline"
        :to="{ name: 'author-slug', params: { slug: author.title } }"
      >
        <span
          class="text-gray-500 dark:text-gray-100 ml-1"
          v-html="author.name.firstName"
        ></span>
        <span
          class="text-gray-500 dark:text-gray-100 ml-1"
          v-html="author.name.lastName"
        ></span>
      </nuxt-link>
    </div>
    <div class="mt-4 mb-4 px-2">
      <nuxt-link
        v-for="tag in post.tags"
        :key="tag.id"
        :to="{ name: 'tags-slug', params: { slug: tag } }"
        class="mr-2 lowercase"
        v-html="`#${tag}`"
      >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostTitle',
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
