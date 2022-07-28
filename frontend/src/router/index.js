import { createRouter, createWebHistory } from 'vue-router'

import store from '../store/index.js'

import LoginPage from '../pages/LoginPage.vue'
import MainPage from '../pages/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'ClientBase',
    component: MainPage,
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty-layout' },
    component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  await store.dispatch('AuthModule/onVerify')

  const isAuthenticated = localStorage.getItem('token')

  if (to.name !== 'Login' && !isAuthenticated) {
    next({name: 'Login'})
  }
  else if (to.name === 'Login' && isAuthenticated) {
    next({name: 'ClientBase'})
  }
  else next()
})

export default router