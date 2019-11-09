// create element for player image
var playerImage = document.createElement("img");
// create array for all the images that will be map tiles
var mapTiles = [];

var numberOfImages = 0; // set initially to zero so loop can incriment depending on the array size

//count down from total images and return complete if zero images left to load
function countLoadedImages() {
	numberOfImages--;
	//console.log(numberOfImages); //test on console to see which image is failing
	if(numberOfImages == 0) {
		imageLoadingComplete();
	}
}

//function to load the images
function beginLoadingImage(imageVar, fileName) {
	imageVar.onload = countLoadedImages;
	imageVar.src = fileName;
}

// create element for map tile images in the array
function loadImagesForMapTiles(mapItem, fileName) {
	mapTiles[mapItem] = document.createElement("img");
	//load the array images
	beginLoadingImage(mapTiles[mapItem], fileName);
}

//add sources to array list
function loadImages() {
	var imageList = [
		{varName: playerImage, theFile: "images/rr_002.png"},
		{tileType: TILE_GRASS, theFile: "images/grass.jpg"},
		{tileType: TILE_HEDGE, theFile: "images/hedge.png"},
		{tileType: TILE_BISCUIT, theFile: "images/dog_biscuit.png"},
		{tileType: TILE_GATE, theFile: "images/redgate_small.png"},
		{tileType: TILE_OPEN_GATE, theFile: "images/redgate_open.png"},
		{tileType: TILE_EXIT_ONE, theFile: "images/redgate_small.png"},
		{tileType: TILE_EXIT_TWO, theFile: "images/redgate_small.png"}
		];


	numberOfImages = imageList.length; //number of images now equals the length of the array

//loop through array and load each image
	for(var i=0;i<imageList.length;i++) {

		if(imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImagesForMapTiles(imageList[i].tileType, imageList[i].theFile);
		}
	}
}
