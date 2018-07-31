import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

import Mojo from "./components/Mojo.vue";
import User from "./components/User/User.vue";
import Info from "./components/Info/Info.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/user"
    },
    {
      path: "/user",
      name: "user",
      component: User
    },
    {
      path: "/info",
      name: "info",
      component: Info,
      meta: { auth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(route => route.meta.auth);
  const authed = store.getters.isLoggedIn;
  if (authRequired && !authed) {
    next("/");
  } else {
    next();
  }
});

export default router;
