<template>
    <div>
        <li class="list-group-item">
            {{ list }}
            <button class="btn btn-primary" @click="toRun()" >Click</button>
        </li>
    </div>
</template>

<script>
    export default {
        name : "List",
        props :["list","currentIndex"],
        methods: {
            toRun(){
                this.$emit("toParent",this.currentIndex);
            }
        },
    }
</script>

<style scoped>

</style>