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



	// MAPS
	(function(){

		ymaps.ready(init);
		    var 
		    	myMap,
		    	myPlacemark;

	    function init(){     
	        myMap = new ymaps.Map("map", {
	            center: [55.16023070, 61.41568621],
	            zoom: 16,
	            controls: []
	        });

	        myPlacemark = new ymaps.Placemark([55.16023070, 61.41568621], 
	        	{
					hintContent: 'Pixite.ru', 
					balloonContent: 'Pixite.ru'
				}

				// {
				// 	iconLayout: 'default#image',
			 //        iconImageHref: '/local/templates/pixite/img/logo-contacts.png',
			 //        iconImageSize: [50, 50],
			 //        iconImageOffset: [-15, -27]
				// }
			);

	        myMap.geoObjects.add(myPlacemark);
	    }

	    var	
    		linkMap = $('.point__link-map'),
    		linkCont = $('.contacts__link-contacts'),
	    	overlay = $('.contacts__map-overlay'),
	    	location = $('.contacts__location');

		$(linkMap).click(function(e){
			e.preventDefault();
			$(overlay).fadeOut();
			$(location).fadeOut();
			$(linkCont).fadeIn();
		});

		$(linkCont).click(function(e){
			e.preventDefault();
			$(overlay).fadeIn();
			$(location).fadeIn();
			$(linkCont).fadeOut();
		});
 
	}());



	// POPUP
	(function(){

		var
			popup = $('.popup'),
			close = $('.popup__close-link'),
			order = $('.footer__order-link'),
			overlay = $('.popup__overlay');

		$(order).click(function(e){
			e.preventDefault();
			$(popup).fadeIn();
			$(overlay).fadeIn();
		});
		
		$(close).click(function(e){
			e.preventDefault();
			$(popup).fadeOut();
			$(overlay).fadeOut();
		});

		$(overlay).click(function(e){
			e.preventDefault();
			$(popup).fadeOut();
			$(overlay).fadeOut();
		});



		var
			input = $('.input__download');
			textFake = $('.text__download-fake');

		$(input).on('change', function() {
			realVal = $(this).val();
			lastIndex = realVal.lastIndexOf('\\') + 1;
	      	if(lastIndex !== -1) {
	        realVal = realVal.substr(lastIndex);
	        $(textFake).animate({opacity: 0});
	        $(this).prev('.popup__download-fake').find('.input__download-fake').val(realVal);
	      }
	   });

	}());

});

