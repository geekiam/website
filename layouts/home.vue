<template>
  <div>
    <div
      class="fixed top-0 left-0 w-1/2 h-full bg-gray-50 dark:bg-gray-900"
      aria-hidden="true"
    ></div>
    <div
      class="fixed top-0 right-0 w-1/2 h-full bg-gray-50 dark:bg-gray-900"
      aria-hidden="true"
    ></div>
    <div class="relative min-h-screen flex flex-col">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Header from '@/components/site/Header'
export default {
  components: { Header },
}
</script>
