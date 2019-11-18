$(function() {

  var scores = $("#scores")


  socket.on('score', function(data) {
    console.log(data)
    scores.append("<p class='score'>" + data.user + ": " + data.score + "</p>")
  })



});
