---
layout: post
title: "Full Window Images With CSS and jQuery"
tags: css javascript jquery
published: true
---

Often for the landing page of a site we want to make a big impression and hit the user with a big image that takes up the full width of there browser. Here is a solution for doing so accomadating any image dimensions, and window sizes.

The HTML

~~~~~html

<div class="splash">
<h1>Hello Splash</h1>
</div>

~~~~~

The CSS

~~~~css

.splash{
	background-image:url(splash.jpg);
	background-repeat: no-repeat;
	background-position: center center;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	width: 100%;
	overflow: auto;
}

.splash h1{
	font-family: helvetica;
	position: relative;
	color:#fff;
	font-size: 72px;
	margin: 0;
	margin-top:-36px;
	width: 100%;
	text-align: center;
	display: block;
	height:72px;
	line-height: 72px;
	top:50%;
}

~~~~~


The Javascript

~~~~~javascript

function setSplashHeight($el){
	$el.css({
		height: $(window).height()
	});
}

$(window).resize(function(){
	setSplashHeight($('.splash'));
}).resize();

~~~~~


The Result: [View Demo](/demo/splash/)