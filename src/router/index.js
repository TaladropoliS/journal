import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import diarioRouter from '@/modules/diario/router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/diario',
    ...diarioRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
