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
      user: JSON.parse(localStorage.getItem('user'))
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
      localStorage.setItem('user', JSON.stringify(data))
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
        dispatch('getInfo')
      })
    },
    onVerify({commit}, {token}) {
      return AuthAPI.verify(token)
        .then(response => {
          console.log(response)
      })
        .catch(error => {
          if (error.response.status === 401) {
            store.commit('AuthModule/delToken')
          }
      })
    },
    getInfo({commit}) {
      AuthAPI.info()
      .then(response => {
        console.log(response)
        commit('setUser', response.data)
      })
    }
  }
}