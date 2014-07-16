---
layout: post
title: "Psuedo Element Hovers"
tags: html css
---


The Result

<style type="text/css">
	#cool-links	a.item{
		position: relative;
	}

	#cool-links	a.item:before{
	   content: "";
	   opacity: 0;
	   background-color: #000;
	   display: block;
	   width: 100%;
	   height: 5px;
	   margin-bottom: 3px;
	}

	#cool-links	a.item:hover:before,
	#cool-links	a.item.selected:hover:before{
		 opacity: 1;

	}

	#cool-links	a.item.selected:before{
		opacity: .25;
	}
</style>
<div class="well">
<ul id="cool-links" class="inline">
	<li><a href="javascript:void(0)" class="item selected">Art</a></li>
	<li><a href="javascript:void(0)" class="item">Architecture</a></li>
	<li><a href="javascript:void(0)" class="item">Interactive</a></li>
	<li><a href="javascript:void(0)" class="item">Graphic Design</a></li>
</ul>
</div>
The Markup

~~~~~html
<ul id="#cool-links" class="inline">
	<li><a href="#" class="item selected">Art</a></li>
	<li><a href="#" class="item">Architecture</a></li>
	<li><a href="#" class="item">Interactive</a></li>
	<li><a href="#" class="item">Graphic Design</a></li>
</ul>
~~~~~

The Styles

~~~~css
#cool-links	a.item{
	position: relative;
}

#cool-links	a.item:before{
   content: "";
   opacity: 0;
   background-color: #000;
   display: block;
   width: 100%;
   height: 5px;
   margin-bottom: 3px;
}

#cool-links	a.item:hover:before,
#cool-links	a.item.selected:hover:before{
	 opacity: 1;
}

#cool-links	a.item.selected:before{
	opacity: .25;
}
~~~~