<template>
  <div aria-label="Progress">
    <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
      <li class="md:flex-1">
        <div class="grid content-start">
          <!-- Previous Step -->
          <nuxt-link
            :to="previous.url"
            class="group pl-4 py-2 flex flex-col border-l-4 border-green-800 hover:border-green-500 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          >
            <span
              class="text-xs text-green-800 font-semibold uppercase group-hover:text-green-500"
            >
              Previous</span
            >
            <span
              class="text-sm font-medium text-green-800"
              v-text="previous.title"
            ></span>
          </nuxt-link>
        </div>
      </li>
      <li class="md:flex-1">
        <!-- Next Step -->
        <div class="grid content-end">
          <nuxt-link
            :to="next.url"
            class="justify-items-end group pl-4 py-2 flex flex-col border-l-4 border-green-800 hover:border-green-500 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          >
            <span
              class="text-xs text-green-800 font-semibold uppercase group-hover:text-green-500"
              >Next
            </span>
            <span
              class="text-sm font-medium text-green-800"
              v-text="next.title"
            ></span>
          </nuxt-link>
        </div>
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
