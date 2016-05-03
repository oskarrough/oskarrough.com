/**
 * Starfield with HTML5 canvas
 * based on http://codentronix.com/2011/07/22/html5-canvas-3d-starfield/
 */

/*
	<canvas id="starwars"></canvas>
*/

const settings = {
	backgroundColor: 'rgb(20,15,17)',
	amount: 120,
	maxDepth: 32,
	warpFactor: 0.02,
	xfactor: 128.0
}

// Creates an an array of star objects [{x, y, z}, …]
function createStars(amount = settings.amount, maxDepth = settings.maxDepth) {
	const arr = new Array(amount)
	for (let i = 0; i < arr.length; i++) {
		arr[i] = {
			x: randomRange(-25, 25),
			y: randomRange(-25, 25),
			z: randomRange(1, maxDepth)
		}
	}
	return arr
}

// Returns a random number in the range [minVal,maxVal]
function randomRange(minVal, maxVal) {
	return Math.floor(Math.random() * (maxVal - minVal - 1)) + minVal
}

function render(canvas, ctx, stars, width, height) {
	ctx.fillStyle = settings.backgroundColor
	ctx.fillRect(0, 0, canvas.width, canvas.height)

	for (let i = 0; i < stars.length; i++) {
		const star = stars[i]

		// Create some variation…
		star.z -= settings.warpFactor
		// … and if going out view, reposition far away.
		if (star.z <= 0) {
			star.x = randomRange(-25, 25)
			star.y = randomRange(-25, 25)
			star.z = settings.maxDepth
		}

		// Map to 2D. This is called 'perspective projection'.
		const k = settings.xfactor / star.z
		const px = star.x * k + width / 2
		const py = star.y * k + height / 2

		if (px >= 0 && px <= width && py >= 0 && py <= height) {
			// Change size and color based on the depth (Z value)
			// e.g. make distant stars smaller and vice versa
			const size = (1 - star.z / settings.maxDepth) * 5
			const color = parseInt((1 - star.z / settings.maxDepth) * 255, 10)
			ctx.fillStyle = `rgb(${color},${color},${color})`
			ctx.fillRect(px, py, size, size)
		}
	}
}

const init = selector => {
	const canvas = document.querySelector(selector)
	if (!canvas || !canvas.getContext) {
		throw new Error(`You need to supply a selector to the 'init' method`)
	}
	const ctx = canvas.getContext('2d')
	const stars = createStars()
	const width = canvas.width
	const height = canvas.width
	function loop() {
		render(canvas, ctx, stars, width, height)
		requestAnimationFrame(loop)
	}
	requestAnimationFrame(loop)
}

module.exports = {init}
