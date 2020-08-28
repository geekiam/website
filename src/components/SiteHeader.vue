<template>
    <header class="z-0 relative bg-gray-800">
        <div class="relative z-10 shadow">
            <div
                class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10"
            >
                <div>
                    <g-link to="/">
                        <g-image
                            :alt="$static.metadata.siteName"
                            class="h-8 w-auto sm:h-10"
                            src="~/assets/images/logo.svg"
                        />
                    </g-link>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'SiteHeader',
    data() {
        return {
            expand: false,
        }
    },
    methods: {
        toggle() {
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
