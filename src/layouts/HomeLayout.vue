<template>
    <div id="app">
        <site-header></site-header>
        <main>
            <section class="lg:container lg:mx-auto">
                <slot name="main-content" />
            </section>
        </main>
        <site-footer></site-footer>
    </div>
</template>
