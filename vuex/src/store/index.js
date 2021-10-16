import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name : "Kyaw Zin Latt",
    fruits : ["apple","orange","banana"],
  },
  getters: {
    fruitsTotal : state => state.fruits.length,
  },
  mutations: {
  },
  actions: {
    changeName : ({state}) => state.name = "kyaw zin",
  },
  modules: {
  }
})
