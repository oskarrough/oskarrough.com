const starwars = require('./starwars')
const FontFaceObserver = require('fontfaceobserver')

const font = new FontFaceObserver('triplicate-t4', {/*weight: 400*/})
font.load().then(() => {
	document.documentElement.classList.remove('no-fonts')
});

window.onload = () => {
	starwars.init('#starwars')
}
