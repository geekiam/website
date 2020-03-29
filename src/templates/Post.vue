<template>
    <Layout>
        <main>
            <article class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16"
                     :class="{'border-b border-grey-lighter pb-10 mb-16': !$page.post.author}">
                <h1 class="text-green-700 text-3xl sm:text-4xl leading-tight font-sans mb-1 sm:mb-2" >{{ $page.post.title }}</h1>
                <div :class="{'pb-10': $page.post.author || $page.post.tags}"
                     class="markdown-body text-lg leading-normal text-gray-700"
                     v-html="$page.post.content" />

                <footer v-if="$page.post.author || $page.post.tags"
                        class="flex flex-wrap pb-10 sm:pb-16">
                    <tags :tags="$page.post.tags"/>
                    <author :author="$page.post.author"/>
                </footer>
            </article>
        </main>
    </Layout>
</template>

<script>
    import Tags from '@/components/Tags';
    import Author from "@/components/Author";
    export default {
        components: {
            Author,
            Tags
        },
        name: "Post",
    }
</script>

<page-query>
    query Post ($path: String) {
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
        }
    }
</page-query>
