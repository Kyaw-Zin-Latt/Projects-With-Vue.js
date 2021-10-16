<template>
    <button class="btn btn-danger" @click="logout()">Logout</button>
</template>

<script>
    export default {
        name: "Logout",
        methods: {
            logout() {
                localStorage.setItem("vueAuth","false");
                this.$router.push("/login");
            }
        },
    }
</script>

<style scoped>

</style>