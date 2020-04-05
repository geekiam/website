<template>
    <header class=" bg-black">
        <div class="flex items-center px-4 py-4">
            <div>
                <g-link to="/" class="flex text-white text-base no-underline hover:text-white hover:no-underline">
                    <g-image src="~/assets/images/logo.png" :alt="$static.metadata.siteName" class="h-9"/>
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

