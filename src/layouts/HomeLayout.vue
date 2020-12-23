<template>
    <div class="flex overflow-hidden mt-3">
        <div id="sidebar" class="hidden md:flex h-0 top-0 h-full">
            <slot name="left-side-bar" />
        </div>
        <div
            class="h-screen z-1 flex-auto sm:px-1 overflow-x-hidden bg-white m-3 rounded-md"
        >
            <slot name="main-content" />
        </div>
        <div class="hidden md:flex min-w-1">
            <slot name="right-side-bar" />
        </div>
    </div>

    <!--class="top-0 fixed z-1 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden"-->
</template>
