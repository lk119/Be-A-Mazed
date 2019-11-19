//constants to hold keycodes
const KEY_LEFT_ARROW = 65;
const KEY_UP_ARROW = 87;
const KEY_RIGHT_ARROW = 68;
const KEY_DOWN_ARROW = 83;


function setupControls() {

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	player.setupControls(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
}

//if the key pressed is equal to the specified key, set the status to true, otherwise false
function keyevent(keyEvent, status) {
	if(keyEvent.keyCode == player.controlKeyLeft) {
		player.keyHeld_Left = status;
	}
	if(keyEvent.keyCode == player.controlKeyRight) {
		player.keyHeld_Right = status;
	}
	if(keyEvent.keyCode == player.controlKeyUp) {
		player.keyHeld_Up = status;
	}
	if(keyEvent.keyCode == player.controlKeyDown) {
		player.keyHeld_Down = status;
	}
}

//event key event to true if key is being pressed
function keyPressed(evt) {
	keyevent(evt, true);
}

function keyReleased(evt) {
	keyevent(evt, false);
}
