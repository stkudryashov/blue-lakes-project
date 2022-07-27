import { createStore } from 'vuex'

import {AuthModule} from './modules/AuthModule.js'

const store = createStore({
  state () {
    return {
      sidebarCollapsed: true
    }
  },
  modules: {
    AuthModule
  },
  mutations: {
    sidebarShow (state) {
      state.sidebarCollapsed = !state.sidebarCollapsed
    }
  }
})

export default store