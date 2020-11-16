<template>
    <div>
        <site-header></site-header>
        <div class="bg-gray-100">
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
