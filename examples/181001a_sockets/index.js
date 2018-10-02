const express = require('express');
const socketio = require('socket.io');

const http = require('http');
const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(express.static(__dirname + '/app'));

let mousePositions = {};

function connected(socket) {
	socket.on('mouse', function(data) {
		mousePositions[socket.id] = data;

		io.emit('mousePositions', mousePositions);
	});

	socket.on('disconnect', function () {
		delete mousePositions[socket.id];
	});
}

io.on('connection', connected);
server.listen(8080);
