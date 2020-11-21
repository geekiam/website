<template>
    <form @submit.prevent="register" method="POST">
        <div>
            <label for="email"> Email address </label>
            <div>
                <input
                    id="email"
                    type="email"
                    v-model="registration.email"
                    required
                />
            </div>
        </div>

        <div class="mt-6">
            <label for="password"> Password </label>
            <div>
                <input
                    id="password"
                    type="password"
                    v-model="registration.password"
                    required
                />
            </div>
        </div>
        <div>
            <label for="confirm_password"> Confirm Password </label>
            <div>
                <input
                    id="confirm_password"
                    type="password"
                    v-model="registration.confirmPassword"
                    required
                />
            </div>
        </div>

        <div>
            <span>
                <button type="submit">Join</button>
            </span>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ResetPassword',
}
</script>

<style scoped></style>
