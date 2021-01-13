<template>
    <div class="flex-grow h-screen w-screen max-w-7xl mx-auto xl:px-8 lg:flex">
        <!-- Left sidebar & main wrapper -->
        <div class="flex-1 min-w-0 xl:flex">
            <div
                class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200"
            >
                <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                    <!-- Start left column area -->
                    <div class="h-full relative" style="min-height: 10rem">
                        <div
                            class="absolute inset-0 border-1 border-gray-200 rounded-lg"
                        >
                            <slot name="left-side-bar" />
                        </div>
                    </div>
                    <!-- End left column area -->
                </div>
            </div>

            <div class="h-full bg-white lg:min-w-0 lg:flex-1 overflow-y-auto">
                <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
                    <!-- Start main area-->
                    <div class="relative h-full" style="min-height: 36rem">
                        <div class="absolute inset-0 rounded-lg">
                            <slot name="main-content" />
                        </div>
                    </div>
                    <!-- End main area -->
                </div>
            </div>
        </div>

        <div
            class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0"
        >
            <div class="h-full pl-6 py-6 lg:w-80">
                <!-- Start right column area -->
                <div class="h-full relative">
                    <div class="absolute inset-0">
                        <slot name="right-side-bar" />
                    </div>
                </div>
                <!-- End right column area -->
            </div>
        </div>
    </div>

    <!--    <div class="md:container">-->
    <!--        <slot name="left-side-bar" />-->

    <!--        <div class="flex-none bh-white flex-col min-h-0 min-w-0 overflow-auto">-->
    <!--            <section class="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">-->
    <!--                <div-->
    <!--                    class="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0"-->
    <!--                >-->
    <!--                    <slot name="main-content" />-->
    <!--                </div>-->
    <!--            </section>-->
    <!--        </div>-->
    <!--        <div class="flex-1"><slot name="right-side-bar" /></div>-->
    <!--    </div>-->
</template>
