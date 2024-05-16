import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
Vue.config.productionTip = false
//自动导入datav
import dataV from "@jiaminghi/data-view"
Vue.use(dataV)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
