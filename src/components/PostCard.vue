<template>
    <!-- component -->
    <g-link :to="post.path">
        <div
            class="max-w-2xl w-full lg:flex border shadow-xl mb-5 hover:shadow-3xl"
        >
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
                <div class="flex items-center">
                    <g-image
                        class="w-10 h-10 rounded-full mr-4"
                        :src="author.avatar"
                        :alt="author.fullName"
                    />
                    <div class="text-sm">
                        <p
                            class="text-green-800 leading-none"
                            v-html="author.fullName"
                        ></p>
                        <p class="text-gray-500">
                            <time :datetime="post.date">
                                {{ post.date }}
                            </time>
                        </p>
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
