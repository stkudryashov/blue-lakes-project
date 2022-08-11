import { createRouter, createWebHistory } from 'vue-router'

import store from '../store/index.js'

import LoginPage from '../pages/LoginPage.vue'
import PageNotFound from '../pages/PageNotFound.vue'

import ClientsPage from '../pages/clients/ClientsPage.vue'
import ClientsPageDetail from '../pages/clients/ClientsPageDetail.vue'

import PersonalPage from '../pages/personal/PersonalPage.vue'
import PersonalPageArea from '../pages/personal/PersonalPageArea.vue'
import PersonalPageServers from '../pages/personal/PersonalPageServers.vue'


const routes = [
  {
    path: '/clients',
    name: 'Clients',
    component: ClientsPage,
  },
  {
    path: '/clients/:userId',
    name: 'ClientsView',
    component: ClientsPageDetail,
  },
  {
    path: '/personal',
    name: 'Personal',
    component: PersonalPage,
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: PersonalPageArea,
      },
      {
        path: 'servers',
        name: 'Servers',
        component: PersonalPageServers,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty-layout' },
    component: LoginPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
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