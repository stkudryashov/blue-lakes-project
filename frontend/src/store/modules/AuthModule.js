import { AuthAPI } from '../../api/accountsAPI/index.js'
import { defaultRequest } from '../../api/config.js'

export const AuthModule = {
  namespaced: true,
  state() {
    return {
      credentials: {
        token: localStorage.getItem('token') || null,
        username: null
      }
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
    }
  },
  actions: {
    onLogin({commit}, {username, password}) {
      return AuthAPI.login(username, password)
      .then(response => {
        console.log(response)

        const token = response.data.access
        commit('setToken', token)

        defaultRequest.defaults.headers['Authorization'] = `Bearer ${token}`
      })
    },
    onVerify({commit}, {token}) {
      return AuthAPI.verify(token)
        .then(response => {
          console.log(response)
      })
    }
  }
}