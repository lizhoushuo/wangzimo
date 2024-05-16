import Vue from "vue"
import VueRouter from "vue-router"
import home from "@/views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
