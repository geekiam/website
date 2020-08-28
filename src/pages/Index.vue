<template>
    <home-layout>
        <transition-group name="fade">
            <post-card :key="node.id" :post="node" v-for="{ node } of posts" />
        </transition-group>
        <ClientOnly>
            <infinite-loading @infinite="scroll" spinner="spiral">
                <div slot="no-more">
                    You've scrolled through all the posts ;)
                </div>
                <div slot="no-results">Sorry, no posts yet :(</div>
            </infinite-loading>
        </ClientOnly>
    </home-layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Geek Community',
    },
    data() {
        return {
            posts: [],
            currentPage: 1,
        }
    },
    created() {
        this.posts.push(...this.$page.posts.edges)
    },
    methods: {
        async scroll($state) {
            if (this.currentPage + 1 > this.$page.posts.pageInfo.totalPages) {
                $state.complete()
            } else {
                const { data } = await this.$fetch(`/${this.currentPage + 1}`)
                if (data.posts.edges.length) {
                    this.currentPage = data.posts.pageInfo.currentPage
                    this.posts.push(...data.posts.edges)
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
query Blog($page: Int) {
    posts: allPost(perPage: 3, page: $page) @paginate {
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
