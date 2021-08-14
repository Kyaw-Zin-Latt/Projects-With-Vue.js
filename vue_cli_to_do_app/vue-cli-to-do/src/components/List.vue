<template>
    <li @dblclick="isEdit = true" :class="['created border rounded p-2 d-flex justify-content-between align-items-center',{'deleted':isDelete}]">
        <input v-if="isEdit" type="text" @keyup.enter="isEdit = false" v-model="arr.message" class="form-control">
        <div v-else class="form-check">
            <input class="form-check-input" v-model="arr.isDone" type="checkbox" value=""  :id="'flexCheck'+arr.id">
            <label :class="['form-check-label',{'done':arr.isDone}]" :for="'flexCheck'+arr.id">
                {{ arr.message }}
            </label>
        </div>
        <button @click="[isDelete=true,del(arr.id)]" class="btn btn-outline-danger" ><i class="fas fa-trash-alt"></i></button>
    </li>
</template>

<script>
    export default {
        name: "List",
        props : {
            arr : {
                required : true,
                type : Object,
            }
        },
        data() {
            return {
                isEdit : false,
                isDelete : false,
            }
        },
        methods: {
            del(x) {
                this.$emit("del",x);
            }
        },
    }
</script>

<style scoped>

</style>