---
layout: post
title: "Request Animation Frame"
tags: javascript requestAnimFrame
published: true
description: Run animations in the browser the right way
---

If you want to learn about what ```requestAnimFrame``` is and why you should use it I recommend reading this [article](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/) by Paul Irish.

If you are looking for a simple snippet to copy ```requestAnimFrame``` into your project then here you go.

~~~javascript

var onFrame = function(){
	//your code here
}

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
	onFrame();
})();
~~~