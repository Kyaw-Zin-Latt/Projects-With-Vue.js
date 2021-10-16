<template>
    <div class="">
        <p>{{ $route.params.id }}</p>
        <h1>{{ value.title }}</h1>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Detail",
  components: {
    HelloWorld,
  },
  data() {
    return {
      value: [],
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/article/"+this.$route.params.id).then((response) => {
      console.log(response.data);
      this.value = response.data;
    });
  },
};
</script>
