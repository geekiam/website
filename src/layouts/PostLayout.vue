<template>
    <div>
        <site-header></site-header>
        <main>
            <div class="container mx-auto flex flex-wrap py-6">
                <aside
                    class="w-full md:w-1/8 flex flex-col items-center px-3"
                ></aside>
                <section
                    class="w-full md:w-3/4 flex flex-col items-center px-3"
                >
                    <slot name="post-content" />
                </section>
                <aside
                    class="w-full md:w-1/4 flex flex-col items-center px-3"
                ></aside>
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
