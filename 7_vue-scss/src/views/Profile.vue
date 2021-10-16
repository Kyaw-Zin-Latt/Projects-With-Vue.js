<template>
    <div class="">
        <h1>I'm Profile.</h1>
        <logout></logout>
    </div>
</template>

<script>
    import Logout from "../components/Logout";
    export default {
        name: "Profile",
        components: {Logout},
        beforeRouteEnter: (to,from,next) => {
            if (localStorage.getItem("vueAuth") == "true"){
                next();
            }else {
                next("/login");
            }
        }
    }
</script>

<style scoped>

</style>