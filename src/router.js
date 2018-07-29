import Vue from "vue";
import VueRouter from "vue-router";
import Mojo from "./components/Mojo.vue";
import User from "./components/User/User.vue";
import Info from "./components/Info/Info.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/mojo",
      name: "mojo",
      component: Mojo
    },
    {
      path: "/user",
      name: "user",
      component: User
    },
    {
      path: "/info",
      name: "info",
      component: Info
    }
  ]
});
