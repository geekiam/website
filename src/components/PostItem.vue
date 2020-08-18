<template>
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
            <g-image
                :alt="post.feature.alt"
                :src="post.feature.image"
                class="h-48 w-full object-cover"
                v-if="post.feature"
            />
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-green-600">
                    <g-link
                        :to="post.categories[0].path"
                        class="hover:underline text-green-700 capitalize border-b border-transparent hover:border-green-400 transition-border-color"
                        v-if="post.categories && post.categories.length > 0"
                    >
                        {{ titleCase(post.categories[0].title) }}
                    </g-link>
                </p>
                <g-link :to="post.path" class="block">
                    <h3
                        class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                    >
                        <g-link
                            :to="post.path"
                            class="text-green-700 font-bold"
                        >{{ post.title }}
                        </g-link
                        >
                    </h3>
                    <p
                        class="mt-3 text-base leading-6 text-gray-500"
                        v-html="post.summary"
                    ></p>
                </g-link>
            </div>
            <div class="mt-6 flex items-center">
                <div class="flex-shrink-0"></div>
                <div class="ml-3">
                    <div class="flex text-sm leading-5 text-gray-500">
                        <time :datetime="post.date">
                            {{ post.date }}
                        </time>

                        <span class="mx-1">
                            &middot;
                        </span>
                        <span> {{ post.timeToRead }} min read </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'],
    methods: {
        titleCase (str) {
            return str
                .replace('-', ' ')
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')
        },
        imageLoadError (e) {
            e.target.src = `/authors/images/default.png`
        },
        avatar (id) {
            return `/authors/images/${id}.png`
        },
    },
}
</script>
