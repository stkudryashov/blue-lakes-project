import { AuthAPI } from '../../api/accountsAPI/index.js'
import { defaultRequest } from '../../api/config.js'

import store from  '../index.js'

export const AuthModule = {
  namespaced: true,
  state() {
    return {
      credentials: {
        token: localStorage.getItem('token') || null,
      },
      user: Object
    }
  },
  getters: {
    getUserInfo(state) {
      return state.user
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
      state.user = data
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