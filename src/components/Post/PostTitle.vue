<template>
    <div class="mt-4 mb-4 text-green-700">
        <div
            class="text-bold text-5xl sm:text-4xl leading-tight mb-1 sm:mb-2n font-sans"
        >
            <h1 class="capitalize">{{ post.title }}</h1>
        </div>
        <div class="flex mb-2 text-gray-500 text-sm">
            <span class="mr-4"> {{ post.date }}</span>
            <span>{{ post.timeToRead }} min read</span>
        </div>
        <div class="mt-4 mb-4 px-2">
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
</template>

<script>
export default {
    name: 'PostTitle',
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    methods: {},
}
</script>

<style scoped></style>
