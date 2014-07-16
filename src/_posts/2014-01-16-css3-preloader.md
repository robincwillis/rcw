---
layout: post
title: "CSS3 Preloader"
tags: css3 html
published: true
---



Here it is

<style type="text/css">

	.stuff-to-preload{
		width: 100%;
		height:100px;
	}

	.preloader{
		position: relative;
		width:0px;
		height:0px;
		top:50%;
		left:50%;
		-webkit-animation: spin 1s  infinite ease-in-out;
		-moz-animation: spin 1s  infinite ease-in-out;
		-o-animation: spin 1s  infinite ease-in-out;
	}

	.preloader .ball{
		position: absolute;
		width:20px;
		height:20px;
		top:50%;
		left:50%;
		margin-top:-10px;
		margin-left: -10px;
		border-radius: 50%;
		background-color: black;
	}

	.preloader .ball-a{
		-webkit-animation: hTop 1s  infinite ease-in-out;
		-moz-animation: hTop 1s  infinite ease-in-out;
		-o-animation: hTop 1s  infinite ease-in-out;
	}

	.preloader .ball-b{
		-webkit-animation: vTop 1s  infinite ease-in-out;
		-moz-animation: vTop 1s  infinite ease-in-out;
		-o-animation: vTop 1s  infinite ease-in-out;
	}

	.preloader .ball-c{
		-webkit-animation: hBot 1s  infinite ease-in-out;
		-moz-animation: hBot 1s  infinite ease-in-out;
		-o-animation: hBot 1s  infinite ease-in-out;
	}

	.preloader .ball-d{
		-webkit-animation: vBot 1s  infinite ease-in-out;
		-moz-animation: vBot 1s  infinite ease-in-out;
		-o-animation: vBot 1s  infinite ease-in-out;
	}

	@-webkit-keyframes hTop {
		0%   { -webkit-transform:  translate(0px, 0px); }
		50%  { -webkit-transform:  translate(20px, 20px); }
		100% { -webkit-transform:  translate(0px, 0px); }
	}

	@-webkit-keyframes vTop {
		0%   { -webkit-transform:  translate(0px, 0px); }
		50%  { -webkit-transform:  translate(-20px, 20px); }
		100% { -webkit-transform:  translate(0px, 0px); }
	}

	@-webkit-keyframes hBot {
		0%   { -webkit-transform:  translate(0px, 0px); }
		50%  { -webkit-transform:  translate(20px, -20px); }
		100% { -webkit-transform:  translate(0px, 0px); }
	}

	@-webkit-keyframes vBot {
		0%   { -webkit-transform:  translate(0px, 0px); }
		50%  { -webkit-transform:  translate(-20px, -20px); }
		100% { -webkit-transform:  translate(0px, 0px); }
	}

	@-moz-keyframes hTop {
		0%   { -moz-transform:  translate(0px, 0px); }
		50%  { -moz-transform:  translate(20px, 20px); }
		100% { -moz-transform:  translate(0px, 0px); }
	}

	@-moz-keyframes vTop {
		0%   { -moz-transform:  translate(0px, 0px); }
		50%  { -moz-transform:  translate(-20px, 20px); }
		100% { -moz-transform:  translate(0px, 0px); }
	}

	@-moz-keyframes hBot {
		0%   { -moz-transform:  translate(0px, 0px); }
		50%  { -moz-transform:  translate(20px, -20px); }
		100% { -moz-transform:  translate(0px, 0px); }
	}

	@-moz-keyframes vBot {
		0%   { -moz-transform:  translate(0px, 0px); }
		50%  { -moz-transform:  translate(-20px, -20px); }
		100% { -moz-transform:  translate(0px, 0px); }
	}

	@-o-keyframes hTop {
		0%   { -o-transform:  translate(0px, 0px); }
		50%  { -o-transform:  translate(20px, 20px); }
		100% { -o-transform:  translate(0px, 0px); }
	}

	@-o-keyframes vTop {
		0%   { -o-transform:  translate(0px, 0px); }
		50%  { -o-transform:  translate(-20px, 20px); }
		100% { -o-transform:  translate(0px, 0px); }
	}

	@-o-keyframes hBot {
		0%   { -o-transform:  translate(0px, 0px); }
		50%  { -o-transform:  translate(20px, -20px); }
		100% { -o-transform:  translate(0px, 0px); }
	}

	@-o-keyframes vBot {
		0%   { -o-transform:  translate(0px, 0px); }
		50%  { -o-transform:  translate(-20px, -20px); }
		100% { -o-transform:  translate(0px, 0px); }
	}

	@-webkit-keyframes spin {
		from { -webkit-transform: rotate(0deg);}
		to {-webkit-transform: rotate(178deg);}
	}

	 @-moz-keyframes spin {
		from { -moz-transform:  rotate(0deg);}
		to { -moz-transform:  rotate(89deg);}
	 }

	 @-o-keyframes spin {
		from { -o-transform:  rotate(0deg);}
		to { -o-transform:  rotate(89deg);}
	 }

</style>

<div class="stuff-to-preload">
	<div class="preloader">
		<div class="ball ball-a"></div>
		<div class="ball ball-b"></div>
		<div class="ball ball-c"></div>
		<div class="ball ball-d"></div>
	</div>
</div>

Click Read More to see the code

<!--more-->


The HTML

~~~~~html

<div class="stuff-to-preload">
	<div class="preloader">
		<div class="ball ball-a"></div>
		<div class="ball ball-b"></div>
		<div class="ball ball-c"></div>
		<div class="ball ball-d"></div>
	</div>
</div>

~~~~~


The CSS

~~~~~css

.stuff-to-preload{
	width: 100%;
	height:100px;
}

.preloader{
	position: relative;
	width:0px;
	height:0px;
	top:50%;
	left:50%;
	-webkit-animation: spin 1s  infinite ease-in-out;
	-moz-animation: spin 1s  infinite ease-in-out;
	-o-animation: spin 1s  infinite ease-in-out;
}

.preloader .ball{
	position: absolute;
	width:20px;
	height:20px;
	top:50%;
	left:50%;
	margin-top:-10px;
	margin-left: -10px;
	border-radius: 50%;
	background-color: black;
}

.preloader .ball-a{
	-webkit-animation: hTop 1s  infinite ease-in-out;
	-moz-animation: hTop 1s  infinite ease-in-out;
	-o-animation: hTop 1s  infinite ease-in-out;
}

.preloader .ball-b{
	-webkit-animation: vTop 1s  infinite ease-in-out;
	-moz-animation: vTop 1s  infinite ease-in-out;
	-o-animation: vTop 1s  infinite ease-in-out;
}

.preloader .ball-c{
	-webkit-animation: hBot 1s  infinite ease-in-out;
	-moz-animation: hBot 1s  infinite ease-in-out;
	-o-animation: hBot 1s  infinite ease-in-out;
}

.preloader .ball-d{
	-webkit-animation: vBot 1s  infinite ease-in-out;
	-moz-animation: vBot 1s  infinite ease-in-out;
	-o-animation: vBot 1s  infinite ease-in-out;
}

@-webkit-keyframes hTop {
	0%   { -webkit-transform:  translate(0px, 0px); }
	50%  { -webkit-transform:  translate(20px, 20px); }
	100% { -webkit-transform:  translate(0px, 0px); }
}

@-webkit-keyframes vTop {
	0%   { -webkit-transform:  translate(0px, 0px); }
	50%  { -webkit-transform:  translate(-20px, 20px); }
	100% { -webkit-transform:  translate(0px, 0px); }
}

@-webkit-keyframes hBot {
	0%   { -webkit-transform:  translate(0px, 0px); }
	50%  { -webkit-transform:  translate(20px, -20px); }
	100% { -webkit-transform:  translate(0px, 0px); }
}

@-webkit-keyframes vBot {
	0%   { -webkit-transform:  translate(0px, 0px); }
	50%  { -webkit-transform:  translate(-20px, -20px); }
	100% { -webkit-transform:  translate(0px, 0px); }
}

@-moz-keyframes hTop {
	0%   { -moz-transform:  translate(0px, 0px); }
	50%  { -moz-transform:  translate(20px, 20px); }
	100% { -moz-transform:  translate(0px, 0px); }
}

@-moz-keyframes vTop {
	0%   { -moz-transform:  translate(0px, 0px); }
	50%  { -moz-transform:  translate(-20px, 20px); }
	100% { -moz-transform:  translate(0px, 0px); }
}

@-moz-keyframes hBot {
	0%   { -moz-transform:  translate(0px, 0px); }
	50%  { -moz-transform:  translate(20px, -20px); }
	100% { -moz-transform:  translate(0px, 0px); }
}

@-moz-keyframes vBot {
	0%   { -moz-transform:  translate(0px, 0px); }
	50%  { -moz-transform:  translate(-20px, -20px); }
	100% { -moz-transform:  translate(0px, 0px); }
}

@-o-keyframes hTop {
	0%   { -o-transform:  translate(0px, 0px); }
	50%  { -o-transform:  translate(20px, 20px); }
	100% { -o-transform:  translate(0px, 0px); }
}

@-o-keyframes vTop {
	0%   { -o-transform:  translate(0px, 0px); }
	50%  { -o-transform:  translate(-20px, 20px); }
	100% { -o-transform:  translate(0px, 0px); }
}

@-o-keyframes hBot {
	0%   { -o-transform:  translate(0px, 0px); }
	50%  { -o-transform:  translate(20px, -20px); }
	100% { -o-transform:  translate(0px, 0px); }
}

@-o-keyframes vBot {
	0%   { -o-transform:  translate(0px, 0px); }
	50%  { -o-transform:  translate(-20px, -20px); }
	100% { -o-transform:  translate(0px, 0px); }
}

@-webkit-keyframes spin {
	from { -webkit-transform: rotate(0deg);}
	to {-webkit-transform: rotate(178deg);}
}

 @-moz-keyframes spin {
	from { -moz-transform:  rotate(0deg);}
	to { -moz-transform:  rotate(89deg);}
 }

 @-o-keyframes spin {
	from { -o-transform:  rotate(0deg);}
	to { -o-transform:  rotate(89deg);}
 }


~~~~~