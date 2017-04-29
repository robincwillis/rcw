$(function() {

	var $body = $('body');
	var ignoreScroll = false;


	$(window).scroll( function(e) {
			var offset = $(window).scrollTop();

			if( offset < 1 && !ignoreScroll){

						if($body.hasClass('scroll-header')){
							$body.removeClass('scroll-header');
						}

			} else if(offset > 1 && !ignoreScroll){
				if(!$body.hasClass('scroll-header')){
						$body.addClass('scroll-header');
					}
			}

		});

});
