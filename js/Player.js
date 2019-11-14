const PLAYER_SPEED = 3.0;

function playerClass() {
	this.x = 75;
	this.y = 75;
	this.playerImage;
	this.playerName = "Untitled Player";
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
	//what happens on reset
	this.reset = function(image, playerName) {
		this.playerName = playerName;
		this.playerImage = image;
		//this.biscuitEaten = 0; //resets biscuit count to zero on reset
		this.updateBiscuitCount();

		// loops trhough the grid array to find starting point of character
		// changes the starting point to grass
		for(var rowIndex = 0; rowIndex < MAP_ROWS; rowIndex++) {
			for(var columnIndex = 0; columnIndex < MAP_COLS; columnIndex++) {

				var arrayIndex = xyArrayIndex(columnIndex, rowIndex);

				if(gridMap[arrayIndex] == TILE_PLAYERSTART) {
					gridMap[arrayIndex] = TILE_GRASS;
					this.x = columnIndex * TILE_W + TILE_W/2;
					this.y = rowIndex * TILE_H + TILE_H/2;
					return;
				}
			}
		}
	}
	//update the count of the biscuits
	this.updateBiscuitCount = function() {
		document.getElementById("biscuitCount").innerHTML =  this.biscuitEaten;
	}
	// move the player
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

		var moveIntoTileIndex = playerTileIndex(moveX, moveY);
		var moveIntoTile = TILE_HEDGE;

		//if the tile has coordinates then the player will move into the tile
		//stops the character from going outside of the grid
		if(moveIntoTileIndex != undefined) {
			moveIntoTile = gridMap[moveIntoTileIndex];
		}
		
		//declares the winner if biscount count equals 15
		if(this.biscuitEaten == 15) {
		alert(this.playerName + " is a good boy! You win!");
		this.biscuitEaten = 0; //this stops the game being stuck in a loop declaring the winner
		location.reload(); //reloads the page
		}

		//what happens in each tile
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

				case TILE_BAD_BISCUIT:
					this.biscuitEaten = 0;
					this.updateBiscuitCount();
					gridMap[moveIntoTileIndex] = TILE_POOP;
					break;

				case TILE_POOP:
					this.x = moveX;
					this.y = moveY;
					break;

				case TILE_HEDGE:
				default:
					break;

				case TILE_EXIT_ONE:
					loadLevel(levelTwo);
					this.x = 125; //need to update this to a calculation maybe
					this.y = 500;  //need to update this to a calculation maybe
					break;

				case TILE_EXIT_TWO:
					loadLevel(levelOne);
					this.x = 125; //need to update this to a calculation maybe
					this.y = 75;  //need to update this to a calculation maybe
					break;
			}
	}

	this.draw = function() {
		drawImage(this.playerImage, this.x,this.y, 0);
	}

}
