<template>
    <section
        class="border-b border-gray-300 mx-auto max-w-3xl px-6 md:px-8 py-16"
    >
        <nav aria-label="pagination" role="navigation">
            <ul class="flex items-center justify-between sm:text-lg lg:text-xl">
                <li class="lg:w-1/5">
                    <g-link
                        :class="{
                            'pointer-events-none opacity-0':
                                info.currentPage === 1,
                        }"
                        :rel="info.currentPage === 1 ? 'nofollow' : 'prev'"
                        :to="previousPage(info.currentPage)"
                        class="text-gray-700 hover:text-black px-4 py-2 transition-color"
                    >
                        &larr; Previous
                    </g-link>
                </li>
                <li
                    class="hidden md:flex w-auto text-center text-gray-600 text-base"
                >
                    Page {{ info.currentPage }} of {{ info.totalPages }}
                </li>
                <li class="lg:w-1/5 text-right">
                    <g-link
                        :class="{
                            'pointer-events-none opacity-0':
                                info.currentPage === info.totalPages,
                        }"
                        :rel="
                            info.currentPage == info.totalPages
                                ? 'nofollow'
                                : 'next'
                        "
                        :to="nextPage(info.currentPage, info.totalPages)"
                        class="text-gray-700 hover:text-black px-4 py-2 transition-color"
                    >
                        Next &rarr;
                    </g-link>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script>
export default {
    props: ['base', 'info'],
    computed: {
        basePath() {
            console.log(`base ${this.base}`)
            return this.base || ''
        },
    },
    methods: {
        previousPage(currentPage) {
            return [0, 1].includes(currentPage - 1)
                ? `${this.basePath}/`
                : `${this.basePath}/${currentPage - 1}/`
        },
        nextPage(currentPage, totalPages) {
            return totalPages > currentPage
                ? `${this.basePath}/${currentPage + 1}/`
                : `${this.basePath}/${currentPage}/`
        },
    },
}
</script>
