<template>
    <div class="app">
        <Navbar></Navbar>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";
    export default {
      name : "App",
        components: {Navbar},
    }
</script>

<style lang="scss">
    $primary : #8338ec;
    $navbar-dark-active-color: #3a86ff;

@import "~bootstrap/scss/bootstrap";

</style>