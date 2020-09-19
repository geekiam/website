<template>
    <home-layout>
        <template #main-content>
            <header>
                <div
                    class="text-center max-w-xl md:max-w-3xl xl:max-w-4xl flex flex-col-reverse mx-auto text-center px-6 pt-24 pb-10 md:py-32 border-b border-gray-300"
                >
                    <h1
                        class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-2 capitalize"
                    >
                        {{ titleCase($page.author.title) }}
                    </h1>
                    <div class="md:flex bg-white rounded-lg p-6">
                        <g-image
                            :alt="`${$page.author.title}`"
                            :src="avatar"
                            @error="imageLoadError"
                            class="h-14 w-14 rounded-full"
                            aria-labelledby="authorIcon"
                        />
                    </div>
                </div>
            </header>
            <section>
                <post-card
                    :key="edge.node.id"
                    :post="edge.node"
                    v-for="edge in this.posts"
                />
            </section>
        </template>
    </home-layout>
</template>

<script>
export default {
    name: 'Author',
    data() {
        return {
            posts: [],
        }
    },
    mounted() {
        this.posts.push(...this.$page.author.belongsTo.edges)
    },
    computed: {
        avatar() {
            return `/authors/images/${this.$page.author.id}.png`
        },
    },
    methods: {
        titleCase(str) {
            return str
                .replace('-', ' ')
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')
        },
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
