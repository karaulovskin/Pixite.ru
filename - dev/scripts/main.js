$(document).ready(function(){


		// Открытие меню
	// (function(){

	// 	$('.nav__trigger-link').click(function(e){
	// 		// e.preventDefault();
	// 		$('.nav__list').slideToggle();
	// 	});

	// }());



	// MMENU

	(function(){

		if($(window).width() <= '992'){

			$("#mmenu").mmenu({

				"counters": true,

	    		"offCanvas": {
		            "position": "right"
		        },

		        "extensions": [
		            "theme-dark",
		            "border-fule",
		            "pagedim-black"
		        ]

		    });
	    } 

	}());






		// Открытие описания
	(function(){

		if($(window).width() > '768'){

			$('.cube__box--mobile').mouseenter(function(){
				$('.cube__desc--mobile').fadeIn();
			});
			
			$('.cube__box--mobile').mouseleave(function(){
				$('.cube__desc--mobile').fadeOut();
			});



			$('.cube__box--corporate').mouseenter(function(){
				$('.cube__desc--corporate').fadeIn();
			});
			
			$('.cube__box--corporate').mouseleave(function(){
				$('.cube__desc--corporate').fadeOut();
			});



			$('.cube__box--support').mouseenter(function(){
				$('.cube__desc--support').fadeIn();
			});
			
			$('.cube__box--support').mouseleave(function(){
				$('.cube__desc--support').fadeOut();
			});



			$('.cube__box--site').mouseenter(function(){
				$('.cube__desc--site').fadeIn();
			});
			
			$('.cube__box--site').mouseleave(function(){
				$('.cube__desc--site').fadeOut();
			});



			$('.cube__box--learning').mouseenter(function(){
				$('.cube__desc--learning').fadeIn();
			});
			
			$('.cube__box--learning').mouseleave(function(){
				$('.cube__desc--learning').fadeOut();
			});

		} else if($(window).width() < '768') {

			$('.cube__box--mobile').click(function(){
				$('.cube__desc--mobile').fadeIn();
				$('.cube__overlay').fadeIn();
			});

			$('.cube__overlay' || '.cube__desc--mobile' ).click(function(){
				$('.cube__desc--mobile').fadeOut();
				$('.cube__overlay').fadeOut();
			});
			

			$('.cube__box--corporate').click(function(){
				$('.cube__desc--corporate').fadeIn();
				$('.cube__overlay').fadeIn();
			});

			$('.cube__overlay').click(function(){
				$('.cube__desc--corporate').fadeOut();
				$('.cube__overlay').fadeOut();
			});
			

			$('.cube__box--support').click(function(){
				$('.cube__desc--support').fadeIn();
				$('.cube__overlay').fadeIn();
			});

			$('.cube__overlay').click(function(){
				$('.cube__desc--support').fadeOut();
				$('.cube__overlay').fadeOut();
			});


			$('.cube__box--site').click(function(){
				$('.cube__desc--site').fadeIn();
				$('.cube__overlay').fadeIn();
			});

			$('.cube__overlay').click(function(){
				$('.cube__desc--site').fadeOut();
				$('.cube__overlay').fadeOut();
			});
			

			$('.cube__box--learning').click(function(){
				$('.cube__desc--learning').fadeIn();
				$('.cube__overlay').fadeIn();
			});

			$('.cube__overlay').click(function(){
				$('.cube__desc--learning').fadeOut();
				$('.cube__overlay').fadeOut();
			});

		}

	}());

});

