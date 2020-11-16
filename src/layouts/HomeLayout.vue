<template>
    <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex bg-gray-100">
        <div class="flex-2 min-w-0 xl:flex-2 bg-gray-100">
            <div class="xl:flex-shrink-0 xl:w-64">
                <slot name="left-side-bar" />
            </div>
        </div>
        <div class="bg-white">
            <div
                class="pt-4 pb-1 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0"
            >
                <section class="lg:container">
                    <slot name="main-content" />
                </section>
            </div>
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
