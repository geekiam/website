<template>
    <div class="bg-gray-100">
        <site-header></site-header>
        <!-- Mobile Navigation Menu -->
        <button
            type="button"
            class="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 text-white block lg:hidden"
        >
            <span class="sr-only">Open site navigation</span
            ><svg
                width="24"
                height="24"
                fill="none"
                class="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform"
            >
                <path
                    d="M4 8h16M4 16h16"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path></svg
            ><svg
                width="24"
                height="24"
                fill="none"
                class="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform opacity-0 scale-80"
            >
                <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
            </svg>
        </button>
        <!-- End Mobile Navigation Menu -->
        <div class="container">
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
