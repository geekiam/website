<template>
    <layout>
        <template #main-content>
            <div
                class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
            >
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2
                        class="mt-6 text-center text-3xl leading-9 font-extrabold text-green-800"
                    >
                        Join our community
                    </h2>
                </div>

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div
                        class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
                    >
                        <form
                            @submit.prevent="register"
                            method="POST"
                            novalidate
                        >
                            <div>
                                <label
                                    for="email"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >Email</label
                                >
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        id="email"
                                        type="email"
                                        v-model="registration.email"
                                        @input="$v.registration.email.$touch()"
                                        class="form-input block w-full pr-10 sm:text-sm sm:leading-5"
                                        placeholder="you@example.com"
                                        aria-invalid="true"
                                        aria-describedby="email-error"
                                        required
                                        :class="{
                                            'is-invalid border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red':
                                                isSubmit &&
                                                $v.registration.email.$error &&
                                                $v.registration.email.$dirty,
                                        }"
                                    />
                                    <div
                                        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                                    >
                                        <svg
                                            :class="{
                                                'h-5 w-5 text-red-500':
                                                    isSubmit &&
                                                    $v.registration.email
                                                        .$error &&
                                                    $v.registration.email
                                                        .$dirty,
                                            }"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    v-if="
                                        isSubmit && $v.registration.email.$error
                                    "
                                >
                                    <p
                                        v-if="!$v.registration.email.required"
                                        class="mt-2 text-sm text-red-600"
                                        id="email-required-error"
                                    >
                                        An email is required
                                    </p>
                                    <p
                                        v-if="!$v.registration.email.email"
                                        class="mt-2 text-sm text-red-600"
                                        id="email-email-error"
                                    >
                                        A valid email address format required
                                    </p>
                                </div>
                            </div>

                            <div class="mt-6">
                                <label
                                    for="password"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Password
                                </label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        id="password"
                                        type="password"
                                        v-model="registration.password"
                                        class="form-input block w-full pr-10 sm:text-sm sm:leading-5"
                                        aria-invalid="true"
                                        aria-describedby="password-error"
                                        :class="{
                                            'is-invalid border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red':
                                                isSubmit &&
                                                $v.registration.password.$error,
                                        }"
                                    />
                                    <div
                                        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                                    >
                                        <svg
                                            :class="{
                                                'h-5 w-5 text-red-500':
                                                    isSubmit &&
                                                    $v.registration.password
                                                        .$error,
                                            }"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    v-if="
                                        isSubmit &&
                                        $v.registration.password.$error
                                    "
                                >
                                    <p
                                        v-if="
                                            !$v.registration.password.minLength
                                        "
                                        class="mt-2 text-sm text-red-600"
                                        id="password-length-error"
                                    >
                                        Your password is not long enough
                                    </p>
                                    <p
                                        v-if="
                                            !$v.registration.password.required
                                        "
                                        class="mt-2 text-sm text-red-600"
                                        id="email-password-error"
                                    >
                                        A password is required
                                    </p>
                                </div>
                            </div>
                            <div class="mt-6">
                                <label
                                    for="confirm_password"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Confirm Password
                                </label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        id="confirm_password"
                                        type="password"
                                        v-model="registration.confirmPassword"
                                        class="form-input block w-full pr-10 sm:text-sm sm:leading-5"
                                        aria-invalid="true"
                                        aria-describedby="confirm_password-error"
                                        :class="{
                                            'is-invalid border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red':
                                                isSubmit &&
                                                $v.registration.confirmPassword
                                                    .$error,
                                        }"
                                    />
                                    <div
                                        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                                    >
                                        <svg
                                            :class="{
                                                'h-5 w-5 text-red-500':
                                                    isSubmit &&
                                                    $v.registration
                                                        .confirmPassword.$error,
                                            }"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    v-if="
                                        isSubmit &&
                                        $v.registration.confirmPassword.$error
                                    "
                                >
                                    <span
                                        class="mt-2 text-sm text-red-600"
                                        v-if="
                                            !$v.registration.confirmPassword
                                                .required
                                        "
                                        >Confirm Password is required</span
                                    >
                                    <span
                                        class="mt-2 text-sm text-red-600"
                                        v-else-if="
                                            !$v.registration.confirmPassword
                                                .sameAsPassword
                                        "
                                        >Passwords should match</span
                                    >
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="relative flex items-start">
                                    <div class="flex items-center h-5">
                                        <input
                                            id="accept"
                                            type="checkbox"
                                            v-model="registration.accept"
                                            @change="
                                                $v.registration.accept.$touch()
                                            "
                                            class="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                                        />
                                    </div>
                                    <div class="ml-3 text-sm leading-5">
                                        <label
                                            for="accept"
                                            :class="{
                                                'is-invalid text-red-600':
                                                    isSubmit &&
                                                    $v.registration.accept
                                                        .$error,
                                            }"
                                            class="font-medium text-gray-700"
                                            >Accept Terms & Conditions</label
                                        >
                                        <p class="text-gray-500">
                                            By signing up you agree to our
                                            <g-link
                                                to="/legal/terms-and-conditions"
                                            >
                                                Terms & Conditions
                                            </g-link>
                                        </p>
                                    </div>
                                </div>

                                <div class="mt-6">
                                    <span
                                        class="block w-full rounded-md shadow-sm"
                                    >
                                        <button
                                            type="submit"
                                            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out"
                                        >
                                            Join
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </template>
    </layout>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import Zk from '@nuid/zk'
import registerUserService from '@/services/auth/register.user'
export default {
    name: 'Register',
    data() {
        return {
            registration: {
                email: '',
                confirmPassword: '',
                password: '',
                accept: '',
            },
            isSubmit: false,
        }
    },
    validations: {
        registration: {
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(10),
            },
            confirmPassword: {
                required,
                sameAsPassword: sameAs('password'),
            },
            accept: {
                required(val) {
                    return val
                },
            },
        },
    },
    methods: {
        async register() {
            this.isSubmit = true
            this.$v.$touch()
            if (this.$v.$invalid) {
                return
            }
            let user = {
                email: this.registration.email,
                verifiableSecret: Zk.verifiableFromSecret(
                    this.registration.password
                ),
                accepted: this.registration.accept,
            }
            let service = new registerUserService()
            await service.register(user)
        },
    },
}
</script>
