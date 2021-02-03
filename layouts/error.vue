<template>
  <div>
    <div
      class="h-screen w-screen justify-center content-center flex-wrap bg-gray-100 dark:bg-gray-900"
    >
      <div class="max-w-7xl mx-auto mt-3">
        <div
          class="flex-1 justify-center content-center mx-auto mx-w-3xl prose prose-xl"
        >
          <img
            src="/error-page.svg"
            alt="Geek.I.Am Error"
            class="rounded-full p-10"
          />
        </div>
        <div
          class="flex-1 justify-center content-center mx-auto mx-w-3xl mt-3 prose prose-xl"
        >
          <h2>Well this is rather embarrassing!</h2>
        </div>
        <div
          v-if="error.statusCode === 404"
          class="flex-1 mx-auto justify-center content-center mx-w-3xl prose prose-xl"
        >
          <p>
            This is either embarrassing for you or for us. We're going to take
            the responsibility and ownership either way!
          </p>
          <p class="text-bold text-xl">
            <strong>The page you requested cannot be found!</strong>
          </p>
          <p>
            What this means is that have either deleted the page or moved it
            somewhere else! or there is the the slightest possibility that you
            have mis-typed or entered an incorrect Url
          </p>
          <p>
            The best way to solve this is to click on the link to get back to
            the
            <nuxt-link to="/">Geek.I.Am home page</nuxt-link>
            and we'll all act like none of this ever happened!
          </p>
        </div>
        <div
          v-else
          class="flex-1 mx-auto justify-center content-center mx-w-3xl prose prose-xl"
        >
          <p class="text-bold text-xl">It's not you, it's us!</p>
          <p>
            Unfortunately all we can say at this point is a blank vanilla
            statement that
          </p>
          <p class="text-bold text-xl">
            <strong>An error occurred</strong>
          </p>

          <p>
            Rest assured we have dispatched our hardest working code monkey to
            fix it.
          </p>
          <p>
            You could click on the link to get back to the
            <nuxt-link to="/">Geek.I.Am home page</nuxt-link> but we'll level
            with now there may be a possibility that it could potentially result
            in you coming back here!
          </p>
          <p>
            If you do end up coming back here, it will make our hardest working
            code monkey work even faster to resolve the issue!
          </p>
        </div>
        <div
          class="flex-1 mx-auto justify-center content-center mx-w-3xl prose prose-xl"
        >
          <nuxt-link to="/">Get me out of here pronto!</nuxt-link>
        </div>
      </div>
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
