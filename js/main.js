$(function(){

	// If a theme is chosen
	if (monster.get('theme')) {
		$('body').removeClass('cosmic proinquotes funky').addClass(monster.get('theme'));
	}
	$('.sister-sledge').addClass('visible');

	// Theme chooser
	$('#cosmic, #proinquotes, #funky').click(function(){

		if (monster.get('theme')) {
			monster.remove('theme');
		}
		var theme = $(this).attr('id');
		monster.set('theme', theme, 1);
		$('body').removeClass('cosmic proinquotes funky').addClass(monster.get('theme'));

	});


	// Cosmic effect
	// document.addEventListener('touchstart', function(e) {
	//     e.preventDefault();
	//     var touch = e.touches[0];
	//     alert(touch.pageX + " - " + touch.pageY);
	// }, false);
	function justdoit(){
		$('body').removeClass('imsomoved');
	}
	$(".cosmic").mousemove(function(e){
		$(this).addClass('imsomoved');
		setTimeout(justdoit, 10000)
		// var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
		// var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
		// $("span:first").text("( e.pageX, e.pageY ) : " + pageCoords);
		// $("span:last").text("( e.clientX, e.clientY ) : " + clientCoords);
	});


});
