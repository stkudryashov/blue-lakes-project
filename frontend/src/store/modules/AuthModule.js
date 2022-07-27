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
  getters: {
    getUsername(state) {
      return state.credentials.username
    }
  },
  mutations: {
    setToken(state, token) {
      state.credentials.token = token
      localStorage.setItem('token', token)
    },
    setUsername(state, username) {
      state.credentials.username = username
    }
  }
}