<template>
  <div>
      <site-header class="mb-5"/>
      <div class="flex mt-5">
          <div class="w-full bg-gray h-12">
              <slot />
          </div>

      </div>
  </div>
</template>


<script>
  import SiteHeader from "../components/SiteHeader.vue";
  export default {
    components: {SiteHeader}
  }
</script>


