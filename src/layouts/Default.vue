<template>
  <div>
      <site-header/>
      <div>
          <div>
              <slot />
          </div>

      </div>
      <site-footer  />
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


