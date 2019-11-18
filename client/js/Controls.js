//constants to hold keycodes
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;


function setupControls() {

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	player1.setupControls(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
}

//if the key pressed is equal to the specified key, set the status to true, otherwise false
function keyevent(keyEvent, status) {
	if(keyEvent.keyCode == player1.controlKeyLeft) {
		player1.keyHeld_Left = status;
	}
	if(keyEvent.keyCode == player1.controlKeyRight) {
		player1.keyHeld_Right = status;
	}
	if(keyEvent.keyCode == player1.controlKeyUp) {
		player1.keyHeld_Up = status;
	}
	if(keyEvent.keyCode == player1.controlKeyDown) {
		player1.keyHeld_Down = status;
	}
}

//event key event to true if key is being pressed
function keyPressed(evt) {
	keyevent(evt, true);
}

function keyReleased(evt) {
	keyevent(evt, false);
}
