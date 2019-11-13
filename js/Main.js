var canvas, canvasContext;

var player1 = new playerClass();



window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	canvasArea(0,0, canvas.width,canvas.height, 'white');


	loadImages();

	// document.getElementById('player').play();

}

function imageLoadingComplete() {
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupControls();

	loadLevel(levelOne);
}

function loadLevel(level) {
	gridMap = level; //.slice() - use to reset when click new game
	player1.reset(playerImage, "Player One");
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	player1.move();

}

function drawAll() {
	drawMap();
	player1.draw();
}
