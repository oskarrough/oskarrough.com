// var $ = require('jquery');
// var lazysizes = require('lazysizes'); // this runs by itself
const starwars = require('./starwars')
const FontFaceObserver = require('fontfaceobserver')
window.onload = () => {
	starwars.init('#starwars')
}

const font = new FontFaceObserver('triplicate-t4', {
	// weight: 400
})

font.load().then(() => {
	// console.log('Font is available')
	document.documentElement.classList.remove('no-fonts')
}, () => {
	// console.log('Font is not available')
})
