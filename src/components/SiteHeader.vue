<template>
    <header
        class="sticky top-0 z-40 w-full max-w-8xl mx-auto flex-none bg-gray-900"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div
                class="flex justify-between items-center py-6 md:justify-start md:space-x-10"
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
                <div
                    class="sm:hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0"
                >
                    <g-link
                        to="/auth/login"
                        class="whitespace-no-wrap capitalize text-base leading-6 font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white"
                    >
                        Sign in
                    </g-link>
                    <span class="inline-flex rounded-md shadow-sm">
                        <g-link
                            to="/auth/register"
                            class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150"
                            >Join</g-link
                        >
                    </span>
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

<static-query>
query {
    metadata {
        siteName
        siteUrl
    }
}
</static-query>
