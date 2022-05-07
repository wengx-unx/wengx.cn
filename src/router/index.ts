import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      component: () => import('../views/home.vue'),
   },
   {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404.vue'),
   },
];

export const router = createRouter({
   history: createWebHistory(),
   routes,
});
