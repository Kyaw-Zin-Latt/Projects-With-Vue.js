<template>
  <div class="container">
    <div class="row my-5 justify-content-center">
        <Title title="Vue ToDo App"></Title>
      <div class="col-md-5 col-8 p-0">
        <ListCreate @add="add"></ListCreate>
        <div class="d-flex justify-content-between my-3">
          <p class="fw-bolder">To Do List{{ arrs.length > 1 ? "s" : "" }}</p>
          <p v-if="doneTotal === arrs.length && arrs.length > 0" class="badge bg-success rounded-pill">All Done <i class="fas fa-check-circle"></i></p>
          <p v-else class="badge bg-primary rounded-pill">Done {{ doneTotal }}</p>
        </div>
        <div>
          <ul class="list-group list-unstyled">
            <List :key="arr.id" v-for="arr in arrs" :arr="arr" @del="del"></List>
          </ul>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
    import Title from "./components/Title";
    import List from "./components/List";
    import ListCreate from "./components/ListCreate";
    export default {
      name : "App",
        components: {ListCreate, List, Title},
        data() {
        return {
          arrs : [],
          currentId : 0,
          todoText : "",
        }
      },
      computed : {
        doneTotal(){
          return this.arrs.filter(el => el.isDone === true).length;
        }
      },
      methods : {

        add(x){
          this.currentId++
          this.arrs.push({
            id : this.currentId,
            message : x,
            isDone : false,
          });
        },
        del(x){
          setTimeout(()=>this.arrs =  this.arrs.filter(el => el.id !== x),500)
        }
      },
    }
</script>

<style>
  .done{
    text-decoration: line-through !important;
    animation: 0.5s shakeX;
  }
  .created{
    animation: 0.5s fadeInDown;
  }
  .deleted{
    animation: 0.5s fadeOutUp;
  }

</style>