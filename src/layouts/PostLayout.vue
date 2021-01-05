<template>
    <section
        class="h-screen w-screen flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden"
    >
        <aside class="sm:h-full sm:w-16 w-full h-12">
            <slot name="left-side-bar" />
        </aside>
        <main
            class="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto"
        >
            <section class="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
                <div class="flex flex-col lg:flex-row h-full w-full">
                    <div
                        class="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0"
                    >
                        <!-- overflow content right -->
                        <div class="bg-white min-h-0 min-w-0">
                            <slot name="main-content" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </section>
    <!--    <div class="flex justify-between container mt-3 mx-auto">-->
    <!--        <div id="sidebar" class="h-0 top-0 h-full">-->
    <!--            <slot name="left-side-bar" />-->
    <!--        </div>-->
    <!--        <div id="content-wrapper" class="bg-white rounded-md flex-auto">-->
    <!--            <slot name="main-content" />-->
    <!--        </div>-->
    <!--        <div class="hidden xl:text-sm lg:block items-center flex-1 pl-2 mr-2">-->
    <!--            <slot name="right-side-bar" />-->
    <!--        </div>-->
    <!--    </div>-->
</template>
