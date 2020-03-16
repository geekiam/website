<template>
  <div>
      <site-header/>
      <div>
          <div>
              <slot />
          </div>

      </div>
      <site-footer class="py-8 sm:py-16" />
  </div>
</template>

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


