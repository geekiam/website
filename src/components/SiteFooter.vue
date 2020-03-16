<template>
    <footer class="text-gray-700 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12">
        <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
            <p><a :href="$static.metadata.siteUrl" class="text-green-700 border-b border-transparent hover:border-green-700 transition-border-color">{{ $static.metadata.siteName }}</a> by <a href="https://threenine.co.uk" class="text-orange-700  border-b border-transparent hover:border-orange-400 transition-border-color">threenine.co.uk</a></p>
            <p>Built with <a href="https://gridsome.org" class="border-b border-transparent hover:border-gray-400 transition-border-color">Gridsome</a> &amp; <a href="https://tailwindcss.com/" class="border-b border-transparent hover:border-gray-400 transition-border-color">Tailwind CSS</a>.</p>
        </div>
    </footer>
</template>

<script>

    export default {
        name: 'SiteFooter',
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
