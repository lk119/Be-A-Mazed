var canvas, canvasContext;
var player = new playerClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	canvasArea(0,0, canvas.width,canvas.height, 'white');

	loadImages();
	hideAllElementsExceptLogin();
}

function loginSuccessful() {
		hideBoxesShowPlay()
}

function goToCreateAccount() {
		hideLoginCreateAccount()
}

function createAccount() {
		hideBoxesShowPlay()
}

function startGame() {
	hideButtonShowGame()
	setTimer();
	startTimer();
}

function endGame() {
	hideCanvasShowGameOver()
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
