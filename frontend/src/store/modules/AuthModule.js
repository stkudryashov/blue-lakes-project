import {AuthAPI} from '../../api/accounts/index.js'
import {defaultRequest} from '../../api/config.js'

import store from '../index.js'


export const AuthModule = {
  namespaced: true,
  state() {
    return {
      credentials: {
        token: localStorage.getItem('token') || null,
        permissions: Array,
      },
      user: {
        id: Number,
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        type: '',
        permissions: Array,
      },
      current_club: {
        id_name: '',
        city: '',
        street: '',
        site_link: '',
        bot_link: '',
      },
    }
  },
  getters: {
    getUserInfo(state) {
      return state.user
    },
    getUserClub(state) {
      return state.current_club
    },
    getUserPermissions(state) {
      return state.credentials.permissions
    }
  },
  mutations: {
    setToken(state, token) {
      state.credentials.token = token
      localStorage.setItem('token', token)
    },
    delToken(state) {
      state.credentials.token = null
      localStorage.removeItem('token')
    },
    setUser(state, data) {
      state.user.id = data.id

      state.user.username = data.username
      state.user.first_name = data.first_name
      state.user.last_name = data.last_name
      state.user.email = data.email

      state.user.type = data.type.title
      state.user.permissions = data.type.permissions

      state.current_club = data.current_club
      state.credentials.permissions = data.type.permissions.map(x => x.permission)
    }
  },
  actions: {
    onLogin({commit, dispatch}, {username, password}) {
      return AuthAPI.login(username, password)
        .then(response => {
          console.log(response)

          const token = response.data.access
          commit('setToken', token)

          defaultRequest.defaults.headers['Authorization'] = `Bearer ${token}`
          dispatch('onVerify')})
    },
    onVerify({commit}) {
      return AuthAPI.verify()
        .then(response => {
          console.log(response)
          commit('setUser', response.data)})
        .catch(error => {
          if (error.response.status === 401)
            store.commit('AuthModule/delToken')})
    }
  }
}