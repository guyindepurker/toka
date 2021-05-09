import Vue from 'vue'
import Vuex from 'vuex'
import { socketStore } from './modules/SocketStore'
import { tokaStore } from './modules/TokaStore'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    socketStore,
    tokaStore
  }
})
