<template>
    <div>
        <g-link v-for="tag in tags"
                :key="tag.id" :to="`${tag.path}/`"
                class="inline-block text-green-700 hover:text-white hover:bg-green-700 border border-green-700 font-sans font-bold text-xs sm:text-sm px-4 py-2 mr-4 mb-2 rounded-full transition-color transition-bg">
            <svg class="inline w-3 fill-current align-middle mr-1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20"
            ><path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
            {{ tag.title }}
        </g-link>
    </div>
</template>

<script>
    export default {
        name: "Tags",
        props: ['tags'],
    }
</script>

<style scoped>

</style>
