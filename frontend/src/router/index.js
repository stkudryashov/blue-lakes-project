import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../pages/LoginPage.vue'
import MainPage from '../pages/MainPage.vue'

const authGuard = (to, from, next) => {
  const isAuthorized = localStorage.getItem('token')

  if (!isAuthorized) {
    next({name: 'login'})
  }
  else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
    beforeEnter: authGuard
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty-layout' },
    component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router