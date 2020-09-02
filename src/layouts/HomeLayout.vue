<template>
    <div id="app">
        <site-header></site-header>
        <main>
            <div
                class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex bg-gray-100"
            >
                <div class="flex-1 min-w-0 xl:flex-1 bg-gray-100">
                    <div class="xl:flex-shrink-0 xl:w-64">
                        <div class="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                            <div class="flex items-center justify-between">
                                <div class="flex-1 space-y-8">
                                    <div
                                        class="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8"
                                    >
                                        <div
                                            class="flex items-center space-x-3"
                                        >
                                            <div
                                                class="flex-shrink-0 h-12 w-12"
                                            >
                                                <div
                                                    class="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6"
                                                >
                                                    <div
                                                        class="flex items-center space-x-2"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white lg:min-w-0 lg:flex-6">
                    <div
                        class="pl-6 pr-2 pt-4 pb-1 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0"
                    >
                        <section class="lg:container">
                            <slot name="main-content" />
                        </section>
                    </div>
                </div>
                <div
                    class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0"
                >
                    <div class="pl-6 lg:w-80"></div>
                </div>
            </div>
        </main>
        <site-footer></site-footer>
    </div>
</template>
