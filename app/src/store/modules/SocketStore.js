import { socketService } from '@/services/SocketService'
import store from '../index'
import router from '@/router/index';
/* *** SOCKET LISTEN TO EVENTS ****
 **** SINGLE SOURCE OF TRUTH ***** */
socketService.on(({ data }) => {
  const massage = socketService.getMessage(data)
  switch (massage.on) {
    case 'is loading': {
      const {
        data: { isLoading }
      } = massage
      store.commit({ type: 'setIsLoading', isLoading })
      break
    }
    case 'get data': {
      const { data } = massage
      store.commit({type:'setData', data} )
      router.push('/app')
      break
    }
    case 'connection': {
      store.commit({ type: 'setSocketConnect', isConnected: true })
      break
    }
    case 'error load data': {
      const {data:{errorMsg}} = massage
      store.commit({ type: 'setErrorMsg', errorMsg })
      break
    }
    default:
      break
  }
})

export const socketStore = {
  state: {
    socketConnected: false,
    isLoading: false,
    errorMsg:null
  },
  getters: {
    isSocketConnect(state) {
      return state.socketConnected
    },
   isLoading(state) {
      return state.isLoading
    },
    errorMsg(state){
      return state.errorMsg
    }
  },
  mutations: {
    setSocketConnect(state, { isConnected }) {
      state.socketConnected = isConnected
    },
    setIsLoading(state, { isLoading }) {
      state.isLoading = isLoading
    },
    setErrorMsg(state,{errorMsg}){
      state.errorMsg = errorMsg
    }
  },
  actions: {
    setupSocket(){
      socketService.setup()
    },
    turnOffSocket({ commit }) {
      socketService.terminate()
      commit({ type: 'setSocketConnect', isConnected: false })
    },
    loadData() {
       socketService.emit('load data')
    }
  }
}
