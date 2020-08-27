<template>
    <home-layout>
        <template #left-sidebar> </template>

        <template #post-list>
            <post-item
                :key="edge.node.id"
                :post="edge.node"
                v-for="edge in $page.posts.edges"
            />
        </template>
    </home-layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Software Developer Community',
    },
}
</script>

<page-query>
query($page: Int) {
    posts: allPost(page: $page, perPage: 6) @paginate {
        totalCount
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
