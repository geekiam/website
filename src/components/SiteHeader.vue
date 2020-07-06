<template>
    <nav class="bg-gray-800  pb-3">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <g-link
                            to="/"
                        >
                            <g-image :alt="$static.metadata.siteName" class="h-10" src="~/assets/images/logo.svg"/>
                        </g-link>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline">
                            <g-link class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" to="/blog">Articles</g-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </nav>












</template>

<script>
export default {
    name: 'SiteHeader',
    data () {
        return {
            expand: false,
        }
    },
    methods: {
        toggle () {
            this.expand = !this.expand
        },
    },
}
</script>

<style scoped></style>

<static-query>
query {
metadata {
siteName
siteUrl
}
}
</static-query>
