
	// ACCORDION
	(function(){
		$('.nav__link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.nav__list'),
				item = $this.closest('.nav__item'),
				currentContent = item.find('.nav-dropdown__list'),
				duration = 500;

				// currentContent.slideToggle(duration);


			if(!item.hasClass('nav__item--active')) {

				item
					.addClass('nav__item--active')
					.siblings()
					.removeClass('nav__item--active')
					.find('.nav-dropdown__list')
					.stop(true, true)
					.slideUp();

				currentContent.stop(true, true).slideDown(duration);
			} else {

				item.removeClass('nav__item--active');
				currentContent.stop(true, true).slideUp();
			}
		});
	}());

	(function(){
		$('.nav-dropdown__link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.nav-dropdown__list'),
				item = $this.closest('.nav-dropdown__item'),
				currentContent = item.find('.nav-dropdown-2__list'),
				duration = 500;

				// currentContent.slideToggle(duration);


			if(!item.hasClass('nav-dropdown__item--active')) {

				item
					.addClass('nav-dropdown__item--active')
					.siblings()
					.removeClass('nav-dropdown__item--active')
					.find('.nav-dropdown-2__list')
					.stop(true, true)
					.slideUp();

				currentContent.stop(true, true).slideDown(duration);
			} else {

				item.removeClass('nav-dropdown__item--active');
				currentContent.stop(true, true).slideUp();
			}
		});
	}());


	  // ACCORDION POPUP
    (function(){
        
        $('.popup-trigger').on('click', function(e){
        	e.preventDefault();

            var
                $this = $(this),
                container = $this.closest('.popup__list'),
                item = $this.closest('.popup__item'),
                currentContent = item.find('.sub-popup__list'),
                duration = 500;

            if(!item.hasClass('popup__item--active')) {

                item
                    .addClass('popup__item--active')
                    .siblings()
                    .removeClass('popup__item--active')
                    .find('.sub-popup__list')
                    .stop(true, true)
                    .slideUp();

                currentContent.stop(true, true).slideDown(duration);
            } else {

                item.removeClass('popup__item--active');
                currentContent.stop(true, true).slideUp();
            }

        });

    }());

    // POPUP PRODUCT
    (function(){

        var link = document.querySelector('.members-alphabet__item'),
            popup = document.querySelector('.members-popup'),
            overlay = document.querySelector('.popup-overlay');

        link.addEventListener('click', function (e) {
            e.preventDefault();
            popup.classList.add('members-popup--show'),
            overlay.classList.add('popup-overlay--show');
        });

        overlay.addEventListener('click', function (e) {
            e.preventDefault();
            popup.classList.remove('members-popup--show'),
            overlay.classList.remove('popup-overlay--show');
        });

        window.addEventListener('keydown', function(e){
            if (e.keyCode === 27) {
                if (popup.classList.contains('members-popup--show')) {
                    popup.classList.remove('members-popup--show'),
                    overlay.classList.remove('popup-overlay--show');
                };
            };
        });
    }());