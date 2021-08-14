<template>
    <div>
        <h4>
            {{ title }}
            <span class="badge bg-primary rounded-pill">{{ badgeTitle }}</span>

        </h4>
    </div>
</template>

<script>
    export default {
        name: "ListTitle",
        props : {
            title : {
                type : String,
                default : "Default Title",
                required : true,
            },
            badgeTitle : {
                type : Number,
            }
        },
    }
</script>

<style scoped>

</style>