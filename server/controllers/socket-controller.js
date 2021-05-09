const socketService = require('../services/socket-service');
const {getData} = require('./toka-controller');

function connectSocket(ws) {
  ws.send(socketService.emit('connection'));
  ws.on('message', (data) => {
    const message = socketService.getMessage(data);

    switch (message.on) {
      case 'load data': {
        ws.send(socketService.emit('is loading', { isLoading: true }));
        getData()
          .then((database) => {
            ws.send(socketService.emit('get data', database));
            ws.send(socketService.emit('is loading', { isLoading: false }));
          })
          .catch((err) => ws.send(socketService.emit('error load data', {errorMsg:`Cannot load data please try again later...`})));
        break;
      }
    }

  });
}

module.exports = connectSocket;
