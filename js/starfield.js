


// Starfield
var stars = new Array(200);
var STARFIELD_MAX_DEPTH = 32;
var STARFIELD_WARP_FACTOR = 0.02;
var canvas, ctx;
canvas = document.getElementById("starwars");
if(canvas && canvas.getContext ) {
	var wrapper = document.getElementById("starwarswrap");
	canvas.height = wrapper.clientHeight;
	canvas.width = wrapper.clientWidth;
	ctx = canvas.getContext("2d");
	initStars(stars);
}

setInterval(loop,33);

function loop() {

	// Set size and bgcolor of the canvas
	var halfWidth  = canvas.width / 2;
	var halfHeight = canvas.height / 2;
	ctx.fillStyle = "rgb(7,15,17)";
	//ctx.fillStyle = "rgb(64,207,45)";
	//ctx.fillStyle = "rgb(94,75,237)";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	for( var i = 0; i < stars.length; i++ ) {
		stars[i].z -= STARFIELD_WARP_FACTOR;

		if( stars[i].z <= 0 ) {
			stars[i].x = randomRange(-25,25);
			stars[i].y = randomRange(-25,25);
			stars[i].z = STARFIELD_MAX_DEPTH;
		}

		var k  = 100.0 / stars[i].z;
		var posX = stars[i].x * k + halfWidth;
		var posY = stars[i].y * k + halfHeight;

		containerWidth = document.getElementById('starwars').width;
		containerHeight = document.getElementById('starwars').width;

		if( posX >= 0 && posX <= containerWidth && posY >= 0 && posY <= containerHeight ) {
			var size = (1 - stars[i].z / 32.0) * 5;
			var shade = parseInt((1 - stars[i].z / 32.0) * 350);
			//console.log(stars[i].z);
			ctx.fillStyle = "rgb(" + shade + "," + shade + "," + shade + ")";
			ctx.fillRect(posX,posY,size,size);
		}
	}
}

/* Returns a random number in the range [minVal,maxVal] */
function randomRange(minVal,maxVal) {
	return Math.floor(Math.random() * (maxVal - minVal - 1)) + minVal;
}

function initStars() {
	for( var i = 0; i < stars.length; i++ ) {
		stars[i] = {
			x: randomRange(-25,25),
			y: randomRange(-25,25),
			z: randomRange(1,STARFIELD_MAX_DEPTH)
		};
	}
}