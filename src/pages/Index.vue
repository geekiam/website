<template>
    <Layout class="bg-white">
        <main>
            <section>
                <post-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
            </section>

        </main>

    </Layout>
</template>

<script>
    import config from '~/.temp/config.js'
    import PostItem from '@/components/PostItem'

    export default {
        components: {
            PostItem,

        },
        metaInfo() {
            return {
                title: this.$static.metadata.siteName,
            }
        },
        computed:
            {
                config() {
                    return config
                },
            }
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

<static-query>
    query {
        metadata {
            siteName
            siteUrl
            siteDescription
        }
    }
</static-query>
