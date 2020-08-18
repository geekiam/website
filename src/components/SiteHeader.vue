<template>
    <nav class="bg-gray-800  pb-3">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-8">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <g-link
                            to="/"
                        >
                            <g-image :alt="$static.metadata.siteName" class="h-6" src="~/assets/images/logo.svg"/>
                        </g-link>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline">

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
