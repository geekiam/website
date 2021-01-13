<template>
    <div class="bg-gray-100">
        <site-header></site-header>
        <div class="h-full w-full">
            <router-view></router-view>
        </div>
        <site-footer></site-footer>
    </div>
</template>

<script>
export default {
    name: 'MainLayout',
}
</script>
