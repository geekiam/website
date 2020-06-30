<template>
    <div>
       <site-header></site-header>
        <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-4 sm:px-0">
                    <div >
                        <slot/>
                    </div>
                </div>
                <!-- /End replace -->
            </div>
        </main>
        <site-footer></site-footer>
    </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default {
    components: {
        SiteHeader,
        SiteFooter

    },
}
</script>
