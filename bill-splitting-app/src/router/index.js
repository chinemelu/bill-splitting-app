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
    path: '/signin',
    name: 'signin-form',
    component: () => import('@/pages/home/Index.vue'),
  },
  {
    path: '/sidebar',
    name: 'sidebar',
    component: () => import('@/components/layout/Sidebar.vue'),
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import('@/components/layout/defaultLayout.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/pages/bills/ListBills.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
