---
layout: post
title: "Ajax Content With CSS Transitions"
tags: javascript ajax css css3
published: true
description: Exploring how to ajax in fresh content to page with css3 transitions for a smooth time.
---


Often times one will want to load in some fresh content without loading a new page. You know by now ajax is the way to do this. Say we are not using something super fresh like Angular or Ember, you also know jQuery makes this really easy. However appending or replacing content on in the dom can be pretty disrupting for your page layout and overall experience. Things can jump, scrollbars can appear etc. So you want to animate these changes to the layout to provide a smooth transition. You also know CSS3 is the way to go to add these transitions so you might do something like this.

<!--more-->

####Example 1

we have some content we want to load via ajax, here is a simple example for acoomplishing this.


we are gonna add some more via ajax.

for example something like this `content.html`.

~~~~html

<div class="content2">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

~~~~

and in our main page `index.html`.

~~~~html

<div class="item">
	<div class="content">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
</div>

~~~~

Now lets add some javascript to load our content from `content.html`

~~~~javascript

appendContent = function(data, $target){
	var $el = $(data);
	$target.empty();
	$target.append($el);
};
loadContent = function(url, target, callback){
	$.ajax({
	  url: url,
	})
  .done(function( data ) {
   	callback(data, $(target));
  });
};

~~~~

the `loadContent` function makes an ajax call and then passes the response to a callback function. the `appendContent` function simple appends some content to an element.

~~~~javascript

$('.loadContent').on('click', function(e){
	e.preventDefault();
	var url	=	$(this).data('url');
	var target = $(this).data('target');
	loadContent(url, target, appendContent);
});

~~~~

and add a link to `index.html`

~~~~html

<a href="#" data-url="content.html" data-target=".item" class="loadContent">Load that ish</a>

~~~~

So this is fine and all but it's a little abrupt when we replace the content.

####Example 2

ok lets add some css3 transitions to it. Here i'll forget about the ajax for now, and just append a string to the dom.

One of the easiest ways to trigger css3 animations through javascript, is through adding / removing a class and remove a class

~~~~css

.item{
	position: relative;
	width: 50%;
	background-color: tan;
	margin:20px 0;
	min-height: 90px;
	overflow: hidden;
}
.content{
	padding:20px;
	background: rgba(255,0,0,0.4);
	-webkit-transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-o-transform: translateX(100%);
	-ms-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
}
.beforeSlide{
	-webkit-transform: translateX(100%);
	-moz-transform: translateX(100%);
	-o-transform: translateX(100%);
	-ms-transform: translateX(100%);
	transform: translateX(100%);
}

~~~~

~~~~html

<div id="ex1" class="item"></div>
<a id="one" href="#">Slide Ex1 using removeClass</a>

~~~~

~~~~javascript

	var	slideInOne = function(el, $target){
		var $el = $(el);
		$target.empty();
		$target.append($el);
	 	$el.removeClass('beforeSlide');
	};

	$('a#one').on('click', function(){
		slideInOne(content, $("#ex1"));
	});

~~~~

ok that didn't work, lets just add the css properties manually.


~~~html

<div id="ex2" class="item"></div>
<a id="two" href="#">Slide Ex2 using css</a>

~~~

~~~javascript

var	slideInTwo = function(el, $target){
	var $el = $(el);
	$target.append($el);
 	$el.css({
 		"-webkit-transform":"translateX(0)",
 		"-moz-transform":"translateX(0)",
 		"-o-transform":"translateX(0)",
 		"-ms-transform":"translateX(0)",
 		"transform":"translateX(0)"
 	});
};
$('a#two').on('click', function(){
	slideInTwo(content, $("#ex2"));
});

~~~

still no dice
The trick is wrapping this in a setTimeout function

~~~html

<div id="ex3" class="item"></div>
<a id="three" href="#">Slide Ex3 with setTimeout (works?)</a>

~~~

~~~javascript

var	slideInThree = function(el, $target){
	var $el = $(el);
	$target.append($el);
	 setTimeout(function(){
	 	$el.removeClass('beforeSlide');
	 }, 0);
};

$('a#three').on('click', function(){
	slideInThree(content, $("#ex3"));
});

~~~

I have to be honest, I am not sure why or how the above things do not work but they don't. The solution is setTimeout. add a setTimeout function with like 1ms and whola there you go.


####Example 3

Now that we figured  that out lets put what we learned into a functional demo.

~~~~css

.item{
	position: relative;
	width: 500px;
	background-color: tan;
	margin:0 auto;
	overflow: hidden;
	-webkit-transition: height 0.5s ease-in-out;
	-moz-transition: height 0.5s ease-in-out;
	-o-transition: height 0.5s ease-in-out;
	-ms-transition: height 0.5s ease-in-out;
	transition: height 0.5s ease-in-out;
}
.content{
	padding:20px;
	background: rgba(255,0,0,0.4);
	-webkit-transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	-ms-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
}
.content2{
	-webkit-transform: translateX(100%);
	-moz-transform: translateX(100%);
	-o-transform: translateX(100%);
	-ms-transform: translateX(100%);
	transform: translateX(100%);
}

~~~~

~~~~html

<div class="item">
	<div class="content">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
</div>

~~~~

~~~~javascript

var	slideOut = function($el, $target){
	var deferred = new $.Deferred();
	var preloader = '<div class="preloader"></div>';
	$target.css({height : $target.height()});
	$el.css({"-webkit-transform":"translateX(100%)"});
  $el.on('transitionend webkitTransitionEnd', function(e){
    console.log(e.originalEvent.elapsedTime + 's');
		deferred.resolve($target);
	});
	return deferred.promise();
};

var	slideIn = function(el, $target){
	var $el = $(el);
	$target.empty();
	$target.append($el);
	$target.css({height : "auto"});
	setTimeout(function(){
	 	$el.removeClass('content2');
	 }, 0);
};

var	getData = function(url){
	var deferred = new $.Deferred();
  $.ajax({
      url: url,
      success: function (response) {
      	console.log('ajax success');
        deferred.resolve(response);
      },
      error: function (xhr, ajaxOptions, thrownError) {
      	console.log('ajax error');
        deferred.reject(thrownError);
      }
	});
  return deferred.promise();
}

var	loadContent = function(url, target){
	$el = $('.content');
	$target = $(target);
	var slidePromise = slideOut($el, $target);
	var dataPromise = getData(url);

	$.when(slidePromise, dataPromise).done(function(slidePromise, dataPromise) {
   		slideIn(dataPromise, slidePromise );
	});
};

$('.loadContent').on('click', function(){
	var url		=	$(this).data('url');
	var target	=	$(this).data('target');
	loadContent(url, target);
});

~~~~

If anyone has more information on this hit me up on twitter @robincwillis . I am curious.

