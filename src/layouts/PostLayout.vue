<template>
    <div>
        <site-header></site-header>
        <main>
            <div class="container">
                <section>
                    <slot name="post-content" />
                </section>
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
