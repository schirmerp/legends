import { createRouter, createWebHistory } from 'vue-router'
import DailyLegend from '../views/DailyLegend.vue'

const routes = [
  {
    path: '/',
    name: 'daily-legend',
    component: DailyLegend
  },
  {
    path: '/legend',
    name: 'legend',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LegendsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
