<template>
    <home-layout>
        <template #main-content>
            <header>
                <div
                    class="flex flex-wrap items-center justify-center sm:justify-left border-t border-b border-gray-300 w-full mt-10 py-10 sm:px-16"
                >
                    <figure
                        class="px-2 mb-1 sm:mb-0 w-full sm:w-1/5 flex justify-center"
                    >
                        <g-image
                            :alt="author_detail.fullName"
                            :src="author_detail.avatar"
                            @error="imageLoadError"
                            class="h-14 w-14 rounded-full"
                            aria-labelledby="authorIcon"
                        />
                    </figure>
                    <div class="px-4 sm:w-4/5 text-center sm:text-left">
                        <h1
                            class="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-green-700"
                        >
                            {{ author_detail.fullName }}
                        </h1>
                        <p class="py-4 text-md text-gray-700 px-5">
                            {{ author_detail.biography }}
                        </p>
                    </div>
                </div>
            </header>
            <section>
                <post-card
                    :key="edge.node.id"
                    :post="edge.node"
                    v-for="edge in $page.author.belongsTo.edges"
                />
            </section>
        </template>
    </home-layout>
</template>

<script>
import fetch from 'node-fetch'
export default {
    name: 'Author',
    data() {
        return {
            author_detail: {},
        }
    },
    async created() {
        let user = await fetch(
            `/.netlify/functions/author-detail?name=${this.$page.author.title}`
        )
        this.author_detail = await user.json()
    },
    methods: {
        imageLoadError(e) {
            e.target.src = `/authors/images/default.png`
        },
    },
}
</script>
<page-query>
query Author($path: String!, $page: Int) {
    author(path: $path) {
        id
        title
        path
        belongsTo(page: $page, perPage: 6) @paginate {
            totalCount
            pageInfo {
                totalPages
                currentPage
            }
            edges {
                node {
                    ... on Post {
                        id
                        title
                        date(format: "D MMMM Y")
                        path
                        content
                        summary
                        description
                        timeToRead
                        categories {
                            id
                            title
                            path
                        }
                        tags {
                            id
                            title
                            path
                        }
                    }
                }
            }
        }
    }
}
</page-query>
