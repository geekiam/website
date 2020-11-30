<template>
    <!-- component -->
    <g-link :to="post.path">
        <div class="max-w-2xl w-full lg:flex border shadow-xl mb-5">
            <g-image
                :alt="post.feature.alt"
                :src="post.feature.image"
                class="h-48 lg:h-auto lg:w-48 sm:w-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                v-if="post.feature"
            />
            <div
                class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            >
                <div class="mb-8">
                    <g-link
                        :to="post.path"
                        class="text-green-700 font-bold text-xl mb-2"
                        >{{ post.title }}
                    </g-link>

                    <p
                        class="mt-2 leading-2 text-sm text-gray-500"
                        v-html="post.summary"
                    ></p>
                </div>
                <div class="flex">
                    <g-image
                        class="w-10 h-10 rounded-full mr-4"
                        :src="author.avatar"
                        :alt="author.fullName"
                    />
                    <div class="flex flex-col">
                        <div class="flex flex-row text-sm mb-1">
                            <span
                                class="text-green-800 leading-none mr-2"
                                v-html="author.fullName"
                            ></span>
                            <svg
                                class="h-3 w-3 fill-current mr-1 leading-none"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M16.32 7.1A8 8 0 1 1 9 4.06V2h2v2.06c1.46.18 2.8.76 3.9 1.62l1.46-1.46 1.42 1.42-1.46 1.45zM10 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM7 0h6v2H7V0zm5.12 8.46l1.42 1.42L10 13.4 8.59 12l3.53-3.54z"
                                />
                            </svg>
                            <span class="text-gray-500 leading-none">
                                {{ post.timeToRead }} min read
                            </span>
                        </div>
                        <div class="flex flex-row text-sm mt-1">
                            <svg
                                class="h-3 w-3 fill-current mr-2 leading-none"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                                />
                            </svg>
                            <span class="text-gray-500 leading-none">
                                <time :datetime="post.date">
                                    {{ post.date }}
                                </time>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </g-link>
    <!--    <article class="mx-auto border shadow-xl mb-5">
        <g-link :to="post.path">
            <g-image
                :alt="post.feature.alt"
                :src="post.feature.image"
                class="inset-0 object-center hover:opacity-75"
                v-if="post.feature"
            />

            <div class="bg-white p-4">
                <g-link :to="post.path" class="block">
                    <h3 class="mt-2 text-2xl leading-7 font-bold text-gray-900">
                        <g-link :to="post.path" class="text-green-700 font-bold"
                            >{{ post.title }}
                        </g-link>
                    </h3>
                    <div class="mt-2 items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="ml-3">
                            <div class="text-sm leading-5 text-gray-500 mb-2">
                                <time :datetime="post.date">
                                    {{ post.date }}
                                </time>

                                <span class="mx-1"> &middot; </span>
                                <span> {{ post.timeToRead }} min read </span
                                ><span>&nbsp;</span>
                                <span> Categories : </span>
                                <g-link
                                    :key="cat.id"
                                    :to="cat.path"
                                    class="hover:underline capitalize text-green-700 capitalize border-b border-transparent hover:border-green-400 transition-border-color"
                                    v-for="cat in post.categories"
                                >
                                    {{ cat.title }} &nbsp;
                                </g-link>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mb-1 leading-2 text-sm text-gray-500 pl-5 pr-5"
                        v-html="post.summary"
                    ></div>
                </g-link>
                <div class="mt-3 mb-2 px-2">
                    <g-link
                        :key="tag.id"
                        :to="`${tag.path}/`"
                        class="mr-2"
                        v-for="tag in post.tags"
                    >
                        {{ `#${tag.title.toLowerCase()}` }}
                    </g-link>
                </div>
            </div>
        </g-link>
    </article>-->
</template>

<script>
import UserService from '@/services/github/userService'
export default {
    props: ['post'],
    data() {
        return {
            author: {},
        }
    },
    async created() {
        let service = new UserService()
        this.author = await service.getUserDetail(this.post.author)
    },
}
</script>
