import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "@/layout/LeftMenu.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Layout
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
