import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import zuHeShiHanShu from '../views/zuHeShiHanShu.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/zuHeShiHanShu',
      name: 'zuHeShiHanShu',
      component: zuHeShiHanShu
      
    }
  ]
})

export default router
