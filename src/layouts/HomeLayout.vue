<template>
    <div class="flex overflow-hidden mt-3">
        <div id="sidebar" class="hidden md:flex h-0 top-0 h-full">
            <slot name="left-side-bar" />
        </div>
        <div
            class="h-screen z-1 flex-auto sm:px-1 overflow-x-hidden overflow-y-scroll bg-white m-3 rounded-md"
        >
            <slot name="main-content" />
        </div>
        <div class="hidden md:flex min-w-1">
            <slot name="right-side-bar" />
        </div>
    </div>
</template>
