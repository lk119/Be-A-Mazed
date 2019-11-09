var canvas, canvasContext;

var player1 = new playerClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	canvasArea(0,0, canvas.width,canvas.height, 'white');


	loadImages();
}

function imageLoadingComplete() {
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupControls();

	loadLevel(levelOne);
}

function loadLevel(level) {
	gridMap = level.slice();
	player1.reset(playerImage, "Player One");
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	player1.move();
	//player1.camera();
}

function drawAll() {
	drawMap();
	player1.draw();
}
