<template>
    <div v-if="author" class="flex flex-wrap items-center justify-center sm:justify-left border-t border-b border-gray-300 w-full mt-10 py-10 sm:px-16">
        <figure class="px-2 mb-1 sm:mb-0 w-full sm:w-1/5 flex justify-center">
            <g-link :to="`${author.path}/`">
                <img :src="avatar"
                     :alt="author.title"
                     @error="imageLoadError"
                     width="100"
                     class="rounded-full p-4 sm:p-0">
            </g-link>
        </figure>
        <div class="px-4 sm:w-4/5 text-center sm:text-left">
            <h4 class="font-sans font-bold text-lg sm:text-xl mb-2 sm:mb-4">
                <g-link :to="`${author.path}/`"
                        class="text-green-700 hover:text-green-500 capitalize border-b-2 border-transparent transition-color">
                    {{ titleCase(author.title) }}</g-link>
            </h4>
            <p class="leading-normal">
                <g-link :to="`${author.path}/`"
                        class="text-blue-500 hover:text-blue-400 transition-color">
                    See all posts by {{ titleCase(author.title) }} &rarr;</g-link>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Author",
        props: ['author'],
        computed: {
            avatar () {
                return `/authors/images/${this.author.id}.png`
            },
        },
        methods: {
            titleCase(str) {
                return str.replace('-', ' ')
                    .split(' ')
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')
            },
            imageLoadError (e) {
                e.target.src = `/authors/images/default.png`
            },
        },
    }
</script>
