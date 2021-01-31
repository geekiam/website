<template>
  <div aria-label="Progress">
    <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
      <li class="md:flex-1">
        <!-- Previous Step -->
        <nuxt-link
          :to="previous.url"
          class="group pl-4 py-2 flex flex-col border-l-4 border-green-800 hover:border-green-500 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <span
            class="text-xs text-green-800 font-semibold uppercase group-hover:text-green-500"
            >{{ previous.title }}</span
          >
        </nuxt-link>
      </li>
      <li class="md:flex-1">
        <!-- Next Step -->
        <nuxt-link
          :to="next.url"
          class="group pl-4 py-2 flex flex-col border-l-4 border-green-600 hover:border-green-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <span
            class="text-xs text-green-600 font-semibold uppercase group-hover:text-green-800"
            >{{ next.title }}</span
          >
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'PreviousNext',
  props: {
    previous: {
      type: Object,
      required: true,
    },
    next: {
      type: Object,
      required: true,
    },
  },
}
</script>
