<script lang="ts" setup>
import { AcademicCapIcon, RssIcon,  FingerPrintIcon, MicrophoneIcon, NewspaperIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Academic Papers',
    description:
        'Keep up to date with all the latest academic research in your area of interest',
    icon: AcademicCapIcon,
  },
  {
    name: 'Podcasts',
    description:
        'Get all the latest updates to all podcasts around your interests.',
    icon: MicrophoneIcon,
  },
  {
    name: 'Blogs & Tutorials',
    description:
        'All relevant opinions, tutorials, tips & tricks shared by members of your community of interest.',
    icon: RssIcon,
  },
  {
    name: 'News ',
    description:
        'All the latest news articles and information in subjects you care about.',
    icon: NewspaperIcon,
  },
]
</script>

<template>
  <nuxt-layout name="default">
         <div class="bg-gray-100 dark:bg-gray-900 py-24 sm:py-32">

        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-lg font-semibold leading-8 tracking-tight text-green-500">Learn & keep up to date</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-green-900 dark:text-green-600 sm:text-4xl">Follow your passions</p>
            <p class="mt-6 text-lg leading-8 text-gray-900 dark:text-gray-200">Discover, Organise, Share and Promote learning in communities of interest</p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div v-for="feature in features" :key="feature.name" class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-green-900 dark:text-green-500">
                  <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 dark:bg-green-800">
                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {{ feature.name }}
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-900 dark:text-gray-200">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>



  </nuxt-layout>
</template>

<style scoped></style>
