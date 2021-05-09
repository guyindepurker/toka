const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 3000;
const connectSocket = require('./controllers/socket-controller')
const WebSocket = require('ws')

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, 'public')));
} else {
	const corsOptions = {
		origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
		credentials: true,
	};
	app.use(cors(corsOptions));
}

//SETUP SOCKET
const wss = new WebSocket.Server({server:http})
wss.on('connection',connectSocket)


app.get('/**', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

http.listen(port, () => {
	console.log(`the server running in port ${port}`);
});