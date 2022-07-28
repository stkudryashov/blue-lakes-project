import { AuthAPI } from '../../api/accountsAPI/index.js'
import { defaultRequest } from '../../api/config.js'

export const AuthModule = {
  namespaced: true,
  state() {
    return {
      credentials: {
        token: localStorage.getItem('token') || null,
      },
      user: {
        username: localStorage.getItem('username') || null,
        current_club: localStorage.getItem('current_club') || null,
      }
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
      state.user.username = data.username
      localStorage.setItem('username', data.username)

      state.user.current_club = data.current_club
      localStorage.setItem('current_club', data.current_club)
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