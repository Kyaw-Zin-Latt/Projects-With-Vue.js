<template>
    <div class="p-3 col-5">
        <Title></Title>
        <ListTitle title="List Title" :badge-title="12"></ListTitle>
        <list v-for="(v,i) in fruits" :key="i" :list="v" :currentIndex="i" @toParent="run"></list>

    </div>
</template>

<script>
    import Title from "./components/Title";
    import List from "./components/List";
    import ListTitle from "./components/ListTitle";
    export default {
        components: {ListTitle, List, Title},
        data() {
            return {
                fruits : ["apple","orange","banana"],
            }
        },
        methods: {
            run(x) {
                this.fruits.splice(x,1);
                 console.log("U click " + x);
            }
        },
    }

</script>

<style scoped>

</style>