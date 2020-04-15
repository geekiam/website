<!--suppress HtmlUnknownTarget -->
<template>
    <layout>
        <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
            <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
                <g-image src="~/assets/images/geek-i-am-intro.png" width="380"></g-image>
            </div>
            <div>
                <p class="tracking-wide text-4xl font-bold text-center text-green-800 mb-2">Learn to code</p>
                <p class="tracking-wide text-2xl text-gray-700 mb-2">Master Basics.</p>
                <p class="tracking-wide text-2xl text-gray-700 mb-2">Develop Skills.</p>
                <p class="tracking-wide text-2xl text-gray-700 mb-2">Build Projects.</p>
                <p class="tracking-wide text-2xl text-gray-700 mb-2">Enhance Careers.</p>
                <p class="tracking-wide text-2xl text-gray-700 mb-2">Change the World.</p>
            </div>

        </div>
        <div class="bg-gray-light">
            <div class="container-inner mx-auto py-16 pb-8 text-center textl-xl">
                <h2 class="text-2xl font-bold mb-8">Geek.I.Am Newsletter</h2>

                <div class="w-4/5 mx-auto mb-8">
                    <p class="mb-8 text-lg sm:text-xl">
                        Join the movement, so that we can collectively improve our skills towards becoming master
                        craftsmen in software development.
                    </p>

                    <form action="#">
                        <div class="flex flex-col sm:flex-row">
                            <input aria-label="Your email address"
                                   class="flex-1 bg-background-form rounded sm:rounded-r-none px-4 py-4 leading-normal border border-border-color-primary sm:border-r-0 shadow outline-none focus:border-green-700 z-10"
                                   name="email"
                                   placeholder="Your email address"
                                   required
                                   type="email">
                            <button class="flex-2 w-40 uppercase bg-green-700 text-white rounded sm:rounded-l-none text-lg py-3 px-8 tracking-wide shadow focus:outline-none hover:bg-green-800 focus:bg-green-800 z-10 w-full sm:w-auto mt-4 sm:mt-0"
                                    data-element="submit">
                                <span>Subscribe</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
