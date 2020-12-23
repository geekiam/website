<template>
    <div class="flex overflow-hidden mt-3">
        <div id="sidebar" class="hidden md:flex h-0 top-0 h-full">
            <slot name="left-side-bar" />
        </div>
        <div id="content-wrapper" class="sm:px-1 bg-white rounded-md flex-auto">
            <slot name="main-content" />
        </div>
        <div class="hidden xl:text-sm xl:block items-center flex-1 pl-2 mr-2">
            <slot name="right-side-bar" />
        </div>
    </div>
</template>
