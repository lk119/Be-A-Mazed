const PLAYER_SPEED = 3.0;

function playerClass() {
	this.x = 75;
	this.y = 75;
	this.myplayerImage;
	this.name = "Untitled Player";
	this.biscuitEaten = 0;

	this.keyHeld_Up = false;
	this.keyHeld_Down = false;
	this.keyHeld_Left = false;
	this.keyHeld_Right = false;

	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyDown;
	this.controlKeyLeft;

	this.setupControls = function(upKey, rightKey, downKey, leftKey) {
		this.controlKeyUp = upKey;
		this.controlKeyRight = rightKey;
		this.controlKeyDown = downKey;
		this.controlKeyLeft = leftKey;
	}

	this.reset = function(image, playerName) {
		this.name = playerName;
		this.myplayerImage = image;
		//this.biscuitEaten = 0; //resets biscuit count to zero on reset
		this.updateBiscuitCount();


		for(var eachRow=0;eachRow<MAP_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<MAP_COLS;eachCol++) {
				var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
				if(gridMap[arrayIndex] == TILE_PLAYERSTART) {
					gridMap[arrayIndex] = TILE_GRASS;
					this.x = eachCol * TILE_W + TILE_W/2;
					this.y = eachRow * TILE_H + TILE_H/2;
					return;
				}
			}
		}
	}

	this.updateBiscuitCount = function() {
		document.getElementById("biscuitCount").innerHTML =  this.biscuitEaten; //the count of the biscuits
	}

	this.move = function() {
		var moveX = this.x;
		var moveY = this.y;

		if(this.keyHeld_Up) {
			moveY -= PLAYER_SPEED;
		}
		if(this.keyHeld_Right) {
			moveX += PLAYER_SPEED;
		}
		if(this.keyHeld_Down) {
			moveY += PLAYER_SPEED;
		}
		if(this.keyHeld_Left) {
			moveX -= PLAYER_SPEED;
		}

		var moveIntoTileIndex = getTileIndexAtCoord(moveX, moveY);
		var moveIntoTile = TILE_HEDGE;

		if(moveIntoTileIndex != undefined) {
			moveIntoTile = gridMap[moveIntoTileIndex];
		}

		switch(moveIntoTile) {
				case TILE_GRASS:
					this.x = moveX;
					this.y = moveY;
					break;

				case TILE_OPEN_GATE:
					this.x = moveX;
					this.y = moveY;
					break;

				case TILE_GATE:
						gridMap[moveIntoTileIndex] = TILE_OPEN_GATE;
					break;

				case TILE_BISCUIT:
					this.biscuitEaten++;
					this.updateBiscuitCount();
					gridMap[moveIntoTileIndex] = TILE_GRASS;
					break;

				case TILE_HEDGE:
				default:
					break;

				case TILE_EXIT_ONE:
					loadLevel(levelTwo);
					break;

				case TILE_EXIT_TWO:
					loadLevel(levelOne);
					this.x = 125; //need to update this to a calculation maybe
					this.y = 75;  //need to update this to a calculation maybe
					break;
			}

	}

	this.draw = function() {
		drawImage(this.myplayerImage, this.x,this.y, 0);
	}

}
