<template>
    <div class="">
        <h2>This is Contact Page.</h2>
        <button @click="run()">Home</button>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        methods: {
            run() {
               this.$router.push({name : "Home"});
            }
        },
    }
</script>

<style scoped>

</style>