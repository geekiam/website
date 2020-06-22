<template>
    <Layout>
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
  metaInfo: {
    title: 'In depth Articles and mini tutorials and stories for a world of learning'
  }
}
</script>

<page-query>
    query ($page: Int) {
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
                    summary
                    path
                    date  (format: "D MMMM Y")
                    categories {
                            id
                            title
                            path
                    }
                }
            }
        }
    }
</page-query>

