<template>
    <home-layout>
        <template #left-sidebar> </template>

        <template #post-list>
            <post-card
                :key="node.id"
                :post="node"
                v-for="{ node } of loadedPosts"
            />
        </template>
        <transition-group>
            <ClientOnly>
                <infinite-loading @infinite="infiniteHandler" spinner="spiral">
                    <div slot="no-more">
                        You've scrolled through all the posts ;)
                    </div>
                    <div slot="no-results">Sorry, no posts yet :(</div>
                </infinite-loading>
            </ClientOnly>
        </transition-group>
    </home-layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Geek Community',
    },
    data() {
        return {
            loadedPosts: [],
            currentPage: 1,
            metaData: [],
        }
    },
    created() {
        this.loadedPosts.push(...this.$page.posts.edges)
    },
    methods: {
        async infiniteHandler($state) {
            if (this.currentPage + 1 > this.$page.posts.pageInfo.totalPages) {
                $state.complete()
            } else {
                const { data } = await this.$fetch(
                    `/blog/${this.currentPage + 1}`
                )
                if (data.posts.edges.length) {
                    this.currentPage = data.posts.pageInfo.currentPage
                    this.loadedPosts.push(...data.posts.edges)
                    $state.loaded()
                } else {
                    $state.complete()
                }
            }
        },
    },
}
</script>

<page-query>
query($page: Int) {
    posts: allPost(page: $page, perPage: 3) @paginate {
        pageInfo {
            totalPages
            currentPage
        }
        edges {
            node {
                id
                title
                timeToRead
                content
                summary
                path
                date(format: "D MMMM Y")
                feature {
                    image(width: 400)
                    alt
                }
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
                author {
                    id
                    title
                    path
                }
            }
        }
    }
}
</page-query>
<static-query>
query {
    metadata {
        siteUrl
        siteDescription
    }
}
</static-query>
