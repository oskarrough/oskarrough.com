/**
 * Starfield with HTML5 canvas
 * based on http://codentronix.com/2011/07/22/html5-canvas-3d-starfield/
 */

/*
	<canvas id="starwars"></canvas>
*/

const STARWARS_BACKGROUND_COLOR = 'rgb(7,15,17)';
const STARWARS_AMOUNT = 128;
const STARWARS_MAX_DEPTH = 32;
const STARWARS_FPS = 30;
const STARWARS_WARP_FACTOR = 0.02;
const STARWARS_XFACTOR = 128.0;

// Creates an an array of star objects [{x, y, z}, …]
function createStars(amount = STARWARS_AMOUNT, maxDepth = STARWARS_MAX_DEPTH) {
	let arr = new Array(amount);

	for(var i = 0; i < arr.length; i++) {
		arr[i] = {
			x: randomRange(-25,25),
			y: randomRange(-25,25),
			z: randomRange(1, maxDepth)
		}
	}

	return arr;
}

// Returns a random number in the range [minVal,maxVal]
function randomRange(minVal, maxVal) {
	return Math.floor(Math.random() * (maxVal - minVal - 1)) + minVal;
}

function loop(canvas, ctx, stars) {
	let containerWidth = canvas.width;
	let containerHeight = canvas.width;

	ctx.fillStyle = STARWARS_BACKGROUND_COLOR;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	for(var i = 0; i < stars.length; i++) {
		var star = stars[i];

		// Create some variation.
		star.z -= STARWARS_WARP_FACTOR;

		// If going out view, reposition far away
		if (star.z <= 0) {
			star.x = randomRange(-25, 25);
			star.y = randomRange(-25, 25);
			star.z = STARWARS_MAX_DEPTH;
		}

		// Map to 2D. This is called 'perspective projection'.
		var k  = STARWARS_XFACTOR / star.z;
		var px = star.x * k + containerWidth / 2;
		var py = star.y * k + containerHeight / 2;

		if (px >= 0 && px <= containerWidth && py >= 0 && py <= containerHeight) {

			// Change size and color based on the depth (Z value)
			// e.g. make distant stars smaller and vice versa
			var size = (1 - star.z / STARWARS_MAX_DEPTH) * 5;
			var color = parseInt((1 - star.z / STARWARS_MAX_DEPTH) * 255);
			ctx.fillStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
			ctx.fillRect(px, py, size, size);
		}
	}
}

module.exports = {
	init(selector = 'starwars') {

		window.onload = function() {
			let canvas = document.getElementById(selector);

			if (!canvas || !canvas.getContext) {
				console.log('Sorry, no canvas');
				return false;
			}

			let ctx = canvas.getContext('2d');
			var stars = createStars();

			setInterval(function() {
				loop(canvas, ctx, stars);
			}, STARWARS_FPS);
		}
	}
}
