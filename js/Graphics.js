//draw the player image 
function drawImage(img, atX,atY, angle) {
	canvasContext.save();
	canvasContext.translate(atX, atY);
	canvasContext.rotate(angle);
	canvasContext.drawImage(img, -img.width/2, -img.height/2);
	canvasContext.restore();
}

//draw the canvas area
function canvasArea(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
}
