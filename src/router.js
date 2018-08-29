import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

import User from './components/User/User.vue';
import Info from './components/Info/Info.vue';
import Versus from './components/Versus/Versus.vue';
import Result from './components/Versus/Result.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
      meta: { auth: true }
    },
    {
      path: '/versus',
      name: 'versus',
      component: Versus,
      meta: { auth: true }
    },
    {
      path: '/versus/results',
      name: 'results',
      component: Result,
      meta: { auth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(route => route.meta.auth);
  const authed = store.getters.isLoggedIn;
  if (authRequired && !authed) {
    next('/');
  } else {
    next();
  }
});

export default router;
