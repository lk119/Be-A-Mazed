
require('./client/js/Player.js');

var express = require('express');
var app = express();
var serv = require('http').Server(app);
var port = process.env.PORT || 3000;

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

app.use('/client',express.static(__dirname + '/client'));



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

		//listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', {
					user: data.user,
					message: data.message
				});
    })

});
