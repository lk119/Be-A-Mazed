
function setTimer() {
  document.getElementById('timer').innerHTML =
    02 + ":" + 00;
}

function startTimer() {
  var time = document.getElementById('timer').innerHTML;
  var timeArray = time.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));

  if(s==59) {
    m=m-1
  }
  if(m<0) {
    endGame();
  }
  document.getElementById('timer').innerHTML = m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  // add zero in front of numbers < 10
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec
  };
  if (sec < 0) {
    sec = "59"
  };
  return sec;
}
