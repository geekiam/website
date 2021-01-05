<template>
    <post-layout>
        <template #left-side-bar>
            <home-side-nav></home-side-nav>
        </template>
        <template #main-content>
            <article class="py-2">
                <post-title
                    class="px-3"
                    :post="$page.post"
                    :author="author_detail"
                ></post-title>

                <div
                    class="prose sm:prose-sm lg:prose-lg text-gray-700 pb-10"
                    v-html="$page.post.content"
                />

                <div
                    class="flex flex-wrap pb-10 sm:pb-16"
                    v-if="$page.post.categories"
                >
                    <categories :categories="$page.post.categories" />
                </div>
            </article>
        </template>

        <template #right-side-bar>
            <author
                v-if="author_detail"
                :author="$page.post.author"
                :details="author_detail"
            />
        </template>
    </post-layout>
</template>

<script>
import Categories from '@/components/Post/Categories'
import Author from '@/components/Post/Author'
import PostTitle from '@/components/Post/PostTitle'

import UserService from '@/services/github/userService'
import HomeSideNav from '@/components/navigation/HomeSideNav'
export default {
    name: 'Post',
    components: {
        HomeSideNav,
        PostTitle,
        Author,
        Categories,
    },
    data() {
        return {
            author_detail: {},
        }
    },
    metaInfo() {
        return {
            title: this.$page.post.title,
            meta: [
                { key: 'og:type', property: 'og:type', content: 'article' },
                {
                    key: 'og:title',
                    property: 'og:title',
                    content: this.$page.post.title,
                },
                {
                    key: 'og:description',
                    property: 'og:description',
                    content: this.$page.post.summary,
                },
                {
                    key: 'description',
                    name: 'description',
                    content: this.$page.post.description,
                },
                { key: 'og:url', property: 'og:url', content: this.postUrl },
                { property: 'og:image', content: this.cardImage },
                { property: 'og:image:secure_url', content: this.cardImage },
                { key: 'keywords', name: 'keywords', content: this.keywords },
                {
                    key: 'article:published_time',
                    property: 'article:published_time',
                    content: this.$page.post.date,
                },
                { name: 'twitter:title', content: this.$page.post.title },
                { name: 'twitter:card', content: 'summary_large_image' },
                {
                    name: 'twitter:description',
                    content: this.$page.post.summary,
                },

                {
                    name: 'twitter:site',
                    content: 'https://twitter.com/geekiam1',
                },
                {
                    name: 'twitter:creator',
                    content: 'https://twitter.com/gary_woodfine',
                },
                { name: 'twitter:image', content: this.cardImage },
            ],
            script: [
                { src: 'https://platform.twitter.com/widgets.js', async: true },
            ],
        }
    },
    async created() {
        let service = new UserService()
        this.author_detail = await service.getUserDetail(this.$page.post.author)
    },
    computed: {
        postUrl() {
            let siteUrl = this.$static.metadata.siteUrl
            let postPath = this.$page.post.path

            return postPath
                ? `${siteUrl}${postPath}`
                : `${siteUrl}/${slugify(this.$page.post.title)}/`
        },
        keywords() {
            let keywords = ''
            for (let i in this.$page.post.keywords) {
                keywords = keywords.concat(`${this.$page.post.keywords[i]},`)
            }
            return keywords.replace(/(^\s*,)|(,\s*$)/g, '')
        },
        cardImage() {
            return `${this.$static.metadata.siteUrl}${this.$page.post.cardImage.image}`
        },
    },
}
</script>

<page-query>
query($path: String) {
    post(path: $path) {
        title
        path
        cardImage {
            image(width: 400)
            alt
        }
        content
        description
        timeToRead
        summary
        date(format: "D MMM Y")
        author
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
        keywords
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
