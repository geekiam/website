<template>
    <Layout>

        <template #mainbody>
            <article
                :class="{ 'border-b border-grey-lighter pb-10 mb-16': !$page.post.author }"

            >
                <post-title :post="$page.post"></post-title>

                <div
                    :class="{ 'pb-10': $page.post.author || $page.post.categories }"
                    class="markdown-body text-lg leading-normal text-gray-700"
                    v-html="$page.post.content"
                />

                <footer
                    class="flex flex-wrap pb-10 sm:pb-16"
                    v-if="$page.post.author || $page.post.categories"
                >
                    <categories :categories="$page.post.categories"/>
                    <author :author="$page.post.author"/>
                </footer>
            </article>
        </template>

    </Layout>
</template>

<script>
import Categories from '@/components/Post/Categories'
import Author from '@/components/Post/Author'
import PostTitle from '@/components/Post/PostTitle'

export default {
    name: 'Post',
    components: {
        PostTitle,
        Author,
        Categories,
    },
    metaInfo () {
        return {
            title: this.$page.post.title,
            meta: [
                { key: 'og:type', property: 'og:type', content: 'article' },
                { key: 'og:title', property: 'og:title', content: this.$page.post.title },
                { key: 'description', name: 'description', content: this.$page.post.description },
                { key: 'og:url', property: 'og:url', content: this.postUrl },
                {
                    key: 'article:published_time',
                    property: 'article:published_time',
                    content: this.$page.post.date,
                },
            ],
        }
    },
    computed: {
        postUrl () {
            let siteUrl = this.$static.metadata.siteUrl
            let postPath = this.$page.post.path

            return postPath ? `${siteUrl}${postPath}` : `${siteUrl}/${slugify(this.$page.post.title)}/`
        },
    },
}
</script>

<page-query>
    query ($path: String) {
        post (path: $path) {
            title
            path
            content
            description
            timeToRead
            summary
            date (format: "D MMMM Y")
            author {
                   id
                   title
                   path
            }
            tags {
                id
                title
                path
            }
            categories {
                id
                title
                path
            }
        }
    }
</page-query>
<static-query>
    query {
        metadata {
            siteUrl
        }
    }
</static-query>
