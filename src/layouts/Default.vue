<template>
  <div>
      <site-header class="mb-5"/>
      <div>
          <div>
              <slot />
          </div>

      </div>
      <site-footer class="py-8 sm:py-16" />
  </div>
</template>

<style src="~/assets/css/main.css"></style>

<script>
  import SiteHeader from "../components/SiteHeader.vue";
  import SiteFooter from "../components/SiteFooter";
  export default {
    components: {
        SiteHeader,
        SiteFooter
    }
  }
</script>


