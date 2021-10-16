<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ name }}</h1>
    <button @click="cn">ChangeName</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from "vuex";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      key: value
    }
  },
  methods: {
    cn() {
      return this.$store.dispatch("changeName");
    }
  },
  computed: mapState(['name','fruits'])
}
</script>
