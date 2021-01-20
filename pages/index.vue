<template>
  <!-- 3 column wrapper -->
  <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
    <!-- Left sidebar & main wrapper -->
    <div class="flex-1 min-w-0 bg-gray-50 dark:bg-gray-900 xl:flex">
      <!-- Account profile -->
      <div class="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200">
        <div class="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
          <div class="flex items-center justify-between">
            <div class="flex-1 space-y-8">
              <div
                class="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8"
              >
                <!-- Profile -->
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0 h-12 w-12">
                    <img
                      class="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="space-y-1">
                    <div
                      class="text-sm font-medium dark:text-gray-200 text-gray-900"
                    >
                      Debbie Lewis
                    </div>
                    <a href="#" class="group flex items-center space-x-2.5">
                      <svg
                        class="h-5 w-5 text-gray-400 dark:text-gray-200 group-hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="text-sm text-gray-500 dark:text-gray-200 group-hover:text-gray-900 font-medium"
                        >debbielewis</span
                      >
                    </a>
                  </div>
                </div>
                <!-- Action buttons -->
                <div class="flex flex-col sm:flex-row xl:flex-col">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 xl:w-full"
                  >
                    New Project
                  </button>
                  <button
                    type="button"
                    class="mt-3 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
                  >
                    Invite Team
                  </button>
                </div>
              </div>
              <!-- Meta info -->
              <div
                class="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6"
              >
                <div class="flex items-center space-x-2">
                  <!-- Heroicon name: badge-check -->
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span
                    class="text-sm text-gray-500 dark:text-gray-200 font-medium"
                    >Pro Member</span
                  >
                </div>
                <div class="flex items-center space-x-2">
                  <!-- Heroicon name: collection -->
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                    />
                  </svg>
                  <span
                    class="text-sm text-gray-500 dark:text-gray-200 font-medium"
                    >8 Projects</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects List -->
      <div class="sticky bg-white dark:bg-gray-900 lg:min-w-0 lg:flex-1">
        <div
          class="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 dark:border-gray-500 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0"
        >
          <div class="flex items-center">
            <h1 class="flex-1 text-lg font-medium dark:text-gray-200">Posts</h1>
            <div class="relative">
              <button
                id="sort-menu"
                type="button"
                class="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <!-- Heroicon name: sort-ascending -->
                <svg
                  class="mr-3 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
                  />
                </svg>
                Sort
                <!-- Heroicon name: chevron-down -->
                <svg
                  class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                class="hidden origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              >
                <div
                  class="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="sort-menu"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >Name</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >Date modified</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >Date created</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul
          class="relative z-0 divide-y divide-gray-200 border-b border-gray-200"
        >
          <li
            v-for="post of posts"
            :key="post.slug"
            class="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
          >
            <div class="flex items-center justify-between space-x-4">
              <div class="min-w-0 space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="block">
                    <post-card :post="post" />
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Activity feed -->
    <div
      class="bg-gray-50 dark:bg-gray-900 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0"
    >
      <div class="pl-6 lg:w-80">
        <div class="pt-6 pb-2">
          <h2 class="text-sm font-semibold dark:text-gray-100">Activity</h2>
        </div>
        <div>
          <ul class="divide-y divide-gray-200">
            <li class="py-4">
              <div class="flex space-x-3">
                <img
                  class="h-6 w-6 rounded-full"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                  alt=""
                />
                <div class="flex-1 space-y-1">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm font-medium dark:text-gray-200">You</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-200">1h</p>
                  </div>
                  <p class="text-sm text-gray-500 dark:text-gray-200">
                    Some amazing article
                  </p>
                </div>
              </div>
            </li>

            <!-- More items... -->
          </ul>
          <div class="py-4 text-sm border-t border-gray-200">
            <a
              href="#"
              class="text-green-600 font-semibold hover:text-green-900"
              >View all activity <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',

  async asyncData({ $content }) {
    const posts = await $content('posts').sortBy('date', 'desc').fetch()
    return {
      posts,
    }
  },
}
</script>
