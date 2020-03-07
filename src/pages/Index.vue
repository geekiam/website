<template>
    <Layout >
        <main>
            <section>
                <post-item v-for="edge in $page.posts.edges"
                           :key="edge.node.id"
                           :post="edge.node"/>
            </section>
            <pagination :info="$page.posts.pageInfo"
                        v-if="$page.posts.pageInfo.totalPages > 1" />
        </main>
    </Layout>
</template>

<script>
     import PostItem from '@/components/PostItem'
     import Pagination from '@/components/Pagination'

    export default {
        components: {
            PostItem,
            Pagination
        },
    }
</script>

<page-query>
    query Home ($page: Int) {
        posts: allPost (page: $page, perPage: 6) @paginate {
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
                    excerpt
                    description
                    path
                    tags {
                            id
                            title
                            path
                    }
                }
            }
        }
    }
</page-query>

