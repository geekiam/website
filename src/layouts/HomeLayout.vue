<template>
    <div>
        <site-header></site-header>
        <main>
            <div class="container mx-auto flex flex-wrap py-6">
                <aside class="w-full md:w-3/12 flex flex-col items-center px-3">
                    <slot name="left-sidebar" />
                </aside>
                <section
                    class="w-full md:w-7/12 flex flex-col items-center px-3"
                >
                    <slot name="post-list" />
                </section>
                <aside class="w-full md:w-2/12 flex flex-col items-center px-3">
                    <slot name="right-sidebar" />
                </aside>
            </div>
        </main>
        <site-footer></site-footer>
    </div>
</template>
