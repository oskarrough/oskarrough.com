$(function(){


	//alert(monster.get(theme));

	// Theme chooser
	$('#cosmic, #proinquotes, #funky').click(function(){
		var name = $(this).attr('id');
		$('body').removeClass('cosmic proinquotes funky');
		$('body').addClass(theme);
		monster.set(theme, name, 1);
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
