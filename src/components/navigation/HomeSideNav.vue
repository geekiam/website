<template>
    <div class="w-2/5 text-white h-12 pl-32 py-4 h-auto">
        <ul
            class="lg:pl-10 text-center flex-row xl:flex-col w-full pt-10 flex items-center justify-center text-lg"
        >
            <li class="my-px">
                <g-link
                    to="/"
                    class="group flex flex-row items-center text-base leading-6 h-12 px-2 py-2 rounded-full font-semibold text-green-800 hover:bg-gray-900"
                >
                    <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6 mr-4 text-green-800"
                    >
                        <path
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        ></path>
                    </svg>
                    Home
                </g-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeSideNav',
}
</script>
