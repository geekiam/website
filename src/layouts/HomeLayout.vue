<template>
    <div
        class="flex flex-grow w-full max-w-6xl mx-auto xl:px-2 lg:flex mt-10 p-4"
    >
        <div class="lg:flex">
            <div
                id="sidebar"
                class="top-0 fixed z-1 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden"
            >
                <slot name="left-side-bar" />
            </div>
            <div
                class="h-screen z-1 flex-auto items-center overflow-x-hidden bg-white p-5 rounded-md"
            >
                <slot name="main-content" />
            </div>
            <div class="flex-1 min-w-1 bg-green-600"></div>
        </div>
    </div>
    <!--<div class="w-full max-w-8xl mx-auto">
        <div class="lg:flex">
            <div
                id="sidebar"
                class="fixed z-40 inset-0 flex-none h-full w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden"
            >
                <slot name="left-side-bar" />
            </div>
            <div
                id="content-wrapper"
                class="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible"
            >
                <div class="pt-10 pb-16 w-full flex">
                    <div class="min-w-0 flex-auto px-4 sm:px-6 xl:px-8">
                        <slot name="main-content" />
                    </div>
                    <div
                        class="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8"
                    >
                        <div
                            class="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) -mt-10 pt-10 pb-4 top-18"
                        >
                            <div class="mb-8">
                                <slot name="right-side-bar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
</template>
