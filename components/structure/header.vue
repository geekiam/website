
<script lang="ts" setup>
const navigation = [
  { name: 'Apps', href: 'https://geekiam.app' },
  { name: 'Blog', href: 'https://geekiam.blog' },
  { name: 'About', href: '#' },

]
</script>
<template>
  <header class="dark:bg-gray-800 bg-gray-200">
    <nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
      <div class="flex w-full items-center justify-between border-b border-orange-500 py-6 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img class="h-16 w-auto" src="~/assets/img/geekiam-logo.svg" alt="geekiam" />
          </a>
          <div class="ml-10 hidden space-x-8 lg:block">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-orange-500 hover:text-orange-600 dark:hover:text-orange-400">{{ link.name }}</a>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <a href="https://geekiam.app" class="inline-block rounded-md border border-transparent bg-orange-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">Sign in</a>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
        <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-orange-800 hover:text-orange-300">{{ link.name }}</a>
      </div>
    </nav>
  </header>
</template>

