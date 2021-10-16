<template>
    <div class="">
        <h1>Login Page</h1>
        <button class="btn btn-success" @click="loginBtn()">Login</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            loginBtn() {
                localStorage.setItem("vueAuth","true");
                this.$router.push("/profile");
            }
        },
    }
</script>

<style scoped>

</style>