<template>
    <div>
        <site-header></site-header>
        <main>
            <div class="container mx-auto flex flex-wrap py-6">
                <div class="w-full md:w-1/12 flex flex-col items-center">
                    <slot name="toolbar" />
                </div>
                <section
                    class="w-full md:w-7/12 flex flex-col items-center px-3"
                >
                    <slot name="post-content" />
                </section>
                <aside class="w-full md:w-4/12 flex flex-col items-center px-3">
                    <slot name="right-sidebar" />
                </aside>
            </div>
        </main>
        <site-footer></site-footer>
    </div>
</template>

<script>
export default {
    name: 'PostLayout',
}
</script>

<style scoped></style>
