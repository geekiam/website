<template>
   <header>
      <div class="bg-gray-900 p-4 mt-0 w-full">
         <div class="container mx-auto flex items-center">
            <div class="flex text-white font-extrabold">
               <g-link to="/" class="flex text-white text-base no-underline hover:text-white hover:no-underline">
                  <g-image src="~/assets/images/logo.png" :alt="$static.metadata.siteName" width="500"/></g-link>
            </div>
         </div>
      </div>
   </header>
</template>

<script>

    export default {
        name: "SiteHeader",
    }
</script>

<style scoped>

</style>

<static-query>
   query {
      metadata {
         siteName
         siteUrl
      }
   }
</static-query>

