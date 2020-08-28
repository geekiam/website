<template>
    <div id="app">
        <site-header></site-header>
        <main>
            <div class="container pb-20 px-3 mx-auto items-center">
                <section class="container mx-auto pt-6">
                    <slot />
                </section>
            </div>
        </main>
        <site-footer></site-footer>
    </div>
</template>
