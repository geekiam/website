<template>
  <!-- 3 column wrapper -->
  <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
    <!-- Left sidebar & main wrapper -->
    <div class="flex-1 min-w-0 bg-gray-50 dark:bg-gray-900 xl:flex">
      <!-- left column -->
      <div class="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200">
        <div class="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
          <slot name="left-column" />
        </div>
      </div>

      <!-- center column -->
      <div class="bg-white dark:bg-gray-900 lg:min-w-0 lg:flex-1">
        <slot name="center-column" />
      </div>
    </div>
    <!-- right column -->
    <div
      class="bg-gray-50 dark:bg-gray-900 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0"
    >
      <div class="pl-6 lg:w-80">
        <slot name="right-column" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeColumns',
  layout: 'home',
}
</script>
