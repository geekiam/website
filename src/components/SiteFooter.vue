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
                            class="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M460.491,180.711c0-95.137-62.347-123.03-62.347-123.03c-61.172-28.091-223.648-27.798-284.232,0    c0,0-62.347,27.894-62.347,123.03c0,113.243-6.46,253.89,103.357,282.96c39.639,10.47,73.7,12.722,101.105,11.156    c49.721-2.74,77.615-17.717,77.615-17.717l-1.662-36.117c0,0-35.531,11.16-75.463,9.886c-39.543-1.369-81.238-4.306-87.698-52.852    c-0.588-4.307-0.88-8.809-0.88-13.604c83.782,20.454,155.229,8.907,174.904,6.558c54.908-6.558,102.77-40.423,108.838-71.353    C461.275,250.888,460.491,180.711,460.491,180.711L460.491,180.711z M386.986,303.251h-45.61V191.477    c0-48.644-62.644-50.504-62.644,6.754v61.173h-45.314V198.23c0-57.258-62.641-55.398-62.641-6.754v111.774H125.07    c0-119.505-5.089-144.759,18.009-171.282c25.35-28.287,78.105-30.146,101.595,5.97l11.354,19.086l11.353-19.086    c23.589-36.313,76.441-34.061,101.595-5.97C392.174,158.688,386.986,183.843,386.986,303.251L386.986,303.251z"
                                fill-rule="evenodd"
                            />
                        </svg>
                    </g-link>
                    <g-link
                        class="ml-6 text-gray-400 hover:text-gray-300"
                        rel="me"
                        href="https://geekiam.slack.com"
                    >
                        <span class="sr-only">Slack </span>
                        <svg
                            class="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M2,14.67a2,2,0,1,0,4,0v-2H4A2,2,0,0,0,2,14.67Zm12.64-3.34a2,2,0,0,0,2-2V4a2,2,0,1,0-4,0V9.33A2,2,0,0,0,14.66,11.33Zm7.32-2a2,2,0,1,0-4,0v2h2A2,2,0,0,0,22,9.33ZM9.34,12.67a2,2,0,0,0-2,2V20a2,2,0,1,0,4,0V14.67A2,2,0,0,0,9.34,12.67ZM14.66,18h-2v2a2,2,0,1,0,2-2ZM20,12.67H14.66a2,2,0,0,0,0,4H20a2,2,0,0,0,0-4ZM9.34,7.33H4a2,2,0,1,0,0,4H9.34a2,2,0,0,0,0-4ZM9.34,2a2,2,0,0,0,0,4h2V4A2,2,0,0,0,9.34,2Z"
                                fill-rule="evenodd"
                            />
                        </svg>
                    </g-link>
                </div>
                <p
                    class="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1"
                >
                    &copy; 2019 - {{ new Date().getFullYear() }}
                    <g-link
                        class="text-sm leading-5 font-semibold tracking-wider text-gray-400 border-b border-transparent hover:border-orange-400 transition-border-color"
                        href="https://geekiam.io"
                        >Geek.I.Am</g-link> All Rights Reserved.
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
