<template>
    <div class="md:container flex">
        <section
            class="h-screen w-screen flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden"
        >
            <slot name="left-side-bar" />

            <slot name="main-content" />
        </section>
    </div>
</template>
