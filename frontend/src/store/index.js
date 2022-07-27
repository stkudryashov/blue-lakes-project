import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      sidebarCollapsed: true
    }
  },
  mutations: {
    sidebarShow (state) {
      state.sidebarCollapsed = !state.sidebarCollapsed
    }
  }
})

export default store