<template>
    <article class="flex-1 w-4/4 mx-auto border shadow-xl mb-5">
        <g-link :to="post.path">
            <g-image
                :alt="post.feature.alt"
                :src="post.feature.image"
                class="inset-0 object-center hover:opacity-75"
                v-if="post.feature"
            />

            <div class="bg-white p-4">
                <g-link :to="post.path" class="block">
                    <h3 class="mt-2 text-2xl leading-7 font-bold text-gray-900">
                        <g-link :to="post.path" class="text-green-700 font-bold"
                            >{{ post.title }}
                        </g-link>
                    </h3>
                    <div class="mt-2 items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="ml-3">
                            <div class="text-sm leading-5 text-gray-500 mb-2">
                                <time :datetime="post.date">
                                    {{ post.date }}
                                </time>

                                <span class="mx-1"> &middot; </span>
                                <span> {{ post.timeToRead }} min read </span
                                ><span>&nbsp;</span>
                                <span> Categories : </span>
                                <g-link
                                    :to="post.categories[0].path"
                                    class="hover:underline text-green-700 capitalize border-b border-transparent hover:border-green-400 transition-border-color"
                                    v-if="
                                        post.categories &&
                                        post.categories.length > 0
                                    "
                                >
                                    {{ titleCase(post.categories[0].title) }}
                                </g-link>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mb-1 text-base leading-6 text-gray-700 pl-1 pr-2"
                        v-html="post.summary"
                    ></div>
                </g-link>
                <div class="mt-3 mb-2 px-2">
                    <g-link
                        :key="tag.id"
                        :to="`${tag.path}/`"
                        class="mr-2"
                        v-for="tag in post.tags"
                    >
                        {{ `#${tag.title.toLowerCase()}` }}
                    </g-link>
                </div>
            </div>
        </g-link>
    </article>
</template>

<script>
import format from '@/services/posts/format.service'
export default {
    props: ['post'],
    methods: {
        titleCase(str) {
            return format.toTitleCase(str)
        },
        imageLoadError(e) {
            e.target.src = `/authors/images/default.png`
        },
        avatar(id) {
            return `/authors/images/${id}.png`
        },
    },
}
</script>
