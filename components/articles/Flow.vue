<template>
  <div aria-label="Progress">
    <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
      <li class="md:flex-1">
        <!-- Previous Step -->
        <nuxt-link
          :to="{ name: section, params: { slug: previous.url } }"
          class="group pl-4 py-2 flex flex-col border-l-4 border-green-800 hover:border-green-500 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <div
            class="text-xs text-green-800 font-semibold group-hover:text-green-500 grid justify-items-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-4 w-4 fill-current mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clip-rule="evenodd"
              />
            </svg>
            <span v-html="previous.title"></span>
          </div>
        </nuxt-link>
      </li>
      <li class="md:flex-1">
        <!-- Next Step -->
        <nuxt-link
          :to="{ name: section, params: { slug: next.url } }"
          class="group pl-4 py-2 flex flex-col border-l-4 border-green-800 hover:border-green-500 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <div
            class="text-xs text-green-800 font-semibold group-hover:text-green-500 grid justify-items-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-4 w-4 fill-current ml-1"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <span v-html="next.title"></span>
          </div>
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Flow',
  props: {
    previous: {
      type: Object,
      required: true,
    },
    next: {
      type: Object,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
  },
}
</script>
