const font = new FontFaceObserver('triplicate-t4', {
	/* weight: 400*/
})
font.load().then(() => {
	document.documentElement.classList.remove('no-fonts')
})

window.onload = () => {
	oskar('#starwars')
}

function changeTheme() {
	document.documentElement.classList.toggle('theme-dark')
}

var button = document.querySelector('.js-switchTheme')
button.addEventListener('click', changeTheme)