
<template>
    <Layout>
        <template #mainbody>
            <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div class="mt-1 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                    <post-item :key="edge.node.id" :post="edge.node" v-for="edge in $page.posts.edges"/>
                </div>
                <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1"/>
            </div>
        </template>
    </Layout>
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
date (format: "D MMMM Y")
feature {
image(width:400)
alt
}
categories {
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
