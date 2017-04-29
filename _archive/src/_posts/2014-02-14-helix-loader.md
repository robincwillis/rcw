---
layout: post
title: "Helix Loader"
tags: css3 html
description : "A CSS3 Helix Animation preloader"
published: true
---

Another Preloader (note only built for webkit right now)

<style type="text/css">

	.helix-preloader{
		margin:100px 0;
		position: relative;
		top:50%;
		left:50%;
		height:0px;
		width:0px;
	}

	#helix1{
		position: absolute;
		top:0;
		left:0;
		height:10px;
		width:100px;
		margin-left:-50px;
		-webkit-animation: helix-spin 1.5s  infinite linear;
		-moz-animation: helix-spin 1.5s  infinite linear;
		-o-animation: helix-spin 1.5s  infinite linear;
	}

	#helix2{
		position: absolute;
		top:-10px;
		left:0;
		height:10px;
		width:100px;
		margin-left:-50px;
		-webkit-animation: helix-spin 1.5s  infinite linear;
		-moz-animation: helix-spin 1.5s  infinite linear;
		-o-animation: helix-spin 1.5s  infinite linear;
		-webkit-animation-delay: 0.1s;
	}
	#helix3{
		position: absolute;
		top:-20px;
		left:0;
		height:10px;
		width:100px;
		margin-left:-50px;
		-webkit-animation: helix-spin 1.5s  infinite linear;
		-moz-animation: helix-spin 1.5s  infinite linear;
		-o-animation: helix-spin 1.5s  infinite linear;
		-webkit-animation-delay: 0.2s;
	}

	#helix4{
		position: absolute;
		top:-30px;
		left:0;
		height:10px;
		width:100px;
		margin-left:-50px;
		-webkit-animation: helix-spin 1.5s  infinite linear;
		-moz-animation: helix-spin 1.5s  infinite linear;
		-o-animation: helix-spin 1.5s  infinite linear;
		-webkit-animation-delay: 0.3s;
	}

	.helix .dotA{
		height:10px;
		width:10px;
		background-color: black;
		border-radius: 50%;
		float:left;
		-webkit-animation: helix-spinB 1.5s  infinite linear;
		-moz-animation: helix-spinB 1.5s  infinite linear;
		-o-animation: helix-spinB 1.5s  infinite linear;
	}

	.helix .dotB{
		float:right;
		height:10px;
		width:10px;
		background-color: black;
		border-radius: 50%;
		-webkit-animation: helix-spinB 1.5s  infinite linear;
		-moz-animation: helix-spinB 1.5s  infinite linear;
		-o-animation: helix-spinB 1.5s  infinite linear;
	}

	@-webkit-keyframes helix-spin {
		0%   { -webkit-transform:  rotateY(0deg); }
		50%  { -webkit-transform:  rotateY(179deg); }
		100% { -webkit-transform:  rotateY(360deg); }
	}


	@-webkit-keyframes helix-spinB {
		0%   { -webkit-transform: scale(0.5) rotateX(-179deg); }
		50%  { -webkit-transform: scale(1.5) rotateX(-360deg); }
		100% { -webkit-transform: scale(0.5) rotateX(0deg); }
	}


</style>

<div class="helix-preloader">
	<div id="helix1" class="helix">
		<div class="dotA"></div>
		<div class="dotB"></div>
	</div>
	<div id="helix2" class="helix">
		<div class="dotA"></div>
		<div class="dotB"></div>
	</div>
	<div id="helix3" class="helix">
		<div class="dotA"></div>
		<div class="dotB"></div>
	</div>
	<div id="helix4" class="helix">
		<div class="dotA"></div>
		<div class="dotB"></div>
	</div>
</div>
<br><br><br>
click Read More to see the code.

<!--more-->

The HTML

~~~~~html
<div class="helix-preloader">
	<div id="helix1" class="helix">
		<div class="dotA"></div>
		<div class="dotB"></div>
	</div>
	<div id="helix2" class="helix">
		<div class="dotA"></div>
		<div class="dotB"></div>
	</div>
	<div id="helix3" class="helix">
		<div class="dotA"></div>
		<div class="dotB"></div>
	</div>
	<div id="helix4" class="helix">
		<div class="dotA"></div>
		<div class="dotB"></div>
	</div>
</div>

~~~~~

The CSS

~~~~~css
	.helix-preloader{
		position: absolute;
		top:50%;
		left:50%;
		height:0px;
		width:0px;
	}

	#helix1{
		position: absolute;
		top:0;
		left:0;
		height:10px;
		width:100px;
		margin-left:-50px;
		-webkit-animation: helix-spin 1.5s  infinite linear;
		-moz-animation: helix-spin 1.5s  infinite linear;
		-o-animation: helix-spin 1.5s  infinite linear;
	}

	#helix2{
		position: absolute;
		top:-10px;
		left:0;
		height:10px;
		width:100px;
		margin-left:-50px;
		-webkit-animation: helix-spin 1.5s  infinite linear;
		-moz-animation: helix-spin 1.5s  infinite linear;
		-o-animation: helix-spin 1.5s  infinite linear;
		-webkit-animation-delay: 0.1s;
	}
	#helix3{
		position: absolute;
		top:-20px;
		left:0;
		height:10px;
		width:100px;
		margin-left:-50px;
		-webkit-animation: helix-spin 1.5s  infinite linear;
		-moz-animation: helix-spin 1.5s  infinite linear;
		-o-animation: helix-spin 1.5s  infinite linear;
		-webkit-animation-delay: 0.2s;
	}

	#helix4{
		position: absolute;
		top:-30px;
		left:0;
		height:10px;
		width:100px;
		margin-left:-50px;
		-webkit-animation: helix-spin 1.5s  infinite linear;
		-moz-animation: helix-spin 1.5s  infinite linear;
		-o-animation: helix-spin 1.5s  infinite linear;
		-webkit-animation-delay: 0.3s;
	}

	.helix .dotA{
		height:10px;
		width:10px;
		background-color: black;
		border-radius: 50%;
		float:left;
		-webkit-animation: helix-spinB 1.5s  infinite linear;
		-moz-animation: helix-spinB 1.5s  infinite linear;
		-o-animation: helix-spinB 1.5s  infinite linear;
	}

	.helix .dotB{
		float:right;
		height:10px;
		width:10px;
		background-color: black;
		border-radius: 50%;
		-webkit-animation: helix-spinB 1.5s  infinite linear;
		-moz-animation: helix-spinB 1.5s  infinite linear;
		-o-animation: helix-spinB 1.5s  infinite linear;
	}

	@-webkit-keyframes helix-spin {
		0%   { -webkit-transform:  rotateY(0deg); }
		50%  { -webkit-transform:  rotateY(179deg); }
		100% { -webkit-transform:  rotateY(360deg); }
	}


	@-webkit-keyframes helix-spinB {
		0%   { -webkit-transform: scale(0.5) rotateX(-179deg); }
		50%  { -webkit-transform: scale(1.5) rotateX(-360deg); }
		100% { -webkit-transform: scale(0.5) rotateX(0deg); }
	}

~~~~~


