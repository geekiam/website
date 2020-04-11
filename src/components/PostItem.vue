<template>
    <article>
        <div class="mx-auto max-w-3xl px-6">
            <div class="py-8 sm:py-20 border-b border-gray-300">
                <header class="text-center mb-8">
                    <time :datetime="post.date"
                          class="text-gray-700 text-xs mb-2 uppercase">{{ post.date }}</time>
                    <h2 class="text-green-800 text-3xl sm:text-4xl leading-tight font-sans mb-1 sm:mb-2">
                        <g-link :to="`${post.path}/`"

                                class=" text-green-700 font-bold">{{ post.title }}</g-link>

                    </h2>
                    <p class="text-green-800 leading-normal text-sm sm:text-base">
                        <span v-if="post.author">by
                            <g-link :to="`${post.author.path}/`"
                                    class="text-green-800 capitalize border-b border-transparent hover:border-green-400 transition-border-color"
                                    v-if="post.author">{{ titleCase(post.author.title) }}</g-link></span>
                        <span v-if="post.categories && post.categories.length > 0"> in <g-link :to="`${post.categories[0].path}/`"
                                                                                   class="text-green-700 capitalize border-b border-transparent hover:border-green-400 transition-border-color">{{ titleCase(post.categories[0].title) }}</g-link></span>
                        <span v-if="post.author || (post.categories && post.categories.length > 0)"> · </span>
                        <span class="text-gray-700">{{ post.timeToRead }} min read</span>
                    </p>
                </header>
                <div class="text-lg leading-normal text-gray-800" v-html="post.summary"></div>
                <div class="mt-8 mb-8">
                    <g-link :to="post.path" class="text-green-800 font-bold uppercase">Read More</g-link>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        props: ['post'],
        methods: {
             titleCase(str) {
                return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
            }
        },
    }
</script>
