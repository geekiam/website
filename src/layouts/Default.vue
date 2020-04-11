<template>
  <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen" >
      <site-header/>
      <div>
          <div class="flex-grow">
              <slot />
          </div>

      </div>
      <site-footer class="py-8 sm:py-16" />
  </div>
</template>

<script>
  import SiteHeader from "../components/SiteHeader";
  import SiteFooter from "../components/SiteFooter";

  export default {
    components: {
        SiteHeader,
        SiteFooter
    }
  }
</script>


