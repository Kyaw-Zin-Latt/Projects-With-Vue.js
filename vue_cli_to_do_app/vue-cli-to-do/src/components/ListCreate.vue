<template>
    <div class="d-flex">
        <div class="col-md-10 col-12 me-2">
            <input type="text" class="form-control" @keyup.enter="add()" @keyup="showError = false" v-model="inputText" required>
            <div class="col-12 d-block">
                <small class="text-danger fw-bold" v-if="showError" >{{ errorMessage }}</small>
            </div>
        </div>
        <div class="">
            <button class="btn btn-outline-primary w-100" @click="add()">
                <i class="fas fa-plus"></i>
            </button>
        </div>

    </div>

</template>

<script>
    export default {
        name: "ListCreate",
        data() {
            return {
                inputText: "",
                showError : false,
                errorMessage : "",
            }
        },
        methods: {
            add() {
                if (this.inputText.length){
                    this.showError = false;
                    this.$emit("add",this.inputText);
                    this.inputText = "";
                }else {
                    this.showError = true;
                    this.errorMessage = "Say Something";
                }
            }
        },
    }
</script>

<style scoped>

</style>