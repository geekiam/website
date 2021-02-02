<template>
  <div class="inline-flex">
    <svg class="h-4 w-4 mr-1 ml-4 fill-current" viewBox="0 0 60 60">
      <path
        d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
      />
      <path
        d="M30,6c-0.552,0-1,0.447-1,1v23H14c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1V7C31,6.447,30.552,6,30,6z"
      />
    </svg>
    <span
      class="text-gray-500 dark:text-gray-100 ml-1"
      v-html="timeToRead"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'ReadTime',
  props: {
    timeToRead: {
      type: Object,
      required: true,
    },
  },
}
</script>
