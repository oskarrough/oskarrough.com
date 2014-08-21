$.pjax.defaults.timeout = 5000

/*global Blazy*/
var Rough = function() {
	this.$navLinks = $('.Nav').find('a');
	this.init();
};

Rough.prototype = {
	init: function() {
		console.log('hej');
		// this.lazyLoading();

		$(document).pjax('a', '#Main');
		$(document).on('pjax:send', function() {
		  console.log('pjax:send');
		});

		var d = new Date();
		var n = d.getTime();
		// $('body').prepend('<time>'+ n +'</time>');

		this.$navLinks.on('click', this.load.bind(this));
	},

	load: function(event) {
		event.preventDefault();
		// update nav
		this.$navLinks.removeClass('is-active');
		var $el = $(event.currentTarget).addClass('is-active');
		// load and insert page with ajax
		var url = $el.attr('href');
		var stateObj = { foo: "bar" };
		$('#Main').load(url + ' #Main');
		history.pushState(stateObj, "what is this", url);
	},

	/**
	 * Lazy load of images (and background-images !!)
	 * to use, add the .js-lazyLoad class to an image or read the bLazy documentation
	 */
	lazyLoading: function() {
		var bLazy = new Blazy({
			container: '.Gifs',
			selector: '.Gif',
			offset: 100
		});
	},

	themes: function() {
		// If a theme is chosen
		if (monster.get('theme')) {
			$('body').removeClass('cosmic proinquotes funky').addClass(monster.get('theme'));
		}

		//$('.sister-sledge').addClass('visible');

		// Theme chooser
		$('#cosmic, #proinquotes, #funky').click(function(){
			if (monster.get('theme')) {
				monster.remove('theme');
			}
			var theme = $(this).attr('id');
			monster.set('theme', theme, 1);
			$('body').removeClass('cosmic proinquotes funky').addClass(monster.get('theme'));
			console.log(monster.get('theme'));
		});
	},

	justdoit: function() {
		$('body').removeClass('imsomoved');
	},

	actions: function() {
		$('.cosmic').mousemove(function(e){
			$(this).addClass('imsomoved');
			setTimeout(justdoit, 10000);
			// var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
			// var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
			// console.log("( e.pageX, e.pageY ) : " + pageCoords);
			// console.log("( e.clientX, e.clientY ) : " + clientCoords);
		});
	}
};
