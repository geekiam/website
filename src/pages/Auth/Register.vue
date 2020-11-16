<template>
    <Layout>
        <template #mainbody>
            <div
                class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
            >
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <g-image
                        class="mx-auto h-12 w-auto"
                        src="~/assets/images/logo.svg"
                    />

                    <h2
                        class="mt-6 text-center text-3xl leading-9 font-extrabold text-green-800"
                    >
                        Register an account
                    </h2>
                </div>

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div
                        class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
                    >
                        <form action="#" method="POST">
                            <div>
                                <label
                                    for="email"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Email address
                                </label>
                                <div class="mt-1 rounded-md shadow-sm">
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>

                            <div class="mt-6">
                                <label
                                    for="password"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Password
                                </label>
                                <div class="mt-1 rounded-md shadow-sm">
                                    <input
                                        id="password"
                                        type="password"
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>
                            <div class="mt-6">
                                <label
                                    for="password"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Confirm Password
                                </label>
                                <div class="mt-1 rounded-md shadow-sm">
                                    <input
                                        id="confirm_password"
                                        type="password"
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>

                            <div class="mt-6">
                                <span class="block w-full rounded-md shadow-sm">
                                    <button
                                        type="submit"
                                        class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out"
                                    >
                                        Join
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </template>
    </Layout>
</template>

<script>
export default {
    name: 'Register',
}
</script>
