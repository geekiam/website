<template>
    <div class="w-full mx-w-8xl mx-auto">
        <div class="lg:flex">
            <div
                id="sidebar"
                class="top-0 fixed z-1 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden"
            >
                <slot name="left-side-bar" />
            </div>
            <div class="flex w-full">
                <div class="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 bg-white">
                    <slot name="post-content" />
                </div>
                <div
                    class="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8"
                >
                    <div class="pl-3 lg:w-64">
                        <slot name="right-side-bar" />
                    </div>
                </div>
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
