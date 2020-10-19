<template>
    <div class="bg-green-900">
        <div
            class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
        >
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h4
                                class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"
                            >
                                Sponsorship
                            </h4>
                            <ul class="mt-4">
                                <li>
                                    <g-link
                                        class="text-base leading-6 text-gray-300 hover:text-white"
                                        to="/"
                                    >
                                        Home
                                    </g-link>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-12 md:mt-0">
                            <h4
                                class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"
                            >
                                Credits
                            </h4>
                            <ul class="mt-4">
                                <li>
                                    <g-link
                                        class="text-base leading-6 text-gray-300 hover:text-white"
                                        to="https://stories.freepik.com/web"
                                    >
                                        Freepik
                                    </g-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h4
                                class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"
                            ></h4>
                            <ul class="mt-4">
                                <li>
                                    <g-link
                                        class="text-base leading-6 text-gray-300 hover:text-white"
                                        to="/about"
                                    >
                                        About
                                    </g-link>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-12 md:mt-0">
                            <h4
                                class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"
                            ></h4>
                            <ul class="mt-4">
                                <li class="mt-4">
                                    <g-link
                                        class="text-base leading-6 text-gray-300 hover:text-white"
                                        to="/privacy"
                                    >
                                        Privacy
                                    </g-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mt-8 xl:mt-0">
                    <h4
                        class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"
                    >
                        Subscribe to our newsletter
                    </h4>
                    <p class="mt-4 text-gray-300 text-base leading-6">
                        The latest news, articles, and resources, sent to your
                        inbox weekly.
                    </p>
                    <form class="mt-4 sm:flex sm:max-w-md">
                        <input
                            aria-label="Email address"
                            class="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                            placeholder="Enter your email"
                            required
                            type="email"
                        />
                        <div
                            class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"
                        >
                            <button
                                class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:bg-green-400 transition duration-150 ease-in-out"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div
                class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"
            >
                <div class="flex md:order-2">
                    <g-link
                        class="ml-6 text-gray-400 hover:text-gray-300"
                        href="https://twitter.com/geekiam1"
                    >
                        <span class="sr-only">Twitter </span>
                        <svg
                            class="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                            />
                        </svg>
                    </g-link>
                    <g-link
                        class="ml-6 text-gray-400 hover:text-gray-300"
                        href="https://github.com/Geek-I-Am"
                    >
                        <span class="sr-only">GitHub </span>
                        <svg
                            class="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                fill-rule="evenodd"
                            />
                        </svg>
                    </g-link>
                    <g-link
                        class="ml-6 text-gray-400 hover:text-gray-300"
                        rel="me"
                        href="https://floss.social/@geekiam"
                    >
                        <span class="sr-only">Mastadon </span>
                        <svg
                            viewBox="0 0 1000 1000"
                            class="h-6 w-6"
                            fill="currentColor"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M426.271,997.275C181.933,977.344 91.727,900.333 53.302,678.862C33.736,566.09 30.977,299.807 48.65,229.914C68.892,149.864 119.783,79.396 179.052,49.346C289.932,-6.868 643.41,-13.261 793.104,38.241C829.791,50.864 849.864,64.248 879.949,96.149C926.833,145.863 951.871,205.308 960.455,287.284C969.174,370.56 953.369,579.648 935.26,620.586C911.739,673.761 833.746,728.107 749.685,749.896C678.414,768.371 521.324,776.772 432.627,766.852C394.567,762.595 327.413,751.937 308.076,747.084C297.951,744.542 297.885,744.736 300.393,769.506C304.012,805.244 310.283,823.533 325.993,844.173C344.29,868.21 384.167,888.24 426.271,894.541C473.796,901.653 597.968,897.016 639.195,886.589L672.034,878.284L672.092,908.422C672.126,924.997 673.193,942.441 674.467,947.186C676.268,953.886 673.589,957.336 662.477,962.636C614.406,985.559 495.824,1002.95 426.271,997.275L426.271,997.275ZM272.394,482.791C291.069,475.75 310.515,454.277 316.019,434.619C325.431,401.002 308.721,366.035 276.181,351.256C253.619,341.009 238.153,341.225 215.685,352.102C192.211,363.465 176.243,389.248 176.341,415.627C176.524,464.724 226.894,499.945 272.394,482.791ZM542.941,472.635C561.33,458.609 570.339,439.416 570.339,414.265C570.339,354.905 501.806,323.175 454.303,360.542C421.794,386.113 420.834,439.596 452.354,469.025C467.278,482.959 481.13,487.356 505.415,485.868C521.553,484.879 531.476,481.379 542.941,472.635ZM788.839,476.755C831.764,451.6 836.132,395.067 797.756,361.372C770.767,337.675 734.318,337.675 707.329,361.372C679.371,385.919 673.296,417.231 690.266,449.322C709.058,484.859 753.776,497.303 788.839,476.755Z"
                                fill-rule="evenodd"
                            />
                        </svg>
                    </g-link>
                </div>
                <p
                    class="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1"
                >
                    &copy; 2020
                    <g-link
                        class="text-orange-700 border-b border-transparent hover:border-orange-400 transition-border-color"
                        href="https://threenine.co.uk"
                        >threenine.co.uk</g-link
                    >, Inc. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SiteFooter',
}
</script>

<static-query>
query {
    metadata {
        siteName
        siteUrl
    }
}
</static-query>
