<template>
    <div class="flex-grow w-full max-w-6xl mx-auto xl:px-2 lg:flex">
        <div
            class="flex-1 min-w-1 xl:flex-1 bg-gray-100 xl:flex-shrink-1 xl:w-64"
        >
            <slot name="left-side-bar" />
        </div>

        <div
            class="bg-white lg:min-w-2 lg:flex-7 pl-6 pr-2 pt-4 pb-1 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0"
        >
            <section>
                <slot name="post-content" />
            </section>
        </div>

        <div
            class="bg-gray-100 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0"
        >
            <div class="pl-6 lg:w-80">
                <slot name="right-side-bar" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostLayout',
}
</script>

<style scoped></style>
