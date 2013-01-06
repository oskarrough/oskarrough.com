
// Find dropdowns
var $dropdowns = $('nav ul').siblings('a');

// Mark dropdowns
$dropdowns.parent('li').addClass('dropdown');

// Toggle dropdowns
$dropdowns.click(function(event){
	// Prevent default click
	event.preventDefault();

	// Toggle dropdown
	toggleDropdown($(this));
});

// Clear dropdown dropdowns
function clearMenus() {
	$dropdowns.each(function() {
		$(this).parent('.dropdown').removeClass('open');
	});
}

// Clear on click outside
$('html').click(function() {
	clearMenus();
});
$('nav').click(function(event){
	event.stopPropagation();
});

// Clear on ESC press
$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		clearMenus();
	}
});

// Toggle the dropdown
function toggleDropdown(element) {
	$parent = element.parent('.dropdown');
	clearMenus();

	isActive = $parent.hasClass('open');
	if (!isActive) {
		$parent.addClass('open');
	}

	element.siblings('ul').focus();
}