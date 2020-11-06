<template>
    <div class="mt-4 mb-4 text-green-700">
        <div
            class="text-bold text-5xl sm:text-4xl leading-tight mb-1 sm:mb-2n font-sans"
        >
            <h1 class="capitalize">{{ post.title }}</h1>
        </div>
        <div class="flex mb-3 mt-3 text-gray-500 text-sm">
            <svg
                class="h-4 w-4 fill-current mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                />
            </svg>

            <span class="mr-4"> {{ post.date }}</span>
            <svg
                class="h-4 w-4 fill-current mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    d="M16.32 7.1A8 8 0 1 1 9 4.06V2h2v2.06c1.46.18 2.8.76 3.9 1.62l1.46-1.46 1.42 1.42-1.46 1.45zM10 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM7 0h6v2H7V0zm5.12 8.46l1.42 1.42L10 13.4 8.59 12l3.53-3.54z"
                />
            </svg>
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
