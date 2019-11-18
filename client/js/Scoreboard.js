$(function() {

  var scores = $("#scores")
  var chatText = $("#chatText")
	var send = $("#send")
	var messages = $("#messages")



  socket.on('score', function(data) {
    console.log(data)
    scores.append("<p class='score'>" + data.user + ": " + data.score + "</p>")
  })

  //Emit message
  	send.click(function(){
  		socket.emit('new_message', {
        user: socket.id,
        message: chatText.val()
      })
  	})

  	//Listen on new_message
  	socket.on("new_message", (data) => {
  		chatText.val('');
  		messages.append("<p class='chatText'>" + data.user + ": " + data.message + "</p>")
  	})


});
