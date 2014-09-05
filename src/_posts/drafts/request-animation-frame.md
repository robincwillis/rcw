window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame       ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame    ||
						function( callback ){
							window.setInterval(callback, 1000 / 60);
						};
	})();

	(function animloop(){
		requestAnimFrame(animloop);
		timeline.renderVideo();
	})();