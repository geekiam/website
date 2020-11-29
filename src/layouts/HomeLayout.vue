<template>
    <div class="w-full mx-w-8xl mx-auto mt-5">
        <div class="lg:flex sm:flex-0">
            <div
                id="sidebar"
                class="top-0 fixed z-1 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden"
            >
                <slot name="left-side-bar" />
            </div>
            <div
                class="max-w-2xl h-screen z-1 flex-auto items-center overflow-x-hidden bg-white p-5 rounded-md"
            >
                <slot name="main-content" />
            </div>
            <div class="flex-1 min-w-1"></div>
        </div>
    </div>
</template>
