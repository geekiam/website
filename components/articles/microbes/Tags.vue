<template>
  <div class="mt-4 mb-4 px-2">
    <nuxt-link
      v-for="tag in tags"
      :key="tag.id"
      :to="{ name: 'tags-slug', params: { slug: tag } }"
      class="mr-2 lowercase"
      v-html="`#${tag}`"
    >
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Object,
      required: true,
    },
  },
}
</script>
