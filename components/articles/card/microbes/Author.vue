<template>
  <div class="inline-flex">
    <div class="flex-1">
      <svg
        class="h-4 w-4 mr-1 ml-4 fill-current"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"
        />
      </svg>
    </div>
    <div class="flex-1">
      <nuxt-link
        class="hover:underline"
        :to="{ name: 'author-slug', params: { slug: author.title } }"
      >
        <div class="inline-flex">
          <span
            class="flex-1 text-gray-500 dark:text-gray-100 ml-1"
            v-html="author.name.firstName"
          ></span>

          <span
            class="flex-1 text-gray-500 dark:text-gray-100 ml-1"
            v-html="author.name.lastName"
          ></span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>
