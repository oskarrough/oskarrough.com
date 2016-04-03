// var $ = require('jquery');
// var lazysizes = require('lazysizes'); // this runs by itself
const starwars = require('./starwars')
window.onload = () => {
	starwars.init('#starwars')
}
