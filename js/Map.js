const TILE_W = 50;
const TILE_H = 50;
const MAP_COLS = 16;
const MAP_ROWS = 12;
var levelOne =  [1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
								 1, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 4, 0, 0, 1,
								 1, 0, 1, 1, 4, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
								 1, 3, 1, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 1, 0, 1,
								 1, 0, 1, 0, 0, 0, 0, 1, 1, 4, 1, 1, 0, 1, 3, 1,
								 1, 1, 1, 4, 1, 3, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1,
								 1, 3, 1, 0, 1, 1, 1, 1, 2, 0, 0, 1, 0, 0, 0, 1,
								 1, 0, 1, 0, 0, 1, 3, 1, 1, 1, 0, 1, 1, 1, 0, 1,
								 1, 0, 4, 0, 3, 1, 0, 0, 0, 1, 3, 1, 3, 4, 0, 1,
								 1, 0, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1,
								 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 1,
								 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var levelTwo =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
								 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
								 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
								 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
								 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
								 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
								 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
								 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
								 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
								 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
								 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
								 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var gridMap = [];

const TILE_GRASS = 0;
const TILE_HEDGE = 1;
const TILE_PLAYERSTART = 2;
const TILE_BISCUIT = 3;
const TILE_GATE = 4;
const TILE_OPEN_GATE = 5;
const TILE_EXIT_ONE = 6;
const TILE_EXIT_TWO = 7;



function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < MAP_COLS &&
		row >= 0 && row < MAP_ROWS) {
		 var mapIndexUnderCoord = rowColToArrayIndex(col, row);
		 return gridMap[mapIndexUnderCoord];
	} else {
		return TILE_WALL;
	}
}

function getTileIndexAtCoord(atX, atY) {
	var playerMapCol = Math.floor(atX / TILE_W);
	var playerMapRow = Math.floor(atY / TILE_H);
	var mapIndexUnderPlayer = rowColToArrayIndex(playerMapCol, playerMapRow);

	if(playerMapCol >= 0 && playerMapCol < MAP_COLS &&
		playerMapRow >= 0 && playerMapRow < MAP_ROWS) {
		return mapIndexUnderPlayer;
	}

	return undefined;
}

function rowColToArrayIndex(col, row) {
	return col + MAP_COLS * row;
}

function tileTypeHasTransparency(checkTileType) {
	return (
			checkTileType == TILE_BISCUIT ||
			checkTileType == TILE_OPEN_GATE ||
			checkTileType == TILE_EXIT_ONE ||
			checkTileType == TILE_EXIT_TWO ||
			checkTileType == TILE_GATE);
}

function drawMap() {

	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;

	for(var eachRow=0;eachRow<MAP_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<MAP_COLS;eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
			var tileType = gridMap[arrayIndex];
			var useImg = mapTiles[tileType];

			if( tileTypeHasTransparency(tileType) ) {
				canvasContext.drawImage(mapTiles[TILE_GRASS],drawTileX,drawTileY);
			}
			canvasContext.drawImage(useImg,drawTileX,drawTileY);
			drawTileX += TILE_W;
			arrayIndex++;
		}
		drawTileY += TILE_H;
		drawTileX = 0;
	}

} 
