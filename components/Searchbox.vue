<template>
  <div class="flex-1 flex justify-center lg:justify-end">
    <ais-instant-search
      :search-client="searchClient"
      index-name="site_search"
      class="w-full px-2 lg:px-6"
    >
      <label for="search" class="sr-only">Search posts</label>
      <div
        class="relative text-gray-800 dark:text-gray-200 focus-within:text-gray-400"
      >
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <!-- Heroicon section: search -->
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <input
          id="search"
          ref="searchInput"
          name="search"
          class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-green-400 bg-opacity-25 text-green-800 dark:text-green-100 dark:placeholder-green-200 placeholder-green-800 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
          placeholder="Search"
          type="search"
          autocomplete="off"
        />
      </div>
    </ais-instant-search>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'

export default {
  name: 'Searchbox',
  data() {
    return {
      currentRefinement: '',
      searchClient: algoliasearch(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_API_KEY
      ),
    }
  },
}
</script>
