const TILE_W = 50; 			// tile width
const TILE_H = 50; 			// tile height
const MAP_COLS = 16;		// number of columns in the grid
const MAP_ROWS = 12;		// number of rows in the grid

// level one map
var levelOne =  [1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		 1, 0, 0, 0, 0, 1, 3, 0, 0, 0, 8, 0, 4, 0, 0, 1,
		 1, 0, 1, 1, 4, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
		 1, 3, 1, 0, 0, 3, 0, 4, 0, 0, 3, 0, 0, 1, 0, 1,
		 1, 0, 1, 0, 0, 0, 0, 1, 1, 4, 1, 1, 0, 1, 3, 1,
		 1, 1, 1, 4, 1, 3, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1,
		 1, 3, 1, 0, 1, 1, 1, 1, 2, 0, 0, 1, 0, 0, 0, 1,
		 1, 0, 1, 0, 0, 1, 3, 1, 1, 1, 0, 1, 1, 1, 8, 1,
		 1, 0, 4, 0, 3, 1, 0, 0, 0, 1, 3, 1, 3, 4, 0, 1,
		 1, 0, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1,
		 1, 0, 0, 3, 0, 8, 0, 0, 0, 1, 3, 0, 0, 0, 0, 1,
		 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// level two map
var levelTwo =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		 1, 0, 4, 0, 1, 0, 0, 0, 0, 0, 4, 0, 8, 0, 0, 1,
		 1, 3, 1, 0, 1, 4, 1, 1, 0, 1, 1, 0, 0, 3, 0, 1,
		 1, 1, 1, 0, 1, 0, 8, 1, 0, 3, 1, 3, 0, 0, 3, 1,
		 1, 0, 0, 0, 0, 0, 0, 1, 4, 1, 1, 1, 1, 1, 1, 1,
		 1, 0, 1, 1, 1, 1, 4, 1, 0, 0, 0, 3, 0, 0, 3, 1,
		 1, 3, 1, 3, 0, 0, 0, 1, 1, 1, 1, 1, 4, 1, 0, 1,
		 1, 0, 1, 1, 1, 4, 1, 1, 0, 3, 0, 0, 0, 1, 0, 1,
		 1, 0, 1, 1, 3, 0, 0, 4, 8, 0, 0, 3, 0, 1, 0, 1,
		 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
		 1, 1, 2, 1, 3, 0, 0, 0, 0, 4, 0, 3, 0, 0, 0, 1,
		 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var gridMap = [];

//the types of tiles
const TILE_GRASS = 0;
const TILE_HEDGE = 1;
const TILE_PLAYERSTART = 2;
const TILE_BISCUIT = 3;
const TILE_GATE = 4;
const TILE_OPEN_GATE = 5;
const TILE_EXIT_ONE = 6;
const TILE_EXIT_TWO = 7;
const TILE_BAD_BISCUIT = 8;
const TILE_POOP = 9;

//function to create the array index for the other functions
function xyArrayIndex(x, y) {
	return x + MAP_COLS * y;
}

// finds the coordinates of the player
function playerTileIndex(x, y) {
	var playerX = Math.floor(x / TILE_W);
	var playerY = Math.floor(y / TILE_H);
	var tileIndexUnderPlayer = xyArrayIndex(playerX, playerY);

	if(playerX >= 0 && playerX < MAP_COLS &&
		playerY >= 0 && playerY < MAP_ROWS) {
		return tileIndexUnderPlayer;
	}
	return undefined;
}

//makes the certain tiles transparent
function tileTransparency(checkTileType) {
	return (
			checkTileType == TILE_BISCUIT ||
			checkTileType == TILE_OPEN_GATE ||
			checkTileType == TILE_EXIT_ONE ||
			checkTileType == TILE_EXIT_TWO ||
			checkTileType == TILE_BAD_BISCUIT ||
			checkTileType == TILE_POOP ||
			checkTileType == TILE_GATE);
}

// uses for loop to draw the map grid
//starts with first row and loops through
// each column and when it reaches the end of a row
// it goes to the next row
function drawMap() {

	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;

	for(var rowIndex = 0; rowIndex < MAP_ROWS; rowIndex++) {
		for(var columnIndex = 0; columnIndex < MAP_COLS; columnIndex++) {

			var arrayIndex = xyArrayIndex(columnIndex, rowIndex);
			var tileType = gridMap[arrayIndex];
			var image = mapTiles[tileType];

			if(tileTransparency(tileType) ) {
				canvasContext.drawImage(mapTiles[TILE_GRASS],drawTileX,drawTileY);
			}
			canvasContext.drawImage(image,drawTileX,drawTileY);
			drawTileX += TILE_W;
			arrayIndex++;
		}
		drawTileY += TILE_H;
		drawTileX = 0;
	}

}
