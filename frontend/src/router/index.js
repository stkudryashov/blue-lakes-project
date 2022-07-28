import { createRouter, createWebHistory } from 'vue-router'

import store from '../store/index.js'

import LoginPage from '../pages/LoginPage.vue'

import ClientsPage from '../pages/ClientsPage.vue'
import ClientsViewPage from '../pages/ClientsViewPage.vue'

import PersonalPage from '../pages/PersonalPage.vue'

const routes = [
  {
    path: '/',
    name: 'Clients',
    component: ClientsPage,
  },
  {
    path: '/clients/:userId',
    name: 'ClientsView',
    component: ClientsViewPage,
  },
  {
    path: '/personal',
    name: 'Personal',
    component: PersonalPage,
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
    next({name: 'Clients'})
  }
  else next()
})

export default router