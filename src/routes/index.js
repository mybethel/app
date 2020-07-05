import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './Dashboard'
import Login from './Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
