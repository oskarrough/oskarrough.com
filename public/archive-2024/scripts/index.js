window.onload = () => {
	oskar('#starwars')
}

function changeTheme() {
	document.documentElement.classList.toggle('theme-dark')
}

var button = document.querySelector('.js-switchTheme')
button.addEventListener('click', changeTheme)