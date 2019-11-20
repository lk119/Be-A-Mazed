var canvas, canvasContext;

var player = new playerClass();

function musicToggle() {
	var toggle = document.getElementById("toggle");
	var music = document.getElementById("music");
	if (toggle.checked == true) {
		music.play();
		music.loop();
	}
	else {
		music.pause();
	}
}

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	canvasArea(0,0, canvas.width,canvas.height, 'white');

	loadImages();

	document.getElementById("gameCanvas").style.display = "none";
	document.getElementById("counterBox").style.display = "none";
	document.getElementById("sidebar").style.display = "none";
	document.getElementById("gameOver").style.display = "none";
}

function startGame() {
	document.getElementById("start").style.display = "none";
	document.getElementById("gameCanvas").style.display = "block";
	document.getElementById("counterBox").style.display = "block";
	document.getElementById("sidebar").style.display = "block";
	setTimer();
	startTimer();
}

function endGame() {
	document.getElementById("gameOver").style.display = "block";
	document.getElementById("counterBox").style.display = "none";
	document.getElementById("gameCanvas").style.display = "none";
	document.getElementById("finalScore").innerHTML = player.biscuitEaten;
		// socket.emit('score', {
		// 		user: player.playerName,
		// 		score: player.biscuitEaten
		// 	});
}

function resetGame() {
	location.reload();
	// document.getElementById("gameOver").style.display = "none";
	// player.biscuitEaten = 0;
	// player.reset(playerImage, "Player One");
	// startGame();
}


function imageLoadingComplete() {
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupControls();

	loadLevel(levelOne);
}

function loadLevel(level) {
	gridMap = level; //.slice() - use to reset when click new game
	player.reset(playerImage, "Player One");
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	player.move();

}

function drawAll() {
	drawMap();
	player.draw();
}
