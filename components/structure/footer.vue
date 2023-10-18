<template>
  <footer class="dark:bg-gray-800 bg-gray-200">
    <div class="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="pb-6">
          <a :href="item.href" class="text-sm leading-6  text-orange-500 dark:text-orange-500 hover:text-orange-400">{{ item.name }}</a>
        </div>
      </nav>
      <div class="mt-10 flex justify-center space-x-10">
        <a v-for="item in navigation.social" :key="item.name" :href="item.href" class=" text-orange-500 hover:text-orange-400">
          <span class="sr-only">{{ item.name }}</span>
          <Icon :name="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-orange-500 ">&copy; {{ new Date().getFullYear() }} Geekiam . All rights reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { defineComponent, h } from 'vue'

const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' }
  ],
  social: [
    {
      name: 'X',
      href: 'https://twitter.com/geekiamio',
      icon: 'ri:twitter-x-fill'

    },
    {
      name: 'GitHub',
      href: 'https://github.com/geekiam',
      icon: 'ph:github-logo'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCi0BZqWpclMWX8mj1qh0d4A',
      icon: 'gg:youtube'
    },
  ],
}
</script>