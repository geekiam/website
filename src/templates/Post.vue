<template>
    <Layout>
        <main>

            <article class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16"
                     :class="{'border-b border-grey-lighter pb-10 mb-16': !$page.post.author}">
                <h1>{{ $page.post.title }}</h1>
                <div :class="{'pb-10': $page.post.author || $page.post.tags}"
                     class="markdown text-lg leading-normal text-gray-700"
                     v-html="$page.post.content" />
                <footer v-if="$page.post.author || $page.post.tags"
                        class="flex flex-wrap pb-10 sm:pb-16">
                    <div>
                        <g-link v-for="tag in $page.post.tags"
                                :key="tag.id" :to="`${tag.path}/`"
                                class="inline-block text-orange-400 hover:text-white hover:bg-orange-400 border border-orange-400 font-sans font-bold text-xs sm:text-sm px-4 py-2 mr-4 mb-2 rounded-full transition-color transition-bg">
                            <svg class="inline w-3 fill-current align-middle mr-1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20"
                                 ><path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
                            {{ tag.title }}
                        </g-link>
                    </div>
                </footer>
            </article>
        </main>
    </Layout>
</template>

<script>
    export default {
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
            tags {
                id
                title
                path
            }
        }
    }
</page-query>
