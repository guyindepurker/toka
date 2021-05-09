const BASE_URL = (process.env.NODE_ENV!=='development') ? `wss://${window.location.host}` : 'ws://localhost:3000'
var socket =  new WebSocket(BASE_URL)
export const socketService = {
  emit,
  terminate,
  on,
  off,
  getMessage,
  setup
}

function setup(){
  if(!socket){
    socket = new WebSocket(BASE_URL)
  }
}

function terminate() {
  socket.close()
  socket = null
}

function on(cb) {
   socket.onmessage = cb
}

function getMessage(massage){
  return JSON.parse(massage)
}

function off(eventName, cb) {
  socket.removeEventListener(eventName, cb)
}

function emit(eventName, data = {}) {
  const message = JSON.stringify({ on: eventName, data })
  socket.send(message)
}
