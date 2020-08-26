<template>
    <home-layout>
        <template #post-list>
            <post-item
                :key="edge.node.id"
                :post="edge.node"
                v-for="edge in $page.posts.edges"
            />

            <pagination
                :info="$page.posts.pageInfo"
                v-if="$page.posts.pageInfo.totalPages > 1"
            />
        </template>
    </home-layout>
</template>

<script>
import PostItem from '@/components/PostItem'
import Pagination from '@/components/Pagination'

export default {
    components: {
        PostItem,
        Pagination,
    },
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
