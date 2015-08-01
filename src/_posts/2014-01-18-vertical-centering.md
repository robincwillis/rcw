---
layout: post
title: "Vertical Centering"
tags: css3 html
published: true
---

Kinda the most common problem in css is centering content vertically. This post will be updated over time with all my favorite techniques for centering content vertically depending on different constraints.

The Table Method

~~~~~css

.container-table{

	width:100%;
	height:500px;
	background-color: blue;
	margin-bottom: 20px;
}

.centered-table {
   display: table;
   width: 100%;
   height:100%;
}
.content-table {
   display: table-cell;
   text-align: center;
   vertical-align: middle;
}
~~~~~

~~~~~html

<div class="container-table">
	<div class="centered-table">
		<div class="content-table">
			<h1>table method</h1>
			<p>who knows</p>
		</div>
	</div>
</div>

~~~~~

The Pseudo Element Method

~~~~~css

.container{

	width:100%;
	height:50%;
	background-color: blue;
	margin-bottom: 20px;
}

.centered{
	font-size:0;
	height:100%;
	margin: 0 auto;
	background-color: red;
	text-align: center;
}

.centered:before{
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  /*margin-left: -0.25em;*/
}

.content{
	font-size:20px;
  text-align:left;
  background-color: blue;
  display: inline-block;
  vertical-align: middle;
}

~~~~~

~~~~~html

<div class="container">
	<div class="centered">
		<div class="content full-width">
				<h1>Some content</h1>
				<p>some more content</p>
		</div>
	</div>
</div>

~~~~~

Or parent is unknown but child is known

~~~~~css

.container
{
	position: relative;
}

.centered
{
	position: absolute;
	height: Xpx;
	width: Ypx;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
}

~~~~~


~~~~~html

<div class="container">
	<div class="centered">
		<h1>Some content</h1>
		<p>some more content</p>
	</div>
</div>

~~~~~