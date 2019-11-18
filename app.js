require('./client/js/Player.js');

var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/game.html');
});

app.use('/client',express.static(__dirname + '/client'));

serv.listen(8000);
console.log("Server started.");

var SOCKET_LIST = {};

var io = require('socket.io')(serv,{});

io.sockets.on('connection', function(socket){
		socket.id = 'Player ' + Math.floor(Math.random()*100);
		SOCKET_LIST[socket.id] = socket;
		console.log(socket.id);

		socket.on('score', function(data) {
			io.sockets.emit('score', {
				user: data.user,
				score: data.score
			});
		})

});
