<template>
    <div id="app">
        <site-header></site-header>
        <main>
            <div class="container mx-auto flex flex-wrap py-6">
                <aside
                    class="w-full md:w-3/12 flex flex-col items-center px-3"
                ></aside>
                <section
                    class="w-full md:w-7/12 flex flex-col items-center px-3"
                >
                    <slot />
                </section>
                <aside
                    class="w-full md:w-2/12 flex flex-col items-center px-3"
                ></aside>
            </div>
        </main>
    </div>
</template>
