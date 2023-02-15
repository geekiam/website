
<script lang="ts" setup>
const navigation = [
  { name: 'Apps', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'About', href: '#' },

]
</script>
<template>
  <header class="dark:bg-gray-900 bg-gray-100">
    <nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
      <div class="flex w-full items-center justify-between border-b border-green-800 py-6 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img class="h-16 w-auto" src="~/assets/img/geekiam-logo.svg" alt="" />
          </a>
          <div class="ml-10 hidden space-x-8 lg:block">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-gray-50">{{ link.name }}</a>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <a href="#" class="inline-block rounded-md border border-transparent bg-green-800 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">Sign in</a>
          <a href="#" class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-green-800 hover:bg-green-50">Sign up</a>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
        <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-green-800 hover:text-green-300">{{ link.name }}</a>
      </div>
    </nav>
  </header>
</template>

