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
                            viewBox="0 0 24 24"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M107.86523 0C78.203984.2425 49.672422 3.4535937 33.044922 11.089844c0 0-32.97656262 14.752031-32.97656262 65.082031 0 11.525-.224375 25.306175.140625 39.919925 1.19750002 49.22 9.02375002 97.72843 54.53124962 109.77343 20.9825 5.55375 38.99711 6.71547 53.505856 5.91797 26.31125-1.45875 41.08203-9.38867 41.08203-9.38867l-.86914-19.08984s-18.80171 5.92758-39.91796 5.20508c-20.921254-.7175-43.006879-2.25516-46.390629-27.94141-.3125-2.25625-.46875-4.66938-.46875-7.20313 0 0 20.536953 5.0204 46.564449 6.21289 15.915.73001 30.8393-.93343 45.99805-2.74218 29.07-3.47125 54.38125-21.3818 57.5625-37.74805 5.0125-25.78125 4.59961-62.916015 4.59961-62.916015 0-50.33-32.97461-65.082031-32.97461-65.082031C166.80539 3.4535938 138.255.2425 108.59375 0h-.72852zM74.296875 39.326172c12.355 0 21.710234 4.749297 27.896485 14.248047l6.01367 10.080078 6.01563-10.080078c6.185-9.49875 15.54023-14.248047 27.89648-14.248047 10.6775 0 19.28156 3.753672 25.85156 11.076172 6.36875 7.3225 9.53907 17.218828 9.53907 29.673828v60.941408h-24.14454V81.869141c0-12.46875-5.24453-18.798829-15.73828-18.798829-11.6025 0-17.41797 7.508516-17.41797 22.353516v32.375002H96.207031V85.423828c0-14.845-5.815468-22.353515-17.417969-22.353516-10.49375 0-15.740234 6.330079-15.740234 18.798829v59.148439H38.904297V80.076172c0-12.455 3.171016-22.351328 9.541015-29.673828 6.568751-7.3225 15.172813-11.076172 25.851563-11.076172z"
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
