<template>
  <div
    class="h-screen w-screen flex justify-center content-center flex-wrap bg-gray-100 dark:bg-gray-900"
  >
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-full mx-auto mt-3 prose prose-xl">
      <div class="flex-1 justify-center content-center mx-auto mx-w-full">
        <img src="/error-page.svg" alt="Geek.I.Am Error" />
      </div>
      <div class="flex-1 justify-center content-center mx-auto mx-w-full mt-3">
        <h3>Well that is rather embarrassing!</h3>
      </div>
      <div
        v-if="error.statusCode === 404"
        class="flex-1 mx-auto justify-center content-center"
      >
        <p>This could be embarrassing for you or for us.</p>
        <p>The page you requested cannot be found!</p>
        <p>We have either deleted the page or moved it somewhere else!</p>
        <p>Or you have typed the incorrect Url</p>
      </div>
      <div v-else>An error occurred</div>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
