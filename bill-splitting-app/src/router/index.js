import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'signup-form',
    component: () => import('@/pages/home/Index.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/pages/bills/ListBills.vue'),
  },
  {
    path: '/create',
    name: 'create-bill',
    component: () => import('@/pages/bills/CreateBills.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
