<template>
    <header>
        <div class="flex items-center px-4 py-4">
            <div>
                <g-link to="/" class="text-green-800 text-base no-underline hover:text-green-600 hover:no-underline">
                    <g-image src="~/assets/images/logo.svg" :alt="$static.metadata.siteName" class="h-10"/>
                </g-link>
            </div>
            <div>

            </div>
        </div>
    </header>
</template>

<script>

    export default {
        name: "SiteHeader",
    }
</script>

<style scoped>

</style>

<static-query>
    query {
    metadata {
    siteName
    siteUrl
    }
    }
</static-query>

