<template>
    <div class="flex overflow-hidden mt-3">
        <div id="sidebar" class="hidden md:flex h-0 top-0 h-full">
            <slot name="left-side-bar" />
        </div>
        <div
            id="content-wrapper"
            class="sm:px-1 bg-white rounded-md items-center"
        >
            <slot name="main-content" />
        </div>
        <div class="hidden xl:text-sm xl:block flex-1 w-64 pl-8 mr-8">
            <slot name="right-side-bar" />
        </div>
    </div>
</template>
