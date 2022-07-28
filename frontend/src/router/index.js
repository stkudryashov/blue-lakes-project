import { createRouter, createWebHistory } from 'vue-router'

import store from '../store/index.js'

import LoginPage from '../pages/LoginPage.vue'
import MainPage from '../pages/MainPage.vue'

const authGuard = (to, from, next) => {
  const isAuthorized = localStorage.getItem('token')

  if (!isAuthorized) {
    next({name: 'Login'})
  }
  else {
    next()
  }
}

const authVerify = (to, from, next) => {
  const token = localStorage.getItem('token')

  if (token) {
    store.dispatch('AuthModule/onVerify', {token})
      .then(() => {
        next({name: 'ClientBase'})
      })
      .catch(error => {
        console.log(error)
        next()
    })
  }
  else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'ClientBase',
    component: MainPage,
    beforeEnter: authGuard
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty-layout' },
    component: LoginPage,
    beforeEnter: authVerify
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router