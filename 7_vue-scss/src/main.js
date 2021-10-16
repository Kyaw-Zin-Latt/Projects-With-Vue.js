import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import bootstrap from "bootstrap"

window.bootstrap = require("bootstrap");
// window.$ = window.jQuery = require("jquery");

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
